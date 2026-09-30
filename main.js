// Early-access sign-ups are emailed to connect@altevant.com via FormSubmit.
// The first submission triggers a one-time activation email to that address.
const ENDPOINT = "https://formsubmit.co/ajax/connect@altevant.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

document.getElementById("yr").textContent = new Date().getFullYear();

document.querySelectorAll("[data-signup]").forEach((form) => {
  const msg = form.querySelector(".form-msg");
  const btn = form.querySelector("button");
  const say = (text, cls) => { msg.textContent = text; msg.className = "form-msg " + (cls || ""); };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = (data.get("email") || "").trim();
    if (data.get("_honey")) return;
    if (!EMAIL_RE.test(email)) return say("Please enter a valid email address.", "err");

    btn.disabled = true;
    say("Sending…");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _subject: "Baro early access request",
          _template: "table",
          _captcha: "false",
          source: location.href,
        }),
      });
      let body = {};
      try { body = await res.json(); } catch (_) {}
      if (!res.ok || body.success === "false" || body.success === false) {
        throw new Error(body.message || "HTTP " + res.status);
      }
      form.reset();
      say("You're on the list. We'll be in touch soon.", "ok");
    } catch (err) {
      console.error("Sign-up failed:", err);
      say("Something went wrong. Please email connect@altevant.com instead.", "err");
    } finally {
      btn.disabled = false;
    }
  });
});
