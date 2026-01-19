export type Lang = "he" | "en";

export const translations = {
  he: {
    nav: {
      services: "שירותים",
      instant: "הדמיה מיידית",
      quote: "הצעת מחיר",
      projects: "פרויקטים",
      faq: "שאלות נפוצות",
      contact: "צור קשר",
      cta: "קבל הדמיה תוך 60 שניות"
    },
    hero: {
      headline: "רואים את הגינה לפני שמתחילים לבנות.",
      subheadline:
        "הדמיה מיידית למרפסות וגגות יוקרה, עם ביצוע קבלני מוקפד שמתרגם חזון לתוצאה.",
      primaryCta: "העלה תמונה וקבל הדמיה",
      secondaryCta: "קבל הערכת תקציב",
      trust: ["תכנון אדריכלי", "ביצוע קבלני מקצועי", "הדמיות מהירות"],
      before: "לפני",
      after: "אחרי"
    },
    problem: {
      title: "החלטות גדולות צריכות ויזואליזציה מהירה.",
      pain:
        "בלי הדמיה ברורה קשה לדמיין תוצאה, התהליך נגרר, והבחירה בסגנון מרגישה כמו הימור.",
      solution:
        "בנינו תהליך שמתחיל בוויזואליזציה מהירה ומדויקת כדי לקצר את הדרך להחלטה בטוחה."
    },
    instant: {
      title: "הדמיה מיידית ב-60 שניות",
      subtitle:
        "העלו תמונה של המרפסת או הגג, בחרו סגנון וקבלו תוצאה ריאליסטית בזמן אמת.",
      note: "הדמיה ראשונית לשלב החלטה – תכנון מפורט לאחר פגישה.",
      upload: {
        title: "גרורו תמונה או בחרו קובץ",
        button: "בחר קובץ",
        generate: "צור הדמיה",
        loading: "מכינים הדמיה...",
        result: "תוצאה"
      }
    },
    styles: {
      title: "בחרו סגנון",
      tropical: {
        title: "טרופי",
        vibe: "ירוק עשיר, תחושת נופש, צמחייה דרמטית."
      },
      modern: {
        title: "מודרני-אורבני",
        vibe: "קווים נקיים, חומרים חכמים, תאורה נסתרת."
      },
      med: {
        title: "ים-תיכוני",
        vibe: "מרקמים טבעיים, טרקוטה, ניחוח חוף."
      },
      try: "נסו סגנון"
    },
    quote: {
      title: "מחולל הצעת מחיר חכמה",
      subtitle:
        "כמה פרטים קצרים ומקבלים חזון עיצובי + טווח תקציב ריאלי לפרויקט.",
      steps: {
        dimensions: "שלב 1: מידות",
        sunWind: "שלב 2: שמש ורוח",
        budget: "שלב 3: תקציב",
        style: "שלב 4: סגנון"
      },
      fields: {
        length: "אורך (מ')",
        width: "רוחב (מ')",
        sun: "כיוון שמש",
        wind: "חשיפה לרוח",
        budget: "טווח תקציב",
        style: "סגנון מועדף"
      },
      submit: "הפק הצעה",
      summary: {
        title: "חזון עיצובי ראשוני",
        budget: "טווח תקציב משוער",
        materials: "המלצות חומרים/צמחייה (כללי)"
      },
      cta: "שלח אליי ונתאם שיחת התאמה"
    },
    how: {
      title: "כך זה עובד",
      steps: [
        "מעלים תמונה + בוחרים סגנון (דקות)",
        "מקבלים הדמיות + טווח תקציב (באותו היום)",
        "פגישת תכנון מקצועית (מדידות/תשתיות)",
        "ביצוע והקמה עם צוות קבלן",
        "מסירה + תוכנית תחזוקה"
      ]
    },
    cases: {
      title: "פרויקטים נבחרים",
      cards: [
        {
          title: "פנטהאוז תל אביב – מרפסת 40 מ״ר",
          detail: "אתגר: חום ושמש חזקים → פתרון: הצללה חכמה + צמחייה שכבתית."
        },
        {
          title: "גינת גג – מגדל יוקרה",
          detail: "אתגר: רוחות גבוהות → פתרון: מסכי רוח ודק עמיד."
        },
        {
          title: "מרפסת אירוח – קו נקי",
          detail: "אתגר: מרחב אירוח קטן → פתרון: ריהוט מודולרי ותאורה דרמטית."
        },
        {
          title: "פינת ירוק למשפחה",
          detail: "אתגר: בטיחות לילדים → פתרון: צמחייה ידידותית + גידור נסתר."
        }
      ],
      badges: ["תכנון", "ביצוע", "דק/עץ", "השקיה חכמה"]
    },
    testimonials: {
      title: "לקוחות מספרים",
      items: [
        {
          quote: "קיבלנו הדמיה באותו היום וזה סגר לנו את הסגנון מיד.",
          name: "ל. ק.",
          role: "דיירת פנטהאוז"
        },
        {
          quote: "התהליך הדיגיטלי חוסך שעות של סקיצות ומאפשר החלטה מהירה.",
          name: "א. ש.",
          role: "אדריכלית"
        },
        {
          quote: "הועד התרשם מההדמיה ומהתקציב השקוף. החלטנו מהר.",
          name: "ר. מ.",
          role: "ועד בית"
        }
      ]
    },
    faq: {
      title: "שאלות נפוצות",
      items: [
        {
          q: "כמה מדויקת ההדמיה?",
          a: "ההדמיה נותנת תמונה אמינה להחלטה ראשונית. תכנון מפורט מתבצע אחרי מדידות."
        },
        {
          q: "מה טווחי התקציב לפרויקט?",
          a: "הטווח משתנה לפי גודל וחומרים. המחולל נותן הערכה ראשונית לפני פגישה."
        },
        {
          q: "כמה זמן לוקח ביצוע?",
          a: "בדרך כלל 3-8 שבועות בהתאם להיקף, לוגיסטיקה והיתרים."
        },
        {
          q: "האם אתם מטפלים בהיתרים/איטום/ניקוז?",
          a: "כן, בהתאם לצורך ולבדיקת מהנדס. אנחנו מלווים מול בעלי מקצוע."
        },
        {
          q: "אפשר תכנון בלבד בלי ביצוע?",
          a: "כן, ניתן לקבל חבילת תכנון והדמיות בלבד."
        },
        {
          q: "איך מתחילים?",
          a: "מעלים תמונה, בוחרים סגנון ומקבלים הדמיה מהירה. משם מתאמים פגישה."
        }
      ]
    },
    contact: {
      title: "בואו נתחיל",
      subtitle: "השאירו פרטים והעלו תמונה לקבלת הדמיה ראשונית.",
      fields: {
        name: "שם מלא",
        phone: "טלפון",
        email: "אימייל",
        city: "עיר",
        upload: "העלה תמונה (אופציונלי)",
        message: "מה הייתם רוצים ליצור?"
      },
      submit: "שלח וקבל הדמיה ראשונית",
      whatsapp: "WhatsApp",
      privacy: "לא נעביר את הפרטים שלך לגורם אחר."
    },
    footer: {
      details: "גרין-ספייס | תכנון וביצוע מרפסות וגגות יוקרה",
      rights: "כל הזכויות שמורות"
    }
  },
  en: {
    nav: {
      services: "Services",
      instant: "Instant Visual",
      quote: "Quote",
      projects: "Projects",
      faq: "FAQ",
      contact: "Contact",
      cta: "Get a 60-sec visualization"
    },
    hero: {
      headline: "See the garden before you build.",
      subheadline:
        "Instant visualizations for luxury rooftops and balconies, with premium execution that turns vision into reality.",
      primaryCta: "Upload a photo",
      secondaryCta: "Get a budget range",
      trust: ["Architect-led planning", "Contractor execution", "Fast visuals"],
      before: "Before",
      after: "After"
    },
    problem: {
      title: "Big decisions need fast visuals.",
      pain:
        "Without clear visuals, it is hard to imagine the result, the process drags on, and style feels like a gamble.",
      solution:
        "We built a visual-first workflow that shortens the path to a confident decision."
    },
    instant: {
      title: "Instant visualization in 60 seconds",
      subtitle:
        "Upload a balcony or roof photo, pick a style, and get a realistic result instantly.",
      note: "Initial visualization for decision-making. Detailed planning follows a meeting.",
      upload: {
        title: "Drag a photo or choose a file",
        button: "Choose file",
        generate: "Generate",
        loading: "Rendering...",
        result: "Result"
      }
    },
    styles: {
      title: "Pick a style",
      tropical: {
        title: "Tropical",
        vibe: "Lush greens, resort feel, dramatic planting."
      },
      modern: {
        title: "Modern Urban",
        vibe: "Clean lines, smart materials, hidden lighting."
      },
      med: {
        title: "Mediterranean",
        vibe: "Natural textures, terracotta, coastal warmth."
      },
      try: "Try this style"
    },
    quote: {
      title: "AI quote generator",
      subtitle: "A few details deliver a design vision and budget range.",
      steps: {
        dimensions: "Step 1: Dimensions",
        sunWind: "Step 2: Sun & Wind",
        budget: "Step 3: Budget",
        style: "Step 4: Style"
      },
      fields: {
        length: "Length (m)",
        width: "Width (m)",
        sun: "Sun direction",
        wind: "Wind exposure",
        budget: "Budget range",
        style: "Preferred style"
      },
      submit: "Generate summary",
      summary: {
        title: "Initial design vision",
        budget: "Estimated budget range",
        materials: "Materials/planting recommendations (general)"
      },
      cta: "Send it to me and schedule a call"
    },
    how: {
      title: "How it works",
      steps: [
        "Upload a photo + choose a style (minutes)",
        "Get visuals + budget range (same day)",
        "Professional planning meeting (measurements/infra)",
        "Build and install with contractor crew",
        "Delivery + maintenance plan"
      ]
    },
    cases: {
      title: "Selected projects",
      cards: [
        {
          title: "Tel Aviv Penthouse – 40 sqm",
          detail: "Challenge: strong sun → Solution: smart shading + layered planting."
        },
        {
          title: "Luxury Tower Roof Garden",
          detail: "Challenge: high winds → Solution: wind screens and durable deck."
        },
        {
          title: "Clean-line Hosting Balcony",
          detail: "Challenge: compact hosting → Solution: modular seating + dramatic light."
        },
        {
          title: "Family Green Corner",
          detail: "Challenge: child safety → Solution: safe planting + hidden fencing."
        }
      ],
      badges: ["Planning", "Execution", "Deck/Wood", "Smart irrigation"]
    },
    testimonials: {
      title: "Testimonials",
      items: [
        {
          quote: "We got visuals the same day and locked the style immediately.",
          name: "L. K.",
          role: "Penthouse resident"
        },
        {
          quote: "The digital workflow saves hours of sketching and speeds decisions.",
          name: "A. S.",
          role: "Architect"
        },
        {
          quote: "The committee loved the visuals and the transparent budget range.",
          name: "R. M.",
          role: "Building committee"
        }
      ]
    },
    faq: {
      title: "FAQ",
      items: [
        {
          q: "How accurate is the visualization?",
          a: "It is accurate for early decisions. Detailed planning follows measurements."
        },
        {
          q: "What are typical budget ranges?",
          a: "It varies by size and materials. The generator provides an initial range."
        },
        {
          q: "How long does execution take?",
          a: "Usually 3-8 weeks depending on scope, logistics, and permits."
        },
        {
          q: "Do you handle permits/waterproofing/drainage?",
          a: "Yes, as needed and with engineering review."
        },
        {
          q: "Can I do planning only without execution?",
          a: "Yes, planning + visuals only is available."
        },
        {
          q: "How do we start?",
          a: "Upload a photo, choose a style, and get a fast visualization."
        }
      ]
    },
    contact: {
      title: "Let’s start",
      subtitle: "Leave your details and upload a photo for an initial visualization.",
      fields: {
        name: "Full name",
        phone: "Phone",
        email: "Email",
        city: "City",
        upload: "Upload a photo (optional)",
        message: "What would you like to create?"
      },
      submit: "Send and get an initial visualization",
      whatsapp: "WhatsApp",
      privacy: "We never share your details."
    },
    footer: {
      details: "GreenSpace | Luxury rooftop & balcony planning and execution",
      rights: "All rights reserved"
    }
  }
} as const;
