/*
import WaveSurfer from "https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js";
import RegionsPlugin from "https://unpkg.com/wavesurfer.js@7/dist/plugins/regions.esm.js";
*/

import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugins/regions.esm.js";

// XXX: Hack to allow interaction and listen to region-out
let disableRegionOut = false;
let disableRegionOutPauseMillis = 0;
const setDisableRegionOutTrue = () => {
  disableRegionOut = true;
  setTimeout(() => {
    disableRegionOut = false;
    disableRegionOutPauseMillis = 0;
  }, 100 + disableRegionOutPauseMillis);
};
let paused = false;

const initWavesurfer = async (fileName, blob) => {
  try {
    await initWavesurferInternal(fileName, blob);
    return true;
  } catch (err) {
    console.log(`Error loading file: ${err}`);
  }
  return false;
};

const initWavesurferInternal = async (fileName, blob) => {

  let activeRegion = null;

  const ws = WaveSurfer.create({
    container: "#waveform",
    loop: true,
    mediaControls: true,
  });

  await ws.load(blob);

  ws.on("interaction", (e) => {
    activeRegion = null;
    console.log("interaction");
    paused = false;
    setDisableRegionOutTrue();
  });

  const wsRegions = ws.registerPlugin(RegionsPlugin.create({
    container: "#waveform",
    loop: true,
  }));

  wsRegions.enableDragSelection({
    color: "rgba(255, 0, 0, 0.1)",
    loop: true,
  });

  wsRegions.on("region-clicked", (region, e) => {
    e.stopPropagation();
    const start = region.start / ws.getDuration();
    region.loop = true;
    setDisableRegionOutTrue();
    region.play();
    paused = false;
  });

  wsRegions.on("region-in", async (region) => {
    activeRegion = region;
    $(".list-group-item").removeClass("active");
    $(`#li-${region.id}`).addClass("active");
  });

  wsRegions.on("region-out", async (region) => {
    if (disableRegionOut) {
      disableRegionOut = false;
      return;
    }

    if (paused) return;
    paused = true;

    if (Math.abs(region.end - ws.getCurrentTime()) > 0.1) return;

    $(`#li-${region.id}`).removeClass("active");

    const start = region.start / ws.getDuration();
    ws.pause();
    ws.seekTo(start);
    region.loop = true;

    let pause = 0;
    try {
      pause = parseInt($("#pause-secs").val());
    } catch (ignore) { }
    const pauseMillis = pause * 1000;
    disableRegionOutPauseMillis = pauseMillis;
    let timerInterval;
    if (pause) {
      let timeLeftMillis = pauseMillis;
      console.log("pausing for " + pause + " seconds");
      $("#timer").text(timeLeftMillis + "ms");
      $("#timer").css("width", "0%");
      $("#timer-wrapper").show();
      paused = true;
      timerInterval = setInterval(() => {
        if (!paused) {
          console.log("interrupted");
          // Let this be interruptable.
          // This fucking sucks.
          if (timerInterval) clearInterval(timerInterval);
          timerInterval = null;
          $("#timer-wrapper").hide();
          return;
        }
        timeLeftMillis -= 100;
        const perc = (pauseMillis - timeLeftMillis) / pauseMillis * 100;
        $("#timer").css("width", perc + "%");
        $("#timer").text(timeLeftMillis + "ms");
        if (timeLeftMillis <= 0) {
          $("#timer-wrapper").hide();
          region.play();
          paused = false;
          if (timerInterval) clearInterval(timerInterval);
        }
      }, 100);
    } else {
      region.play();
      paused = false;
    }
  });

  const localStorageKey = `regions-${fileName}`;

  const saveRegions = () =>
    localStorage.setItem(localStorageKey, JSON.stringify(wsRegions.regions));

  const clearRegions = () => {
    localStorage.removeItem(localStorageKey);
    $("#restore-btn").hide();
    $("#clear-btn").hide();
  };

  const clearAllRegions = () => {
    Object.keys(localStorage).filter((key) => key.startsWith("regions-")).forEach(key => localStorage.removeItem(key));
    $("#restore-btn").hide();
    $("#clear-btn").hide();
    $("#clear-all-btn").hide();
  };

  const restoreRegions = () =>
    JSON.parse(localStorage.getItem(localStorageKey)).forEach((region) => wsRegions.addRegion(region));

  let regionNum = 1;

  const addContent = (region, el) => {
    $(el).html(`<b>${region.content}</b> - ${region.start.toFixed(2)}s to ${region.end.toFixed(2)}s`);

  };

  wsRegions.on("region-update-end", (region) => {
    region.loop = true;
    saveRegions();
    addContent(region, $(`#li-${region.id}`));
  });

  wsRegions.on("region-created", (region) => {
    region.content = String(regionNum++);
    saveRegions();
    const el = $("<a>")
      .attr("href", "#")
      .addClass("list-group-item")
      .addClass("list-group-item-action")
      .attr("id", `li-${region.id}`);
    addContent(region, el);
    $("#regions-list").append(el);
    el.click((e) => {
      e.preventDefault();
      e.stopPropagation();
      region.play();
      paused = false;
    });
  });

  wsRegions.on("region-created", saveRegions);
  wsRegions.on("region-removed", saveRegions);

  if (localStorage.getItem(localStorageKey)) {
    $("#restore-btn").show();
    $("#restore-btn").click(restoreRegions);
    $("#clear-btn").show();
    $("#clear-btn").click(clearRegions);
  } else {
    $("#restore-btn").hide();
    $("#clear-btn").hide();
  }

  const hasAnySavdRegions = Object.keys(localStorage).some((key) => key.startsWith("regions-"));
  if (hasAnySavdRegions) {
    $("#clear-all-btn").show();
    $("#clear-all-btn").click(clearAllRegions);
  } else {
    $("#clear-all-btn").hide();
  }
};

const main = async () => {
  const params = new URLSearchParams(document.location.search);
  const file = params.get("load");
  if (file) {
    if (await initWavesurfer(file, file)) {
      $(".before-play").hide();
      $(".playing").show();
      return;
    }
    $("#waveform").empty();
    alert(`problem auto loading ${file}`);
    return;
  }

  $(".before-play").show();
  $("#upload").change(() => {
    const file = document.getElementById("upload").files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = async (e) => {
      const blob = fileReader.result;
      if (await initWavesurfer(file.name, blob)) {
        $(".before-play").hide();
        $(".playing").show();
        return;
      }
      $("#waveform").empty();
      alert(`problem loading ${file}`);
    };
  });
};

main();