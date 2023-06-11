export const animateStart = () => {
  const container = document.querySelector(".container__start");
  const boxRight = document.querySelector(".container__start--right");
  const boxLeft = document.querySelector(".container__start--left");
  const containerHeight = container.clientHeight;
  const containerWidth = container.clientWidth;
  const diagContainer = Math.sqrt(
    containerWidth * containerWidth + containerHeight * containerHeight
  );

  setTimeout(() => {
    container.style.zIndex = -100;
    container.style.display = "none";
  }, 1600);

  boxRight.style.height = `${diagContainer}px`;
  boxRight.style.width = `${containerWidth}px`;
  boxLeft.style.height = `${diagContainer}px`;
  boxLeft.style.width = `${containerWidth}px`;

  offsetBox = (diagContainer - containerHeight) / 2;

  boxRight.style.top = `-${offsetBox}px`;
  boxLeft.style.top = `-${offsetBox}px`;

  rotate = Math.acos(containerHeight / diagContainer) * (180 / Math.PI);

  boxRight.style.transition = `1s`;
  boxRight.style.transform = `rotate(-${rotate}deg)`;
  boxLeft.style.transition = `1s`;
  boxLeft.style.transform = `rotate(-${rotate}deg)`;
};
