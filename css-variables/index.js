const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", handle);
});
function handle() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    `${this.value}${suffix}`
  );
}
