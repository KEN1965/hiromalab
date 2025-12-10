import CameraKit from "https://cdn.jsdelivr.net/npm/@snap/camera-kit@latest/dist/camera-kit.esm.js";

const { bootstrapCameraKit, createMediaStreamSource } = CameraKit;


import { Settings } from "./settings.js";

const startBtn = document.getElementById("start-btn");
const canvas = document.getElementById("ar-canvas");
const loading = document.getElementById("loading");

startBtn.addEventListener("click", () => {
  startAR();
  startBtn.style.display = "none";
});

async function startAR() {
  try {
    loading.innerText = "Loading CameraKit...";

    const cameraKit = await bootstrapCameraKit({
      apiToken: Settings.config.apiToken,
    });

    loading.innerText = "Loading Lens...";

    // レンズ取得
    const { lenses } = await cameraKit.lensRepository.loadLensGroups([
      Settings.config.groupID
    ]);

    const lens = lenses.find(l => l.id === Settings.config.lensID);

    if (!lens) {
      loading.innerText = "Lens load error!";
      console.error("Lens not found");
      return;
    }

    // カメラ起動
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false,
    });

    const source = createMediaStreamSource(stream);

    // セッション作成
    const session = await cameraKit.createSession({
      liveRenderTarget: canvas,
    });

    await session.applyLens(lens);

    session.play(source);

    loading.style.display = "none";

  } catch (err) {
    console.error(err);
    loading.innerText = "ERROR";
  }
}
