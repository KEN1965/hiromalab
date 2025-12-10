import {
  bootstrapCameraKit,
  createMediaStreamSource
} from "https://cdn.jsdelivr.net/npm/@snap/camera-kit@1.13.0/+esm";

import { Settings } from "./settings.js";

async function startAR() {
  const canvas = document.getElementById("ar-canvas");
  const loading = document.getElementById("loading");

  try {
    loading.innerText = "Loading CameraKit...";

    // CameraKit 初期化
    const cameraKit = await bootstrapCameraKit({
      apiToken: Settings.config.apiToken
    });

    loading.innerText = "Loading Lens...";

    // ここが最重要（Group と Lens を直接指定）
    const lens = await cameraKit.lensRepository.loadLens(
      Settings.config.lensID,
      Settings.config.groupID
    );

    if (!lens) {
      console.error("Lens が読み込めませんでした");
      loading.innerText = "Lens load error";
      return;
    }

    // カメラ取得
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" },
      audio: false
    });

    const source = createMediaStreamSource(stream);

    // セッション作成
    const session = await cameraKit.createSession({
      liveRenderTarget: canvas
    });

    // Lens 適用
    await session.applyLens(lens);

    // レンダリング開始
    session.play(source);

    loading.style.display = "none";

  } catch (err) {
    console.error(err);
    loading.innerText = "ERROR";
  }
}

// ボタンから開始
document.getElementById("start-btn").onclick = startAR;
