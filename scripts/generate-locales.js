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
    eyebrow: "免费学生打印模板",
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
    faqTitle: "常见问题",
    faqItems: [
      ["这个模板免费吗？", "是的，这个模板可以免费打印和使用。"],
      ["可以保存为 PDF 吗？", "可以，点击“打印或保存为 PDF”，然后在浏览器打印窗口选择保存为 PDF。"],
      ["老师可以使用吗？", "可以，老师可以为课堂、辅导或学生整理任务打印使用。"],
      ["应该使用什么纸张尺寸？", "建议使用 US Letter 或 A4，并在打印时选择适合页面。"],
    ],
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
    eyebrow: "免費學生列印模板",
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
    faqTitle: "常見問題",
    faqItems: [
      ["這個模板免費嗎？", "是的，這個模板可以免費列印和使用。"],
      ["可以儲存為 PDF 嗎？", "可以，點選「列印或儲存為 PDF」，然後在瀏覽器列印視窗中選擇儲存為 PDF。"],
      ["老師可以使用嗎？", "可以，老師可以為課堂、輔導或學生整理任務列印使用。"],
      ["應該使用什麼紙張尺寸？", "建議使用 US Letter 或 A4，並在列印時選擇符合頁面。"],
    ],
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
    eyebrow: "無料の学生向け印刷テンプレート",
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
    faqTitle: "よくある質問",
    faqItems: [
      ["このテンプレートは無料ですか？", "はい、このテンプレートは無料で印刷して使用できます。"],
      ["PDF として保存できますか？", "はい。「印刷または PDF 保存」を押し、ブラウザの印刷画面で PDF 保存を選べます。"],
      ["先生も使えますか？", "はい。授業、個別指導、生徒の整理用として印刷して使えます。"],
      ["どの用紙サイズがよいですか？", "US Letter または A4 がおすすめです。印刷時にページに合わせる設定を選んでください。"],
    ],
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
    eyebrow: "무료 학생용 인쇄 템플릿",
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
    faqTitle: "자주 묻는 질문",
    faqItems: [
      ["이 템플릿은 무료인가요?", "네, 이 템플릿은 무료로 인쇄해 사용할 수 있습니다."],
      ["PDF로 저장할 수 있나요?", "네. “인쇄 또는 PDF 저장”을 누른 뒤 브라우저 인쇄 창에서 PDF 저장을 선택하세요."],
      ["교사도 사용할 수 있나요?", "네. 수업, 지도, 학생 정리용으로 인쇄해 사용할 수 있습니다."],
      ["어떤 용지 크기를 사용해야 하나요?", "US Letter 또는 A4를 권장하며, 인쇄할 때 페이지에 맞춤을 선택하세요."],
    ],
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
    eyebrow: "Plantillas gratis para estudiantes",
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
    faqTitle: "Preguntas frecuentes",
    faqItems: [
      ["¿Esta plantilla es gratis?", "Sí, esta plantilla se puede imprimir y usar gratis."],
      ["¿Puedo guardarla como PDF?", "Sí. Haz clic en “Imprimir o guardar como PDF” y elige guardar como PDF en la ventana de impresión del navegador."],
      ["¿Pueden usarla los profesores?", "Sí. Los profesores pueden imprimirla para clase, tutorías u organización de estudiantes."],
      ["¿Qué tamaño de papel debo usar?", "Se recomienda US Letter o A4. Al imprimir, elige ajustar a la página."],
    ],
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
    eyebrow: "Modèles gratuits pour étudiants",
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
    faqTitle: "Questions fréquentes",
    faqItems: [
      ["Ce modèle est-il gratuit ?", "Oui, ce modèle peut être imprimé et utilisé gratuitement."],
      ["Puis-je l'enregistrer en PDF ?", "Oui. Cliquez sur « Imprimer ou enregistrer en PDF », puis choisissez l'enregistrement en PDF dans la fenêtre d'impression du navigateur."],
      ["Les enseignants peuvent-ils l'utiliser ?", "Oui. Les enseignants peuvent l'imprimer pour la classe, le soutien ou l'organisation des élèves."],
      ["Quel format de papier utiliser ?", "Le format US Letter ou A4 est recommandé. Lors de l'impression, choisissez l'ajustement à la page."],
    ],
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
  const versioned = (href) => file === "index.html" && !href.includes("?") ? `${href}?v=shared-hero-1` : href;
  const homeLabels = {
    "zh-cn": "首页",
    "zh-tw": "首頁",
    ja: "ホーム",
    ko: "홈",
    es: "Inicio",
    fr: "Accueil",
  };
  const items = [
    ["", homeLabels[active] || "Home", "../index.html"],
    ["en", "English", `../${file}`],
    ...Object.entries(locales).map(([code, cfg]) => [code, cfg.label, code === active ? file : `../${code}/${file}`]),
  ];
  return `<nav class="language-switcher" aria-label="Language selector">${items
    .map(([code, label, href]) => `<a href="${versioned(href)}"${code ? ` hreflang="${code}"` : ""}>${label}</a>`)
    .join(" ")}</nav>`;
}

function rootLanguageSwitcher(file) {
  const items = [
    ["en", "English", file],
    ...Object.entries(locales).map(([code, cfg]) => [code, cfg.label, `${code}/${file}`]),
  ];
  return `<nav class="language-switcher" aria-label="Language selector">${items
    .map(([code, label, href]) => `<a href="${href}" hreflang="${code}">${label}</a>`)
    .join(" ")}</nav>`;
}

function pageDescription(cfg, title) {
  return `${title} - ${cfg.homeDescription}`;
}

const terms = {
  "zh-cn": {
    "Week of:": "周次：", "Name:": "姓名：", "Top goal:": "主要目标：", "Date:": "日期：", "Main goal:": "主要目标：", "Study time:": "学习时间：", "Class:": "课程：", "Term:": "学期：", "Goal:": "目标：", "Subject:": "科目：", "Exam date:": "考试日期：", "Target grade:": "目标成绩：", "Course:": "课程：", "Topic:": "主题：", "Student:": "学生：", "Grade:": "年级：", "School year:": "学年：", "Move-in date:": "入住日期：", "Dorm:": "宿舍：", "Month:": "月份：", "Reward:": "奖励：", "School:": "学校：", "Project:": "项目：", "Due date:": "截止日期：", "Reading goal:": "阅读目标：", "Essay type:": "作文类型：", "Semester:": "学期：", "Start date:": "开始日期：",
    "Day": "日期", "Classes": "课程", "Homework": "作业", "Study Block": "学习时段", "Done": "完成", "Priority": "优先级", "Notes": "备注", "Task": "任务", "Course": "课程", "Due Date": "截止日期", "Status": "状态", "Score": "分数", "Possible": "满分", "Book": "书名", "Pages": "页数", "Minutes": "分钟", "Summary or Notes": "摘要或备注", "Topic": "主题", "Review Task": "复习任务", "Practice Needed": "需要练习", "Confidence": "掌握程度",
    "Monday": "星期一", "Tuesday": "星期二", "Wednesday": "星期三", "Thursday": "星期四", "Friday": "星期五", "Weekend": "周末", "Week 1 focus": "第 1 周重点", "Week 2 focus": "第 2 周重点", "Week 3 focus": "第 3 周重点", "Week 4 focus": "第 4 周重点", "Top priorities": "重点事项", "Homework due": "到期作业", "Study schedule": "学习安排", "Notes and reminders": "备注和提醒",
    "Bedding": "床上用品", "Sheets": "床单", "Pillows": "枕头", "Blanket": "毯子", "Mattress pad": "床垫保护垫", "Study supplies": "学习用品", "Laptop": "笔记本电脑", "Chargers": "充电器", "Notebooks": "笔记本", "Pens": "钢笔", "Room essentials": "宿舍用品", "Desk lamp": "台灯", "Laundry basket": "洗衣篮", "Storage bins": "收纳盒", "Fan": "风扇", "Personal items": "个人用品", "Toiletries": "洗漱用品", "Towels": "毛巾", "Clothes": "衣物", "Medicine": "药品",
    "Pencils": "铅笔", "Highlighters": "荧光笔", "Folders": "文件夹", "Binders": "活页夹", "Backpack": "书包", "Calculator": "计算器", "Sticky notes": "便利贴", "Index cards": "索引卡", "Tablet": "平板电脑", "Headphones": "耳机", "Planner": "计划本",
    "Main notes": "主要笔记", "Key terms": "重点词汇", "Questions": "问题", "Follow-up tasks": "后续任务", "Prompt": "题目要求", "Thesis statement": "中心论点", "Body paragraph 1": "正文段落 1", "Body paragraph 2": "正文段落 2", "Body paragraph 3": "正文段落 3", "Conclusion notes": "结论备注",
  },
  "zh-tw": {
    "Week of:": "週次：", "Name:": "姓名：", "Top goal:": "主要目標：", "Date:": "日期：", "Main goal:": "主要目標：", "Study time:": "讀書時間：", "Class:": "課程：", "Term:": "學期：", "Goal:": "目標：", "Subject:": "科目：", "Exam date:": "考試日期：", "Target grade:": "目標成績：", "Course:": "課程：", "Topic:": "主題：", "Student:": "學生：", "Grade:": "年級：", "School year:": "學年：", "Move-in date:": "入住日期：", "Dorm:": "宿舍：", "Month:": "月份：", "Reward:": "獎勵：", "School:": "學校：", "Project:": "專題：", "Due date:": "截止日期：", "Reading goal:": "閱讀目標：", "Essay type:": "作文類型：", "Semester:": "學期：", "Start date:": "開始日期：",
    "Day": "日期", "Classes": "課程", "Homework": "作業", "Study Block": "讀書時段", "Done": "完成", "Priority": "優先順序", "Notes": "備註", "Task": "任務", "Course": "課程", "Due Date": "截止日期", "Status": "狀態", "Score": "分數", "Possible": "滿分", "Book": "書名", "Pages": "頁數", "Minutes": "分鐘", "Summary or Notes": "摘要或備註", "Topic": "主題", "Review Task": "複習任務", "Practice Needed": "需要練習", "Confidence": "掌握程度",
    "Monday": "星期一", "Tuesday": "星期二", "Wednesday": "星期三", "Thursday": "星期四", "Friday": "星期五", "Weekend": "週末", "Week 1 focus": "第 1 週重點", "Week 2 focus": "第 2 週重點", "Week 3 focus": "第 3 週重點", "Week 4 focus": "第 4 週重點", "Top priorities": "重點事項", "Homework due": "到期作業", "Study schedule": "讀書安排", "Notes and reminders": "備註和提醒",
    "Bedding": "寢具", "Sheets": "床單", "Pillows": "枕頭", "Blanket": "毯子", "Mattress pad": "床墊保護墊", "Study supplies": "學習用品", "Laptop": "筆電", "Chargers": "充電器", "Notebooks": "筆記本", "Pens": "筆", "Room essentials": "宿舍用品", "Desk lamp": "檯燈", "Laundry basket": "洗衣籃", "Storage bins": "收納盒", "Fan": "風扇", "Personal items": "個人物品", "Toiletries": "盥洗用品", "Towels": "毛巾", "Clothes": "衣物", "Medicine": "藥品",
    "Pencils": "鉛筆", "Highlighters": "螢光筆", "Folders": "資料夾", "Binders": "活頁夾", "Backpack": "書包", "Calculator": "計算機", "Sticky notes": "便利貼", "Index cards": "索引卡", "Tablet": "平板", "Headphones": "耳機", "Planner": "計畫本",
    "Main notes": "主要筆記", "Key terms": "重點詞彙", "Questions": "問題", "Follow-up tasks": "後續任務", "Prompt": "題目要求", "Thesis statement": "中心論點", "Body paragraph 1": "正文段落 1", "Body paragraph 2": "正文段落 2", "Body paragraph 3": "正文段落 3", "Conclusion notes": "結論備註",
  },
  ja: {
    "Week of:": "週：", "Name:": "名前：", "Top goal:": "主な目標：", "Date:": "日付：", "Main goal:": "主な目標：", "Study time:": "学習時間：", "Class:": "科目：", "Term:": "学期：", "Goal:": "目標：", "Subject:": "科目：", "Exam date:": "試験日：", "Target grade:": "目標成績：", "Course:": "授業：", "Topic:": "テーマ：", "Student:": "学生：", "Grade:": "学年：", "School year:": "年度：", "Move-in date:": "入寮日：", "Dorm:": "寮：", "Month:": "月：", "Reward:": "ごほうび：", "School:": "学校：", "Project:": "プロジェクト：", "Due date:": "期限：", "Reading goal:": "読書目標：", "Essay type:": "作文タイプ：", "Semester:": "学期：", "Start date:": "開始日：",
    "Day": "曜日", "Classes": "授業", "Homework": "宿題", "Study Block": "学習時間", "Done": "完了", "Priority": "優先度", "Notes": "メモ", "Task": "タスク", "Course": "科目", "Due Date": "期限", "Status": "状態", "Score": "点数", "Possible": "満点", "Book": "本", "Pages": "ページ", "Minutes": "分", "Summary or Notes": "要約・メモ", "Topic": "範囲", "Review Task": "復習内容", "Practice Needed": "練習内容", "Confidence": "理解度",
    "Monday": "月曜", "Tuesday": "火曜", "Wednesday": "水曜", "Thursday": "木曜", "Friday": "金曜", "Weekend": "週末", "Week 1 focus": "第1週の重点", "Week 2 focus": "第2週の重点", "Week 3 focus": "第3週の重点", "Week 4 focus": "第4週の重点", "Top priorities": "優先事項", "Homework due": "提出宿題", "Study schedule": "学習予定", "Notes and reminders": "メモ・リマインダー",
    "Bedding": "寝具", "Sheets": "シーツ", "Pillows": "枕", "Blanket": "毛布", "Mattress pad": "マットレスパッド", "Study supplies": "学習用品", "Laptop": "ノートPC", "Chargers": "充電器", "Notebooks": "ノート", "Pens": "ペン", "Room essentials": "寮生活用品", "Desk lamp": "デスクライト", "Laundry basket": "洗濯かご", "Storage bins": "収納ケース", "Fan": "扇風機", "Personal items": "身の回り品", "Toiletries": "洗面用品", "Towels": "タオル", "Clothes": "衣類", "Medicine": "薬",
    "Pencils": "鉛筆", "Highlighters": "蛍光ペン", "Folders": "フォルダー", "Binders": "バインダー", "Backpack": "リュック", "Calculator": "電卓", "Sticky notes": "付箋", "Index cards": "単語カード", "Tablet": "タブレット", "Headphones": "ヘッドホン", "Planner": "手帳",
    "Main notes": "主なノート", "Key terms": "重要語句", "Questions": "質問", "Follow-up tasks": "復習タスク", "Prompt": "課題文", "Thesis statement": "主張", "Body paragraph 1": "本文1", "Body paragraph 2": "本文2", "Body paragraph 3": "本文3", "Conclusion notes": "結論メモ",
  },
};

terms.ko = Object.assign({}, terms.ja, {
  "Week of:": "주:", "Name:": "이름:", "Top goal:": "주요 목표:", "Date:": "날짜:", "Main goal:": "주요 목표:", "Study time:": "공부 시간:", "Subject:": "과목:", "Student:": "학생:", "Done": "완료", "Task": "할 일", "Course": "과목", "Due Date": "마감일", "Notes": "메모", "Monday": "월요일", "Tuesday": "화요일", "Wednesday": "수요일", "Thursday": "목요일", "Friday": "금요일", "Weekend": "주말", "Bedding": "침구", "Study supplies": "학습용품", "Room essentials": "기숙사 용품", "Personal items": "개인용품", "School supplies": "학용품", "Main notes": "주요 노트", "Key terms": "핵심 용어", "Questions": "질문", "Follow-up tasks": "후속 과제"
});
terms.es = Object.assign({}, {
  "Week of:": "Semana de:", "Name:": "Nombre:", "Top goal:": "Meta principal:", "Date:": "Fecha:", "Main goal:": "Meta principal:", "Study time:": "Tiempo de estudio:", "Class:": "Clase:", "Term:": "Periodo:", "Goal:": "Meta:", "Subject:": "Materia:", "Exam date:": "Fecha del examen:", "Target grade:": "Nota objetivo:", "Course:": "Curso:", "Topic:": "Tema:", "Student:": "Estudiante:", "Grade:": "Grado:", "School year:": "Año escolar:", "Move-in date:": "Fecha de mudanza:", "Dorm:": "Dormitorio:", "Month:": "Mes:", "Reward:": "Recompensa:", "School:": "Escuela:", "Project:": "Proyecto:", "Due date:": "Fecha límite:", "Reading goal:": "Meta de lectura:", "Essay type:": "Tipo de ensayo:", "Semester:": "Semestre:", "Start date:": "Fecha de inicio:",
  "Day": "Día", "Classes": "Clases", "Homework": "Tarea", "Study Block": "Bloque de estudio", "Done": "Hecho", "Priority": "Prioridad", "Notes": "Notas", "Task": "Tarea", "Course": "Curso", "Due Date": "Fecha límite", "Status": "Estado", "Score": "Puntaje", "Possible": "Total", "Book": "Libro", "Pages": "Páginas", "Minutes": "Minutos", "Summary or Notes": "Resumen o notas", "Topic": "Tema", "Review Task": "Repaso", "Practice Needed": "Práctica", "Confidence": "Confianza",
  "Monday": "Lunes", "Tuesday": "Martes", "Wednesday": "Miércoles", "Thursday": "Jueves", "Friday": "Viernes", "Weekend": "Fin de semana", "Week 1 focus": "Enfoque semana 1", "Week 2 focus": "Enfoque semana 2", "Week 3 focus": "Enfoque semana 3", "Week 4 focus": "Enfoque semana 4", "Top priorities": "Prioridades", "Homework due": "Tarea pendiente", "Study schedule": "Horario de estudio", "Notes and reminders": "Notas y recordatorios",
  "Bedding": "Ropa de cama", "Sheets": "Sábanas", "Pillows": "Almohadas", "Blanket": "Manta", "Mattress pad": "Protector de colchón", "Study supplies": "Útiles de estudio", "Laptop": "Portátil", "Chargers": "Cargadores", "Notebooks": "Cuadernos", "Pens": "Bolígrafos", "Room essentials": "Dormitorio", "Desk lamp": "Lámpara", "Laundry basket": "Cesto de ropa", "Storage bins": "Cajas", "Fan": "Ventilador", "Personal items": "Artículos personales", "Toiletries": "Aseo", "Towels": "Toallas", "Clothes": "Ropa", "Medicine": "Medicinas",
  "Pencils": "Lápices", "Highlighters": "Resaltadores", "Folders": "Carpetas", "Binders": "Archivadores", "Backpack": "Mochila", "Calculator": "Calculadora", "Sticky notes": "Notas adhesivas", "Index cards": "Tarjetas", "Tablet": "Tableta", "Headphones": "Auriculares", "Planner": "Agenda",
  "Main notes": "Notas principales", "Key terms": "Términos clave", "Questions": "Preguntas", "Follow-up tasks": "Tareas de seguimiento", "Prompt": "Consigna", "Thesis statement": "Tesis", "Body paragraph 1": "Párrafo 1", "Body paragraph 2": "Párrafo 2", "Body paragraph 3": "Párrafo 3", "Conclusion notes": "Conclusión",
});
terms.fr = Object.assign({}, terms.es, {
  "Week of:": "Semaine du :", "Name:": "Nom :", "Top goal:": "Objectif principal :", "Date:": "Date :", "Main goal:": "Objectif principal :", "Study time:": "Temps d'étude :", "Class:": "Classe :", "Term:": "Période :", "Goal:": "Objectif :", "Subject:": "Matière :", "Exam date:": "Date d'examen :", "Target grade:": "Note visée :", "Course:": "Cours :", "Topic:": "Sujet :", "Student:": "Élève :", "Grade:": "Niveau :", "School year:": "Année scolaire :", "Month:": "Mois :", "Project:": "Projet :", "Due date:": "Date limite :", "Day": "Jour", "Classes": "Cours", "Homework": "Devoirs", "Task": "Tâche", "Notes": "Notes", "Done": "Fait", "Monday": "Lundi", "Tuesday": "Mardi", "Wednesday": "Mercredi", "Thursday": "Jeudi", "Friday": "Vendredi", "Weekend": "Week-end", "Bedding": "Literie", "Study supplies": "Fournitures d'étude", "Room essentials": "Chambre", "Personal items": "Objets personnels", "School supplies": "Fournitures scolaires", "Main notes": "Notes principales", "Key terms": "Mots clés", "Questions": "Questions", "Follow-up tasks": "À faire"
});

Object.assign(terms["zh-cn"], {
  "Date": "日期", "Time": "时间", "Subject": "科目", "Teacher": "老师", "Target grade": "目标成绩", "Exam date": "考试日期", "Before school": "上学前", "After school": "放学后", "Evening": "晚上", "Review": "复习", "Period 1": "第 1 节", "Period 2": "第 2 节", "Period 3": "第 3 节", "Period 4": "第 4 节", "Period 5": "第 5 节", "Project goal": "项目目标", "Materials or sources": "材料或资料来源", "Review notes": "复习笔记", "Finish homework": "完成作业", "Read or practice": "阅读或练习", "Prepare backpack": "整理书包"
});
Object.assign(terms["zh-tw"], {
  "Date": "日期", "Time": "時間", "Subject": "科目", "Teacher": "老師", "Target grade": "目標成績", "Exam date": "考試日期", "Before school": "上學前", "After school": "放學後", "Evening": "晚上", "Review": "複習", "Period 1": "第 1 節", "Period 2": "第 2 節", "Period 3": "第 3 節", "Period 4": "第 4 節", "Period 5": "第 5 節", "Project goal": "專題目標", "Materials or sources": "材料或資料來源", "Review notes": "複習筆記", "Finish homework": "完成作業", "Read or practice": "閱讀或練習", "Prepare backpack": "整理書包"
});
Object.assign(terms.ja, {
  "Date": "日付", "Time": "時間", "Subject": "科目", "Teacher": "先生", "Target grade": "目標成績", "Exam date": "試験日", "Before school": "登校前", "After school": "放課後", "Evening": "夜", "Review": "復習", "Period 1": "1時間目", "Period 2": "2時間目", "Period 3": "3時間目", "Period 4": "4時間目", "Period 5": "5時間目", "Project goal": "目標", "Materials or sources": "資料・出典", "Review notes": "ノート復習", "Finish homework": "宿題完了", "Read or practice": "読書・練習", "Prepare backpack": "持ち物準備"
});
Object.assign(terms.ko, {
  "Date": "날짜", "Time": "시간", "Subject": "과목", "Teacher": "교사", "Target grade": "목표 성적", "Exam date": "시험일", "Before school": "등교 전", "After school": "방과 후", "Evening": "저녁", "Review": "복습", "Period 1": "1교시", "Period 2": "2교시", "Period 3": "3교시", "Period 4": "4교시", "Period 5": "5교시", "Project goal": "프로젝트 목표", "Materials or sources": "자료 또는 출처", "Review notes": "노트 복습", "Finish homework": "숙제 완료", "Read or practice": "읽기 또는 연습", "Prepare backpack": "가방 준비"
});
Object.assign(terms.es, {
  "Date": "Fecha", "Time": "Hora", "Subject": "Materia", "Teacher": "Profesor", "Target grade": "Nota objetivo", "Exam date": "Fecha del examen", "Before school": "Antes de clases", "After school": "Después de clases", "Evening": "Noche", "Review": "Repaso", "Period 1": "Periodo 1", "Period 2": "Periodo 2", "Period 3": "Periodo 3", "Period 4": "Periodo 4", "Period 5": "Periodo 5", "Project goal": "Meta del proyecto", "Materials or sources": "Materiales o fuentes", "Review notes": "Repasar notas", "Finish homework": "Terminar tarea", "Read or practice": "Leer o practicar", "Prepare backpack": "Preparar mochila"
});
Object.assign(terms.fr, {
  "Date": "Date", "Time": "Heure", "Subject": "Matière", "Teacher": "Professeur", "Target grade": "Note visée", "Exam date": "Date d'examen", "Before school": "Avant les cours", "After school": "Après les cours", "Evening": "Soir", "Review": "Révision", "Period 1": "Période 1", "Period 2": "Période 2", "Period 3": "Période 3", "Period 4": "Période 4", "Period 5": "Période 5", "Project goal": "Objectif du projet", "Materials or sources": "Matériel ou sources", "Review notes": "Relire les notes", "Finish homework": "Finir les devoirs", "Read or practice": "Lire ou pratiquer", "Prepare backpack": "Préparer le sac"
});

Object.assign(terms["zh-cn"], {
  "Review class notes": "复习课堂笔记", "Read textbook chapters": "阅读教材章节", "Make a revision schedule": "制定复习计划", "Practice sample questions": "练习样题", "Review incorrect answers": "复盘错题", "Memorize key terms": "记忆重点词汇", "Prepare formulas or facts": "整理公式或知识点", "Pack exam supplies": "准备考试用品", "Sleep well before the exam": "考试前保证睡眠", "Arrive early": "提前到达考场"
});
Object.assign(terms["zh-tw"], {
  "Review class notes": "複習課堂筆記", "Read textbook chapters": "閱讀教材章節", "Make a revision schedule": "制定複習計畫", "Practice sample questions": "練習範例題", "Review incorrect answers": "複盤錯題", "Memorize key terms": "記憶重點詞彙", "Prepare formulas or facts": "整理公式或知識點", "Pack exam supplies": "準備考試用品", "Sleep well before the exam": "考試前睡眠充足", "Arrive early": "提前到達考場"
});
Object.assign(terms.ja, {
  "Review class notes": "授業ノートを復習", "Read textbook chapters": "教科書の章を読む", "Make a revision schedule": "復習計画を作る", "Practice sample questions": "例題を練習", "Review incorrect answers": "間違えた問題を見直す", "Memorize key terms": "重要語句を覚える", "Prepare formulas or facts": "公式や要点を整理", "Pack exam supplies": "試験用品を準備", "Sleep well before the exam": "試験前によく寝る", "Arrive early": "早めに到着"
});
Object.assign(terms.ko, {
  "Review class notes": "수업 노트 복습", "Read textbook chapters": "교과서 단원 읽기", "Make a revision schedule": "복습 계획 세우기", "Practice sample questions": "예상 문제 풀기", "Review incorrect answers": "오답 다시 보기", "Memorize key terms": "핵심 용어 암기", "Prepare formulas or facts": "공식과 핵심 내용 정리", "Pack exam supplies": "시험 준비물 챙기기", "Sleep well before the exam": "시험 전 충분히 자기", "Arrive early": "일찍 도착하기"
});
Object.assign(terms.es, {
  "Review class notes": "Repasar apuntes de clase", "Read textbook chapters": "Leer capítulos del libro", "Make a revision schedule": "Crear un horario de repaso", "Practice sample questions": "Practicar preguntas de ejemplo", "Review incorrect answers": "Revisar respuestas incorrectas", "Memorize key terms": "Memorizar términos clave", "Prepare formulas or facts": "Preparar fórmulas o datos", "Pack exam supplies": "Preparar materiales del examen", "Sleep well before the exam": "Dormir bien antes del examen", "Arrive early": "Llegar temprano"
});
Object.assign(terms.fr, {
  "Review class notes": "Relire les notes de cours", "Read textbook chapters": "Lire les chapitres du manuel", "Make a revision schedule": "Créer un planning de révision", "Practice sample questions": "S'entraîner avec des questions types", "Review incorrect answers": "Revoir les mauvaises réponses", "Memorize key terms": "Mémoriser les mots clés", "Prepare formulas or facts": "Préparer les formules ou faits", "Pack exam supplies": "Préparer le matériel d'examen", "Sleep well before the exam": "Bien dormir avant l'examen", "Arrive early": "Arriver en avance"
});

Object.assign(terms["zh-cn"], {
  "Saturday": "星期六", "Sunday": "星期天", "Period 6": "第 6 节", "Period 7": "第 7 节", "Period 8": "第 8 节", "Evening class": "晚课"
});
Object.assign(terms["zh-tw"], {
  "Saturday": "星期六", "Sunday": "星期日", "Period 6": "第 6 節", "Period 7": "第 7 節", "Period 8": "第 8 節", "Evening class": "晚課"
});
Object.assign(terms.ja, {
  "Saturday": "土曜", "Sunday": "日曜", "Period 6": "6時間目", "Period 7": "7時間目", "Period 8": "8時間目", "Evening class": "夜間授業"
});
Object.assign(terms.ko, {
  "Saturday": "토요일", "Sunday": "일요일", "Period 6": "6교시", "Period 7": "7교시", "Period 8": "8교시", "Evening class": "야간 수업"
});
Object.assign(terms.es, {
  "Saturday": "Sábado", "Sunday": "Domingo", "Period 6": "Periodo 6", "Period 7": "Periodo 7", "Period 8": "Periodo 8", "Evening class": "Clase nocturna"
});
Object.assign(terms.fr, {
  "Saturday": "Samedi", "Sunday": "Dimanche", "Period 6": "Période 6", "Period 7": "Période 7", "Period 8": "Période 8", "Evening class": "Cours du soir"
});

function tr(code, value) {
  return (terms[code] && terms[code][value]) || value;
}

function fieldRow(code, labels) {
  return `<div class="field-row">\n          ${labels.map((label) => `<div class="field">${esc(tr(code, label))}</div>`).join("\n          ")}\n        </div>`;
}

function table(code, headings, rows) {
  return `<table class="worksheet-table">
          <thead>
            <tr>${headings.map((heading) => `<th>${esc(tr(code, heading))}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.map((row) => `<tr>${headings.map((_, index) => `<td>${esc(tr(code, row[index] || ""))}</td>`).join("")}</tr>`).join("\n            ")}
          </tbody>
        </table>`;
}

function checklist(code, items, options = {}) {
  const className = options.boxes ? "checklist-columns checklist-with-boxes" : "checklist-columns";
  return `<ul class="${className}">\n          ${items.map((item) => options.boxes ? `<li><span>${esc(tr(code, item))}</span><span class="check-box" aria-hidden="true"></span></li>` : `<li>${esc(tr(code, item))}</li>`).join("\n          ")}\n        </ul>`;
}

function boxes(code, groups) {
  return `<div class="worksheet-grid">\n          ${groups.map(([title, items = []]) => `<div class="worksheet-box"><strong>${esc(tr(code, title))}</strong>${items.map((item) => `<br />${esc(tr(code, item))}`).join("")}</div>`).join("\n          ")}\n        </div>`;
}

function blankRows(count, cells) {
  return Array.from({ length: count }, () => Array.from({ length: cells }, () => ""));
}

function renderWorksheet(code, cfg, key, title) {
  const sheetTitle = `<h3>${esc(title)}</h3>\n        <p class="sheet-subtitle">${esc(cfg.sheetSubtitle)}</p>`;
  const common = {
    "weekly study planner": () => `${fieldRow(code, ["Week of:", "Name:", "Top goal:"])}\n        ${table(code, ["Day", "Classes", "Homework", "Study Block", "Done"], [["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"], ["Saturday"], ["Sunday"]])}`,
    "daily study planner": () => `${fieldRow(code, ["Date:", "Main goal:", "Study time:"])}\n        ${boxes(code, [["Top priorities"], ["Homework due"], ["Study schedule"], ["Notes and reminders"]])}`,
    "homework tracker": () => `${fieldRow(code, ["Name:", "Week of:", "Class:"])}\n        ${table(code, ["Subject", "Task", "Due Date", "Priority", "Done"], blankRows(6, 5))}`,
    "assignment tracker": () => `${fieldRow(code, ["Student:", "Term:", "Goal:"])}\n        ${table(code, ["Course", "Task", "Due Date", "Status", "Notes"], blankRows(6, 5))}`,
    "exam study checklist": () => `${fieldRow(code, ["Subject:", "Exam date:", "Target grade:"])}\n        ${checklist(code, ["Review class notes", "Read textbook chapters", "Make a revision schedule", "Practice sample questions", "Review incorrect answers", "Memorize key terms", "Prepare formulas or facts", "Pack exam supplies", "Sleep well before the exam", "Arrive early"], { boxes: true })}`,
    "study schedule": () => `${fieldRow(code, ["Week of:", "Subject:", "Exam date:"])}\n        ${table(code, ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], [["Before school"], ["After school"], ["Evening"], ["Review"]])}`,
    "class notes": () => `${fieldRow(code, ["Course:", "Date:", "Topic:"])}\n        ${boxes(code, [["Main notes"], ["Key terms"], ["Questions"], ["Follow-up tasks"]])}`,
    "school supplies checklist": () => `${fieldRow(code, ["Student:", "Grade:", "School year:"])}\n        ${checklist(code, ["Notebooks", "Pens", "Pencils", "Highlighters", "Folders", "Binders", "Backpack", "Calculator", "Sticky notes", "Index cards", "Laptop", "Tablet", "Chargers", "Headphones", "Planner"])}`,
    "college packing list": () => `${fieldRow(code, ["Student:", "Move-in date:", "Dorm:"])}\n        ${boxes(code, [["Bedding", ["Sheets", "Pillows", "Blanket", "Mattress pad"]], ["Study supplies", ["Laptop", "Chargers", "Notebooks", "Pens"]], ["Room essentials", ["Desk lamp", "Laundry basket", "Storage bins", "Fan"]], ["Personal items", ["Toiletries", "Towels", "Clothes", "Medicine"]]])}`,
    "grade tracker": () => `${fieldRow(code, ["Class:", "Term:", "Target grade:"])}\n        ${table(code, ["Date", "Task", "Score", "Possible", "Notes"], blankRows(6, 5))}`,
    "monthly study planner": () => `${fieldRow(code, ["Month:", "Main goal:", "Reward:"])}\n        ${boxes(code, [["Week 1 focus"], ["Week 2 focus"], ["Week 3 focus"], ["Week 4 focus"]])}\n        ${table(code, ["Date", "Course", "Task", "Notes"], blankRows(4, 4))}`,
    "class schedule": () => `${fieldRow(code, ["Student:", "Term:", "School:"])}\n        ${table(code, ["Time", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], [["Period 1"], ["Period 2"], ["Period 3"], ["Period 4"], ["Period 5"], ["Period 6"], ["Period 7"], ["Period 8"], ["Evening class"]])}`,
    "project planner": () => `${fieldRow(code, ["Project:", "Class:", "Due date:"])}\n        ${boxes(code, [["Project goal"], ["Materials or sources"]])}\n        ${table(code, ["Task", "Due Date", "Notes", "Done"], blankRows(5, 4))}`,
    "reading log": () => `${fieldRow(code, ["Student:", "Month:", "Reading goal:"])}\n        ${table(code, ["Date", "Book", "Pages", "Minutes", "Summary or Notes"], blankRows(6, 5))}`,
    "essay planner": () => `${fieldRow(code, ["Class:", "Due date:", "Essay type:"])}\n        ${boxes(code, [["Prompt"], ["Thesis statement"], ["Body paragraph 1"], ["Body paragraph 2"], ["Body paragraph 3"], ["Conclusion notes"]])}`,
    "study habit tracker": () => `${fieldRow(code, ["Week of:", "Main goal:", "Goal:"])}\n        ${table(code, ["Task", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], [["Review notes"], ["Finish homework"], ["Read or practice"], ["Prepare backpack"]])}`,
    "test prep planner": () => `${fieldRow(code, ["Subject:", "Exam date:", "Target grade:"])}\n        ${table(code, ["Topic", "Review Task", "Practice Needed", "Confidence", "Done"], blankRows(5, 5))}`,
    "semester planner": () => `${fieldRow(code, ["Semester:", "Main goal:", "Start date:"])}\n        ${table(code, ["Course", "Teacher", "Due Date", "Target grade", "Notes"], blankRows(5, 5))}`,
    "assignment calendar": () => `${fieldRow(code, ["Week of:", "Student:", "Top goal:"])}\n        ${table(code, ["Day", "Task", "Exam date", "Priority", "Done"], [["Monday"], ["Tuesday"], ["Wednesday"], ["Thursday"], ["Friday"], ["Saturday"], ["Sunday"]])}`,
  };
  return `${sheetTitle}\n        ${common[key]()}`;
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
  const firstTemplate = pages[0][0];
  const examTitle = cfg.titles["exam study checklist"];

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
    body {
      background:
        radial-gradient(circle at top left, rgba(255, 213, 128, 0.26), transparent 32%),
        radial-gradient(circle at 85% 18%, rgba(125, 211, 252, 0.24), transparent 30%),
        linear-gradient(135deg, #fffaf0 0%, #eef8ff 46%, #f7f0ff 100%);
    }
    header.locale-hero {
      min-height: 54vh;
      display: flex;
      align-items: center;
      padding: 64px 20px 52px;
      text-align: left;
      background:
        linear-gradient(rgba(20, 32, 52, 0.74), rgba(20, 32, 52, 0.64)),
        url("../assets/student-printables-hero.jpg");
      background-position: center;
      background-size: cover;
    }
    .hero-inner {
      width: min(1120px, 100%);
      margin: 0 auto;
    }
    .eyebrow {
      margin: 0 0 12px;
      color: #c8f7f4;
      font-size: 14px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    header.locale-hero h1 {
      max-width: 760px;
      margin: 0;
      font-size: clamp(38px, 7vw, 74px);
      line-height: 1;
    }
    header.locale-hero p {
      max-width: 720px;
      margin: 22px 0 28px;
      color: #eef5ff;
      font-size: 20px;
    }
    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .hero-button {
      min-height: 46px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 12px 18px;
      border-radius: 8px;
      color: #2457d6;
      background: #fff;
      font-weight: 800;
      text-decoration: none;
    }
    .hero-button.secondary {
      color: #fff;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.58);
    }
    main { width: min(1120px, 100%); }
    .intro-panel {
      display: grid;
      grid-template-columns: minmax(0, 1.25fr) minmax(260px, 0.75fr);
      gap: 28px;
      align-items: center;
      background: linear-gradient(135deg, #ffffff 0%, #fff7df 52%, #e8fbf8 100%);
      border-color: #c9e7ff;
    }
    .quick-links {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 18px;
    }
    .quick-links a {
      padding: 10px 12px;
      border: 1px solid #bfe3f8;
      border-radius: 8px;
      color: #2457d6;
      background: rgba(255, 255, 255, 0.82);
      font-weight: 800;
      text-decoration: none;
    }
    .library-head {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 20px;
      margin: 42px 0 18px;
    }
    .library-head h2 { margin: 0; }
    .library-head p {
      max-width: 460px;
      margin: 0;
      color: #5f6b7a;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(245px, 1fr));
      gap: 18px;
    }
    .grid .card {
      position: relative;
      overflow: hidden;
      border-top: 6px solid #34c6bd;
      border-color: #d4e8ff;
      background: linear-gradient(180deg, #ffffff 0%, #f9fdff 100%);
    }
    .grid .card:nth-child(4n + 2) {
      border-top-color: #ff8fab;
      background: linear-gradient(180deg, #ffffff 0%, #fff7fb 100%);
    }
    .grid .card:nth-child(4n + 3) {
      border-top-color: #f6c453;
      background: linear-gradient(180deg, #ffffff 0%, #fffaf0 100%);
    }
    .grid .card:nth-child(4n) {
      border-top-color: #9b8cff;
      background: linear-gradient(180deg, #ffffff 0%, #f7f4ff 100%);
    }
    .tag {
      display: inline-block;
      margin-bottom: 12px;
      padding: 5px 9px;
      border-radius: 6px;
      color: #0f8f8c;
      background: #e6f7f4;
      font-weight: 800;
      font-size: 13px;
    }
    .grid .card:nth-child(4n + 2) .tag {
      color: #c2415d;
      background: #fff0f5;
    }
    .grid .card:nth-child(4n + 3) .tag {
      color: #9a650f;
      background: #fff3dc;
    }
    .grid .card:nth-child(4n) .tag {
      color: #5b50c7;
      background: #f0edff;
    }
    .card a {
      color: #2457d6;
      font-weight: 800;
      text-decoration: none;
    }
    @media (max-width: 760px) {
      header.locale-hero { min-height: 62vh; padding-top: 48px; }
      .intro-panel,
      .library-head { display: block; }
      .library-head p { margin-top: 10px; }
    }
  </style>
</head>
<body>
  <header class="locale-hero">
    <div class="hero-inner">
      <p class="eyebrow">${esc(cfg.eyebrow)}</p>
      <h1>${esc(cfg.hero)}</h1>
      <p>${esc(cfg.heroText)}</p>
      <div class="hero-actions">
        <a class="hero-button" href="#library">${esc(cfg.browse)}</a>
        <a class="hero-button secondary" href="${firstTemplate}">${esc(cfg.titles["weekly study planner"])}</a>
      </div>
    </div>
  </header>
  ${languageSwitcher("index.html", code)}
  <main>
    <section class="card intro-panel">
      <div>
        <h2>${esc(cfg.intro)}</h2>
        <p>${esc(cfg.introText)}</p>
      </div>
      <div class="quick-links" aria-label="Featured templates">
        <a href="weekly-study-planner-printable.html">${esc(cfg.titles["weekly study planner"])}</a>
        <a href="homework-tracker-printable.html">${esc(cfg.titles["homework tracker"])}</a>
        <a href="exam-study-checklist.html">${esc(examTitle)}</a>
      </div>
    </section>
    <section id="library">
      <div class="library-head">
        <h2>${esc(cfg.library)}</h2>
        <p>${esc(cfg.homeDescription)}</p>
      </div>
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

function renderFaq(cfg) {
  return `<section class="card faq-section">
      <h2>${esc(cfg.faqTitle)}</h2>
      ${cfg.faqItems.map(([question, answer]) => `<h3>${esc(question)}</h3>\n      <p>${esc(answer)}</p>`).join("\n      ")}
    </section>`;
}

const seoLabels = {
  "zh-cn": {
    who: "这个模板适合谁使用",
    how: "学生如何使用这个模板",
    tips: "打印和重复使用建议",
    whoText: (title) => `${title} 适合想把学习任务、截止日期和课堂安排写在纸上的学生使用。它也适合家长、老师和辅导老师帮助学生建立更清晰的学习习惯。`,
    howText: (title) => `使用 ${title} 时，可以先填写姓名、日期和主要目标，再把作业、复习内容、阅读任务或考试准备写入对应区域。每天或每周检查一次，能帮助学生更容易看清下一步要做什么。`,
    tipsText: "建议使用 US Letter 或 A4 纸张打印，并在浏览器打印窗口选择适合页面。你可以把模板放进文件夹、学习 binder 或课堂资料夹中，需要新计划时重新打印一份。",
  },
  "zh-tw": {
    who: "這個模板適合誰使用",
    how: "學生如何使用這個模板",
    tips: "列印和重複使用建議",
    whoText: (title) => `${title} 適合想把學習任務、截止日期和課堂安排寫在紙上的學生使用。它也適合家長、老師和輔導老師協助學生建立更清楚的學習習慣。`,
    howText: (title) => `使用 ${title} 時，可以先填寫姓名、日期和主要目標，再把作業、複習內容、閱讀任務或考試準備寫入對應區域。每天或每週檢查一次，能幫助學生更容易看清下一步要做什麼。`,
    tipsText: "建議使用 US Letter 或 A4 紙張列印，並在瀏覽器列印視窗選擇符合頁面。你可以把模板放進資料夾、學習 binder 或課堂資料夾中，需要新計畫時重新列印一份。",
  },
  ja: {
    who: "このテンプレートが向いている人",
    how: "学生向けの使い方",
    tips: "印刷と再利用のコツ",
    whoText: (title) => `${title} は、学習タスク、締め切り、授業の予定を紙に書いて整理したい学生に向いています。保護者、先生、チューターが学生の学習習慣づくりを支える時にも使えます。`,
    howText: (title) => `${title} を使うときは、名前、日付、主な目標を書き、宿題、復習内容、読書、試験準備などを該当する欄に記入します。毎日または毎週見直すことで、次にやることが分かりやすくなります。`,
    tipsText: "US Letter または A4 用紙で印刷し、ブラウザの印刷画面でページに合わせる設定を選ぶのがおすすめです。ファイルや学習バインダーに入れておき、必要なときに新しく印刷できます。",
  },
  ko: {
    who: "이 템플릿이 적합한 사람",
    how: "학생이 사용하는 방법",
    tips: "인쇄와 재사용 팁",
    whoText: (title) => `${title}은 학습 과제, 마감일, 수업 일정을 종이에 적어 정리하고 싶은 학생에게 적합합니다. 학부모, 교사, 튜터가 학생의 공부 습관을 돕는 데도 사용할 수 있습니다.`,
    howText: (title) => `${title}을 사용할 때는 이름, 날짜, 주요 목표를 먼저 적고 숙제, 복습 내용, 독서 과제, 시험 준비 항목을 해당 칸에 기록하세요. 매일 또는 매주 확인하면 다음에 해야 할 일을 더 쉽게 파악할 수 있습니다.`,
    tipsText: "US Letter 또는 A4 용지로 인쇄하고 브라우저 인쇄 창에서 페이지에 맞춤을 선택하는 것이 좋습니다. 파일, 학습 바인더, 수업 폴더에 넣어 두고 새 계획이 필요할 때 다시 인쇄하세요.",
  },
  es: {
    who: "Para quién es esta plantilla",
    how: "Cómo pueden usarla los estudiantes",
    tips: "Consejos para imprimir y reutilizar",
    whoText: (title) => `${title} es útil para estudiantes que quieren organizar tareas, fechas límite y rutinas escolares en papel. También puede servir a familias, docentes y tutores que ayudan a crear mejores hábitos de estudio.`,
    howText: (title) => `Para usar ${title}, escribe primero el nombre, la fecha y el objetivo principal. Después añade tareas, repaso, lectura o preparación de exámenes en las secciones correspondientes. Revisarla cada día o cada semana ayuda a ver qué hacer después.`,
    tipsText: "Imprime en papel US Letter o A4 y elige ajustar a página en la ventana de impresión del navegador. Puedes guardar la plantilla en una carpeta o cuaderno de estudio y volver a imprimirla cuando necesites un plan nuevo.",
  },
  fr: {
    who: "À qui s'adresse ce modèle",
    how: "Comment les élèves peuvent l'utiliser",
    tips: "Conseils d'impression et de réutilisation",
    whoText: (title) => `${title} convient aux élèves qui veulent organiser leurs tâches, échéances et routines scolaires sur papier. Il peut aussi aider les parents, enseignants et tuteurs à soutenir de meilleures habitudes d'étude.`,
    howText: (title) => `Pour utiliser ${title}, commencez par écrire le nom, la date et l'objectif principal. Ajoutez ensuite les devoirs, révisions, lectures ou préparations d'examen dans les sections prévues. Une vérification quotidienne ou hebdomadaire aide à voir la prochaine étape.`,
    tipsText: "Imprimez sur papier US Letter ou A4 et choisissez l'ajustement à la page dans la fenêtre d'impression du navigateur. Vous pouvez garder le modèle dans un classeur ou dossier d'étude et le réimprimer lorsqu'un nouveau plan est nécessaire.",
  },
};

function renderSeoContent(code, title) {
  const labels = seoLabels[code];
  return `<section class="card seo-content">
      <h2>${esc(labels.who)}</h2>
      <p>${esc(labels.whoText(title))}</p>
    </section>
    <section class="card seo-content">
      <h2>${esc(labels.how)}</h2>
      <p>${esc(labels.howText(title))}</p>
    </section>
    <section class="card seo-content">
      <h2>${esc(labels.tips)}</h2>
      <p>${esc(labels.tipsText)}</p>
    </section>`;
}

function renderPage(code, cfg, file, key) {
  const title = cfg.titles[key];
  const related = pages.filter(([relatedFile]) => relatedFile !== file).slice(0, 3);
  const printableCss = key === "exam study checklist" ? "../printable-worksheets.css?v=checkboxes-1" : "../printable-worksheets.css";
  return `<!DOCTYPE html>
<html lang="${cfg.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(pageDescription(cfg, title))}" />
  ${altLinks(file, code)}
  <link rel="stylesheet" href="../template-page.css" />
  <link rel="stylesheet" href="${printableCss}" />
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
    ${renderSeoContent(code, title)}
    <section class="card download-box">
      <h2>${esc(cfg.download)}</h2>
      <p class="download-note">${esc(cfg.sheetSubtitle)}</p>
      <button class="print-button" type="button" onclick="window.print()">${esc(cfg.print)}</button>
      <div class="printable-sheet">
        ${renderWorksheet(code, cfg, key, title)}
      </div>
      <a class="button" href="index.html">${esc(cfg.back)}</a>
    </section>
    <section class="card">
      <h2>${esc(cfg.related)}</h2>
      <div class="related-links">
        ${related.map(([relatedFile, , relatedKey]) => `<a class="button" href="${relatedFile}">${esc(cfg.titles[relatedKey])}</a>`).join("\n        ")}
      </div>
    </section>
    ${renderFaq(cfg)}
  </main>
  <footer>${esc(cfg.footer)}</footer>
</body>
</html>
`;
}

const staticPages = ["about.html", "contact.html", "privacy-policy.html", "terms.html"];
const categoryPages = [
  "study-planners.html",
  "trackers.html",
  "checklists.html",
  "schedules.html",
  "college-printables.html",
  "reading-writing-printables.html",
];

const basicPages = {
  "zh-cn": {
    nav: ["首页", "关于", "联系", "隐私政策", "使用条款"],
    back: "返回首页",
    footer: "版权所有 2026 Free Printable Student Templates。保留所有权利。",
    pages: {
      "about.html": {
        title: "关于 Free Printable Student Templates",
        description: "了解 Free Printable Student Templates，一个提供学生计划表、跟踪表、清单和学习 worksheet 的免费打印资源网站。",
        subtitle: "为学生、家长和老师提供简单实用的打印模板。",
        sections: [
          ["我们的目的", ["Free Printable Student Templates 的创建目标，是让学习和学校事务整理变得更简单。网站提供清晰、实用的可打印页面，用于安排学习时间、跟踪作业、准备考试、记录笔记、管理任务和保持课堂准备。", "每个模板都适合直接打印、手写填写，并且不需要账号、应用或订阅。"]],
          ["适合谁使用", ["学生可以用它整理作业、考试和学习时间。", "家长可以用它帮助孩子建立更好的学习习惯。", "老师可以把它作为课堂、辅导或学生支持材料。", "大学生可以使用计划表、清单和学习 worksheet 来安排校园生活。"]],
          ["如何使用模板", ["从首页选择一个模板。", "点击打印或保存为 PDF 按钮。", "打印 worksheet，或在浏览器打印窗口中保存为 PDF。", "用于个人学习、学校计划或课堂支持。"]],
          ["联系", [`如果你有问题、修改建议或模板需求，可以发送邮件到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>。`]],
        ],
      },
      "contact.html": {
        title: "联系 Free Printable Student Templates",
        description: "联系 Free Printable Student Templates，反馈问题、纠错或提交新的学生打印模板需求。",
        subtitle: "欢迎提出问题、纠错、反馈和模板需求。",
        sections: [
          ["联系我们", [`如果你对模板有问题、发现错误，或想建议新的学生打印页，可以发送邮件到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>。`]],
          ["模板需求", ["发送模板需求时，建议说明你需要的模板类型、年级或使用场景，以及希望包含哪些区域。", "例如学习计划、作业跟踪、考试准备、课堂清单、阅读记录或大学生活整理。"]],
          ["回复说明", ["这是一个小型免费打印资源网站，所以回复可能不会非常及时。实用的纠错和模板建议都很欢迎。"]],
        ],
      },
      "privacy-policy.html": {
        title: "隐私政策",
        description: "了解 Free Printable Student Templates 如何处理联系邮件和基础网站信息。",
        subtitle: "关于隐私、联系邮件和基础网站信息的说明。",
        sections: [
          ["最后更新", ["2026 年 6 月 3 日", "Free Printable Student Templates 提供免费的学生计划表、跟踪表、清单和 worksheet。本政策说明你使用本网站时可能涉及的信息。"]],
          ["我们收集的信息", ["本网站不要求注册账号、登录、付款或提交表单即可使用模板。", `如果你发送邮件到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>，我们会收到你在邮件中主动提供的信息，例如邮箱地址、消息内容、反馈或模板需求。`, "与大多数网站一样，托管服务可能会处理基础技术信息，例如浏览器类型、设备信息、访问页面和用于网站交付及安全的流量数据。"]],
          ["信息用途", ["回复问题、纠错、反馈或模板需求。", "维护、改进和整理学生打印资源。", "保持网站正常和安全运行。"]],
          ["Cookie 和分析", ["本网站目前不使用账号，也不会通过 Cookie 主动收集个人信息。如果未来添加分析、广告或第三方工具，本政策应更新说明相关服务会收集什么。"]],
          ["儿童和学生", ["模板面向学生、家长和老师，但本网站并非为了收集儿童个人信息而设计。学生发送个人信息前，应先询问家长、监护人或老师。"]],
          ["第三方服务", ["本网站通过 GitHub Pages 发布。GitHub 可能会在托管和交付网站时处理技术信息。请查看 GitHub 的隐私信息以了解其做法。"]],
        ],
      },
      "terms.html": {
        title: "使用条款",
        description: "阅读 Free Printable Student Templates 的使用条款，了解免费学生打印模板的允许使用范围。",
        subtitle: "使用本网站免费学生计划表、跟踪表、清单和 worksheet 的规则。",
        sections: [
          ["最后更新", ["2026 年 6 月 3 日", "使用 Free Printable Student Templates 即表示你同意这些条款。如果你不同意，请不要使用本网站。"]],
          ["允许的使用", ["你可以为个人、教育、课堂、辅导、家庭教学和学生整理目的打印、保存和使用这些模板。", "学生可以用于学校计划和学习整理。", "家长可以打印模板帮助学生建立更好的习惯。", "老师和辅导老师可以用于课堂或学生支持。"]],
          ["不允许的使用", ["未经书面许可，不得出售模板或将其放入付费产品包。", "不得声称模板或网站内容是你自己的原创作品。", "不得复制、转载或托管这些模板，作为竞争性的模板集合。", "不得以破坏、过载或干扰网站正常运行的方式使用本网站。"]],
          ["准确性和可用性", ["这些模板是通用整理工具。我们会尽量保持页面实用和准确，但不保证每个模板适合所有学校、课程、评分系统、作业格式或打印设置。", "网站可能随时更新、修改或暂时不可用。"]],
          ["无担保", ["网站和模板按现状提供，不作任何形式的担保。你需要自行检查模板，并选择适合需求的打印设置。"]],
          ["条款变更", ["这些条款可能不时更新。更新后的版本会发布在本页面，并带有新的最后更新日期。"]],
          ["语言版本", ["如果不同语言版本之间存在差异，请以英文版本为准。"]],
        ],
      },
    },
  },
  "zh-tw": {
    nav: ["首頁", "關於", "聯絡", "隱私權政策", "使用條款"],
    back: "返回首頁",
    footer: "版權所有 2026 Free Printable Student Templates。保留所有權利。",
    pages: {
      "about.html": {
        title: "關於 Free Printable Student Templates",
        description: "了解 Free Printable Student Templates，一個提供學生計畫表、追蹤表、清單和學習 worksheet 的免費列印資源網站。",
        subtitle: "為學生、家長和老師提供簡單實用的列印模板。",
        sections: [
          ["我們的目的", ["Free Printable Student Templates 的建立目標，是讓學校事務與學習整理更簡單。網站提供清楚、實用的可列印頁面，用於安排讀書時間、追蹤作業、準備考試、記錄筆記、管理任務和保持課堂準備。", "每個模板都適合直接列印、手寫填寫，而且不需要帳號、應用程式或訂閱。"]],
          ["適合誰使用", ["學生可以用它整理作業、考試和讀書時間。", "家長可以用它幫助孩子建立更好的學習習慣。", "老師可以把它作為課堂、輔導或學生支援材料。", "大學生可以使用計畫表、清單和學習 worksheet 安排校園生活。"]],
          ["如何使用模板", ["從首頁選擇一個模板。", "點選列印或儲存為 PDF 按鈕。", "列印 worksheet，或在瀏覽器列印視窗中儲存為 PDF。", "用於個人學習、學校計畫或課堂支援。"]],
          ["聯絡", [`如果你有問題、修正建議或模板需求，可以寄信到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>。`]],
        ],
      },
      "contact.html": {
        title: "聯絡 Free Printable Student Templates",
        description: "聯絡 Free Printable Student Templates，回報問題、修正錯誤或提出新的學生列印模板需求。",
        subtitle: "歡迎提出問題、修正、回饋和模板需求。",
        sections: [
          ["與我們聯絡", [`如果你對模板有問題、發現錯誤，或想建議新的學生列印頁，可以寄信到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>。`]],
          ["模板需求", ["寄送模板需求時，建議說明你需要的模板類型、年級或使用情境，以及希望包含哪些區域。", "例如讀書計畫、作業追蹤、考試準備、課堂清單、閱讀紀錄或大學生活整理。"]],
          ["回覆說明", ["這是一個小型免費列印資源網站，所以回覆可能不會非常即時。實用的修正和模板建議都很歡迎。"]],
        ],
      },
      "privacy-policy.html": {
        title: "隱私權政策",
        description: "了解 Free Printable Student Templates 如何處理聯絡郵件和基礎網站資訊。",
        subtitle: "關於隱私、聯絡郵件和基礎網站資訊的說明。",
        sections: [
          ["最後更新", ["2026 年 6 月 3 日", "Free Printable Student Templates 提供免費的學生計畫表、追蹤表、清單和 worksheet。本政策說明你使用本網站時可能涉及的資訊。"]],
          ["我們收集的資訊", ["本網站不要求註冊帳號、登入、付款或提交表單即可使用模板。", `如果你寄信到 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>，我們會收到你在郵件中主動提供的資訊，例如電子郵件地址、訊息內容、回饋或模板需求。`, "與大多數網站一樣，託管服務可能會處理基礎技術資訊，例如瀏覽器類型、裝置資訊、存取頁面和用於網站交付及安全的流量資料。"]],
          ["資訊用途", ["回覆問題、修正、回饋或模板需求。", "維護、改進和整理學生列印資源。", "保持網站正常和安全運作。"]],
          ["Cookie 和分析", ["本網站目前不使用帳號，也不會透過 Cookie 主動收集個人資訊。如果未來加入分析、廣告或第三方工具，本政策應更新說明相關服務會收集什麼。"]],
          ["兒童和學生", ["模板面向學生、家長和老師，但本網站並非為收集兒童個人資訊而設計。學生寄送個人資訊前，應先詢問家長、監護人或老師。"]],
          ["第三方服務", ["本網站透過 GitHub Pages 發布。GitHub 可能會在託管和交付網站時處理技術資訊。請查看 GitHub 的隱私資訊以了解其做法。"]],
        ],
      },
      "terms.html": {
        title: "使用條款",
        description: "閱讀 Free Printable Student Templates 的使用條款，了解免費學生列印模板的允許使用範圍。",
        subtitle: "使用本網站免費學生計畫表、追蹤表、清單和 worksheet 的規則。",
        sections: [
          ["最後更新", ["2026 年 6 月 3 日", "使用 Free Printable Student Templates 即表示你同意這些條款。如果你不同意，請不要使用本網站。"]],
          ["允許的使用", ["你可以為個人、教育、課堂、輔導、家庭教學和學生整理目的列印、儲存和使用這些模板。", "學生可以用於學校計畫和學習整理。", "家長可以列印模板幫助學生建立更好的習慣。", "老師和輔導老師可以用於課堂或學生支援。"]],
          ["不允許的使用", ["未經書面許可，不得出售模板或將其放入付費產品包。", "不得聲稱模板或網站內容是你自己的原創作品。", "不得複製、轉載或託管這些模板，作為競爭性的模板集合。", "不得以破壞、超載或干擾網站正常運作的方式使用本網站。"]],
          ["準確性和可用性", ["這些模板是通用整理工具。我們會盡量保持頁面實用和準確，但不保證每個模板適合所有學校、課程、評分系統、作業格式或列印設定。", "網站可能隨時更新、修改或暫時不可用。"]],
          ["無擔保", ["網站和模板按現狀提供，不作任何形式的擔保。你需要自行檢查模板，並選擇適合需求的列印設定。"]],
          ["條款變更", ["這些條款可能不時更新。更新後的版本會發布在本頁面，並帶有新的最後更新日期。"]],
          ["語言版本", ["如果不同語言版本之間存在差異，請以英文版本為準。"]],
        ],
      },
    },
  },
};

basicPages.ja = {
  nav: ["ホーム", "概要", "お問い合わせ", "プライバシー", "利用規約"],
  back: "ホームへ戻る",
  footer: "Copyright 2026 Free Printable Student Templates. All rights reserved.",
  pages: {
    "about.html": {
      title: "Free Printable Student Templates について",
      description: "学生向けの印刷できる学習計画表、管理表、チェックリスト、学習ワークシートについて紹介します。",
      subtitle: "学生、保護者、先生のためのシンプルで実用的な印刷テンプレートです。",
      sections: [
        ["目的", ["Free Printable Student Templates は、学校生活と学習の整理を簡単にするために作られました。学習時間、宿題、試験準備、ノート、課題管理、授業準備に使える印刷ページを提供しています。", "各テンプレートは、アカウント、アプリ、サブスクリプションなしで印刷して手書きで使えるように作られています。"]],
        ["対象者", ["学習や宿題を整理したい学生。", "子どもの学習習慣づくりを支えたい保護者。", "授業や個別指導で使える印刷資料がほしい先生。", "計画表やチェックリストで学生生活を整えたい大学生。"]],
        ["使い方", ["ホームページからテンプレートを選びます。", "印刷または PDF 保存ボタンを押します。", "印刷するか、ブラウザの印刷画面で PDF として保存します。", "個人学習、学校の計画、授業サポートに使います。"]],
        ["お問い合わせ", [`質問、修正依頼、テンプレートの希望は <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> までご連絡ください。`]],
      ],
    },
    "contact.html": {
      title: "お問い合わせ",
      description: "質問、修正、フィードバック、学生向け印刷テンプレートのリクエストはこちらから。",
      subtitle: "質問、修正、フィードバック、テンプレートのリクエストを歓迎します。",
      sections: [
        ["連絡先", [`テンプレートに関する質問、誤りの報告、新しい印刷ページの提案は <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> までメールしてください。`]],
        ["テンプレートのリクエスト", ["必要なテンプレートの種類、学年や利用場面、入れてほしい項目を書いていただくと助かります。", "例：学習計画、宿題管理、試験準備、授業用チェックリスト、読書記録、大学生活の整理など。"]],
        ["返信について", ["小さな無料印刷リソースサイトのため、返信に時間がかかる場合があります。実用的な修正や提案は歓迎します。"]],
      ],
    },
    "privacy-policy.html": {
      title: "プライバシーポリシー",
      description: "連絡メールと基本的なサイト情報の扱いについて説明します。",
      subtitle: "プライバシー、連絡メール、基本的なサイト情報について。",
      sections: [
        ["最終更新日", ["2026年6月3日", "Free Printable Student Templates は、学生向けの無料印刷テンプレートを提供しています。このポリシーは、サイト利用時に関係する可能性がある情報について説明します。"]],
        ["収集する情報", ["このサイトは、テンプレートを使うためにアカウント、ログイン、支払い、フォーム送信を必要としません。", `<a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> にメールを送る場合、メールアドレス、メッセージ、フィードバック、リクエストなど、あなたが送信した情報を受け取ります。`, "多くのウェブサイトと同様に、ホスティングサービスはブラウザ種類、端末情報、アクセスページ、サイト配信と安全性のための基本的な技術情報を処理する場合があります。"]],
        ["情報の利用目的", ["質問、修正、フィードバック、テンプレートリクエストへの返信。", "学生向け印刷リソースの維持と改善。", "サイトを正常かつ安全に運営するため。"]],
        ["Cookie と分析", ["このサイトは現在、アカウントを使用せず、Cookie による個人情報の意図的な収集も行っていません。将来、分析、広告、第三者ツールを追加する場合は、このポリシーを更新します。"]],
        ["子どもと学生", ["テンプレートは学生、保護者、先生向けですが、このサイトは子どもの個人情報を収集する目的ではありません。学生は個人情報をメールで送る前に、保護者または先生に確認してください。"]],
        ["第三者サービス", ["このサイトは GitHub Pages で公開されています。GitHub はホスティングと配信のために技術情報を処理する場合があります。"]],
      ],
    },
    "terms.html": {
      title: "利用規約",
      description: "無料の学生向け印刷テンプレートの利用条件について説明します。",
      subtitle: "このサイトの無料テンプレートを利用するためのルールです。",
      sections: [
        ["最終更新日", ["2026年6月3日", "Free Printable Student Templates を利用することで、この規約に同意したものとみなされます。同意しない場合はサイトを利用しないでください。"]],
        ["許可される利用", ["個人、教育、授業、個別指導、家庭学習、学生の整理目的でテンプレートを印刷、保存、使用できます。", "学生は学校の計画と学習整理に使えます。", "保護者は学習習慣づくりのために印刷できます。", "先生やチューターは授業や学生サポートに使えます。"]],
        ["許可されない利用", ["書面による許可なく、テンプレートを販売したり有料商品に含めたりすることはできません。", "テンプレートやサイト内容を自分のオリジナル作品として主張することはできません。", "競合するテンプレート集としてコピー、再投稿、ホストすることはできません。", "サイトの通常運営を妨害する使い方はできません。"]],
        ["正確性と利用可能性", ["テンプレートは一般的な整理ツールです。すべての学校、授業、評価方法、課題形式、印刷設定に合うことは保証しません。", "サイトはいつでも更新、変更、一時停止される場合があります。"]],
        ["保証なし", ["サイトとテンプレートは現状のまま提供されます。利用者はテンプレートを確認し、自分に合う印刷設定を選んでください。"]],
        ["規約の変更", ["この規約は随時更新される場合があります。更新版はこのページに掲載されます。"]],
        ["言語版", ["異なる言語版に差異がある場合は、英語版を優先します。"]],
      ],
    },
  },
};

basicPages.ko = {
  nav: ["홈", "소개", "문의", "개인정보", "이용약관"],
  back: "홈으로 돌아가기",
  footer: "Copyright 2026 Free Printable Student Templates. All rights reserved.",
  pages: {
    "about.html": {
      title: "Free Printable Student Templates 소개",
      description: "학생용 인쇄 학습 계획표, 추적표, 체크리스트와 학습 워크시트에 대해 알아보세요.",
      subtitle: "학생, 학부모, 교사를 위한 간단하고 실용적인 인쇄 템플릿입니다.",
      sections: [
        ["목적", ["Free Printable Student Templates는 학교생활과 공부 정리를 더 쉽게 만들기 위해 만들어졌습니다. 학습 시간 계획, 숙제 관리, 시험 준비, 노트 작성, 과제 관리, 수업 준비에 사용할 수 있는 인쇄용 페이지를 제공합니다.", "모든 템플릿은 계정, 앱, 구독 없이 바로 인쇄하고 손으로 작성할 수 있도록 설계되었습니다."]],
        ["대상", ["학교 공부와 숙제를 정리하고 싶은 학생.", "자녀의 학습 습관을 도와주고 싶은 학부모.", "수업이나 학생 지원에 사용할 빠른 인쇄 자료가 필요한 교사.", "계획표와 체크리스트로 대학 생활을 정리하고 싶은 대학생."]],
        ["사용 방법", ["홈페이지에서 템플릿을 선택합니다.", "인쇄 또는 PDF 저장 버튼을 누릅니다.", "워크시트를 인쇄하거나 브라우저 인쇄 창에서 PDF로 저장합니다.", "개인 공부, 학교 계획, 수업 지원에 사용합니다."]],
        ["문의", [`질문, 수정 요청, 템플릿 제안은 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> 으로 보내 주세요.`]],
      ],
    },
    "contact.html": {
      title: "문의하기",
      description: "질문, 수정, 피드백 또는 학생용 인쇄 템플릿 요청을 보내 주세요.",
      subtitle: "질문, 수정, 피드백, 템플릿 요청을 환영합니다.",
      sections: [
        ["연락처", [`템플릿에 대한 질문, 오류 제보, 새 인쇄 페이지 제안은 <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> 으로 이메일을 보내 주세요.`]],
        ["템플릿 요청", ["필요한 템플릿 종류, 학년 또는 사용 상황, 포함되면 좋은 항목을 적어 주시면 도움이 됩니다.", "예: 학습 계획표, 숙제 추적표, 시험 준비 자료, 수업 체크리스트, 독서 기록, 대학 생활 정리 등."]],
        ["답변 안내", ["작은 무료 인쇄 자료 사이트이므로 답변이 즉시 오지 않을 수 있습니다. 실용적인 수정과 제안은 언제든 환영합니다."]],
      ],
    },
    "privacy-policy.html": {
      title: "개인정보 처리방침",
      description: "연락 이메일과 기본 사이트 정보가 어떻게 처리되는지 안내합니다.",
      subtitle: "개인정보, 연락 이메일, 기본 사이트 정보에 대한 안내입니다.",
      sections: [
        ["마지막 업데이트", ["2026년 6월 3일", "Free Printable Student Templates는 무료 학생용 인쇄 템플릿을 제공합니다. 이 방침은 사이트 이용 시 관련될 수 있는 정보를 설명합니다."]],
        ["수집하는 정보", ["이 사이트는 템플릿 사용을 위해 계정, 로그인, 결제, 양식 제출을 요구하지 않습니다.", `<a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a> 으로 이메일을 보내면 이메일 주소, 메시지, 피드백, 요청 등 사용자가 직접 보낸 정보를 받게 됩니다.`, "대부분의 웹사이트와 마찬가지로 호스팅 제공자는 브라우저 종류, 기기 정보, 요청 페이지, 사이트 제공과 보안을 위한 기본 기술 정보를 처리할 수 있습니다."]],
        ["정보 사용 목적", ["질문, 수정, 피드백, 템플릿 요청에 답변하기 위해.", "학생용 인쇄 자료를 유지하고 개선하기 위해.", "사이트를 정상적이고 안전하게 운영하기 위해."]],
        ["쿠키와 분석", ["현재 이 사이트는 계정을 사용하지 않으며 쿠키로 개인 정보를 의도적으로 수집하지 않습니다. 향후 분석, 광고, 제3자 도구가 추가되면 이 방침을 업데이트해야 합니다."]],
        ["어린이와 학생", ["템플릿은 학생, 학부모, 교사를 위한 것이지만 이 사이트는 어린이의 개인정보를 수집하기 위해 설계되지 않았습니다. 학생은 개인정보를 이메일로 보내기 전에 보호자나 교사에게 확인해야 합니다."]],
        ["제3자 서비스", ["이 사이트는 GitHub Pages를 통해 게시됩니다. GitHub는 사이트 호스팅과 제공을 위해 기술 정보를 처리할 수 있습니다."]],
      ],
    },
    "terms.html": {
      title: "이용약관",
      description: "무료 학생용 인쇄 템플릿 사용 조건을 확인하세요.",
      subtitle: "이 사이트의 무료 계획표, 추적표, 체크리스트, 워크시트를 사용하는 규칙입니다.",
      sections: [
        ["마지막 업데이트", ["2026년 6월 3일", "Free Printable Student Templates를 사용하면 이 약관에 동의하는 것입니다. 동의하지 않는 경우 사이트를 사용하지 마세요."]],
        ["허용되는 사용", ["개인, 교육, 수업, 과외, 홈스쿨, 학생 정리 목적으로 템플릿을 인쇄, 저장, 사용할 수 있습니다.", "학생은 학교 계획과 공부 정리에 사용할 수 있습니다.", "학부모는 학생의 습관 형성을 돕기 위해 인쇄할 수 있습니다.", "교사와 튜터는 수업 또는 학생 지원에 사용할 수 있습니다."]],
        ["허용되지 않는 사용", ["서면 허가 없이 템플릿을 판매하거나 유료 상품 묶음에 포함할 수 없습니다.", "템플릿이나 사이트 내용을 자신의 원작으로 주장할 수 없습니다.", "경쟁 템플릿 모음으로 복사, 재게시, 호스팅할 수 없습니다.", "사이트의 정상 운영을 방해하는 방식으로 사용할 수 없습니다."]],
        ["정확성과 이용 가능성", ["템플릿은 일반적인 정리 도구입니다. 모든 학교, 수업, 평가 방식, 과제 형식, 인쇄 설정에 맞는다고 보장하지 않습니다.", "사이트는 언제든 업데이트, 변경 또는 일시적으로 중단될 수 있습니다."]],
        ["보증 없음", ["사이트와 템플릿은 있는 그대로 제공됩니다. 사용자는 템플릿을 검토하고 필요한 인쇄 설정을 선택해야 합니다."]],
        ["약관 변경", ["이 약관은 때때로 업데이트될 수 있으며, 업데이트된 버전은 이 페이지에 게시됩니다."]],
        ["언어 버전", ["언어 버전 간 차이가 있는 경우 영어 버전이 우선합니다."]],
      ],
    },
  },
};

basicPages.es = {
  nav: ["Inicio", "Acerca de", "Contacto", "Privacidad", "Términos"],
  back: "Volver al inicio",
  footer: "Copyright 2026 Free Printable Student Templates. All rights reserved.",
  pages: {
    "about.html": {
      title: "Acerca de Free Printable Student Templates",
      description: "Conoce Free Printable Student Templates, una colección de planificadores, rastreadores, listas y hojas de estudio imprimibles para estudiantes.",
      subtitle: "Plantillas imprimibles simples y prácticas para estudiantes, familias y docentes.",
      sections: [
        ["Nuestro propósito", ["Free Printable Student Templates fue creado para facilitar la organización escolar. El sitio ofrece páginas imprimibles claras y prácticas para planificar el estudio, seguir tareas, preparar exámenes, tomar notas, gestionar trabajos y llegar listo a clase.", "Cada plantilla está diseñada para imprimirse fácilmente, completarse a mano y usarse sin cuenta, aplicación ni suscripción."]],
        ["Para quién es", ["Estudiantes que quieren organizar trabajos escolares y tiempo de estudio.", "Familias que ayudan a crear mejores hábitos de tarea y planificación.", "Docentes que necesitan recursos imprimibles rápidos para clase o apoyo estudiantil.", "Estudiantes universitarios que buscan planificadores, listas y hojas de estudio."]],
        ["Cómo usar las plantillas", ["Elige una plantilla desde la página principal.", "Haz clic en imprimir o guardar como PDF.", "Imprime la hoja o guárdala como PDF desde el navegador.", "Úsala para estudio personal, planificación escolar o apoyo en clase."]],
        ["Contacto", [`Si tienes una pregunta, corrección o solicitud de plantilla, escribe a <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>.`]],
      ],
    },
    "contact.html": {
      title: "Contacto",
      description: "Contacta con Free Printable Student Templates para preguntas, correcciones, comentarios o solicitudes de plantillas.",
      subtitle: "Preguntas, correcciones, comentarios y solicitudes de plantillas son bienvenidos.",
      sections: [
        ["Ponte en contacto", [`Si tienes una pregunta sobre una plantilla, ves un error o quieres sugerir una nueva página imprimible, escribe a <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>.`]],
        ["Solicitudes de plantillas", ["Al enviar una solicitud, ayuda incluir el tipo de imprimible, el nivel o caso de uso y las secciones que quieres incluir.", "Por ejemplo: planificadores de estudio, seguimiento de tareas, preparación de exámenes, listas de clase, registro de lectura u organización universitaria."]],
        ["Nota de respuesta", ["Este es un sitio pequeño de recursos imprimibles gratuitos, por lo que las respuestas pueden no ser inmediatas. Las correcciones útiles y las ideas prácticas son bienvenidas."]],
      ],
    },
    "privacy-policy.html": {
      title: "Política de privacidad",
      description: "Lee cómo Free Printable Student Templates maneja correos de contacto e información básica del sitio.",
      subtitle: "Cómo se maneja la privacidad, los correos de contacto y la información básica del sitio.",
      sections: [
        ["Última actualización", ["3 de junio de 2026", "Free Printable Student Templates ofrece planificadores, rastreadores, listas y hojas imprimibles gratuitas para estudiantes. Esta política explica qué información puede estar relacionada con el uso del sitio."]],
        ["Información que recopilamos", ["Este sitio no requiere cuentas, inicios de sesión, pagos ni formularios para usar las plantillas.", `Si nos escribes a <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>, recibimos la información que decides incluir, como tu correo, mensaje, comentarios o solicitud de plantilla.`, "Como la mayoría de los sitios, el proveedor de alojamiento puede procesar información técnica básica, como navegador, dispositivo, páginas solicitadas y datos necesarios para entregar y proteger el sitio."]],
        ["Cómo se usa la información", ["Para responder preguntas, correcciones, comentarios o solicitudes.", "Para mantener, mejorar y organizar recursos imprimibles para estudiantes.", "Para mantener el sitio funcionando de forma segura."]],
        ["Cookies y analíticas", ["Actualmente este sitio no usa cuentas ni recopila intencionalmente información personal mediante cookies. Si en el futuro se agregan analíticas, anuncios o herramientas de terceros, esta política debe actualizarse."]],
        ["Niños y estudiantes", ["Las plantillas son para estudiantes, familias y docentes, pero el sitio no está diseñado para recopilar información personal de niños. Los estudiantes deben preguntar a un padre, tutor o docente antes de enviar información personal por correo."]],
        ["Servicios de terceros", ["Este sitio se publica con GitHub Pages. GitHub puede procesar información técnica como parte del alojamiento y entrega del sitio."]],
      ],
    },
    "terms.html": {
      title: "Términos de uso",
      description: "Lee los términos de uso de las plantillas imprimibles gratuitas para estudiantes.",
      subtitle: "Reglas para usar los planificadores, rastreadores, listas y hojas imprimibles gratuitas de este sitio.",
      sections: [
        ["Última actualización", ["3 de junio de 2026", "Al usar Free Printable Student Templates, aceptas estos términos. Si no estás de acuerdo, no uses el sitio."]],
        ["Uso permitido", ["Puedes imprimir, guardar y usar las plantillas para fines personales, educativos, de clase, tutoría, educación en casa y organización estudiantil.", "Los estudiantes pueden usarlas para planificación escolar y organización del estudio.", "Las familias pueden imprimirlas para ayudar a crear mejores rutinas.", "Docentes y tutores pueden usarlas para clase o apoyo estudiantil."]],
        ["No permitido", ["Sin permiso escrito, no puedes vender las plantillas ni incluirlas en un producto pagado.", "No puedes reclamar las plantillas o el contenido como obra original propia.", "No puedes copiar, republicar u hospedar las plantillas como una colección competidora.", "No puedes usar el sitio de forma que dañe o interfiera con su funcionamiento."]],
        ["Exactitud y disponibilidad", ["Las plantillas son herramientas generales de organización. No garantizamos que cada plantilla se ajuste a toda escuela, clase, sistema de calificación, formato de tarea o configuración de impresión.", "El sitio puede actualizarse, cambiar o estar temporalmente no disponible."]],
        ["Sin garantía", ["El sitio y las plantillas se proporcionan tal como están. Tú eres responsable de revisar cada plantilla y elegir la configuración de impresión adecuada."]],
        ["Cambios en los términos", ["Estos términos pueden actualizarse ocasionalmente. La versión actualizada se publicará en esta página."]],
        ["Versiones de idioma", ["Si hay diferencias entre versiones de idioma, prevalece la versión en inglés."]],
      ],
    },
  },
};

basicPages.fr = {
  nav: ["Accueil", "À propos", "Contact", "Confidentialité", "Conditions"],
  back: "Retour à l'accueil",
  footer: "Copyright 2026 Free Printable Student Templates. All rights reserved.",
  pages: {
    "about.html": {
      title: "À propos de Free Printable Student Templates",
      description: "Découvrez Free Printable Student Templates, une collection de plannings, suivis, listes et fiches d'étude imprimables pour les élèves.",
      subtitle: "Des modèles imprimables simples et pratiques pour les élèves, parents et enseignants.",
      sections: [
        ["Notre objectif", ["Free Printable Student Templates a été créé pour simplifier l'organisation scolaire. Le site propose des pages imprimables claires et pratiques pour planifier le temps d'étude, suivre les devoirs, préparer les examens, prendre des notes, gérer les travaux et rester prêt pour la classe.", "Chaque modèle est conçu pour être facile à imprimer, simple à remplir à la main et utile sans compte, application ou abonnement."]],
        ["Pour qui", ["Les élèves qui veulent organiser leurs devoirs et leur temps d'étude.", "Les parents qui aident leurs enfants à créer de meilleures habitudes.", "Les enseignants qui veulent des ressources imprimables rapides pour la classe ou le soutien.", "Les étudiants qui cherchent des plannings, listes et fiches d'étude."]],
        ["Comment utiliser les modèles", ["Choisissez un modèle depuis la page d'accueil.", "Cliquez sur imprimer ou enregistrer en PDF.", "Imprimez la fiche ou enregistrez-la en PDF depuis le navigateur.", "Utilisez-la pour l'étude personnelle, l'organisation scolaire ou le soutien en classe."]],
        ["Contact", [`Pour une question, correction ou demande de modèle, écrivez à <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>.`]],
      ],
    },
    "contact.html": {
      title: "Contact",
      description: "Contactez Free Printable Student Templates pour des questions, corrections, commentaires ou demandes de modèles.",
      subtitle: "Questions, corrections, commentaires et demandes de modèles sont les bienvenus.",
      sections: [
        ["Nous contacter", [`Si vous avez une question sur un modèle, remarquez une erreur ou souhaitez proposer une nouvelle fiche imprimable, écrivez à <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>.`]],
        ["Demandes de modèles", ["Lors d'une demande, indiquez le type de fiche souhaité, le niveau ou l'usage, ainsi que les sections à inclure.", "Par exemple : plannings d'étude, suivi des devoirs, préparation aux examens, listes de classe, journal de lecture ou organisation universitaire."]],
        ["Note de réponse", ["Ce site est une petite ressource gratuite, les réponses peuvent donc ne pas être immédiates. Les corrections utiles et les idées pratiques sont appréciées."]],
      ],
    },
    "privacy-policy.html": {
      title: "Politique de confidentialité",
      description: "Découvrez comment Free Printable Student Templates traite les e-mails de contact et les informations de base du site.",
      subtitle: "Gestion de la confidentialité, des e-mails de contact et des informations de base du site.",
      sections: [
        ["Dernière mise à jour", ["3 juin 2026", "Free Printable Student Templates propose des plannings, suivis, listes et fiches imprimables gratuits pour les élèves. Cette politique explique quelles informations peuvent être concernées lorsque vous utilisez le site."]],
        ["Informations collectées", ["Ce site ne nécessite pas de compte, connexion, paiement ou formulaire pour utiliser les modèles.", `Si vous écrivez à <a href="mailto:dio0921fast@gmail.com">dio0921fast@gmail.com</a>, nous recevons les informations que vous choisissez d'inclure, comme votre adresse e-mail, message, commentaire ou demande.`, "Comme la plupart des sites, l'hébergeur peut traiter des informations techniques de base, comme le navigateur, l'appareil, les pages demandées et les données nécessaires à la livraison et à la protection du site."]],
        ["Utilisation des informations", ["Répondre aux questions, corrections, commentaires ou demandes.", "Maintenir, améliorer et organiser les ressources imprimables pour élèves.", "Assurer le bon fonctionnement et la sécurité du site."]],
        ["Cookies et analyses", ["Ce site n'utilise actuellement pas de comptes et ne collecte pas volontairement d'informations personnelles via des cookies. Si des outils d'analyse, publicitaires ou tiers sont ajoutés plus tard, cette politique devra être mise à jour."]],
        ["Enfants et élèves", ["Les modèles sont destinés aux élèves, parents et enseignants, mais le site n'est pas conçu pour collecter des informations personnelles d'enfants. Les élèves doivent demander à un parent, tuteur ou enseignant avant d'envoyer des informations personnelles par e-mail."]],
        ["Services tiers", ["Ce site est publié avec GitHub Pages. GitHub peut traiter des informations techniques dans le cadre de l'hébergement et de la livraison du site."]],
      ],
    },
    "terms.html": {
      title: "Conditions d'utilisation",
      description: "Lisez les conditions d'utilisation des modèles imprimables gratuits pour élèves.",
      subtitle: "Règles d'utilisation des plannings, suivis, listes et fiches imprimables gratuits de ce site.",
      sections: [
        ["Dernière mise à jour", ["3 juin 2026", "En utilisant Free Printable Student Templates, vous acceptez ces conditions. Si vous n'êtes pas d'accord, veuillez ne pas utiliser le site."]],
        ["Utilisation autorisée", ["Vous pouvez imprimer, enregistrer et utiliser les modèles à des fins personnelles, éducatives, scolaires, de tutorat, d'enseignement à domicile et d'organisation étudiante.", "Les élèves peuvent les utiliser pour organiser leurs études.", "Les parents peuvent les imprimer pour aider à créer de meilleures routines.", "Les enseignants et tuteurs peuvent les utiliser pour la classe ou le soutien."]],
        ["Utilisation non autorisée", ["Sans permission écrite, vous ne pouvez pas vendre les modèles ni les inclure dans un produit payant.", "Vous ne pouvez pas revendiquer les modèles ou le contenu comme votre propre création.", "Vous ne pouvez pas copier, republier ou héberger les modèles comme collection concurrente.", "Vous ne pouvez pas utiliser le site d'une manière qui nuit à son fonctionnement normal."]],
        ["Exactitude et disponibilité", ["Les modèles sont des outils généraux d'organisation. Nous ne garantissons pas qu'ils conviennent à chaque école, cours, système de notation, format de devoir ou configuration d'impression.", "Le site peut être mis à jour, modifié ou temporairement indisponible."]],
        ["Aucune garantie", ["Le site et les modèles sont fournis tels quels. Vous êtes responsable de vérifier chaque modèle et de choisir les paramètres d'impression adaptés."]],
        ["Modifications des conditions", ["Ces conditions peuvent être mises à jour de temps à autre. La version mise à jour sera publiée sur cette page."]],
        ["Versions linguistiques", ["En cas de différence entre les versions linguistiques, la version anglaise prévaut."]],
      ],
    },
  },
};

function renderBasicSections(sections) {
  return sections.map(([heading, paragraphs]) => `<section class="card">
      <h2>${esc(heading)}</h2>
      ${paragraphs.map((text) => `<p>${text}</p>`).join("\n      ")}
    </section>`).join("\n\n    ");
}

function localizedSiteNav(text) {
  const [home, about, contact, privacy, termsLabel] = text.nav;
  return `<nav class="site-nav" aria-label="Site navigation">
    <a href="index.html">${esc(home)}</a>
    <a href="about.html">${esc(about)}</a>
    <a href="contact.html">${esc(contact)}</a>
    <a href="privacy-policy.html">${esc(privacy)}</a>
    <a href="terms.html">${esc(termsLabel)}</a>
  </nav>`;
}

function renderBasicPage(code, cfg, file) {
  const text = basicPages[code];
  const page = text.pages[file];
  return `<!DOCTYPE html>
<html lang="${cfg.htmlLang}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  ${altLinks(file, code)}
  <link rel="stylesheet" href="../template-page.css" />
</head>
<body>
  <header>
    <h1>${esc(page.title)}</h1>
    <p>${esc(page.subtitle)}</p>
  </header>

  ${localizedSiteNav(text)}
  ${languageSwitcher(file, code)}

  <main>
    ${renderBasicSections(page.sections)}

    <section class="card">
      <a class="button" href="index.html">${esc(text.back)}</a>
    </section>
  </main>

  <footer>${esc(text.footer)}</footer>
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
  for (const file of staticPages) {
    fs.writeFileSync(path.join(dir, file), renderBasicPage(code, cfg, file));
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

const sitemapUrls = ["index.html", ...staticPages, ...categoryPages, ...pages.map(([file]) => file)]
  .map((file) => `${siteUrl}/${file}`)
  .concat(
    Object.keys(locales).flatMap((code) =>
      ["index.html", ...staticPages, ...pages.map(([file]) => file)].map((file) => `${siteUrl}/${localePath(code, file)}`)
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

console.log(`Generated ${Object.keys(locales).length} locale directories with ${pages.length + staticPages.length + 1} pages each.`);
