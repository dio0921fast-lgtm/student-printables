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

const staticPages = ["about.html", "contact.html", "privacy-policy.html", "terms.html"];

const sitemapUrls = ["index.html", ...staticPages, ...pages.map(([file]) => file)]
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
