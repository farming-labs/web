document.addEventListener("click", async (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const button = target.closest("[data-mdx-copy]");
  if (!(button instanceof HTMLButtonElement)) return;

  const copyIcon = button.querySelector("[data-copy-icon]");
  const checkIcon = button.querySelector("[data-check-icon]");
  const status = button.querySelector("[data-copy-status]");

  try {
    await navigator.clipboard.writeText(button.dataset.copyContent ?? "");
    copyIcon?.classList.add("hidden");
    checkIcon?.classList.remove("hidden");
    if (status) status.textContent = "Copied";

    window.setTimeout(() => {
      copyIcon?.classList.remove("hidden");
      checkIcon?.classList.add("hidden");
      if (status) status.textContent = "Copy code";
    }, 2000);
  } catch {
    if (status) status.textContent = "Copy failed";
  }
});
