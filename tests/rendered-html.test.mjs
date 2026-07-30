import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);
const exportedIndex = new URL("../out/index.html", import.meta.url);

test("exports the portfolio with core content and navigation", async () => {
  const html = await readFile(exportedIndex, "utf8");

  assert.match(
    html,
    /<title>Seyed Sepehr Mortazavi — AI &amp; MLOps Engineer<\/title>/i,
  );
  assert.match(html, /SEPEHR/);
  assert.match(html, /MORTAZAVI/);
  assert.match(html, /I MOVE IDEAS/);
  assert.match(html, /id="experience"/);
  assert.match(html, /id="work"/);
  assert.match(html, /id="skills"/);
  assert.match(html, /id="contact"/);
  assert.match(html, /CellCore/);
  assert.match(html, /Master(?:'|&#x27;)s Thesis/i);
  assert.match(html, /READ AWARD ANNOUNCEMENT/);
  assert.match(html, /TUniCorn 2025/);
  assert.match(html, /CellCore is separate from the GitHub-based master/);
  assert.match(html, /Cell Segmentation Platform/);
  assert.match(html, /VIEW MASTER(?:'|&#x27;)S THESIS REPOSITORY/);
  assert.match(html, /01<!-- --> \/ <!-- -->07/);
  assert.match(html, /02<!-- --> \/ <!-- -->07/);
  assert.match(html, /sustainable-3d-printing-portfolio/);
  assert.match(html, /REQUEST REPOSITORY ACCESS/);
  assert.match(
    html,
    /mailto:msepehr812@gmail\.com\?subject=Request%20access%20to%203D%20Print%20Management%20portfolio/,
  );
  assert.doesNotMatch(
    html,
    /href="https:\/\/github\.com\/SepehrMortazavi\/3d-print-management-portfolio"/,
  );
  assert.match(html, /Sustainable 3D/);
  assert.match(html, /3D Print Manager/);
  assert.match(html, /OPEN VISUAL CASE STUDY/);
  assert.match(html, /href="\/projects\/3d-print-manager\/"/);
  assert.match(html, /Choose where to begin/);
  assert.match(html, /Skills &amp; Tools/);
  assert.match(html, /THE STACK BEHIND THE SYSTEMS/);
  assert.match(html, /Vision-language models/);
  assert.match(html, /Robot-Arm RL/);
  assert.match(html, /aria-label="English"/);
  assert.match(html, /aria-label="German"/);
  assert.match(html, /mailto:msepehr812@gmail\.com/);
  assert.match(
    html,
    /href="\/Sepehr-Mortazavi-CV\.pdf" download=""/,
  );
});

test("exports the detailed 3D Print Manager case study", async () => {
  const html = await readFile(
    new URL("../out/projects/3d-print-manager/index.html", import.meta.url),
    "utf8",
  );

  assert.match(html, /FROM MODEL/);
  assert.match(html, /TO MACHINE/);
  assert.match(html, /ONE WORKFLOW/);
  assert.match(html, /PrusaSlicer/);
  assert.match(html, /OctoPrint/);
  assert.match(html, /THE APP, SHOWN CLEARLY/);
  assert.match(html, /does not claim sole authorship/);
  assert.match(html, /\/projects\/print-manager\/landing-page\.jpg/);
  assert.match(html, /\/projects\/print-manager\/admin-dashboard\.jpg/);
});

test("contains complete German translations and publication boundaries", async () => {
  const content = await readFile(new URL("app/content.ts", projectRoot), "utf8");

  assert.match(content, /Sprache wählen/);
  assert.match(content, /Masterarbeit/);
  assert.match(content, /AUSZEICHNUNG ANSEHEN/);
  assert.match(content, /Nachhaltiger 3D-Druck/);
  assert.match(content, /keine Behauptung der alleinigen Urheberschaft/);
  assert.match(content, /EXIST-Antrag eingereicht/);
});

test("keeps critical public assets in the static export", async () => {
  await Promise.all([
    access(new URL("../out/Sepehr-Mortazavi-CV.pdf", import.meta.url)),
    access(new URL("../out/og.png", import.meta.url)),
    access(new URL("../out/projects/cell-segmentation.png", import.meta.url)),
    access(new URL("../out/projects/robotics-dashboard.png", import.meta.url)),
    access(new URL("../out/projects/church-os.png", import.meta.url)),
    access(new URL("../out/projects/change-detection.png", import.meta.url)),
    access(
      new URL("../out/projects/cellcore/tunicorn-award.jpg", import.meta.url),
    ),
    access(
      new URL("../out/projects/thesis/landing-page.png", import.meta.url),
    ),
    access(
      new URL(
        "../out/projects/thesis/segmentation-result.png",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../out/projects/sustainable-3d/toolpath-analysis.jpg",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../out/projects/print-manager/landing-page.jpg",
        import.meta.url,
      ),
    ),
    access(
      new URL(
        "../out/projects/print-manager/admin-dashboard.jpg",
        import.meta.url,
      ),
    ),
  ]);
});

test("includes responsive and reduced-motion safeguards", async () => {
  const css = await readFile(new URL("app/globals.css", projectRoot), "utf8");

  assert.match(css, /@media \(max-width: 800px\)/);
  assert.match(css, /@media \(max-width: 500px\)/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(css, /\.cursor-wash\s*\{\s*display:\s*none;/);
});
