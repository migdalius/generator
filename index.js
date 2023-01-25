function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

    ctx.font = "48px serif";
    ctx.fillText("Zestaw do uprawy Kolendra", 10, 50);

    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0);
    };
    img.src = "fota.png";
  }
}
