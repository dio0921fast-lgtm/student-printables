const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const siteUrl = "https://dio0921fast-lgtm.github.io/student-printables";

const pages = [
  ["weekly-study-planner-printable.html", "Weekly Study Planner Printable", "weekly study planner"],
  ["daily-study-planner-printable.html", "Daily Study Planner Printable", "daily study planner"],
  ["homework-tracker-printable.html", "Homework Tracker Printable", "homework tracker"],
  ["assignment-tracker-printable.html", "Assignment Tracker Printable", "assignment tracker"],
  ["exam-study-checklist.html", "Exam Study Checklist", "exam study checklist"],
  ["study-schedule-template.html", "Study Schedule Template", "study schedule"],
  ["class-notes-template.html", "Class Notes Template", "class notes"],
  ["school-supplies-checklist.html", "School Supplies Checklist", "school supplies checklist"],
  ["college-packing-list.html", "College Packing List", "college packing list"],
  ["grade-tracker-printable.html", "Grade Tracker Printable", "grade tracker"],
  ["monthly-study-planner-printable.html", "Monthly Study Planner Printable", "monthly study planner"],
  ["class-schedule-template.html", "Class Schedule Template", "class schedule"],
  ["project-planner-printable.html", "Project Planner Printable", "project planner"],
  ["reading-log-printable.html", "Reading Log Printable", "reading log"],
  ["essay-planner-template.html", "Essay Planner Template", "essay planner"],
  ["study-habit-tracker-printable.html", "Study Habit Tracker Printable", "study habit tracker"],
  ["test-prep-planner-printable.html", "Test Prep Planner Printable", "test prep planner"],
  ["semester-planner-printable.html", "Semester Planner Printable", "semester planner"],
  ["assignment-calendar-printable.html", "Assignment Calendar Printable", "assignment calendar"],
];

const locales = {
  "zh-cn": {
    label: "简体中文",
    htmlLang: "zh-CN",
    dir: "zh-cn",
    homeTitle: "免费学生打印模板",
    homeDescription: "免费下载学生打印模板，包括学习计划、作业跟踪、成绩记录、课程表、阅读记录和清单。",
    hero: "学生打印模板",
    heroText: "适合学生使用的学习计划、作业跟踪、考试准备、成绩记录、阅读记录和清单。",
    browse: "浏览模板",
    library: "模板库",
    intro: "选择一个模板，马上开始整理学习任务。",
    introText: "每个页面都可以直接打印，也可以在浏览器打印窗口中保存为 PDF。",
    included: "包含内容",
    howTo: "使用方法",
    download: "免费打印下载",
    print: "打印或保存为 PDF",
    back: "返回首页",
    related: "相关模板",
    footer: "版权所有 2026 Free Printable Student Templates",
    sheetSubtitle: "打印后填写，或在打印窗口中保存为 PDF。",
    fields: ["姓名：", "日期：", "目标："],
    table: ["任务", "课程", "截止日期", "备注", "完成"],
    includedItems: ["清晰的填写区域", "学习任务记录", "日期和备注栏", "可打印的表格"],
    howItems: ["填写姓名、日期和目标。", "把任务或材料写入表格。", "完成后勾选或添加备注。", "需要时重新打印一份。"],
    titles: {
      "weekly study planner": "每周学习计划打印版",
      "daily study planner": "每日学习计划打印版",
      "homework tracker": "作业跟踪表打印版",
      "assignment tracker": "任务跟踪表打印版",
      "exam study checklist": "考试复习清单",
      "study schedule": "学习时间表模板",
      "class notes": "课堂笔记模板",
      "school supplies checklist": "学习用品清单",
      "college packing list": "大学行李清单",
      "grade tracker": "成绩跟踪表打印版",
      "monthly study planner": "每月学习计划打印版",
      "class schedule": "课程表模板",
      "project planner": "项目计划表打印版",
      "reading log": "阅读记录表打印版",
      "essay planner": "作文计划模板",
      "study habit tracker": "学习习惯跟踪表打印版",
      "test prep planner": "考试准备计划表打印版",
      "semester planner": "学期计划表打印版",
      "assignment calendar": "作业日历打印版",
    },
  },
  "zh-tw": {
    label: "繁體中文",
    htmlLang: "zh-Hant",
    dir: "zh-tw",
    homeTitle: "免費學生列印模板",
    homeDescription: "免費下載學生列印模板，包括讀書計畫、作業追蹤、成績紀錄、課表、閱讀紀錄和清單。",
    hero: "學生列印模板",
    heroText: "適合學生使用的讀書計畫、作業追蹤、考試準備、成績紀錄、閱讀紀錄和清單。",
    browse: "瀏覽模板",
    library: "模板庫",
    intro: "選擇一個模板，馬上開始整理學習任務。",
    introText: "每個頁面都可以直接列印，也可以在瀏覽器列印視窗中儲存為 PDF。",
    included: "包含內容",
    howTo: "使用方法",
    download: "免費列印下載",
    print: "列印或儲存為 PDF",
    back: "返回首頁",
    related: "相關模板",
    footer: "版權所有 2026 Free Printable Student Templates",
    sheetSubtitle: "列印後填寫，或在列印視窗中儲存為 PDF。",
    fields: ["姓名：", "日期：", "目標："],
    table: ["任務", "課程", "截止日期", "備註", "完成"],
    includedItems: ["清楚的填寫區域", "學習任務紀錄", "日期和備註欄", "可列印的表格"],
    howItems: ["填寫姓名、日期和目標。", "把任務或材料寫入表格。", "完成後勾選或加入備註。", "需要時重新列印一份。"],
    titles: {
      "weekly study planner": "每週讀書計畫列印版",
      "daily study planner": "每日讀書計畫列印版",
      "homework tracker": "作業追蹤表列印版",
      "assignment tracker": "任務追蹤表列印版",
      "exam study checklist": "考試複習清單",
      "study schedule": "讀書時間表模板",
      "class notes": "課堂筆記模板",
      "school supplies checklist": "學用品清單",
      "college packing list": "大學行李清單",
      "grade tracker": "成績追蹤表列印版",
      "monthly study planner": "每月讀書計畫列印版",
      "class schedule": "課表模板",
      "project planner": "專題計畫表列印版",
      "reading log": "閱讀紀錄表列印版",
      "essay planner": "作文計畫模板",
      "study habit tracker": "讀書習慣追蹤表列印版",
      "test prep planner": "考試準備計畫表列印版",
      "semester planner": "學期計畫表列印版",
      "assignment calendar": "作業行事曆列印版",
    },
  },
  ja: {
    label: "日本語",
    htmlLang: "ja",
    dir: "ja",
    homeTitle: "無料の学生向け印刷テンプレート",
    homeDescription: "学習計画、宿題管理、成績記録、時間割、読書記録、チェックリストを無料で印刷できます。",
    hero: "学生向け印刷テンプレート",
    heroText: "学習計画、宿題管理、試験準備、成績記録、読書記録に使えるシンプルなテンプレートです。",
    browse: "テンプレートを見る",
    library: "テンプレート一覧",
    intro: "テンプレートを選んで、学習を整理しましょう。",
    introText: "各ページは印刷でき、ブラウザの印刷画面から PDF として保存できます。",
    included: "含まれる内容",
    howTo: "使い方",
    download: "無料印刷ダウンロード",
    print: "印刷または PDF 保存",
    back: "ホームへ戻る",
    related: "関連テンプレート",
    footer: "Copyright 2026 Free Printable Student Templates",
    sheetSubtitle: "印刷して記入するか、PDF として保存できます。",
    fields: ["名前：", "日付：", "目標："],
    table: ["タスク", "科目", "期限", "メモ", "完了"],
    includedItems: ["書き込みやすい欄", "学習タスクの記録", "日付とメモ欄", "印刷用ワークシート"],
    howItems: ["名前、日付、目標を書きます。", "タスクや教材を表に記入します。", "完了したらチェックします。", "必要に応じて再印刷します。"],
    titles: {
      "weekly study planner": "週間学習計画表",
      "daily study planner": "毎日の学習計画表",
      "homework tracker": "宿題管理表",
      "assignment tracker": "課題管理表",
      "exam study checklist": "試験勉強チェックリスト",
      "study schedule": "学習スケジュール表",
      "class notes": "授業ノートテンプレート",
      "school supplies checklist": "学用品チェックリスト",
      "college packing list": "大学持ち物リスト",
      "grade tracker": "成績管理表",
      "monthly study planner": "月間学習計画表",
      "class schedule": "時間割テンプレート",
      "project planner": "プロジェクト計画表",
      "reading log": "読書記録表",
      "essay planner": "作文計画テンプレート",
      "study habit tracker": "学習習慣トラッカー",
      "test prep planner": "テスト準備計画表",
      "semester planner": "学期計画表",
      "assignment calendar": "課題カレンダー",
    },
  },
  ko: {
    label: "한국어",
    htmlLang: "ko",
    dir: "ko",
    homeTitle: "무료 학생용 인쇄 템플릿",
    homeDescription: "학습 계획표, 숙제 추적표, 성적 기록표, 시간표, 독서 기록표와 체크리스트를 무료로 인쇄하세요.",
    hero: "학생용 인쇄 템플릿",
    heroText: "학습 계획, 숙제 관리, 시험 준비, 성적 기록, 독서 기록에 사용할 수 있는 간단한 템플릿입니다.",
    browse: "템플릿 보기",
    library: "템플릿 목록",
    intro: "템플릿을 선택하고 공부를 정리해 보세요.",
    introText: "각 페이지는 바로 인쇄하거나 브라우저 인쇄 창에서 PDF로 저장할 수 있습니다.",
    included: "포함 내용",
    howTo: "사용 방법",
    download: "무료 인쇄 다운로드",
    print: "인쇄 또는 PDF 저장",
    back: "홈으로 돌아가기",
    related: "관련 템플릿",
    footer: "Copyright 2026 Free Printable Student Templates",
    sheetSubtitle: "인쇄해서 작성하거나 PDF로 저장할 수 있습니다.",
    fields: ["이름:", "날짜:", "목표:"],
    table: ["할 일", "과목", "마감일", "메모", "완료"],
    includedItems: ["작성하기 쉬운 영역", "학습 과제 기록", "날짜와 메모 칸", "인쇄용 워크시트"],
    howItems: ["이름, 날짜, 목표를 적습니다.", "과제나 자료를 표에 적습니다.", "완료하면 체크하거나 메모를 추가합니다.", "필요할 때 다시 인쇄합니다."],
    titles: {
      "weekly study planner": "주간 학습 계획표",
      "daily study planner": "일일 학습 계획표",
      "homework tracker": "숙제 추적표",
      "assignment tracker": "과제 추적표",
      "exam study checklist": "시험 공부 체크리스트",
      "study schedule": "학습 일정표",
      "class notes": "수업 노트 템플릿",
      "school supplies checklist": "학용품 체크리스트",
      "college packing list": "대학 기숙사 짐 목록",
      "grade tracker": "성적 추적표",
      "monthly study planner": "월간 학습 계획표",
      "class schedule": "수업 시간표",
      "project planner": "프로젝트 계획표",
      "reading log": "독서 기록표",
      "essay planner": "에세이 계획 템플릿",
      "study habit tracker": "학습 습관 추적표",
      "test prep planner": "시험 준비 계획표",
      "semester planner": "학기 계획표",
      "assignment calendar": "과제 달력",
    },
  },
  es: {
    label: "Español",
    htmlLang: "es",
    dir: "es",
    homeTitle: "Plantillas imprimibles gratis para estudiantes",
    homeDescription: "Descarga plantillas imprimibles para estudiantes: planificadores de estudio, tareas, calificaciones, horarios, lectura y listas.",
    hero: "Plantillas imprimibles para estudiantes",
    heroText: "Planificadores, listas y hojas imprimibles para organizar tareas, estudio, exámenes, calificaciones y lectura.",
    browse: "Ver plantillas",
    library: "Biblioteca de plantillas",
    intro: "Elige una plantilla y empieza a organizar tus estudios.",
    introText: "Cada página se puede imprimir o guardar como PDF desde la ventana de impresión del navegador.",
    included: "Qué incluye",
    howTo: "Cómo usarla",
    download: "Descarga imprimible gratis",
    print: "Imprimir o guardar como PDF",
    back: "Volver al inicio",
    related: "Plantillas relacionadas",
    footer: "Copyright 2026 Free Printable Student Templates",
    sheetSubtitle: "Imprime la hoja o guárdala como PDF desde tu navegador.",
    fields: ["Nombre:", "Fecha:", "Meta:"],
    table: ["Tarea", "Materia", "Fecha límite", "Notas", "Hecho"],
    includedItems: ["Espacios claros para escribir", "Registro de tareas de estudio", "Campos de fecha y notas", "Hoja lista para imprimir"],
    howItems: ["Escribe tu nombre, fecha y meta.", "Agrega tareas o materiales en la tabla.", "Marca lo que completes y añade notas.", "Vuelve a imprimirla cuando la necesites."],
    titles: {
      "weekly study planner": "Planificador semanal de estudio",
      "daily study planner": "Planificador diario de estudio",
      "homework tracker": "Registro de tareas imprimible",
      "assignment tracker": "Registro de trabajos imprimible",
      "exam study checklist": "Lista de estudio para exámenes",
      "study schedule": "Horario de estudio",
      "class notes": "Plantilla de apuntes de clase",
      "school supplies checklist": "Lista de útiles escolares",
      "college packing list": "Lista para empacar para la universidad",
      "grade tracker": "Registro de calificaciones imprimible",
      "monthly study planner": "Planificador mensual de estudio",
      "class schedule": "Horario de clases",
      "project planner": "Planificador de proyectos",
      "reading log": "Registro de lectura",
      "essay planner": "Plantilla para planear ensayos",
      "study habit tracker": "Registro de hábitos de estudio",
      "test prep planner": "Planificador de preparación para exámenes",
      "semester planner": "Planificador semestral",
      "assignment calendar": "Calendario de trabajos",
    },
  },
  fr: {
    label: "Français",
    htmlLang: "fr",
    dir: "fr",
    homeTitle: "Modèles imprimables gratuits pour étudiants",
    homeDescription: "Téléchargez des modèles imprimables pour étudiants : planning d'étude, devoirs, notes, emploi du temps, lecture et listes.",
    hero: "Modèles imprimables pour étudiants",
    heroText: "Des plannings, suivis et listes simples pour organiser les devoirs, les révisions, les examens, les notes et la lecture.",
    browse: "Voir les modèles",
    library: "Bibliothèque de modèles",
    intro: "Choisissez un modèle et organisez votre travail scolaire.",
    introText: "Chaque page peut être imprimée ou enregistrée en PDF depuis la fenêtre d'impression du navigateur.",
    included: "Ce qui est inclus",
    howTo: "Comment l'utiliser",
    download: "Téléchargement imprimable gratuit",
    print: "Imprimer ou enregistrer en PDF",
    back: "Retour à l'accueil",
    related: "Modèles associés",
    footer: "Copyright 2026 Free Printable Student Templates",
    sheetSubtitle: "Imprimez la fiche ou enregistrez-la en PDF depuis votre navigateur.",
    fields: ["Nom :", "Date :", "Objectif :"],
    table: ["Tâche", "Matière", "Date limite", "Notes", "Fait"],
    includedItems: ["Zones claires à remplir", "Suivi des tâches d'étude", "Champs de date et de notes", "Fiche prête à imprimer"],
    howItems: ["Écrivez votre nom, la date et l'objectif.", "Ajoutez les tâches ou documents dans le tableau.", "Cochez les éléments terminés et ajoutez des notes.", "Réimprimez la fiche quand vous en avez besoin."],
    titles: {
      "weekly study planner": "Planning d'étude hebdomadaire",
      "daily study planner": "Planning d'étude quotidien",
      "homework tracker": "Suivi des devoirs imprimable",
      "assignment tracker": "Suivi des travaux imprimable",
      "exam study checklist": "Liste de révision pour examen",
      "study schedule": "Emploi du temps d'étude",
      "class notes": "Modèle de notes de cours",
      "school supplies checklist": "Liste de fournitures scolaires",
      "college packing list": "Liste de bagages pour l'université",
      "grade tracker": "Suivi des notes imprimable",
      "monthly study planner": "Planning d'étude mensuel",
      "class schedule": "Emploi du temps des cours",
      "project planner": "Planificateur de projet",
      "reading log": "Journal de lecture",
      "essay planner": "Modèle de plan de dissertation",
      "study habit tracker": "Suivi des habitudes d'étude",
      "test prep planner": "Plan de préparation aux tests",
      "semester planner": "Planificateur de semestre",
      "assignment calendar": "Calendrier des devoirs",
    },
  },
};

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function localePath(locale, file) {
  return locale === "en" ? file : `${locale}/${file}`;
}

function altLinks(file, locale) {
  const links = [
    `<link rel="alternate" hreflang="en" href="${siteUrl}/${file}" />`,
    ...Object.keys(locales).map((code) => `<link rel="alternate" hreflang="${code}" href="${siteUrl}/${localePath(code, file)}" />`),
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}/${file}" />`,
  ];
  return links.join("\n  ");
}

function languageSwitcher(file, active) {
  const items = [
    ["en", "English", `../${file}`],
    ...Object.entries(locales).map(([code, cfg]) => [code, cfg.label, code === active ? file : `../${code}/${file}`]),
  ];
  return `<nav class="language-switcher" aria-label="Language selector">${items
    .map(([code, label, href]) => `<a href="${href}" hreflang="${code}">${label}</a>`)
    .join(" ")}</nav>`;
}

function pageDescription(cfg, title) {
  return `${title} - ${cfg.homeDescription}`;
}

function renderIndex(code, cfg) {
  const cards = pages
    .map(([file, , key]) => {
      const title = cfg.titles[key];
      return `<article class="card">
        <span class="tag">${esc(cfg.library)}</span>
        <h3>${esc(title)}</h3>
        <p>${esc(cfg.sheetSubtitle)}</p>
        <a href="${file}">${esc(cfg.browse)}</a>
      </article>`;
    })
    .join("\n");

  return `<!DOCTYPE html>
<html lang="${cfg.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(cfg.homeTitle)}</title>
  <meta name="description" content="${esc(cfg.homeDescription)}" />
  ${altLinks("index.html", code)}
  <link rel="stylesheet" href="../template-page.css" />
  <style>
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(245px, 1fr)); gap: 18px; }
    .tag { display: inline-block; margin-bottom: 12px; color: #0f8f8c; font-weight: 800; font-size: 13px; }
    .card a { color: #2457d6; font-weight: 800; text-decoration: none; }
  </style>
</head>
<body>
  <header>
    <h1>${esc(cfg.hero)}</h1>
    <p>${esc(cfg.heroText)}</p>
  </header>
  ${languageSwitcher("index.html", code)}
  <main>
    <section class="card">
      <h2>${esc(cfg.intro)}</h2>
      <p>${esc(cfg.introText)}</p>
    </section>
    <section>
      <h2>${esc(cfg.library)}</h2>
      <div class="grid">
        ${cards}
      </div>
    </section>
  </main>
  <footer>${esc(cfg.footer)}</footer>
</body>
</html>
`;
}

function renderPage(code, cfg, file, key) {
  const title = cfg.titles[key];
  const related = pages.filter(([relatedFile]) => relatedFile !== file).slice(0, 3);
  return `<!DOCTYPE html>
<html lang="${cfg.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(pageDescription(cfg, title))}" />
  ${altLinks(file, code)}
  <link rel="stylesheet" href="../template-page.css" />
  <link rel="stylesheet" href="../printable-worksheets.css" />
</head>
<body>
  <header>
    <h1>${esc(title)}</h1>
    <p>${esc(pageDescription(cfg, title))}</p>
  </header>
  ${languageSwitcher(file, code)}
  <main>
    <section class="card">
      <h2>${esc(cfg.included)}</h2>
      <ul>
        ${cfg.includedItems.map((item) => `<li>${esc(item)}</li>`).join("\n        ")}
      </ul>
    </section>
    <section class="card">
      <h2>${esc(cfg.howTo)}</h2>
      <ol>
        ${cfg.howItems.map((item) => `<li>${esc(item)}</li>`).join("\n        ")}
      </ol>
    </section>
    <section class="card download-box">
      <h2>${esc(cfg.download)}</h2>
      <p class="download-note">${esc(cfg.sheetSubtitle)}</p>
      <button class="print-button" type="button" onclick="window.print()">${esc(cfg.print)}</button>
      <div class="printable-sheet">
        <h3>${esc(title)}</h3>
        <p class="sheet-subtitle">${esc(cfg.sheetSubtitle)}</p>
        <div class="field-row">
          ${cfg.fields.map((field) => `<div class="field">${esc(field)}</div>`).join("\n          ")}
        </div>
        <table class="worksheet-table">
          <thead>
            <tr>${cfg.table.map((heading) => `<th>${esc(heading)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${Array.from({ length: 6 }, () => `<tr>${cfg.table.map(() => "<td></td>").join("")}</tr>`).join("\n            ")}
          </tbody>
        </table>
      </div>
      <a class="button" href="index.html">${esc(cfg.back)}</a>
    </section>
    <section class="card">
      <h2>${esc(cfg.related)}</h2>
      <div class="related-links">
        ${related.map(([relatedFile, , relatedKey]) => `<a class="button" href="${relatedFile}">${esc(cfg.titles[relatedKey])}</a>`).join("\n        ")}
      </div>
    </section>
  </main>
  <footer>${esc(cfg.footer)}</footer>
</body>
</html>
`;
}

for (const [code, cfg] of Object.entries(locales)) {
  const dir = path.join(root, cfg.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), renderIndex(code, cfg));
  for (const [file, , key] of pages) {
    fs.writeFileSync(path.join(dir, file), renderPage(code, cfg, file, key));
  }
}

for (const [file] of pages) {
  const target = path.join(root, file);
  let html = fs.readFileSync(target, "utf8");
  if (!html.includes('rel="alternate" hreflang=')) {
    html = html.replace(
      /(<meta name="description"[^>]*>\s*)/i,
      `$1\n  ${altLinks(file, "en")}\n`
    );
    fs.writeFileSync(target, html);
  }
}

const sitemapUrls = ["index.html", ...pages.map(([file]) => file)]
  .map((file) => `${siteUrl}/${file}`)
  .concat(
    Object.keys(locales).flatMap((code) =>
      ["index.html", ...pages.map(([file]) => file)].map((file) => `${siteUrl}/${localePath(code, file)}`)
    )
  );

fs.writeFileSync(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls
    .map((loc) => `  <url><loc>${loc}</loc></url>`)
    .join("\n")}\n</urlset>\n`
);

fs.writeFileSync(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

console.log(`Generated ${Object.keys(locales).length} locale directories with ${pages.length + 1} pages each.`);
