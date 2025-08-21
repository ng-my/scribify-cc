// 瑞典语
let message = {
  // Startsida
  HomePage: {
    home: "Alla Transkriptioner",
    times: "{times} gratis transkriptioner per dag, {left} kvar idag. ",
    tips: "Uppgradera till Pro för obegränsade transkriptioner.",
    update: "Uppgradera nu",
    rename: "Byt namn",
    delete: "Radera",
    cancel: "Avbryt",
    confirm: "Skapa",
    dialogLabel: "Mappnamn",
    recently: "Senaste filer",
    loading: "Laddar",
    tour: {
      step0: {
        title: "Välkommen till {name}",
        tip: "Här kan du:",
        content: "Transkribera samtal, möten, föreläsningar och mer",
        next: "Kom igång"
      },
      step1: {
        title: "Transkribera filer",
        content:
          "Stöder tre transkriptionsmetoder: lokala filer, länkar och inspelningar."
      },
      step2: {
        title: "Skapa mappar",
        content: 'Klicka på "+" för att skapa mappar och organisera dina filer.'
      },
      step3: {
        title: "Visa och redigera transkriptioner",
        content:
          "Klicka på ett objekt för att visa och redigera transkriptionsdetaljer, du kan också översätta det."
      },
      next: "Nästa",
      finish: "Jag förstår"
    },
    export: {
      export: "Exportera",
      title: "Vi skapar din exportfil",
      title2: "Din fil är redo",
      singleLoadingContent: "Komprimerar 1 fil.",
      singleSuccessContent: "1 fil komprimerad.",
      loadingContent: "Komprimerar {num} filer.",
      successContent: "{num} filer komprimerade.",
      cancel: "Avbryt export",
      error: "Exportfel",
      dialog: {
        title: "Varning",
        content: "Avbryt export?",
        cancel: "Avbryt export",
        continue: "Fortsätt exportera"
      }
    },
    welcome: {
      title: "Välkommen till Scribify!",
      description: "Här kan du:",
      transcribe:
        "Transkribera utan ansträngning med Scribify—förvandla röstsamtal till tydlig, sökbar och delbar text på ett ögonblick.",
      precision:
        "Få exakta transkriptioner med talaridentifiering och tidsstämplar omedelbart.",
      translate:
        "Bryt språkbarriärer: översätt transkriptioner till mer än 200 språk med lätthet.",
      edit: "Redigera, förfina och exportera dina transkriptioner i format som passar dina behov.",
      collaborate:
        "Samarbeta genom att dela din transkriberade text med andra.",
      button: "Kom igång",
      tip: "Redo att förvandla ljud till transkriberad text? Börja utforska nu!",
      tip2: "Börja utforska nu!",
      tip1: "Redo att förvandla ljud till transkriberad text? "
    },
    subscriptionModal: {
      left: {
        title: "Skaffa Pro-planen för att låsa upp mer",
        c1: "Obegränsade transkriptioner",
        c2: "10 timmars uppladdningar",
        c3: "Högsta prioritet",
        c4: "99% transkriptionsnoggrannhet",
        c5: "100+ språk stöds",
        c6: "Talaridentifiering",
        c7: "Transkriptionsöversättning",
        t1: "Obegränsade transkriptioner för en person.",
        t2: "Varje fil kan vara upp till 10 timmar / 5 GB. Ladda upp 50 filer åt gången.",
        t3: "Vi transkriberar alltid dina filer så snabbt som möjligt med högsta prioritet."
      },
      right: {
        title: "Skaffa Pro-planen",
        yearly: "Årligen",
        monthly: "Månadsvis",
        save: "Besparing",
        preMonth: "per månad",
        preYear: "per år",
        firstMonth: "första månaden",
        afterwards: "därefter"
      },
      subscribe: "Prenumerera"
    }
  },
  // Mappsida
  FolderPage: {
    table: {
      failed: "Misslyckades",
      selected: "Markerad",
      success: "Lyckades",
      fileList: "Fillista"
    },
    dialog: {
      move: {
        title: "Flytta",
        label: "Välj mapp",
        placeholder: "Välj mapp",
        confirm: "Flytta",
        cancel: "Avbryt"
      },
      rename: {
        title: "Byt namn",
        label: "Filnamn",
        confirm: "Byt namn",
        cancel: "Avbryt"
      },
      delete: {
        title: "Radera",
        file: "fil",
        files: "filer",
        label: "Bekräfta radering? Denna åtgärd kan inte ångras.",
        confirm: "Radera",
        cancel: "Avbryt"
      },
      share: {
        title: "Dela",
        label:
          "Alla med följande säkra länk kommer att kunna visa denna transkription och tillhörande mediafiler.",
        confirm: "Kopiera länk",
        success: "Kopiering lyckades"
      },
      export: {
        title: "Exportera",
        select: "Välj det format du behöver",
        settings: "Inställningar",
        speaker: "Inkludera talare",
        timecodes: "Inkludera tidskoder",
        confirm: "Exportera",
        cancel: "Avbryt",
        selectErr: "Välj minst ett format"
      }
    },
    search: {
      placeholder: "Sök"
    },
    recently: "Nyligen",
    record: "Spela in",
    transcribe: "Transkribera",
    unclassified: "Oklassificerad mapp",
    buttons: {
      transcribe: "Transkribera fil",
      url: "Transkribera länk",
      record: "Spela in och transkribera",
      recording: "Spelar in..."
    },
    delSuccess: "Radering lyckades",
    create: "Skapa",
    endRecord: {
      title: "Meddelande",
      content:
        "Du spelar in. Den här åtgärden avslutar inspelningen. Vill du avsluta inspelningen?",
      confirm: "Fortsätt Inspelning",
      cancel: "Avsluta Inspelning"
    }
  },
  // Filuppladdning och inspelning
  FileUploadAndRecording: {
    record: {
      record: "Spela in",
      pause: "Pausa",
      resume: "Fortsätt",
      stop: "Stoppa",
      endRecord: "Avsluta inspelning",
      delete: "Radera",
      transcribe: "Transkribera",
      permissionDenied: "Mikrofontillstånd nekades eller enhet ej tillgänglig",
      dialog: {
        delete: {
          title: "Varning",
          label: "Är du säker på att du vill radera denna inspelning?",
          confirm: "Radera",
          cancel: "Avbryt"
        },
        complete: {
          title: "Inspelning avslutad",
          label:
            "Inspelningen nådde 10 timmar och stoppades automatiskt. Vänligen fortsätt med transkriberingen.",
          confirm: "Jag förstår"
        },
        speaker: {
          content:
            'För talaridentifiering är filer begränsade till 3 timmar. Avmarkera "{text}".'
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkribera online-medier",
        title: "Klistra in länk",
        label:
          "Klistra in din video- eller ljudlänk från: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram och fler plattformar...",
        confirm: "Lägg till",
        cancel: "Avbryt",
        errorTitle:
          "URL-adressen du angett är inte korrekt. Kontrollera och försök igen.",
        linkName: "Länk"
      },
      file: {
        orTitle: "Transkribera online-medier",
        dialogTitle: "Transkribera fil",
        tip1: "Dra filer hit eller klicka för att bläddra",
        tip2: "Klicka för att bläddra",
        or: "eller",
        supported: "Format som stöds"
      },
      del: {
        title: "Varning",
        content:
          "All framsteg kommer att förloras. Bekräfta avbrytande av transkription?",
        cancel: "Bekräfta avbryt",
        confirm: "Fortsätt transkribera"
      },
      files: "Filer",
      resultDialogTitle: "Transkribera filer",
      resultDialogTitle2: "Transkribera fil",
      cancel: "Avbryt",
      confirm: "Transkribera",
      return: "Återgå",
      addMore: "Lägg till fler",
      language: "Mediaspråk",
      failed: "Misslyckades",
      tooLarge: "Filen överskrider gränsen (5G).",
      linkUpload: "Laddar upp",
      fileFormat: "Filformatet tillåts inte",
      localFiles: "Lokala filer",
      pasteLink: "Online-länk",
      uploadErr: "Uppladdningsfel",
      hashErr: "Hash-fel",
      table: {
        status: "Status",
        file: "Fil",
        size: "Storlek",
        noData: "Ingen data"
      },
      maxFileNum: "Antalet filer kan inte överstiga {num}.",
      speaker: "Identifiera talare",
      speakerLabel: "Upptäck automatiskt vem som talar",
      guest: {
        transcribe: "Transkribera",
        file: "Fil",
        audio: "Ljud-/videofil",
        Uploading: "Laddar upp..."
      }
    }
  },
  // Transkriptionsdetaljsida
  TranscriptionPage: {
    langChooseV1: {
      recently: "Nyligen",
      popular: "Populära",
      other: "Andra",
      searchLanguage: "Sök språk",
      noMatch: "Inget matchande språk hittades",
      English: "Engelska",
      "English(US)": "Engelska (USA)",
      "English(UK)": "Engelska (Storbritannien)",
      Spanish: "Spanska",
      Portuguese: "Portugisiska",
      French: "Franska",
      Italian: "Italienska",
      German: "Tyska",
      Dutch: "Nederländska",
      Polish: "Polska",
      Danish: "Danska",
      Japanese: "Japanska",
      Korean: "Koreanska",
      Hungarian: "Ungerska",
      Czech: "Tjeckiska",
      Chinese: "Kinesiska",
      Hebrew: "Hebreiska",
      Arabic: "Arabiska",
      Azerbaijani: "Azerbajdzjanska",
      Estonian: "Estniska",
      Belarusian: "Vitryska",
      Bulgarian: "Bulgariska",
      Icelandic: "Isländska",
      Bosnian: "Bosniska",
      Persian: "Persiska",
      Russian: "Ryska",
      "Chinese(Traditional)": "Kinesiska (traditionell)",
      Finnish: "Finska",
      Kazakh: "Kazakiska",
      Galician: "Galiciska",
      Catalan: "Katalanska",
      "Chinese(Simplified)": "Kinesiska (förenklad)",
      Kannada: "Kannada",
      Croatian: "Kroatiska",
      Latvian: "Lettiska",
      Lithuanian: "Litauiska",
      Romanian: "Rumänska",
      Marathi: "Marathi",
      Malay: "Malajiska",
      Macedonian: "Makedonska",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalesiska",
      Norwegian: "Norska",
      Swedish: "Svenska",
      Serbian: "Serbiska",
      Slovak: "Slovakiska",
      Slovenian: "Slovenska",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thailändska",
      Turkish: "Turkiska",
      Welsh: "Walesiska",
      Urdu: "Urdu",
      Ukrainian: "Ukrainska",
      Greek: "Grekiska",
      Armenian: "Armeniska",
      Hindi: "Hindi",
      Indonesian: "Indonesiska",
      Vietnamese: "Vietnamesiska",
      Albanian: "Albanska",
      Amharic: "Amhariska",
      Assamese: "Assamesiska",
      Occitan: "Occitanska",
      Bashkir: "Basjkiriska",
      Basque: "Baskiska",
      Breton: "Bretonska",
      Tibetan: "Tibetanska",
      Faroese: "Färöiska",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgiska",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitisk kreol",
      Hausa: "Hausa",
      Latin: "Latin",
      Lao: "Lao",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburgiska",
      Malagasy: "Malagassiska",
      Maltese: "Maltesiska",
      Malayalam: "Malayalam",
      Mongolian: "Mongoliska",
      Bengali: "Bengali",
      Burmese: "Burmesiska",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Singalesiska",
      Shona: "Shona",
      Somali: "Somaliska",
      Tajik: "Tadzjikiska",
      Tatar: "Tatariska",
      Telugu: "Telugu",
      Turkmen: "Turkmeniska",
      Uzbek: "Uzbekiska",
      Hawaiian: "Hawaiiska",
      "Norwegian Nynorsk": "Norska (nynorsk)",
      Sindhi: "Sindhi",
      Sundanese: "Sundanesiska",
      Yiddish: "Jiddisch",
      Yoruba: "Yoruba",
      Javanese: "Javanesiska",
      Cantonese: "Kantonesiska",
      Abkhaz: "Abchaziska",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acoli",
      awa: "Awadhi",
      Avaric: "Avariska",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irländska",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Ossetiska",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balinesiska",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Nordsotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Baluchi",
      bho: "Bhojpuri",
      bua: "Burjatiska",
      chm: "Mari",
      Chamorro: "Chamorro",
      Chechen: "Tjetjenska",
      chk: "Chuukese",
      Chuvash: "Tjuvasjiska",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Divehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Sydndebele",
      dov: "Dombe",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Franska (Kanada)",
      Fijian: "Fijianska",
      fon: "Fon",
      "Western Frisian": "Västfrisiska",
      fur: "Friuliska",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grönländska",
      gom: "Goan Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgiziska",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikanska",
      "crh-Latn": "Krimtatariska (latinsk)",
      crh: "Krimtatariska (kyrillisk)",
      Quechua: "Quechua",
      Kurdish: "Kurdiska (Kurmanji)",
      ckb: "Kurdiska (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgaliska",
      lij: "Liguriska",
      Limburgish: "Limburgiska",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardiska",
      rom: "Romani",
      mad: "Maduresiska",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajiska (Jawi)",
      Marshallese: "Marshalliska",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritisk kreol",
      "mni-Mtei": "Meetei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (östra)",
      "Southern Sotho": "Sydsotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi)",
      "pt-PT": "Portugisiska (Portugal)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotekiska",
      "Northern Sami": "Nordsamiska",
      Samoan: "Samoanska",
      kri: "Sierra Leonean Krio",
      crs: "Seychellisk kreol",
      Sango: "Sango",
      "sat-Latn": "Santali (latinsk)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Skotsk gäliska",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Berber (Tifinagh)",
      "ber-Latn": "Berber (latinsk)",
      Tahitian: "Tahitiska",
      Tonga: "Tonga",
      Tigrinya: "Tigrinja",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuvinska",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetianska",
      Uyghur: "Uiguriska",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtiska",
      szl: "Schlesiska",
      scn: "Sicilianska",
      hil: "Hiligaynon",
      jam: "Jamaicansk patois",
      sah: "Jakutiska",
      ace: "Acehnesiska",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latinsk)",
      Inuktitut: "Inuktitut",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Inloggning, registrering, lösenordsåterställning
  IdentityInfoManage: {
    or: "eller",
    LoginBtn: "Logga in med e-post",
    LoginGoogle: "Logga in med Google",
    SignupBtn: "Registrera med e-post",
    SignupGoogle: "Registrera med Google",
    SignupDes: "Registrera dig idag och upplev magin — gratis.",
    SignupTitle: "Noggrann & obegränsad transkribering",
    signup: "Registrera",
    sign_up: "Registrera",
    loginByGoogle: "Logga in med Google",
    emailAddress: "Vänligen ange din e-postadress",
    createAccount: "Skapa konto",
    accountExists: "Har du redan ett konto? ",
    agreeTerm: {
      agree: "Genom att fortsätta godkänner du våra {terms} och {policy}.",
      terms: "Villkor",
      policy: "Integritetspolicy"
    },
    setPassword: "Ange lösenord",
    code: "Verifieringskod",
    resend: "Skicka igen",
    enterPassword: "Lösenord: Minst 6 tecken.",
    passwordLeval: "Lösenordsstyrka",
    Weak: "Svagt",
    Medium: "Medium",
    Strong: "Starkt",
    confirmPassword: "Bekräfta lösenord",
    invalidEmail: "Ogiltig e-postadress",
    logInDirectly: "Kontot finns redan, logga in direkt.",
    codeErrorTryAgain: "Felaktig verifieringskod, vänligen försök igen.",
    atLeastSix: "Lösenordet måste innehålla minst 6 tecken.",
    passwordNotMatch: "Lösenorden matchar inte, vänligen försök igen.",
    login: "Logga in",
    log_in: "Logga in",
    log_In: "Logga in",
    password: "Lösenord",
    forgotPassword: "Glömt lösenord?",
    noAccount: "Inget konto?",
    accountNotExists: "Kontot finns inte.",
    passwordError: "Lösenordsfel",
    sendCode: "Skicka verifieringskod",
    resetPassword: "Återställ lösenord",
    resetYourPassword: "Återställ ditt lösenord",
    newOldCantSame: "Nytt lösenord kan inte vara samma som det gamla.",
    passwordResetOk: "Lösenordet har återställts!",
    signupToSaveProgress: "Slutför registreringen för att spara din framsteg.",
    tip: "Tips",
    tipContentEmail:
      "Vi har precis skickat ditt kontos inloggningslösenord till din e-postadress.",
    tipContentPassword:
      "Var god kontrollera din inkorg och logga in med din e-postadress och lösenord.",
    codeToEmail:
      "Vi har precis skickat en verifieringskod till din e-post. Kontrollera din inkorg och klistra in verifieringskoden ovan."
  },
  // Delningssida
  Sharepage: {},
  // Initialsida
  InitPage: {},
  // Kontoinställningar
  AccountSettingsPage: {
    subscription: "Prenumerationsplan",
    freeversion: "Gratis",
    transcribeTimesDay: "3 avskrifter per dag",
    uploadMinutes: "30 minuters uppladdning",
    lowerPriority: "Lägre prioritet",
    currentPlan: "Nuvarande plan",
    professionalEdition: "professionell version",
    unlimitedTranscription: "Obegränsad avskrift",
    unlimitedNumberOfTimes:
      "Obegränsad transkriptionsfrekvens och varaktighet.",
    filesUploadedAtOnce:
      "Varje fil kan vara upp till 10 timmar lång / 5 GB. Ladda upp 50 filer samtidigt.",
    highestPriority: "högsta prioritet",
    weWillGiveTheHighest:
      "Vi kommer alltid att transkribera dina filer så snart som möjligt med högsta prioritet.",
    theFirstMonth: "Den första månaden",
    subscribeTo: "prenumerera på",
    basicVersionFree: "Grundversion (gratis)",
    return: "Tillbaka",
    annualize: "årlig",
    monthly: "månadsvis",
    everyYear: "varje år",
    saved: "sparad",
    byTheMonth: "per månad",
    firstMonth: "första månaden",
    afterwardsEveryMonth: "Därefter varje månad",
    manageSubscription: "Hantera prenumeration",
    professionalYearbook: "Professionell årsbok",
    professionalMonthly: "Professionell månadsvis",
    subscriptionWillCancelledOn: "Ditt abonnemang kommer att avslutas",
    displayLanguage: "Visningsspråk",
    update: "Uppgradera nu",
    basicversion: "Grundversion (Gratis)",
    daily: "{start} av {end} dagliga avskrifter använda",
    upgradetoPro: "Uppgradera till Pro",
    accountSetting: "Kontoinställningar",
    logOut: "Logga ut",
    account: "Konto",
    email: "E-post",
    id: "ID",
    password: "Lösenord",
    resetPassword: "Återställ lösenord",
    logIn: "Logga in",
    tryForFree: "Prova gratis",
    notFund: "Hittades inte",
    couldntFind: "Vi kunde inte hitta det du letade efter.",
    proAnnual: "Pro Årlig",
    proMonthly: "Pro Månadsvis",
    perMonth: "per månad",
    afterwards: "därefter",
    accuracy: "avskriftsnoggrannhet",
    supported: "språk som stöds",
    identification: "Talaridentifiering",
    transcriptSranslation: "Avskriftsöversättning",
    perYear: "per år",
    getProPlan: "Skaffa Pro-planen",
    changeToAnnual: "Byt till årlig",
    automaticRenewalon: "Automatisk förnyelse den",
    eachMonth: "Automatisk förnyelse den {time}. varje månad.",
    automaticRenewal:
      "Automatisk förnyelse misslyckades, kontrollera betalningsmetoden.",
    eachYear: "Automatisk förnyelse den {time} varje år.",
    returnAccountSetting: "Tillbaka",
    needsToWaitLonger: "Vänta längre innan dina filer transkriberas.",
    freeThreeTimesDay: "Transkribera 3 filer gratis varje dag.",
    oneFileUploaded:
      "Varje fil kan vara upp till 30 minuter lång. Ladda upp 1 fil i taget.",
    uploadWithinHours: "10-timmars uppladdningar",
    yourSubscription: "Ditt abonnemang kommer att avslutas {time}.",
    save: "Spara",
      freeversion2: "Gratisplan"
},
  // Språkmappning
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kinesiska (förenklad)",
      "Chinese(Traditional)": "Kinesiska (traditionell)",
      Japanese: "Japanska",
      Danish: "Danska",
      German: "Tyska",
      English: "Engelska",
      Spanish: "Spanska",
      French: "Franska",
      Italian: "Italienska",
      Hungarian: "Ungerska",
      Dutch: "Nederländska",
      Norwegian: "Norska",
      Polish: "Polska",
      Portuguese: "Portugisiska",
      Finnish: "Finska",
      Swedish: "Svenska",
      Turkish: "Turkiska",
      Greek: "Grekiska",
      Russian: "Ryska",
      Ukrainian: "Ukrainska",
      Hebrew: "Hebreiska",
      Arabic: "Arabiska",
      Korean: "Koreanska"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "En open source Nuxt3 SaaS-mall, förintegrerarad med globala betalningsgateways (Stripe/Cream), Google OAuth, i18n-routing och SEO-optimeringsverktyg. Specialdesignad för utvecklare som bygger flerspråkiga webbapplikationer, med stöd för SSR/SSG och produktionsnivåsäkerhet.",
    startLink: "Starta gratis provperiod~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Gå med i väntelistan för att vara först med att få de senaste nyheterna och rabatterna från NuxtPro!",
      placeholder: "Ange din e-post",
      button: "Gå med i väntelistan",
      joinCountMessage:
        "🔥 Tidig användare #{count} gick just med i väntelistan!"
    },
    seo: {
      title: "Open Source Nuxt SaaS-mall | NuxtPro",
      description:
        "NuxtJS-mall med allt du behöver för att snabbt få din produkt framför kunder. Från idé till produktion på bara 5 minuter."
    },
    api: {
      title: "Detta är en demo",
      corpInfo: "Företagsinformation"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Fel vid nedladdning av video"
      },
      mse: {
        code: 2,
        msg: "Fel vid tillägg av ström"
      },
      parse: {
        code: 3,
        msg: "Tolkningsfel"
      },
      format: {
        code: 4,
        msg: "Formatfel"
      },
      decoder: {
        code: 5,
        msg: "Avkodningsfel"
      },
      runtime: {
        code: 6,
        msg: "Syntaxfel"
      },
      timeout: {
        code: 7,
        msg: "Uppspelningstidsfel"
      },
      other: {
        code: 8,
        msg: "Annat fel"
      }
    },
    HAVE_NOTHING: "Ingen information om ljud-/videoberedskap",
    HAVE_METADATA: "Ljud-/videometadata redo",
    HAVE_CURRENT_DATA:
      "Data om aktuell uppspelningsposition är tillgänglig, men inte tillräckligt med data för att spela upp nästa bildruta/millisekund",
    HAVE_FUTURE_DATA: "Aktuella data och minst nästa bildruta är tillgängliga",
    HAVE_ENOUGH_DATA: "Tillräckligt med data för att börja uppspelning",
    NETWORK_EMPTY: "Ljud/video har inte initierats än",
    NETWORK_IDLE:
      "Ljud/video är aktivt och resurs har valts, men nätverk används inte",
    NETWORK_LOADING: "Webbläsaren laddar ner data",
    NETWORK_NO_SOURCE: "Ingen ljud-/videokälla hittades",
    MEDIA_ERR_ABORTED: "Hämtning avbröts av användaren",
    MEDIA_ERR_NETWORK: "Nätverksfel",
    MEDIA_ERR_DECODE: "Avkodningsfel",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Ljud-/videoformatet stöds inte",
    REPLAY: "Spela upp igen",
    ERROR: "Det verkar vara ett problem med nätverksanslutningen",
    PLAY_TIPS: "Spela",
    PAUSE_TIPS: "Pausa",
    PLAYNEXT_TIPS: "Nästa avsnitt",
    DOWNLOAD_TIPS: "Ladda ner",
    ROTATE_TIPS: "Rotera",
    RELOAD_TIPS: "Ladda om",
    FULLSCREEN_TIPS: "Fullskärm",
    EXITFULLSCREEN_TIPS: "Avsluta fullskärm",
    CSSFULLSCREEN_TIPS: "CSS-fullskärm",
    EXITCSSFULLSCREEN_TIPS: "Avsluta CSS-fullskärm",
    TEXTTRACK: "Undertexter",
    PIP: "Bild-i-bild",
    SCREENSHOT: "Skärmbild",
    LIVE: "Direktsändning",
    OFF: "Av",
    OPEN: "På",
    MINI_DRAG: "Klicka och håll för att dra video",
    MINISCREEN: "Mini-skärm",
    REFRESH_TIPS: "Försök",
    REFRESH: "Uppdatera",
    FORWARD: "Spola framåt",
    LIVE_TIP: "Direktsändning",
    TM_SUBTITLE_SHOW_TIPS: "Slå på undertexter",
    TM_SUBTITLE_HIDE_TIPS: "Stäng av undertexter",
    TM_MINIMIZE_TIPS: "Dölj video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Integritetspolicy",
    lastUpdated: "Senast uppdaterad: 25 augusti 2025",
    policyDescription:
      'Denna policy beskriver hur Scribify (nedan kallat "Scribify", "vår", "vi", "oss") samlar in, använder och lämnar ut dina personuppgifter när du använder våra tjänster, webbplatser',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition:
      'och programvara (gemensamt kallade "Tjänsterna").',
    policyAgreement:
      "Läs denna integritetspolicy noggrant och se till att du förstår den. Genom att använda någon av våra tjänster godkänner du denna integritetspolicy. Om du inte samtycker till vår användning av dina personuppgifter i enlighet med denna policy måste du omedelbart sluta använda våra tjänster.",
    policyOverview:
      "I denna policy beskriver vi: vilka uppgifter vi samlar in och varför; hur dina uppgifter hanteras; och dina rättigheter avseende dina uppgifter. Vi säljer inte dina uppgifter.",
    scopeTitle: "1. Omfattning av denna integritetspolicy",
    whatWeCollectTitle: "2. Vad vi samlar in och varför",
    accessShareTitle: "3. När vi får åtkomst till eller delar din information",
    secureDataTitle: "4. Hur vi skyddar dina uppgifter",
    deleteContentTitle: "5. Vad händer när du tar bort ditt innehåll",
    locationTitle: "6. Plats och datas placering",
    childrenPrivacyTitle: "7. Barns integritet",
    updatesTitle: "8. Uppdateringar av denna integritetspolicy",
    contactUsTitle: "9. Kontakta oss",
    identityAccessTitle: "2.1 Identitet och åtkomst",
    billingInfoTitle: "2.2 Faktureringsinformation",
    productInteractionsTitle: "2.3 Produktinteraktioner",
    websiteInteractionsTitle: "2.4 Webbplatsinteraktioner",
    cookiesTitle: "2.5 Kakor",
    voluntaryCorrespondenceTitle: "2.6 Frivillig korrespondens",
    scopeContent:
      "Denna integritetspolicy gäller endast vår insamling och behandling av information om användare av Tjänsterna. Denna integritetspolicy gäller inte för några tjänster, webbplatser eller programvara som drivs av tredje part och som är länkade till oss (oavsett om vi tillhandahåller dessa länkar eller om andra användare delar dem), och den gäller inte heller för innehåll, data, applikationer eller material från tredje part. Vi rekommenderar att du kontrollerar integritetspolicyerna för någon tredje parts webbplats eller programvara innan du lämnar någon information till dem.",
    collectPrinciple:
      "Vår vägledande princip är att bara samla in det vi behöver. Här är vad det innebär i praktiken:",
    identityAccessContent:
      "När du registrerar dig för en av våra produkter ber vi om identifierande information som ditt namn och din e-postadress. Detta gör vi för att tillhandahålla viktig produktfunktionalitet och så att vi kan skicka produktuppdateringar och annan viktig information till dig.",
    billingInfoContent:
      "Om du registrerar dig för en betald produkt kommer du att bli ombedd att ange din betalningsinformation och faktureringsadress. Betalningsinformationen skickas direkt till vår betalningsleverantör och når inte våra servrar.",
    productInteractionsContent:
      "Vi lagrar innehållet som du laddar upp, tar emot eller hanterar i dina produktkonton på våra servrar. Om du inte tar bort detta innehåll kan vi komma att behålla det så länge ditt konto är aktivt.",
    websiteInteractionsContent:
      "Vi samlar in information om din surfaktivitet för analys- och statistiska ändamål, såsom tester av konverteringsfrekvens och experiment med nya produktdesigner. Detta inkluderar till exempel dina webbläsar- och operativsystemversioner, din IP-adress, vilka webbsidor du besökte och hur lång tid det tog att ladda dem, och vilken webbplats som hänvisade dig till oss. Om du har ett konto och är inloggad är dessa webbanalysdata kopplade till din IP-adress och ditt användarkonto tills ditt konto inte längre är aktivt.",
    cookiesContent1:
      "Vi använder även permanenta förstapartscookies och vissa tredjepartscookies för att lagra vissa preferenser, göra det enklare för dig att använda våra applikationer och utföra A/B-testning samt stödja viss analys.",
    cookiesContent2:
      "En cookie är en textbit som lagras av din webbläsare. Den kan hjälpa till att komma ihåg inloggningsinformation och webbplatsinställningar. Den kan också samla in information som din webbläsartyp, operativsystem, besökta webbsidor, besökets längd, visat innehåll och annan klickdata. Du kan justera inställningar för cookielagring och acceptera eller blockera enskilda cookies i dina webbläsarinställningar, men våra appar kommer inte att fungera och andra aspekter av vår tjänst kanske inte fungerar korrekt om du inaktiverar cookies.",
    voluntaryCorrespondenceContent:
      "När du mejlar oss med en fråga eller ber om hjälp sparar vi den korrespondensen, inklusive din e-postadress, så att vi har en historik över tidigare korrespondens att hänvisa till om du kontaktar oss i framtiden.",
    accessShareContent1:
      "För att tillhandahålla produkter eller tjänster som du har begärt. Vi använder vissa tredjepartsleverantörer för att köra våra applikationer och tillhandahålla Tjänsterna till dig. Detta inkluderar moln- och analysleverantörer.",
    accessShareContent2:
      "För att undersöka, förebygga eller vidta åtgärder mot missbruk. Att få åtkomst till ett kundkonto vid utredning av potentiellt missbruk är en sista utväg. Vi vill skydda integriteten och säkerheten för både våra kunder och de personer som rapporterar problem till oss, och vi gör vårt bästa för att balansera dessa ansvarsområden under hela processen. Om vi upptäcker att du använder våra produkter för ett begränsat ändamål kommer vi att vidta åtgärder vid behov, inklusive att meddela lämpliga myndigheter där det är motiverat.",
    accessShareContent3: "När det krävs enligt gällande lag.",
    userDataRequests:
      "- Begäran om användardata. Vår policy är att inte svara på myndigheters begäranden om användardata om vi inte är tvungna att dela data genom rättsliga processer eller under begränsade omständigheter i händelse av en nödförfrågan. Om amerikanska brottsbekämpande myndigheter har nödvändig order, stämning eller domstolsbeslut som kräver att vi delar data, måste vi följa detta. Likaså kommer vi endast att svara på förfrågningar från myndigheter utanför USA om vi är tvungna av den amerikanska regeringen genom förfaranden som anges i ett avtal eller avtal om ömsesidig rättslig hjälp. Det är vår policy att meddela berörda användare innan vi delar data om vi inte är lagligt förbjudna att göra det, förutom i vissa nödfall.",
    preservationRequests:
      "- Begäran om bevarande. På samma sätt är vår policy att endast efterkomma begäranden om att bevara data om det krävs enligt US Federal Stored Communications Act, 18 USC Section 2703(f), eller genom en korrekt delgiven amerikansk stämning för civilrättsliga ärenden. Vi delar inte bevarade data om det inte krävs enligt lag eller är tvingat av ett domstolsbeslut som vi väljer att inte överklaga. Dessutom, om vi inte får en korrekt beslutsfattande, domstolsbeslut eller stämning innan den obligatoriska bevarandeperioden löper ut, kommer vi att förstöra alla bevarade kopior av kunddata i slutet av bevarandeperioden.",
    taxAudit:
      "- Om vi granskas av en skattemyndighet kan vi vara skyldiga att dela faktureringsrelaterad information. Om det händer kommer vi endast att dela det minimum som behövs, såsom faktureringsadresser och information om skattebefrielse.",
    secureDataContent1: "All data krypteras via",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "när den överförs från våra servrar till din webbläsare.",
    deleteContentContent:
      "Om du tar bort något innehåll blir det omedelbart oåtkomligt.",
    locationContent:
      "Våra produkter och andra webbtjänster drivs i USA. Om du befinner dig i Europeiska unionen, Storbritannien eller någon annanstans utanför USA, vänligen observera att all information du lämnar till oss kommer att överföras till och lagras i USA. Genom att använda våra webbplatser eller tjänster och/eller förse oss med dina personuppgifter samtycker du till denna överföring.",
    childrenPrivacyContent:
      "Tjänsterna riktar sig inte till barn, och vi samlar inte medvetet in personuppgifter från barn under 13 år. Om du är under 13 år, vänligen lämna inte ut någon personlig information via Tjänsterna. Om du tror att ett barn har lämnat oss personuppgifter i strid med denna policy, vänligen kontakta oss enligt nedan.",
    updatesContent:
      "Vi kan komma att uppdatera denna policy vid behov för att följa relevanta bestämmelser och återspegla eventuella nya rutiner. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida.",
    contactUsContent1:
      "Om du har några frågor, kommentarer eller klagomål gällande vår integritetspolicy, vänligen",
    contactUs: "kontakta oss",
    contactUsContent2:
      "och vi kommer att sträva efter att hantera ditt klagomål så snart som möjligt."
  },
  termsOfService: {
    termsOfServiceTitle: "Användarvillkor",
    lastUpdated: "Senast uppdaterad: 21 september 2022",
    thankYouMessage: "Tack för att du använder våra produkter!",
    companyReference:
      'När vi säger "Företag", "vi", "vår" eller "oss" i detta dokument, syftar vi på Scribify.',
    servicesDefinition:
      'När vi säger "Tjänster" menar vi alla produkter som skapats och underhålls av Scribify, oavsett om de levereras i en webbläsare, skrivbordsapplikation, mobilapplikation eller något annat format.',
    termsUpdateNotice:
      "Vi kan komma att uppdatera dessa användarvillkor i framtiden. Vanligtvis har dessa ändringar gjorts för att förtydliga några av dessa villkor genom att länka till en utökad relaterad policy. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida och vidta andra lämpliga åtgärder för att meddela kontoinnehavare.",
    acceptanceOfAgreementTitle: "1. Godkännande av avtal",
    scribifyServicesTitle: "2. Scribifys tjänster",
    accountTermsTitle: "3. Kontovillkor",
    paymentRefundsTitle: "4. Betalning, återbetalningar och planändringar",
    cancellationTerminationTitle: "5. Avbokning och uppsägning",
    submissionsTitle: "6. Inskickade bidrag",
    uptimeSecurityTitle: "7. Drifttid och säkerhet",
    siteManagementTitle: "8. Platshantering",
    copyrightContentTitle: "9. Upphovsrätt och äganderätt till innehåll",
    prohibitedActivitiesTitle: "10. Förbjudna aktiviteter",
    featuresBugsTitle: "11. Funktioner och buggar",
    correctionsTitle: "12. RÄTTELSER",
    userDataTitle: "13. Användardata",
    privacyPolicyTitle: "14. Integritetspolicy",
    liabilityTitle: "15. Ansvar",
    miscellaneousTitle: "16. Diverse",
    contactUsTitle: "17. Kontakta oss",
    acceptanceContent1:
      "Genom att använda våra tjänster anger du att du godkänner detta avtal, vilket därmed blir ett bindande avtal mellan dig och Scribify. Du försäkrar att du har laglig rätt att acceptera dessa villkor och bekräftar att du är myndig nog att ingå ett bindande avtal. Scrifys godkännande är uttryckligen villkorat av att du samtycker till alla villkor i detta avtal.",
    acceptanceContent2:
      "Tjänsterna är inte avsedda för och bör inte användas av någon under 18 år. Genom att använda Tjänsterna försäkrar och garanterar du att du uppfyller ovanstående behörighetskrav.",
    acceptanceContent3:
      'Termerna "du", "din", "själv" ska även omfatta dina anställda, ombud, affärsrepresentanter och alla andra individer som du ger åtkomst till Tjänsterna via ditt Konto (enligt definitionen nedan). Du ansvarar för att alla personer som har åtkomst till Tjänsterna via ditt konto är medvetna om dessa Villkor och följer dem.',
    acceptanceContent4:
      "Scribify förbehåller sig rätten att revidera och uppdatera dessa villkor från tid till annan efter eget gottfinnande. Alla ändringar träder i kraft omedelbart efter publicering. Din fortsatta användning av Tjänsterna efter publiceringen av reviderade villkor innebär att du accepterar och samtycker till ändringarna. Du förväntas kontrollera denna sida då och då så att du är medveten om eventuella ändringar, eftersom de är bindande för dig.",
    servicesContent1:
      "Våra tjänster gör det möjligt för användare att omvandla röstkonversationer till transkriberad text som kan sökas, översättas och delas med andra.",
    servicesContent2:
      'Du kan välja om du vill använda gratisversionen av Tjänsterna ("Gratistjänster") eller den prenumerationsbaserade betalversionen av Tjänsterna för vilken du kan vara skyldig att betala avgifter ("Betaltjänsterna").',
    servicesContent3:
      "Vi kommer att göra Tjänsterna tillgängliga för dig. Du ansvarar för att vidta alla nödvändiga åtgärder för att du ska ha tillgång till Tjänsterna.",
    accountTerms1:
      "- Du är ansvarig för att upprätthålla säkerheten för ditt konto. Företaget kan inte och kommer inte att hållas ansvarigt för någon förlust eller skada till följd av att du inte uppfyller denna säkerhetsskyldighet.",
    accountTerms2:
      "- Du får inte använda Tjänsterna för något olagligt, oetiskt eller omoraliskt syfte.",
    accountTerms3:
      "- Du ansvarar för allt innehåll som publiceras och allt aktivitet som sker på ditt konto. Det inkluderar innehåll som publiceras av andra som antingen: (a) har tillgång till dina inloggningsuppgifter; eller (b) har sina egna inloggningar på ditt konto.",
    accountTerms4:
      '- Du måste vara en människa. Konton som registreras av "botar" eller andra automatiserade metoder är inte tillåtna.',
    paymentContent1:
      "- För betalda tjänster som erbjuder en gratis provperiod förklarar vi provperiodens längd när du registrerar dig. Efter provperioden måste du betala i förskott för att fortsätta använda tjänsten. Om du inte betalar upphör dessa tjänster.",
    paymentContent2:
      "- Om du uppgraderar från ett gratisabonnemang till ett betalt abonnemang debiterar vi ditt kort omedelbart och din faktureringscykel börjar på uppgraderingsdagen.",
    paymentContent3:
      "- Alla avgifter är exklusive alla skatter, avgifter eller tullar som påförs av skattemyndigheterna. Vid behov kommer vi att driva in dessa skatter för skattemyndighetens räkning och betala dem till skattemyndigheterna. Annars är du ansvarig för betalning av alla skatter, avgifter eller tullar.",
    paymentContent4:
      "- Inga köp återbetalas. Du kan när som helst avsluta betalda tjänster genom att logga in på ditt konto. För betalda prenumerationer träder din uppsägning i kraft i slutet av den innevarande betalda perioden, om inte annat anges.",
    cancellationContent1:
      "- Om du säger upp Tjänsten före slutet av en betald period träder din uppsägning i kraft omedelbart och du kommer inte att debiteras igen. Vi beräknar inte automatiskt proportionellt oanvänd tid under den senaste faktureringsperioden.",
    cancellationContent2:
      "- Vi har rätt att stänga av eller säga upp ditt konto och neka all nuvarande eller framtida användning av våra Tjänster av vilken anledning som helst när som helst. Avstängning innebär att du inte kommer att kunna komma åt kontot eller något innehåll på kontot. Uppsägning kommer dessutom att resultera i att ditt konto eller din åtkomst till ditt konto raderas, och att allt innehåll på ditt konto förverkas och avstår. Vi förbehåller oss också rätten att neka vem som helst användning av Tjänsterna av vilken anledning som helst när som helst. Vi har denna klausul eftersom det statistiskt sett, av hundratusentals konton på våra Tjänster, finns minst ett som gör något skändligt.",
    cancellationContent3:
      "- Verbala, fysiska, skriftliga eller andra övergrepp (inklusive hot om övergrepp eller vedergällning) mot företagets anställd eller tjänsteman kan leda till omedelbar uppsägning av kontot.",
    submissionsContent:
      'Du bekräftar och samtycker till att alla frågor, kommentarer, förslag, idéer, feedback eller annan information gällande webbplatsen ("Inskick") som du lämnar till oss inte är konfidentiella och ska bli vår egendom. Vi äger exklusiva rättigheter, inklusive alla immateriella rättigheter, och har rätt till obegränsad användning och spridning av dessa inskickade material för alla lagliga ändamål, kommersiella eller andra, utan erkännande eller ersättning till dig. Du avstår härmed från alla ideella rättigheter till sådana inskickade material och garanterar härmed att sådana inskickade material är original från dig eller att du har rätt att skicka in sådana inskickade material. Du samtycker till att det inte ska finnas någon regressrätt mot oss för påstådda eller faktiska intrång eller missbruk av någon äganderätt i dina inskickade material.',
    uptimeContent1:
      "- Din användning av Tjänsterna sker på egen risk. Vi tillhandahåller dessa Tjänster i befintligt skick och i dess tillgänglighet. Vi erbjuder inga servicenivåavtal för de flesta av våra Tjänster, men tar drifttiden för våra applikationer på största allvar.",
    uptimeContent2:
      "- Vi förbehåller oss rätten att tillfälligt inaktivera ditt konto om din användning avsevärt överstiger den typiska användningen för andra kunder av Tjänsterna. Naturligtvis kommer vi att kontakta dig innan vi vidtar några åtgärder, förutom i sällsynta fall där användningsnivån kan påverka Tjänstens prestanda negativt för andra kunder.",
    uptimeContent3:
      "- Vi vidtar många åtgärder för att skydda och säkra dina data genom säkerhetskopior, redundanser och kryptering. Vi tillämpar kryptering för dataöverföring över det offentliga internet.",
    uptimeContent4:
      "- Vi använder tredjepartsleverantörer och hostingpartners för att tillhandahålla nödvändig hårdvara, programvara, nätverk, lagring och relaterad teknik som krävs för att köra Tjänsterna.",
    siteManagementContent:
      "Vi förbehåller oss rätten, men inte skyldigheten, att: (1) övervaka webbplatsen för brott mot dessa användarvillkor; (2) vidta lämpliga rättsliga åtgärder mot alla som, efter eget gottfinnande, bryter mot lagen eller dessa användarvillkor, inklusive, men inte begränsat till, att rapportera en sådan användare till brottsbekämpande myndigheter; (3) efter eget gottfinnande och utan begränsning, vägra, begränsa åtkomst till, begränsa tillgängligheten till eller inaktivera (i den utsträckning det är tekniskt möjligt) något av dina bidrag eller någon del därav; (4) efter eget gottfinnande och utan begränsning, meddelande eller ansvar, ta bort från webbplatsen eller på annat sätt inaktivera alla filer och innehåll som är för stora eller på något sätt är betungande för våra system; och (5) på annat sätt hantera webbplatsen på ett sätt som är utformat för att skydda våra rättigheter och egendom och för att underlätta webbplatsens korrekta funktion.",
    copyrightContent1:
      "- Allt innehåll som publiceras på Tjänsterna måste följa amerikansk upphovsrättslag.",
    copyrightContent2:
      "- Vi gör inga anspråk på några immateriella rättigheter till det material du tillhandahåller Tjänsterna. Allt uppladdat material förblir ditt.",
    copyrightContent3:
      "- Vi förhandsgranskar inte innehåll, men förbehåller oss rätten (men inte skyldigheten) att efter eget gottfinnande vägra eller ta bort innehåll som är tillgängligt via Tjänsten.",
    copyrightContent4:
      "- Namnen, utseendet och känslan av Tjänsterna är upphovsrättsskyddade © till Företaget. Alla rättigheter förbehållna. Du får inte duplicera, kopiera eller återanvända någon del av HTML, CSS, JavaScript eller visuella designelement utan uttryckligt skriftligt tillstånd från Företaget. Du måste begära tillstånd att använda Företagets logotyp eller någon av Tjänstens logotyper i marknadsföringssyfte. Vänligen",
    emailUs: "mejla oss",
    copyrightContent5:
      "förfrågningar om att använda logotyper. Vi förbehåller oss rätten att återkalla detta tillstånd om du bryter mot dessa användarvillkor.",
    copyrightContent6:
      "- Du samtycker till att inte reproducera, duplicera, kopiera, sälja, vidaresälja eller utnyttja någon del av Tjänsterna, användningen av Tjänsterna eller åtkomsten till Tjänsterna utan uttryckligt skriftligt tillstånd från Företaget.",
    copyrightContent7:
      "- Du får inte modifiera en annan webbplats på ett sätt som falskeligen antyder att den är kopplad till Tjänsterna eller Företaget.",
    copyrightContent8:
      "- Vi respekterar andras immateriella rättigheter. Om du anser att material som är tillgängligt på eller via webbplatsen gör intrång i någon upphovsrätt som du äger eller kontrollerar, vänligen omedelbart",
    contactUs: "kontakta oss",
    copyrightContent9:
      "En kopia av din anmälan kommer att skickas till den person som publicerade eller lagrade materialet som adresseras i anmälan. Observera att du enligt tillämplig lag kan hållas ansvarig för skador om du gör väsentliga felaktiga uppgifter i en anmälan. Om du är osäker på om material som finns på eller länkas till av webbplatsen gör intrång i din upphovsrätt bör du därför överväga att först kontakta en advokat.",
    prohibitedActivitiesIntro:
      "Du får inte besöka eller använda webbplatsen för något annat ändamål än det för vilket vi gör webbplatsen tillgänglig. Webbplatsen får inte användas i samband med några kommersiella strävanden förutom de som uttryckligen rekommenderas eller godkänns av oss.",
    prohibitedActivitiesUserAgreement:
      "Som användare av webbplatsen samtycker du till att inte:",
    prohibitedActivity1:
      "- Systematiskt hämta data eller annat innehåll från webbplatsen för att direkt eller indirekt skapa eller sammanställa en samling, sammanställning, databas eller katalog utan skriftligt tillstånd från oss.",
    prohibitedActivity2:
      "- Lura, bedra eller vilseleda oss och andra användare, särskilt i alla försök att få tillgång till känslig kontoinformation såsom användarlösenord.",
    prohibitedActivity3:
      "- Kringgå, inaktivera eller på annat sätt störa säkerhetsrelaterade funktioner på webbplatsen, inklusive funktioner som förhindrar eller begränsar användning eller kopiering av innehåll eller upprätthåller begränsningar för användningen av webbplatsen och/eller innehållet däri.",
    prohibitedActivity4:
      "- Förringa, fläcka ner eller på annat sätt skada oss och/eller webbplatsen, enligt vår uppfattning.",
    prohibitedActivity5:
      "- Använda information som erhållits från webbplatsen för att trakassera, missbruka eller skada en annan person.",
    prohibitedActivity6:
      "- Använda våra supporttjänster på felaktigt sätt eller skicka in falska rapporter om missbruk eller tjänstefel.",
    prohibitedActivity7:
      "- Använda webbplatsen på ett sätt som inte överensstämmer med tillämpliga lagar eller förordningar.",
    prohibitedActivity8:
      "- Delta i obehörig inramning av eller länkning till webbplatsen.",
    prohibitedActivity9:
      "- Ladda upp eller överföra (eller försöka ladda upp eller överföra) virus, trojanska hästar eller annat material, inklusive överdriven användning av versaler och spam (kontinuerlig publicering av repetitiv text), som stör någons oavbrutna användning och njutning av webbplatsen eller som modifierar, försämrar, stör, ändrar eller stör användningen, funktionerna, driften eller underhållet av webbplatsen.",
    prohibitedActivity10:
      "- Använda systemet automatiskt, till exempel använda skript för att skicka kommentarer eller meddelanden, eller använda datautvinning, robotar eller liknande verktyg för datainsamling och datautvinning.",
    prohibitedActivity11:
      "- Ta bort meddelandet om upphovsrätt eller annan äganderätt från allt innehåll.",
    prohibitedActivity12:
      "- Försöka utge sig för att vara en annan användare eller person eller använda en annan användares användarnamn.",
    prohibitedActivity13:
      '- Ladda upp eller överföra (eller försöka ladda upp eller överföra) material som fungerar som en passiv eller aktiv informationsinsamlings- eller överföringsmekanism, inklusive, men inte begränsat till, tydliga grafikutbytesformat ("gifs"), 1×1-pixlar, webbuggar, cookies eller andra liknande enheter (ibland kallade "spionprogram" eller "passiva insamlingsmekanismer" eller "pcms").',
    prohibitedActivity14:
      "- Störa, avbryta eller skapa en otillbörlig belastning på webbplatsen eller de nätverk eller tjänster som är anslutna till webbplatsen.",
    prohibitedActivity15:
      "- Trakassera, irritera, skrämma eller hota någon av våra anställda eller ombud som är engagerade i att tillhandahålla någon del av webbplatsen till dig.",
    prohibitedActivity16:
      "- Försöka kringgå alla åtgärder på webbplatsen som är utformade för att förhindra eller begränsa åtkomst till webbplatsen, eller någon del av webbplatsen.",
    prohibitedActivity17:
      "- Kopiera eller anpassa webbplatsens programvara, inklusive men inte begränsat till Flash, PHP, HTML, JavaScript eller annan kod.",
    prohibitedActivity18:
      "- Förutom vad som är tillåtet enligt tillämplig lag, dechiffrera, dekompilera, disassemblera eller bakåtkompilera någon av de program som ingår i eller på något sätt utgör en del av webbplatsen.",
    prohibitedActivity19:
      "- Förutom i den mån det är resultatet av användning av vanliga sökmotorer eller webbläsare, använda, starta, utveckla eller distribuera automatiserade system, inklusive men inte begränsat till spindelprogram, robotar, fuskverktyg, skrapprogram eller offline-läsare som har åtkomst till webbplatsen, eller använda eller starta obehöriga skript eller annan programvara.",
    prohibitedActivity20:
      "- Använd en inköpsagent eller inköpsagent för att göra köp på webbplatsen.",
    prohibitedActivity21:
      "- Använda webbplatsen på ett obehörigt sätt, inklusive att samla in användarnamn och/eller e-postadresser till användare elektroniskt eller på annat sätt i syfte att skicka oönskad e-post, eller att skapa användarkonton automatiskt eller under falska förespeglingar.",
    prohibitedActivity22:
      "- Använda webbplatsen som en del av ett försök att konkurrera med oss eller på annat sätt använda webbplatsen och/eller innehållet för intäktsgenererande ändamål eller kommersiella företag.",
    prohibitedActivity23:
      "- Använda webbplatsen för att annonsera eller erbjuda försäljning av varor och tjänster.",
    prohibitedActivity24: "- Sälja eller på annat sätt överföra din profil.",
    featuresContent1:
      "Vi utformar våra tjänster med omsorg, baserat på vår egen erfarenhet och erfarenheterna från kunder som delar med sig av sin tid och feedback. Det finns dock ingen tjänst som tillfredsställer alla. Vi garanterar inte att våra tjänster kommer att uppfylla dina specifika krav eller förväntningar.",
    featuresContent2:
      "Vi testar också alla våra funktioner innan vi skickar dem. Precis som med all programvara har våra tjänster oundvikligen vissa buggar. Vi spårar de buggar som rapporteras till oss och arbetar med dem, särskilt de som rör säkerhet eller integritet. Alla rapporterade buggar kommer inte att åtgärdas och vi garanterar inte helt felfria tjänster.",
    correctionsContent1:
      "Det kan finnas information på webbplatsen som innehåller typografiska fel, felaktigheter eller utelämnanden, inklusive beskrivningar, priser, tillgänglighet och diverse annan information. Vi förbehåller oss rätten att korrigera eventuella fel, felaktigheter eller utelämnanden och att ändra eller uppdatera informationen på webbplatsen när som helst, utan föregående meddelande.",
    correctionsContent2:
      "Vi kan inte garantera att webbplatsen alltid kommer att vara tillgänglig. Vi kan uppleva problem med hårdvara, programvara eller andra problem, eller behöva utföra underhåll relaterat till webbplatsen, vilket kan resultera i avbrott, förseningar eller fel. Vi förbehåller oss rätten att ändra, revidera, uppdatera, stänga av, avbryta eller på annat sätt modifiera webbplatsen när som helst och av vilken anledning som helst utan att meddela dig. Du samtycker till att vi inte har något ansvar för någon förlust, skada eller besvär som orsakas av din oförmåga att komma åt eller använda webbplatsen under driftstopp eller avbrott på webbplatsen. Ingenting i dessa användarvillkor ska tolkas som en förpliktelse för oss att underhålla och stödja webbplatsen eller att tillhandahålla några korrigeringar, uppdateringar eller utgåvor i samband därmed.",
    userDataContent:
      "Vi kommer att behålla vissa uppgifter som du överför till webbplatsen i syfte att hantera webbplatsens prestanda, såväl som uppgifter som rör din användning av webbplatsen. Även om vi regelbundet säkerhetskopierar data är du ensam ansvarig för alla uppgifter som du överför eller som rör aktivitet du har utfört med hjälp av webbplatsen. Du samtycker till att vi inte har något ansvar gentemot dig för förlust eller korruption av sådana uppgifter, och du avstår härmed från all rätt att väcka talan mot oss till följd av sådan förlust eller korruption av sådana uppgifter.",
    privacyPolicyContent1:
      "Vi bryr oss om dataskydd och säkerhet. Vänligen granska våra",
    privacyPolicy: "Integritetspolicy",
    privacyPolicyContent2:
      "Genom att använda webbplatsen godkänner du att vara bunden av vår integritetspolicy, som är införlivad i dessa användarvillkor. Observera att webbplatsen finns i USA. Om du besöker webbplatsen från någon annan region i världen med lagar eller andra krav som reglerar insamling, användning eller utlämnande av personuppgifter som skiljer sig från tillämpliga lagar i USA, överför du genom din fortsatta användning av webbplatsen dina uppgifter till USA, och du samtycker till att dina uppgifter överförs till och behandlas i USA.",
    liabilityIntro:
      "Vi nämner ansvar genomgående i dessa villkor, men för att sammanfatta allt i ett avsnitt:",
    liabilityContent:
      "Du förstår och samtycker uttryckligen till att Bolaget inte ska vara ansvarigt, vare sig enligt lag eller billighetsprincipen, gentemot dig eller någon tredje part för direkta, indirekta, tillfälliga, utebliven vinst, särskilda, följdskador, straffskadestånd eller exemplariska skador, inklusive, men inte begränsat till, skador för utebliven vinst, goodwill, användning, data eller andra immateriella förluster (även om Bolaget har informerats om möjligheten till sådana skador), till följd av: (1) användning eller oförmåga att använda Tjänsterna; (2) fel, misstag eller felaktigheter i innehåll och material; (3) personskada eller egendomsskada, av någon art, till följd av din åtkomst till och användning av webbplatsen; (4) kostnaden för anskaffning av ersättningsvaror och -tjänster till följd av varor, data, information eller tjänster som köpts eller erhållits eller meddelanden som mottagits eller transaktioner som ingåtts via eller från Tjänsterna; (5) obehörig åtkomst till eller användning av våra säkra servrar och/eller all personlig information och/eller finansiell information som lagras däri; (6) avbrott eller upphörande av överföring till eller från webbplatsen; (7) eventuella buggar, virus, trojanska hästar eller liknande som kan överföras till eller via webbplatsen av tredje part, och/eller; (8) eventuella fel eller utelämnanden i innehåll och material eller för förlust eller skada av något slag som uppstår till följd av användningen av innehåll som publicerats, överförts eller på annat sätt gjorts tillgängligt via webbplatsen; (9) uttalanden eller beteende från tredje part i tjänsten; (10) eller andra frågor som rör dessa användarvillkor eller tjänsterna, oavsett om det är ett kontraktsbrott, skadeståndsgrundande handling (inklusive aktiv eller passiv vårdslöshet) eller någon annan ansvarsteori.",
    miscellaneousContent:
      "Dessa användarvillkor och eventuella policyer eller driftsregler som publiceras av oss på webbplatsen eller med avseende på webbplatsen utgör hela avtalet och överenskommelsen mellan dig och oss. Vår underlåtenhet att utöva eller genomdriva någon rättighet eller bestämmelse i dessa användarvillkor ska inte fungera som ett avstående från sådan rättighet eller bestämmelse. Dessa användarvillkor gäller i den utsträckning som lagen tillåter. Vi kan när som helst överlåta några eller alla våra rättigheter och skyldigheter till andra. Vi ska inte vara ansvariga för någon förlust, skada, försening eller underlåtenhet att agera orsakad av någon orsak utanför vår rimliga kontroll. Om någon bestämmelse eller del av en bestämmelse i dessa användarvillkor bedöms vara olaglig, ogiltig eller inte verkställbar, anses den bestämmelsen eller delen av bestämmelsen vara avskiljbar från dessa användarvillkor och påverkar inte giltigheten och verkställbarheten av några återstående bestämmelser. Det finns inget joint venture-, partnerskaps-, anställnings- eller agenturförhållande som skapas mellan dig och oss till följd av dessa användarvillkor eller användning av webbplatsen. Du samtycker till att dessa användarvillkor inte ska tolkas mot oss på grund av att vi har utarbetat dem. Du avstår härmed från alla försvar du kan ha baserat på den elektroniska formen av dessa användarvillkor och avsaknaden av undertecknande av parterna häri för att tillämpa dessa användarvillkor.",
    contactUsContent1:
      "Om du har en fråga om någon av användarvillkoren, vänligen",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Drag",
    UnlimitedTranscription: "Obegränsad transkription",
    BulkUpload: "Massuppladdning",
    Accuracy: "96 % noggrannhet",
    Pricing: "Prissättning",
    UseCases: "Användningsfall",
    AllUseCases: "Alla användningsfall",
    Podcasters: "Poddare",
    Journalists: "Journalister",
    ContentCreators: "Innehållsskapare",
    Researchers: "Forskare",
    BusinessTeams: "Affärsteam",
    Educators: "Lärare",
    Resources: "Resurser",
    YouTubetoMP4: "YouTube till MP4",
    StartFreeTrial: "Prova det gratis"
  },
  Footer: {
    des: "Världens första verkligt obegränsade AI-transkriptionstjänst. Inga tak, inga begränsningar, bara frihet att skapa.",
    Features: "Drag",
    UseCases: "Användningsfall",
    Company: "Företag",
    featureMenus: ["Obegränsad transkription", "Massuppladdning", "96 % noggrannhet"],
    useCaseMenus: [
          "Alla användningsfall",
          "Poddare",
          "Journalister",
          "Innehållsskapare",
          "Forskare",
          "Affärsteam",
          "Lärare"
        ],
    companyMenus: [
          "Om",
          "Prissättning",
          "Privatliv",
          "Villkor"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ingen mer "krympningsinflation" - faktiskt obegränsad',
      h1: "Sluta betala för gränser:",
      gradient: "Verkligen obegränsad AI-transkription",
      subtitle: "Vår AI transkriberar video och konverterar ljud till text och bearbetar 50 filer samtidigt utan månadstak. Transkribering som verkligen skalar med dig.",
      FreeTrial: "Prova gratis - Inget kreditkort",
      HowWorks: "Se hur det fungerar",
      Unlimited: "Obegränsade filuppladdningar",
      NoCap: "Ingen månatlig minutgräns",
      Hour: "10-timmarsfiler stöds",
      ExploreUseCases: "Utforska användningsfall"
    },
    Stats: {
      monthlyMinutes: "Månadsminuter",
      fileUploads: "Filuppladdningar",
      batchProcessing: "Batchbearbetning",
      maxFileLength: "Max fillängd"
    },
    FeaturesGrid: {
      try_now: "Prova det nu",
      no_signup: "Ingen registrering krävs",
      experience_unltd: "Upplev verkligt obegränsad transkription",
      upload_50: "Ladda upp upp till 50 filer samtidigt, här",
      no_limits: "Avancerad",
      no_surprises: "AI-transkription",
      transparency: "Inga fler dolda gränser, inga fler överraskningar - Medan andra i tysthet minskar dina minuter eller döljer tak i det finstilta, tror vi på radikal transparens",
      feat_unltd: "Egentligen obegränsat",
      feat_unltd_desc: 'Ingen "policy för rättvis användning" begravd i termer. Inga lagringstak förklädda som "obegränsade". Ladda upp hela ditt arkiv, transkribera allt för alla dina ljudtranskriberingsbehov. Vi menar det.',
      feat_bulk: "Frihet i massuppladdning",
      feat_bulk_desc: 'Trött på "3 livstidsimporter" eller "10 filer per månad"? Ladda upp 50 filer samtidigt, så många gånger du behöver. Perfekt för att bearbeta eftersläpningar.',
      feat_batch: "Batchbearbetning",
      feat_batch_desc: "Bearbeta hela din poddsäsong över en natt. Ladda upp 50 intervjuer samtidigt. Låt vår AI arbeta medan du sover. Vakna upp till färdiga transkriptioner.",
      feat_accuracy: "96 % noggrannhet",
      feat_accuracy_desc: "Vår branschledande AI transkriberar ljud med smart interpunktion, högtalardagbok för upp till 20 högtalare och hanterar accenter och tekniska termer felfritt.",
      feat_langs: "100+ språk",
      feat_langs_desc: "Transkribera video och ljud på över 100 språk, översätt till över 249 språk. Inga extra avgifter för olika språk. Globalt innehåll, ett enkelt pris.",
      feat_pro: "Professionella funktioner",
      feat_pro_desc: "Tidsstämplar på ordnivå för exakt positionering av ljud/video, korrekt talaridentifiering även vid snabba samtalsväxlingar och perfekt formaterad text med stycken, meningar och interpunktion för enkel läsning.",
        features: "Drag"
    },
    UseCases: {
      built_for: "Bulk",
      "heavy_users": "Ljud- och videotranskription",
      "join_users": 'Byggt för flitiga användare som du – Gå med i YouTubers, innehållsskapare och poddare som bytte från "shrinkflation"-tjänster',
      "podcasters": {
        "title": "Poddare",
        "des": "Ladda upp hela din bakkatalog. Skapa programanteckningar för varje avsnitt. Du slipper välja vilka avsnitt som ska transkriberas."
      },
      "content_creators": {
        "title": "Innehållsskapare",
        "des": "Förvandla ditt videobibliotek till sökbar text genom att använda vår tjänst för att transkribera videofiler automatiskt. Generera textning för allt. Ingen minuträkning, bara skapande."
      },
      "journalists": {
        "title": "Journalister",
        "des": 'Ladda upp alla dina intervjuer på en gång. Inga fler hinder som "10 filer per månad" när deadline är över. Bearbeta allt.'
      },
      researchers: {
        title: "Forskare",
        des: "Transkribera timmar av fokusgrupper och intervjuer. Ladda upp hela din studie på en gång. Få korrekt talaridentifiering."
      },
      business_teams: {
        title: "Affärsteam",
        des: "Spela in varje samtal utan att oroa dig för begränsningar. Få AI-insikter om alla konversationer, inte bara ett fåtal utvalda."
      },
      educators: {
        title: "Lärare",
        des: "Transkribera hela föreläsningsserien. Gör allt innehåll tillgängligt. Inget val mellan kurser på grund av minutbegränsningar."
      }
    },
    Testimonials: {
      title: "Älskad av",
      highlighted_users: "50 000+ användare",
      subtitle: "Se varför proffs väljer NeverCap framför begränsade alternativ",
      Mike: {
        "text": "Herregud, det här fungerar faktiskt! Har gjort en podcast i 3 år och transkriberat allt manuellt som en idiot. Laddade upp 6 avsnitt samtidigt och det separerade mig och min medvärd perfekt. Kaféavsnittet jag trodde var förstört? Kristallklar transkription. Jag tänker aldrig gå tillbaka till att skriva ut det här själv.",
        "author": "Mike Rodriguez",
        "role": "Podcastvärd"
      },
      Sarah: {
        "text": "Jag undervisar online och behövde textning till mina videor. Jag provade tre andra verktyg som antingen hade konstiga begränsningar eller tog en evighet. Det här bara... fungerar? Laddade upp min spanska föreläsning och fick perfekta textningar på typ två minuter. Mina elever med hörselproblem är så nöjda. Önskar att jag hittade det här tidigare!",
        "author": "Sara Chen",
        "role": "Online-lärare"
      },
      Jessica: {
        "text": "Har använt det här för mina intervjuer och det är otroligt hur exakt det är. Hade en två timmar lång intervju på bruten engelska + spanska och allt blev rätt, till och med tidsstämplarna. Brukade betala min praktikant 200 dollar/månad bara för att transkribera saker. Det här sparar mig bokstavligen pengar varje månad.",
        "author": "Jessica Park",
        "role": "Frilansjournalist"
      }
    },
    PricingPreview: {
      "title": "Transparent prissättning",
      "highlighted_text": "Inga dolda versaler",
      "subtitle": "Välj din plan. Inga asterisker, inget finstilt, inga överraskningar."
    },
    FAQSection: {
      "title": "Vanliga frågor",
      "titleHighlight": "Frågor",
      "questions": [
            {
              "q": "AI-transkription",
              "question": "Vad är AI-transkription och hur fungerar det?",
              "answer": "AI-transkription är processen att automatiskt konvertera ljud till text med hjälp av avancerad artificiell intelligens. På NeverCap laddar du helt enkelt upp dina filer, och vår AI transkriberar innehållet med upp till 96 % noggrannhet. Vår tjänst är utformad för att transkribera videofiler (som MP4, MOV) och ljudfiler (som MP3, WAV) till läsbar, redigerbar text, komplett med talaretiketter och tidsstämplar."
            },
            {
              "q": "obegränsad_policy",
              "question": "Är det verkligen obegränsat? Vad är haken?",
              "answer": "Ja, det är verkligen obegränsat! Inga månatliga minutersgränser, inga avgifter för överanvändning. De enda begränsningarna är tekniska: enskilda filer kan vara upp till 10 timmar långa eller 5 GB stora, och du kan bearbeta 50 filer samtidigt. Men du kan ladda upp så många batcher du vill, hela månaden lång."
            },
            {
              "q": "noggrannhet",
              "question": "Hur noggrann är transkriptionen?",
              "answer": "Vi garanterar 96 % noggrannhet för klart ljud. Vår AI är tränad på miljontals timmar av varierat innehåll och hanterar accenter, tekniska termer och flera talare exceptionellt bra. För utmanande ljud hjälper våra smarta förbättringsfunktioner till att förbättra resultaten."
            },
            {
              "q": "språk",
              "question": "Vilka språk stöder ni?",
              "answer": "Vi stöder transkription på över 100 språk, inklusive engelska, spanska, mandarin, hindi, arabiska, franska med flera. Dessutom kan du översätta dina transkriptioner till 249 olika språk, vilket gör det perfekt för globalt innehåll."
            },
            {
              "q": "hastighet",
              "question": "Hur snabb är transkriptionen?",
              "answer": "Blixtsnabbt! En 1 timmes lång ljudfil bearbetas vanligtvis på under 5 minuter. Med batchbehandling kan du ladda upp 50 filer samtidigt och låta dem bearbetas parallellt. De flesta användare vaknar upp och finner hela sitt bibliotek transkriberat över natten."
            },
            {
              "q": "annullering",
              "question": "Kan jag avbryta när som helst?",
              "answer": "Absolut! Inga kontrakt, inga avbokningsavgifter. Du kan uppgradera, nedgradera eller avsluta din prenumeration när som helst från din instrumentpanel. Om du avslutar prenumerationen behåller du åtkomsten till slutet av din faktureringsperioden."
            },
            {
              "q": "säkerhet",
              "question": "Är mina uppgifter säkra?",
              "answer": "Din säkerhet är vår prioritet. Vi är SOC 2-certifierade, använder 256-bitars kryptering för all data och använder aldrig ditt innehåll för att träna våra modeller. Du kan radera dina filer när som helst, och vi rensar dem automatiskt efter 30 dagar. GDPR- och CCPA-kompatibla."
            },
            {
              "q": "export_formats",
              "question": "Vilka exportformat finns tillgängliga?",
              "answer": "Ladda ner dina transkriptioner i valfritt format: PDF, Word (DOCX), Excel, CSV, SRT-undertexter, vanlig text (TXT) och VTT-undertexter. Perfekt för vilket arbetsflöde du än har."
            },
            {
              "q": "filformat",
              "question": "Vilka ljud- och videofiler kan jag ladda upp?",
              "answer": "Vi stöder praktiskt taget alla ljud- och videoformat du kan stöta på: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV med flera. Om du kan spela upp det kan vi transkribera det."
            }
          ]
    },
    CTASection: {
      "title": "Redo att bryta dig fri från begränsningar?",
      "subtitle": "Gå med i fler än 50 000 yrkesverksamma som har bytt till verkligt obegränsad transkription",
      "button": "Prova NeverCap gratis",
      "disclaimer": "Inget kreditkort krävs för gratisplanen • Uppgradera när som helst för obegränsad åtkomst"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ingen mer "krympningsinflation"',
      heroTitleLine1: "Verkligen obegränsad",
      heroTitleLine2: "AI-transkription",
      heroSubtitle: "Medan Trint begränsar dig till 50 timmar och Otter till 10 filer per månad, levererar vi det vi faktiskt lovar: obegränsad transkription utan dolda begränsningar.",
      primaryCta: "Prova gratis - Inget kreditkort",
      secondaryCta: "Se sanningen",
      comparisonBadLabel: "Vad andra gör",
      comparisonBadTitle: "Dolda gränser överallt",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Obegränsat" = 50 timmar/månadsgräns',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Utter:",
      comparisonBadItem2Text: "3 livstidsimporter (gratis), 10/månad (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Eldflugor:",
      comparisonBadItem3Text: "800 minuters lagringsgräns",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Beskrivning:",
      comparisonBadItem4Text: "Max 30 timmar/månad",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Dolt i villkoren",
      comparisonGoodLabel: "Vad vi gör",
      comparisonGoodTitle: "Egentligen obegränsat",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Inga månatliga minuttak",
      comparisonGoodItem1Text: "någonsin",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Obegränsade filuppladdningar",
      comparisonGoodItem2Text: "alltid",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Inga lagringsgränser",
      comparisonGoodItem3Text: "alls",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 filer batchuppladdning",
      comparisonGoodItem4Text: "när som helst",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Transparent policy",
      comparisonGoodItem5Text: "uppriktig",
      feature1Label: "Inga gränser",
      feature1TitlePart1: "Transkribera 1 000 timmar?",
      feature1TitlePart2: "Samma pris.",
      feature1Description: "Sluta räkna minuter. Sluta titta på versaler. Oavsett om du transkriberar 10 timmar eller 10 000 timmar per månad betalar du samma fasta pris. Inga avgifter för överskridande. Inga överraskande räkningar.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Inga knep med "fair use"-policyn',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ingen strypning efter X timmar",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ingen ångest i slutet av månaden",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Månatliga timmar",
      feature1Stat2Number: "0 kr",
      feature1Stat2Label: "Avgifter för överskott",
      feature1Stat3Number: "Dygnet runt",
      feature1Stat3Label: "Ladda upp när som helst",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Transparent",
      feature2Label: "Massfrihet",
      feature2TitlePart1: "Ladda upp din",
      feature2TitlePart2: "Hela arkivet",
      feature2Description: "Otter ger dig 3 livstidsimporter gratis, 10 per månad på Pro. Vi ger dig obegränsat. Ladda upp din podcast-backlog, alla dina intervjuer, år av inspelningar. Inga begränsningar.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 filer per batch",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10-timmarsfiler stöds",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Process medan du sover",
      feature2TableRow1Label: "Fri från utter",
      feature2TableRow1Value: "3 livstidsimporter",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 filer/månad",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Maximalt 50 timmar/månad",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Verkligen obegränsat ✓",
      feature3Label: "Socialt bevis",
      feature3TitlePart1: "Användare är",
      feature3TitlePart2: "Byte dagligen",
      feature3Description: '"Jag betalar 100 dollar/år för Otter och de begränsar mig till 10 filimporter per månad. I samma ögonblick som det finns ett alternativ med obegränsad import är jag borta!" - Riktig Reddit-användare',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50 000+ användare har bytt",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Från Otters "krympningsinflation"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Kommer aldrig tillbaka",
      feature3Stat1Number: "50 000+",
      feature3Stat1Label: "Nöjda användare",
      feature3Stat2Number: "1 miljon+",
      feature3Stat2Label: "Bearbetade filer",
      feature3Stat3Number: "96 %",
      feature3Stat3Label: "Noggrannhet",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Inga dolda avgifter",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuter/Månad",
      trustBadge2Number: "100+",
      trustBadge2Label: "Språk",
      trustBadge3Number: "96 %",
      trustBadge3Label: "Noggrannhet",
      trustBadge4Number: "50",
      trustBadge4Label: "Batchuppladdning",
      ctaTitle: "Sluta betala för Fake Unlimited",
      ctaSubtitle: "Gå med tusentals som bytte till verkligt obegränsad transkription",
      finalCta: "Prova NeverCap gratis"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Frihet i massuppladdning",
      heroTitleLine1: "Ladda upp 50 filer.",
      heroTitleHighlight: "Bearbeta allt.",
      heroSubtitle: "Otter ger dig 3 livstidsimporter. TRE. Under hela din livstid. Vi ger dig obegränsade uppladdningar, 50 filer åt gången, när du än behöver.",
      primaryCta: "Starta massuppladdning →",
      secondaryCta: "Se gränserna",
      redditQuote: '"Jag har 3 års poddavsnitt att transkribera. Otter säger att jag får 3 livstidsimporter. TRE. Det här är förolämpande."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Verklig frustration från r/podcasting",
      comparisonSectionTitlePart1: "De",
      comparisonSectionTitleHighlight: "Löjliga gränser",
      comparisonSectionTitlePart2: "De påtvingar",
      comparisonSubtitle: "Hur konkurrenter begränsar din möjlighet att bearbeta innehåll",
      limitCard1Service: "Fri från utter",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Livstidsimport",
      limitCard1DescriptionLine2: "(Ja, för HELA ditt liv)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Filer per månad",
      limitCard2DescriptionLine2: "(100 USD/årsplan)",
      limitCard3Service: "Beskrivning",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Fil i taget",
      limitCard3DescriptionLine2: "(Sekventiell uppladdning)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Obegränsade uppladdningar",
      limitCard4DescriptionLine2: "50 filer per batch",
      feature1Label: "Batch Power",
      feature1TitlePart1: "Bearbeta din",
      feature1TitleHighlight: "Hela arkivet",
      feature1TitlePart2: "Över natten",
      feature1Description: 'Ladda upp 50 filer innan du går och lägger dig. Vakna upp och slutför transkriptionerna. Ingen kö, ingen väntetid, inga "uppgradera"-meddelanden. Bara ren processorkraft nära till hands.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samtidiga uppladdningar",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Parallell bearbetning",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10-timmarsfiler stöds",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Max 5 GB per fil",
      uploadAnimationText1: "50 filer",
      uploadAnimationText2: "Släpp och bearbeta",
      fileBadge1: "podcast_avsnitt_001.mp3",
      fileBadge2: "intervju_raw.mp4",
      fileBadge3: "möte_2024.wav",
      fileBadge4: "föreläsning_full.mov",
      fileBadge5: "+ 46 filer till...",
      feature2Label: "Hastighet",
      feature2TitlePart1: "Från uppladdning till",
      feature2TitleHighlight: "Klart på timmar",
      feature2Description: "Vår parallella bearbetningsinfrastruktur innebär att dina 50 filer inte står i kö. De transkriberas alla samtidigt. Det som brukade ta veckor tar nu timmar.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1-timmars fil: 5 minuter",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 filer: bearbetas parallellt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "E-postmeddelande när det är klart",
      timelineStep1Icon: "1",
      timelineStep1Title: "Ladda upp",
      timelineStep1Time: "0 minuter",
      timelineStep2Icon: "2",
      timelineStep2Title: "Bearbetning",
      timelineStep2Time: "5–30 minuter",
      timelineStep3Icon: "3",
      timelineStep3Title: "AI-magi",
      timelineStep3Time: "30–60 minuter",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Komplett",
      timelineStep4Time: "< 2 timmar",
      feature3Label: "Frihet",
      feature3TitlePart1: "Inga köer.",
      feature3TitleHighlight: "Ingen väntetid.",
      feature3TitlePart2: "Inga gränser.",
      feature3Description: 'Medan andra låter dig vänta i virtuella köer eller uppgradera för "prioriterad bearbetning", behandlar vi varje uppladdning med brådska. Ditt innehåll är viktigt, och det borde inte vänta.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Inga prioritetsnivåer",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Samma hastighet för alla",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Ladda upp när som helst, dygnet runt",
      feature3VisualNumber: "Dygnet runt",
      feature3VisualTitle: "Alltid redo",
      feature3VisualSubtext: "Ladda upp närhelst inspirationen slår till",
      useCasesTitlePart1: "Perfekt för",
      useCasesTitleHighlight: "Tunga uppladdare",
      useCasesSubtitle: "Verkliga scenarier där massuppladdning räddar dagen",
      useCase1Title: "Podcastarkiv",
      useCase1Description: "Ladda upp 3 års avsnitt samtidigt. Skapa transkriptioner för hela din tidigare katalog. Generera SEO-innehåll för varje avsnitt.",
      useCase2Title: "Kursskapande",
      useCase2Description: "Bearbeta alla dina föreläsningsvideor samtidigt. Skapa tillgängliga transkript för studenter. Bygg sökbart kursmaterial.",
      useCase3Title: "Intervjueftersläpning",
      useCase3Description: "Rensa bort det där berget av otranskriberade intervjuer. Bearbeta veckors research på timmar. Möt din deadline utan panik.",
      useCase4Title: "YouTube-biblioteket",
      useCase4Description: "Generera textning för hela din kanal. Skapa blogginlägg från videoinnehåll. Förbättra SEO för alla videor.",
      useCase5Title: "Mötesarkiv",
      useCase5Description: "Ladda upp månader av inspelade möten. Skapa sökbara mötesanteckningar. Tappa aldrig bort viktiga beslut igen.",
      useCase6Title: "Forskningsdata",
      useCase6Description: "Bearbeta fokusgrupper i bulk. Transkribera alla deltagarintervjuer. Analysera kvalitativa data effektivt.",
      ctaTitle: "Sluta tigga om fler uppladdningar",
      ctaSubtitle: "Få obegränsad massbearbetning som faktiskt fungerar",
      finalCta: "Ladda upp 50 filer nu →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Branschledande noggrannhet",
      heroTitleLine1: "96 % noggrannhet.",
      heroTitleHighlight: "Varje ord räknas.",
      heroSubtitle: "Branschledande noggrannhet på 12 huvudspråk. Tidsstämplar på ordnivå för perfekt synkronisering. Smart talaridentifiering som hanterar snabba samtal. Professionell formatering som faktiskt är läsbar.",
      primaryCta: "Testa vår noggrannhet →",
      secondaryCta: "Se språk",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Noggrannhet i",
      statCard1DescriptionLine2: "12 huvudspråk",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Noggrannhet med",
      statCard2DescriptionLine2: "Accenter och dialekter",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Ordnivå",
      statCard3DescriptionLine2: "Tidsstämpelns precision",
      languageSectionTitlePart1: "96 % noggrannhet",
      languageSubtitle: "Professionell transkription för globalt innehåll",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "Engelska",
      languageCard1Accuracy: "96 % noggrannhet",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "Spanska",
      languageCard2Accuracy: "96 % noggrannhet",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "96 % noggrannhet",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "franska",
      languageCard4Accuracy: "96 % noggrannhet",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Tyska",
      languageCard5Accuracy: "96 % noggrannhet",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japanska",
      languageCard6Accuracy: "96 % noggrannhet",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Koreanska",
      languageCard7Accuracy: "96 % noggrannhet",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portugisiska",
      languageCard8Accuracy: "96 % noggrannhet",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Ryska",
      languageCard9Accuracy: "96 % noggrannhet",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "Italienska",
      languageCard10Accuracy: "96 % noggrannhet",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "holländska",
      languageCard11Accuracy: "96 % noggrannhet",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arabiska",
      languageCard12Accuracy: "96 % noggrannhet",
      moreLanguagesText: "+ 88 fler språk stöds med 95%+ noggrannhet",
      feature1Label: "Precision",
      feature1TitlePart1: "Ordnivå",
      feature1TitleHighlight: "Tidsstämplar",
      feature1Description: "Varje ord är perfekt synkroniserat med sin ljudposition. Skapa klickbara transkriptioner, generera exakta undertexter eller hoppa till exakta ögonblick i dina inspelningar. 100 ms precision som proffs litar på.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100ms tidsstämpelprecision",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Perfekt för videoredigering",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klickbara interaktiva transkript",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Bildruteexakta undertexter",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Talare 1",
      transcriptLine1Text: "Välkommen till dagens poddavsnitt.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Högtalare 2",
      transcriptLine2Text: "Tack för att jag fick vara med i programmet!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Talare 1",
      transcriptLine3Text: "Låt oss dyka in i vårt huvudämne...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Högtalare 2",
      transcriptLine4Text: "Absolut, jag är ivrig att diskutera detta.",
      feature2Label: "Smart AI",
      feature2TitlePart1: "Handtag",
      feature2TitleHighlight: "Snabba samtal",
      feature2Description: "Vår AI identifierar korrekt talare även vid överlappande tal, avbrott och snabba samtal fram och tillbaka. Perfekt för intervjuer, poddsändningar och möten där talare ofta avbryter.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identifierar upp till 20 högtalare",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Hanterar avbrott perfekt",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Fungerar med överlappande tal",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Bibehåller noggrannhet i överhörning",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Identifierade talare",
      feature2VisualSubtext: "Även i snabba samtal",
      feature3Label: "Läsbarhet",
      feature3TitlePart1: "Perfekt",
      feature3TitleHighlight: "Formaterad text",
      feature3Description: "Inga fler väggar av text. Vår AI lägger automatiskt till stycken, meningar och interpunktion exakt där de hör hemma. Resultatet? Transkriptioner som faktiskt är trevliga att läsa och lätta att skanna.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Smarta styckebrytningar",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Noggrann interpunktion",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Korrekt versaler",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Ren, skannbar utskrift",
      formattingTitle: "Före och efter",
      formattingBeforeLabel: "❌ Andra:",
      formattingBeforeText: "Så idag ska vi prata om de nya funktionerna vi har arbetat med. Jag tror att ni verkligen kommer att gilla dem. De har efterfrågats av användare länge och vi har äntligen fått dem klara.",
      formattingAfterLabel: "✓ AldrigTillFörsäljning:",
      formattingAfterText: "Så idag ska vi prata om de nya funktionerna vi har arbetat med. Jag tror att ni verkligen kommer att gilla dem. De har efterfrågats av användare länge, och vi har äntligen fått dem färdiga.",
      comparisonSubtitle: "Noggrannhet",
      comparisonSectionTitle: "Jämförelse",
      comparisonDes: "Se hur vi står oss mot konkurrenterna",
      tableHeader1: "Särdrag",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Beskrivning",
      tableHeader5: "Varv",
      tableRow1Feature: "Noggrannhet (klart ljud)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Tidsstämplar på ordnivå",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Talaridentifiering",
      tableRow3NeverCap: "20 högtalare",
      tableRow3Otter: "16 högtalare",
      tableRow3Descript: "10 högtalare",
      tableRow3Rev: "✕",
      tableRow4Feature: "Hanterar överhörning",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Begränsad",
      tableRow4Descript: "Begränsad",
      tableRow4Rev: "✕",
      tableRow5Feature: "Smart formatering",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Grundläggande",
      tableRow6Feature: "12 språk vid 96 %",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Upplev 96 % noggrannhet",
      ctaSubtitle: "Ladda upp ditt mest utmanande ljud och se skillnaden",
      finalCta: "Testa vår noggrannhet nu →",
        languageSectionTitlePart2: "på 12 huvudspråk"
    }
  },
  Pricing: {
    Hero: {
      "title": "Enkel, transparent prissättning",
      "highlighted_text": "Inga dolda versaler",
      "description": "Välj det abonnemang som passar dina behov. Uppgradera eller nedgradera när som helst. Inga kontrakt, inga överraskningar."
    },
    Cards: {
      "title": "Enkel, transparent prissättning.",
      "highlighted_text": "Inga dolda bokstäver.",
      "description": "Välj det abonnemang som passar dina behov. Uppgradera eller nedgradera när som helst. Inga kontrakt, inga överraskningar.",
      "plans": [
            {
              "name": "Gratis",
              "price": "0 kr",
              "period": "månad",
              "discount": "Perfekt för att testa vår tjänst",
              "limits": {
                "title": "Dagliga gränser",
                "items": [
                  "3 filer/dag (≈90 min totalt/dag)",
                  "Upp till 30 min per fil (≤250 MB)",
                  "Ladda upp 1 fil åt gången",
                  "Standardprioritetskö"
                ]
              },
              "features": {
                "title": "Drag",
                "items": [
                  "100+ språk",
                  "Högtalaretiketter",
                  "Översättning",
                  "Alla exportformat"
                ]
              },
              "cta": {
                "text": "Börja gratis. Inget kreditkort.",
                "button": "Börja gratis"
              }
            },
            {
              "name": "Pro Månadsvis",
              "price": "17,99 USD",
              "period": "månad",
              "discount": "9,99 USD för den första månaden",
              "limits": {
                "title": "Ingen månadsgräns",
                "items": [
                  "Obegränsat antal minuter",
                  "Upp till 10 timmar / 5 GB per fil",
                  "Ladda upp 50 filer samtidigt",
                  "Prioriterad kö"
                ]
              },
              "features": {
                "title": "Allt gratis, plus",
                "items": [
                  "Tidsstämplar på ordnivå",
                  "Avancerad högtalaridentifiering",
                  "Formaterade stycken och interpunktion",
                  "Prioriterat stöd"
                ]
              },
              "cta": {
                "text": "Obegränsade minuter. Prioriterad hastighet. Batchuppladdningar.",
                "button": "Go Pro"
              },
              "badge": "Mest populära"
            },
            {
              "name": "Pro Årlig",
              "price": "8,99 USD",
              "period": "månad",
              "discount": "Faktureras årligen 107,88 USD",
              "limits": {
                "title": "Samma som Pro Monthly",
                "items": [
                  "Obegränsat antal minuter",
                  "Upp till 10 timmar / 5 GB per fil",
                  "Ladda upp 50 filer samtidigt",
                  "Prioriterad kö"
                ]
              },
              "features": {
                "title": "Allt gratis, plus",
                "items": [
                  "Tidsstämplar på ordnivå",
                  "Avancerad högtalaridentifiering",
                  "Formaterade stycken och interpunktion",
                  "Prioriterat stöd"
                ]
              },
              "cta": {
                "text": "Obegränsade minuter. Prioriterad hastighet. Batchuppladdningar.",
                "button": "Go Pro"
              },
              "badge": "Bästa värdet - Spara 50%"
            }
          ],
      "disclaimer": '"Obegränsat" innebär inget månatligt tak och ingen artificiell nedgång. Fair use gäller för otillbörlig automatisering eller omdistribution.'
    },
    ComparisonTable: {
      "header": {
        "title": "Jämföra",
        "highlighted_text": "Alla funktioner",
        "subtitle": "Se exakt vad du får med varje abonnemang. Inga dolda begränsningar."
      },
      "plans": [
              "Drag",
              "Gratis",
              "Pro Månadsvis",
              "Pro Årlig"
            ],
      "features": [
            {
              "name": "Pris",
              "values": [
                "0 kr/månad",
                {
                  "main": "17,99 USD/månad",
                  "note": "9,99 USD första månaden"
                },
                {
                  "main": "8,99 USD/månad",
                  "note": "Fakturerad 107,88 USD/år"
                }
              ]
            },
            {
              "name": "Månatliga minuter",
              "values": ["~2 700 (90/dag)", "Obegränsat", "Obegränsat"]
            },
            {
              "name": "Maximal fillängd",
              "values": ["30 minuter", "10 timmar", "10 timmar"]
            },
            {
              "name": "Maximal filstorlek",
              "values": ["250 MB", "5 GB", "5 GB"]
            },
            {
              "name": "Batchuppladdningar",
              "values": ["1 fil", "50 filer", "50 filer"]
            },
            {
              "name": "Bearbetningshastighet",
              "values": ["Standard", "Prioritet", "Prioritet"]
            },
            {
              "name": "Språk som stöds",
              "values": ["100+ språk", "100+ språk", "100+ språk"]
            },
            {
              "name": "Översättning",
              "values": ["sann", "sann", "sann"]
            },
            {
              "name": "Talaridentifiering",
              "values": ["Grundläggande", "Avancerad (20 högtalare)", "Avancerad (20 högtalare)"]
            },
            {
              "name": "Tidsstämplar på ordnivå",
              "values": ["falsk", "sann", "sann"]
            },
            {
              "name": "Formaterade stycken",
              "values": ["falsk", "sann", "sann"]
            },
            {
              "name": "Exportformat",
              "values": ["Alla format", "Alla format", "Alla format"]
            },
            {
              "name": "Stöd",
              "values": ["E-post", "Prioriterad e-post", "Prioriterad e-post"]
            },
            {
              "name": "Datalagring",
              "values": ["30 dagar", "Evigt", "Evigt"]
            }
          ]
    },
    FAQ: {
      "title": "Vanliga frågor",
      "titleHighligt": "Frågor",
      "items": [
            {
              "q": "obegränsad_policy",
              "question": "Är det verkligen obegränsat?",
              "answer": "Ja! Pro-abonnemang har inga månatliga minutersgränser. De enda begränsningarna är tekniska: max 10 timmars fillängd och 5 GB filstorlek. Du kan bearbeta så många filer du behöver."
            },
            {
              "q": "plan_ändring",
              "question": "Kan jag ändra planer när som helst?",
              "answer": "Absolut! Du kan avsluta din prenumeration när som helst från din kontrollpanel. Uppgradera eller nedgradera när du behöver."
            },
            {
              "q": "betalningsmetoder",
              "question": "Vilka betalningsmetoder accepterar ni?",
              "answer": "Vi accepterar alla större kreditkort, betalkort och PayPal för säkra och problemfria betalningar."
            },
            {
              "q": "gratis_provperiod",
              "question": "Finns det en gratis provperiod för Pro?",
              "answer": "Ja! Prova Pro gratis i 7 dagar, inget kreditkort krävs. Dessutom får du 45 % rabatt på din första månad när du prenumererar."
            },
            {
              "q": "file_retention",
              "question": "Hur länge sparar ni mina filer?",
              "answer": "Gratisplan: 30 dagar. Pro-planer: För alltid! Dina transkript är alltid tillgängliga i ditt konto."
            },
            {
              "q": "datasäkerhet",
              "question": "Vad gäller datasäkerhet?",
              "answer": "Vi är SOC 2-certifierade och använder 256-bitars kryptering. Vi använder aldrig ditt innehåll för att träna våra modeller. Dina data är dina."
            }
          ]
    },
    CTA: {
      "title": "Redo att gå obegränsat?",
      "subtitle": "Gå med 50 000+ yrkesverksamma som transkriberar utan begränsningar",
      "button": "Testa NeverCap gratis →",
      "disclaimer": "Inget kreditkort krävs • Börja transkribera på några sekunder"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Byggd för",
      heavyUsers: "Storanvändare",
      whoActuallyNeed: "Vem behöver egentligen obegränsat",
      heroSubtitle: "Från poddare med åratal av eftersläpning till forskare med hundratals intervjuer. Se hur yrkesverksamma använder NeverCap för att bryta sig loss från uppladdningsgränser och minutbegränsningar.",
      podcasters: {
        title: "Poddare",
        pain: '"Sluta välja vilka avsnitt som förtjänar transkriptioner"',
        description: "Ladda upp hela ditt podcastarkiv på en gång. Generera programanteckningar, förbättra SEO och återanvänd innehåll utan att räkna minuter.",
        benefits: {
          benefit1: "Ladda upp alla avsnitt, inte bara 3",
          benefit2: "Generera SEO-vänliga programanteckningar",
          benefit3: "Skapa sökbara arkiv",
          benefit4: "Återanvänd till blogginnehåll"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Avsnitt"
          },
          stat2: {
            number: "200 timmar",
            label: "Sparad"
          },
          stat3: {
            number: "3x",
            label: "SEO-trafik"
          }
        }
      },
      journalists: {
        title: "Journalister och författare",
        pain: '"Deadlinepress möter uppladdningsrestriktioner"',
        description: "Ladda upp alla intervjuer i grupp före deadline. Sök direkt bland transkript och missa aldrig ett viktigt citat.",
        benefits: {
          benefit1: "Batchuppladdning före deadlines",
          benefit2: "Sök alla intervjuer samtidigt",
          benefit3: "Noggranna offerter med tidsstämplar",
          benefit4: "Hantera accenter och språk"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Intervjuer/månad"
          },
          stat2: {
            number: "96 %",
            label: "Noggrannhet"
          },
          stat3: {
            number: "5 minuter",
            label: "Varje timme"
          }
        }
      },
      contentCreators: {
        title: "Innehållsskapare",
        pain: '"Tillgänglighet ska inte vara dyrt"',
        description: "Texta hela din YouTube-kanal. Generera undertexter på flera språk och förbättra din videos SEO direkt.",
        benefits: {
          benefit1: "Texta alla videor samtidigt",
          benefit2: "249 språköversättningar",
          benefit3: "YouTube-klara SRT-filer",
          benefit4: "Öka video SEO-rankingen"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videor"
          },
          stat2: {
            number: "100+",
            label: "Språk"
          },
          stat3: {
            number: "249",
            label: "Översättningar"
          }
        }
      },
      researchers: {
        title: "Forskare och akademiker",
        pain: '"Kvalitativa data ska inte stå i kö"',
        description: "Bearbeta hela forskningsstudier på en gång. Hantera fokusgrupper, intervjuer och paneldiskussioner med perfekt talaridentifiering.",
        benefits: {
          benefit1: "Processfokusgrupper i bulk",
          benefit2: "Identifiering av 20 talare",
          benefit3: "Exportera till analysprogram",
          benefit4: "GDPR-kompatibel säkerhet"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Studera"
          },
          stat2: {
            number: "96 %",
            label: "Gruppnoggrannhet"
          },
          stat3: {
            number: "GDPR",
            label: "Kompatibel"
          }
        }
      },
      businessTeams: {
        title: "Affärsteam",
        pain: '"Mötesinspelningar ska vara enkla"',
        description: "Spela in möten direkt eller ladda upp ljudfiler för omedelbar transkribering. Bygg sökbara arkiv från obegränsade konversationer och förlora aldrig viktiga diskussioner igen.",
        benefits: {
          benefit1: "Direkt ljudinspelning och transkription",
          benefit2: "Obegränsade mötesinspelningar",
          benefit3: "Sökbart mötesarkiv",
          benefit4: "Ladda upp ljudfiler direkt"
        },
        stats: {
          stat1: {
            number: "Bo",
            label: "Inspelning"
          },
          stat2: {
            number: "Omedelbar",
            label: "Ladda upp"
          },
          stat3: {
            number: "20+",
            label: "Högtalare"
          }
        }
      },
      educators: {
        title: "Lärare",
        pain: '"YouTube-videor behöver omedelbar transkribering"',
        description: "Klistra bara in YouTube-länkar för att få omedelbara transkriptioner och automatiskt genererade textningar. Förvandla vilken utbildningsvideo som helst till lättillgängligt, sökbart innehåll.",
        benefits: {
          benefit1: "Direkt transkription av YouTube-länk",
          benefit2: "Generera videotexter automatiskt",
          benefit3: "Transkribera hela kurser",
          benefit4: "Sökbara föreläsningsarkiv"
        },
        stats: {
          stat1: {
            number: "1-klicks",
            label: "YouTube-klistra in"
          },
          stat2: {
            number: "Bil",
            label: "Textning"
          },
          stat3: {
            number: "100+",
            label: "Språk"
          }
        }
      },
      quotes: {
        title: "Riktiga användare,",
        titleHighlight: "Verklig frihet",
        subtitle: "Hör från yrkesverksamma som bröt sig loss från artificiella begränsningar",
        testimonials: {
          mike: {
            textBefore: '"Jag hade',
            highlight: "3 år av avsnitt",
            textAfter: 'sitter otranskriberad. Otter ville att jag skulle välja 3. TRE. NeverCap låt mig ladda upp alla 150 avsnitt på en helg."',
            name: "Mike Rodriguez",
            role: "Podcastvärd"
          },
          jessica: {
            textBefore: '"Som frilansjournalist har jag inte råd med Trints',
            highlight: "100 dollar/månad",
            textAfter: ', men jag kan inte heller arbeta med Otters gräns på 10 filer per månad. NeverCap räddade min karriär."',
            name: "Jessica Park",
            role: "Frilansjournalist"
          },
          sarah: {
            textBefore: '"Vårt forskarteam hade',
            highlight: "200 timmar",
            textAfter: 'av fokusgruppsinspelningar. Vi bearbetade allt under en helg istället för att ransonera månatliga minuter."',
            name: "Dr. Sarah Chen",
            role: "Huvudforskare"
          },
          carlos: {
            textBefore: '"Jag skapar utbildningsmaterial på spanska. NeverCap transkriberar perfekt och',
            highlight: "översätter till engelska",
            textAfter: 'för bredare räckvidd. Inga gränser, bara tillväxt."',
            name: "Carlos Martinez",
            role: "YouTube-pedagog"
          }
        }
      },
      industries: {
        title: "Betrodd överallt",
        titleHighlight: "Industrier",
        subtitle: "Yrkesverksamma överallt byter till verkligt obegränsade",
        list: {
          media: "Media och publicering",
          education: "Utbildning",
          healthcare: "Hälsovård",
          technology: "Teknologi",
          finance: "Finansiera",
          legal: "Rättslig"
        }
      },
      cta: {
        title: "Ditt användningsfall behöver också obegränsat",
        subtitle: "Gå med i fler än 50 000 yrkesverksamma som slutade räkna minuter och började skapa",
        button: "Börja din obegränsade resa →"
      }
    },
    Podcasters: {
      badge: "🎙️ Byggd för poddsändningar",
      heroTitle: "Transkribera din",
      heroTitleHighlight: "Hela podcastarkivet",
      heroSubtitle: "Ladda upp hela din bakkatalog. Skapa programanteckningar för varje avsnitt. Slipp att välja vilka avsnitt som ska transkriberas. Bearbeta 50 avsnitt samtidigt, obegränsat antal gånger per månad.",
      ctaPrimary: "Börja transkribera gratis",
      ctaSecondary: "Se hur det fungerar",
      trustBadge1: "🎙️ 10 000+ poddare",
      trustBadge2: "∞ Obegränsat antal avsnitt",
      trustBadge3: "📝 SEO-klara transkript",
      stats: {
        stat1: {
          number: "∞",
          label: "Avsnitt/Månad"
        },
        stat2: {
          number: "50",
          label: "Batchuppladdning"
        },
        stat3: {
          number: "10 timmar",
          label: "Max avsnittslängd"
        },
        stat4: {
          number: "96 %",
          label: "Noggrannhet"
        }
      },
      problemTitle: "De",
      problemTitleHighlight: "Problem med transkribering av podcast",
      problemSubtitle: 'Andra tjänster låter dig välja vilka avsnitt som är "värda" att transkribera',
      problems: {
        problem1: {
          title: "Uppladdningsgränser Avsluta arkiv",
          description: "Otter ger dig 3 livstidsimporter gratis, 10 per månad i Pro. Hur transkriberar man 3 års avsnitt?"
        },
        problem2: {
          title: "Missade SEO-möjligheter",
          description: "Varje otranskriberat avsnitt är förlorad SEO-trafik. Men Descript begränsar dig till i bästa fall 30 timmar/månad."
        },
        problem3: {
          title: "Kostnaderna exploderar med tillväxten",
          description: "Allt eftersom din podcast växer skjuter transkriptionskostnaderna i höjden. Överskottsavgifter på 2 dollar/timme gör det omöjligt att skala upp."
        }
      },
      solutionTitle: "De",
      solutionTitleHighlight: "NeverCap Lösning",
      solutionDescription: "Obegränsad transkribering. Ladda upp hela ditt arkiv. Transkribera varje nytt avsnitt. Generera programanteckningar i stor skala. Inga tak, inga begränsningar, bara tillväxt.",
      workflowTitle: "Ditt podcast-arbetsflöde,",
      workflowTitleHighlight: "Förenklad",
      workflowSubtitle: "Från inspelning till SEO-optimerade showanteckningar på några minuter",
      workflow: {
        step1: {
          title: "Ladda upp avsnitt",
          description: "Släpp 50 avsnitt samtidigt. MP3, MP4, WAV – vi hanterar allt."
        },
        step2: {
          title: "AI-transkriberingar",
          description: "96 % noggrannhet med talaridentifiering. Perfekt för intervjuer."
        },
        step3: {
          title: "Smart formatering",
          description: "AI lägger till stycken, meningar och interpunktion automatiskt."
        },
        step4: {
          title: "Publicera och ranka",
          description: "Exportera till din webbplats. Se din SEO-trafik växa."
        }
      },
      featuresTitle: "Funktioner Podcasters",
      featuresTitleHighlight: "Behöver faktiskt",
      featuresSubtitle: "Byggt av poddare, för poddare",
      features: {
        feature1: {
          title: "Flerhögtalardetektering",
          description: "Identifierar och märker automatiskt upp till 20 talare. Perfekt för paneldiskussioner, intervjuer och program med gemensam värdskap."
        },
        feature2: {
          title: "Tidsstämpelkapitel",
          description: "Generera klickbara tidsstämplar för YouTube-beskrivningar. Låt lyssnare hoppa direkt till sina favoritsegment."
        },
        feature3: {
          title: "Smart formatering",
          description: "Lägger automatiskt till stycken, meningar och interpunktion. Få rena och läsbara transkript. Spara timmar på efterproduktion."
        },
        feature4: {
          title: "SEO-optimering",
          description: "Transkriptioner formaterade för sökmotorer. Öka din podcasts synlighet och nå nya målgrupper."
        },
        feature5: {
          title: "100+ språk",
          description: "Transkribera på vilket språk som helst. Översätt till fler än 249 språk. Nå enkelt en global publik."
        },
        feature6: {
          title: "Batchbearbetning",
          description: "Ladda upp 50 avsnitt innan du går och lägger dig. Vakna upp för att slutföra transkriptioner. Bearbeta hela ditt arkiv över natten."
        }
      },
      testimonialsTitle: "Poddare som skapade",
      testimonialsTitleHighlight: "Växeln",
      testimonialsSubtitle: "Riktiga berättelser från riktiga podcastare",
      testimonials: {
        mike: {
          text: '"Jag har gjort en podcast i tre år och transkriberat allt manuellt som en idiot. Laddade upp sex avsnitt samtidigt och det separerade mig och min medvärd perfekt. Kaféavsnittet som jag trodde var förstört? Kristallklar transkribering. Jag tänker aldrig skriva ut det här själv igen."',
          name: "Mike Rodriguez",
          role: 'Programledare för podcasten "The Daily Grind"'
        },
        sarah: {
          text: '"Otter begränsade mig till 10 filimporter per månad. Jag har 150 avsnitt som ligger efter. NeverCap låter mig ladda upp allt i 3 omgångar. Min organiska trafik har ökat med 300 % sedan jag lade till transkriptioner till gamla avsnitt. Detta betalar bokstavligen för sig självt."',
          name: "Sara Chen",
          role: 'Skaparen av "Tech Talks Today"'
        }
      },
      comparisonTitle: "Varför poddare väljer",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Se hur vi står oss mot konkurrenterna",
      comparison: {
        headers: {
          feature: "Särdrag",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Beskrivningsskapare"
        },
        rows: {
          monthlyLimit: {
            feature: "Månatlig avsnittsgräns",
            nevercap: "Obegränsat",
            otter: "~13 avsnitt (1200 min)",
            descript: "~30 avsnitt (30 timmar)"
          },
          uploadLimit: {
            feature: "Gräns för filuppladdning",
            nevercap: "Obegränsat",
            otter: "10 per månad",
            descript: "1 i taget"
          },
          batchProcessing: {
            feature: "Batchbearbetning",
            nevercap: "50 filer",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Max avsnittslängd",
            nevercap: "10 timmar",
            otter: "90 minuter",
            descript: "Obegränsat"
          },
          speakerDetection: {
            feature: "Högtalardetektering",
            nevercap: "20 högtalare",
            otter: "16 högtalare",
            descript: "10 högtalare"
          },
          smartFormatting: {
            feature: "Smart formatering",
            nevercap: "✓ Perfekt",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Pris",
            nevercap: "17,99 USD/mån",
            otter: "16,99 USD/mån",
            descript: "30 kr/mån"
          }
        }
      },
      ctaTitle: "Börja transkribera varje avsnitt",
      ctaSubtitle: "Gå med i fler än 10 000 poddare som aldrig oroar sig för gränser",
      ctaButton: "Ladda upp dina första 50 avsnitt gratis →",
      ctaDisclaimer: "Inget kreditkort krävs • Bearbeta obegränsat antal avsnitt • Avsluta när som helst"
    },
    Journalists: {
      hero: {
        badge: "📰 För journalister och författare",
        title: "Transkribera varje intervju.",
        titleHighlight: "Missa aldrig ett citat.",
        subtitle: "Sluta välja vilka intervjuer som förtjänar transkribering. Ladda upp alla inspelningar samtidigt, sök igenom allt direkt och möt dina deadlines utan uppladdningsångest.",
        ctaPrimary: "Starta obegränsade uppladdningar →",
        ctaSecondary: "Se hur det fungerar",
        stats: {
          uploads: {
            number: "∞",
            label: "Filuppladdningar"
          },
          accuracy: {
            number: "96 %",
            label: "Noggrannhet"
          },
          speed: {
            number: "5 minuter",
            label: "Varje timme"
          }
        },
        dashboard: {
          title: "Intervjukö",
          status: "• All bearbetning",
          interviews: {
            cityCouncil: {
              title: "Stadsfullmäktigemöte",
              duration: "2 timmar 15 minuter • Uppladdning...",
              action: "Bearbetning"
            },
            expertInterview: {
              title: "Expertintervju - Dr. Chen",
              duration: "45 min • Transkribering...",
              action: "96 % klart"
            },
            pressConference: {
              title: "Presskonferens",
              duration: "1 tim 30 min • Klar",
              action: "Visa →"
            },
            phoneInterview: {
              title: "Telefonintervju - Källa",
              duration: "35 min • Klar",
              action: "Visa →"
            }
          }
        }
      },
      problem: {
        title: "De",
        titleHighlight: "Problem med journalisttranskription",
        subtitle: 'Andra tjänster låter dig välja vilka intervjuer som är "värda" att transkribera',
        problems: {
          uploadLimits: {
            title: "Uppladdningsgränser avbryter utredningar",
            description: "Otter ger dig 10 filimporter per månad i Pro. Hur transkriberar man 3 veckors utredningsintervjuer?"
          },
          missingQuotes: {
            title: "Saknade viktiga citat",
            description: "Varje otranskriberad intervju skulle kunna innehålla berättelsens viktigaste citat. Men Trint begränsar dig till 50 timmar/månad i bästa fall."
          },
          costExplosion: {
            title: "Kostnaderna exploderar med deadlines",
            description: "Allt eftersom din utredning fördjupas skjuter transkriptionskostnaderna i höjden. Överskottsavgifter på 100 dollar/månad gör det omöjligt att få fram nyheter."
          }
        },
        solution: {
          title: "De",
          titleHighlight: "NeverCap Lösning",
          description: "Obegränsad transkribering. Ladda upp hela din undersökning. Transkribera varje intervju. Sök efter alla citat direkt. Inga versaler, inga begränsningar, bara journalistik."
        }
      },
      solution: {
        title: "Slutligen,",
        titleHighlight: "Sann frihet",
        titleSuffix: "för journalister",
        subtitle: "Ladda upp allt. Transkribera allt. Sök i allt.",
        solutions: {
          unlimitedUploads: {
            label: "Obegränsade uppladdningar",
            title: "Batchuppladda hela din undersökning",
            description: "Slipp att välja vilka intervjuer som ska transkriberas. Ladda upp 50 filer samtidigt. Bearbeta månader av inspelningar över en natt. Hela din utredning, transkriberad.",
            points: {
              simultaneousUpload: "Ladda upp 50 filer samtidigt",
              noLimits: "Inga månatliga uppladdningsgränser",
              processWhileWrite: "Process medan du skriver",
              longRecordings: "10-timmarsinspelningar stöds"
            },
            visual: {
              number: "50",
              label: "Filer på en gång"
            }
          },
          instantSearch: {
            label: "Snabbsökning",
            title: "Hitta vilken offert som helst på några sekunder",
            description: "Sök direkt i alla dina transkript. Hitta det perfekta citatet från tre månader sedan. Tappa aldrig bort viktiga påståenden i dina anteckningar igen.",
            points: {
              searchAll: "Sök bland alla intervjuer",
              wordTimestamps: "Tidsstämplar på ordnivå",
              jumpToMoments: "Hoppa till exakta ögonblick",
              exportCitations: "Exportera med citat"
            },
            searchDemo: {
              placeholder: "klimatpolitiskt uttalande",
              resultsText: "Funnet i 4 intervjuer:",
              results: {
                mayorInterview: '"...vår klimatpolitik kommer att förändras..."',
                expertPanel: '"...policyförklaringen visar tydligt..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Professionell noggrannhet",
            title: "96 % noggrannhet Du kan citera",
            description: "Få transkript så exakta att du kan citera dem direkt. Hanterar accenter, tekniska termer och snabba konversationer. Perfekt formatering som faktiskt är läsbar.",
            points: {
              accuracyGuarantee: "96 % noggrannhetsgaranti",
              handlesAccents: "Hanterar accenter och dialekter",
              smartPunctuation: "Smart interpunktion och stycken",
              speakerIdentification: "Talaridentifiering"
            },
            visual: {
              accuracy: "96 %",
              label: "Noggrannhetsgrad",
              transcript: {
                speaker1: '"Utredningen avslöjade betydande avvikelser i de finansiella rapporterna."',
                speaker2: '"Kan du utveckla de specifika avvikelserna?"'
              }
            }
          }
        }
      },
      features: {
        title: "Allt ett",
        titleHighlight: "Journalistbehov",
        subtitle: "Professionella verktyg som respekterar ditt arbetsflöde",
        featuresList: {
          languages: {
            title: "100+ språk",
            description: "Intervjukällor globalt på 12 huvudspråk med 96 % noggrannhet."
          },
          exportFormats: {
            title: "Exportformat",
            description: "Word, PDF, SRT, TXT. Kompatibel med alla arbetsflöden."
          },
          sourceProtection: {
            title: "Källskydd",
            description: "Kryptering på banknivå. Dina källor förblir konfidentiella."
          },
          timestamps: {
            title: "Tidsstämplar",
            description: "Klicka på valfritt citat för att hoppa till exakt det ljudögonblicket."
          },
          teamSharing: {
            title: "Teamdelning",
            description: "Samarbeta med redaktörer. Dela transkriptioner säkert."
          },
          mobileReady: {
            title: "Mobilklar",
            description: "Ladda upp från telefonen. Granska transkriptioner var som helst."
          },
          smartFormatting: {
            title: "Smart formatering",
            description: "Automatiska stycken och interpunktion för läsbara transkript."
          },
          batchProcessing: {
            title: "Batchbearbetning",
            description: "Ladda upp 50 filer samtidigt. Bearbeta över natten medan du sover."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Jag hade 3 års intervjuer liggandes otranskriberade på grund av uppladdningsbegränsningar. NeverCap Låt mig bearbeta allt på en helg. Revolutionerande.",
          name: "Jessica Park",
          role: "Frilansjournalist, tidigare utteranvändare"
        }
      },
      cta: {
        title: "Börja transkribera",
        titleHighlight: "Utan gränser",
        subtitle: "Följ tusentals journalister som slutade räkna uppladdningar och började fokusera på nyhetsartiklar",
        ctaPrimary: "Prova obegränsat gratis →",
        ctaSecondary: "Visa priser"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 För innehållsskapare",
        title: "Skriv text till din",
        titleHighlight: "Hela kanalen",
        titleSuffix: "Utan att räkna minuter",
        subtitle: "Sluta välja vilka videor som förtjänar textning. Bearbeta hela ditt YouTube-bibliotek, generera undertexter på över 100 språk och hämta videor direkt från vilken plattform som helst. Inga månadsgränser, inga uppladdningsbegränsningar – bara ren kreativ frihet.",
        ctaPrimary: "Starta obegränsad textning →",
        ctaSecondary: "Se hur det fungerar",
        stats: {
          videos: {
            number: "∞",
            label: "Videor/Månad"
          },
          languages: {
            number: "100+",
            label: "Språk"
          },
          accuracy: {
            number: "96 %",
            label: "Noggrannhet"
          },
          platforms: {
            number: "10+",
            label: "Plattformar"
          }
        }
      },
      platforms: {
        title: "Hämta och transkribera från vilken plattform som helst",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Drive",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "Allt du behöver",
        titleHighlight: "Skala innehåll",
        subtitle: "Professionella verktyg utan professionella begränsningar",
        oneClickImport: {
          label: "Importera med ett klick",
          title: "Klistra in länk.",
          titleHighlight: "Hämta transkript.",
          description: "Ingen mer nedladdning och uppladdning igen. Klistra bara in din YouTube-, TikTok- eller Instagram-länk och få omedelbara transkript. Bearbeta hela din kanals eftersläpning på en helg.",
          points: {
            directYoutube: "Direkt transkription av YouTube-länk",
            multiplePlatforms: "Hämta från 10+ plattformar",
            batchPlaylists: "Batchbearbeta hela spellistor",
            autoSync: "Automatisk synkronisering med dina kanaler"
          },
          demo: {
            instruction: "Klistra in din video-URL:",
            url: "https://youtube.com/watch?v=...",
            status: "Hämtar och transkriberar..."
          }
        },
        globalReach: {
          label: "Global räckvidd",
          title: "100+ språk.",
          titleHighlight: "Noll gränser.",
          description: "Nå en global publik med automatisk översättning till fler än 100 språk. Generera undertexter på flera språk samtidigt. Inga extra avgifter, inga månatliga tak för översättningar.",
          points: {
            highAccuracy: "96 % noggrannhet på 12 huvudspråk",
            unlimitedTranslations: "Obegränsade översättningar ingår",
            multicultural: "Perfekt för mångkulturellt innehåll",
            autoDetect: "Automatisk identifiering av källspråk"
          },
          visual: {
            number: "100+",
            title: "Språk som stöds",
            subtitle: "Översätt en gång, nå alla"
          }
        },
        flexibleExport: {
          label: "Flexibel export",
          title: "Varje format",
          titleHighlight: "Du behöver",
          description: "Exportera i det format som fungerar för ditt arbetsflöde. Från SRT-filer för YouTube till VTT för webbspelare, eller redigerbara dokument för skript. All export är obegränsad, allt ingår i varje abonnemang.",
          points: {
            videoFormats: "SRT och VTT för videoplattformar",
            editingFormats: "DOCX och PDF för redigering",
            dataAnalysis: "CSV för dataanalys",
            simpleScripts: "TXT för enkla skript"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "Textmeddelande",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV-fil"
          }
        }
      },
      workflow: {
        title: "Från uppladdning till",
        titleHighlight: "Publicerad",
        titleSuffix: "i minuter",
        subtitle: "Det snabbaste sättet att texta hela ditt innehållsbibliotek",
        steps: {
          pasteLinks: {
            title: "Klistra in länkar",
            description: "Släpp YouTube, TikTok eller någon annan videolänk. Eller ladda upp filer direkt."
          },
          autoTranscribe: {
            title: "Automatisk transkribering",
            description: "AI-processer med 96 % noggrannhet. Hanterar accenter och flera talare."
          },
          editTranslate: {
            title: "Redigera och översätt",
            description: "Fullända dina textningar. Översätt direkt till över 100 språk."
          },
          exportPublish: {
            title: "Exportera och publicera",
            description: "Ladda ner i valfritt format. Ladda upp till din plattform. Klart!"
          }
        }
      },
      testimonials: {
        title: "Skapare är",
        titleHighlight: "Byte dagligen",
        subtitle: "Från begränsade planer till obegränsad frihet",
        carlos: {
          textBefore: "Jag skapar utbildningsmaterial på spanska. NeverCap transkriberar perfekt och",
          textAfter: "för bredare räckvidd. Inga gränser, bara tillväxt. Mina kanalvisningar ökade med tre gånger efter att jag lade till flerspråkiga textningar.",
          highlight: "översätter till engelska",
          name: "Carlos Martinez",
          role: "YouTube Educator • 250 000 prenumeranter"
        },
        sarah: {
          textBefore: "Beskrivning önskas 30 dollar/månad för",
          textAfter: "Jag har över 500 videor som ligger efter. NeverCap Låt mig bearbeta allt på en helg. SEO-boosten från textning betalade sig själv under den första månaden.",
          highlight: "30 timmar",
          name: "Sara Lee",
          role: "Livsstilsvloggare • 180 000 prenumeranter"
        },
        jake: {
          textBefore: "De",
          textAfter: "Funktionen är banbrytande. Jag laddar inte ner något längre. Bara klistra in, transkribera, klart. Att bearbeta mina podcastklipp för TikTok har aldrig varit enklare.",
          highlight: "direkt YouTube-hämtning",
          name: "Jake Wilson",
          role: "Podcastvärd • Topp 1%-skapare"
        },
        yuki: {
          textBefore: "Jag skapar innehåll på 5 språk. Andra tjänster kostar extra.",
          textAfter: "NeverCap ger mig obegränsade översättningar. Min internationella publik växte med 400 % sedan jag började använda korrekt textning med inhemsk textning.",
          highlight: "per översättning",
          name: "Yuki Tanaka",
          role: "Spelskapare • 500 000 prenumeranter"
        }
      },
      cta: {
        title: "Hela din kanal. Med textning. Idag.",
        subtitle: "Gå med i fler än 50 000 kreatörer som slutade räkna minuter och började skapa",
        button: "Starta obegränsad textning →"
      }
    },
    Researchers: {
      heroBadge: "Byggd för akademisk excellens",
      heroTitle1: "Transkribera varje intervju.",
      heroTitle2: "Analysera all din data.",
      heroSubtitle: "Sluta välja vilka fokusgrupper du ska transkribera. Bearbeta all din kvalitativa data med 96 % noggrannhet och felfri talaridentifiering – även med 20 deltagare som pratar i munnen på varandra.",
      heroCtaPrimary: "Prova gratis - Inget kreditkort",
      heroCtaSecondary: "Se hur det fungerar",
      statsInterviewHours: "Intervjutider",
      statsAccuracy: "Noggrannhet",
      statsSpeakersId: "Talar-ID",
      statsCompliant: "Kompatibel",
      problemTitle: "Problemet med forskningstranskription",
      problemSubtitle: 'Andra tjänster låter dig välja vilken data som är "värd" att transkribera',
      problemCard1Title: "Uppladdningsgränser dödar studier",
      problemCard1Desc: "Otter ger dig 3 livstidsimporter. Hur transkriberar man 200 timmar fokusgrupper?",
      problemCard2Title: "Saknade kritiska data",
      problemCard2Desc: "Varje otranskriberad intervju kan innehålla banbrytande insikter. Men Rev tar minst 2 dollar/minut.",
      problemCard3Title: "Bidragspengar försvinner",
      problemCard3Desc: "Allt eftersom din datauppsättning växer exploderar transkriptionskostnaderna. 500 dollar per fokusgrupp gör skalning omöjlig.",
      solutionTitle: "Lösningen NeverCap",
      solutionDesc: "Obegränsad transkribering. Ladda upp hela din studie. Transkribera varje intervju. Analysera all din data. Inga versaler, inga begränsningar, bara research.",
      feature1Label: "Inga gränser",
      feature1Title: "Bearbeta hela din studie i ett svep",
      feature1Desc: 'Ladda upp alla 200 timmar av intervjuer ikväll. Vakna upp till kompletta, sökbara transkript. Inga månatliga tak, inga gränser per fil, inget "fair use"-skämt.',
      feature1Point1: "Batchuppladdning av 50 filer samtidigt",
      feature1Point2: "Bearbeta longitudinella studier fullständigt",
      feature1Point3: "Inga lagringsgränser för transkriptioner",
      feature1Point4: "Exportera till NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Obegränsade timmar",
      feature1Visual2: "Samma pris oavsett om det är 10 eller 10 000 timmar",
      feature2Label: "Smart AI",
      feature2Title: "Naglar Fokusgrupper Varje Gång",
      feature2Desc: "Vår AI spårar upp till 20 talare även när de pratar i högtalarna, avbryter varandra eller alla hörs samtidigt. Varje röst fångas upp och märks korrekt.",
      feature2Point1: "Identifiering av 20 talare",
      feature2Point2: "Hanterar överhörning och avbrott",
      feature2Point3: "Högtalaretiketter som du kan byta namn på",
      feature2Point4: "Tidsstämpel för varje ord",
      conversationParticipant1: "Deltagare 1",
      conversationText1: "Det största hindret vi står inför är definitivt kostnaden för behandlingen...",
      conversationParticipant2: "Deltagare 2",
      conversationText2: "Absolut, men jag skulle vilja tillägga att åtkomst är—",
      conversationParticipant3: "Deltagare 3",
      conversationText3: "—förlåt att jag avbryter, men transporter är också enorma.",
      conversationText4: "Ja! Det var precis vad jag skulle säga.",
      conversationParticipant4: "Deltagare 4",
      conversationText5: "På landsbygden handlar det om alla tre: kostnad, tillgänglighet OCH transporter.",
      feature3Label: "Precision",
      feature3Title: "96 % noggrannhet som håller måttet",
      feature3Desc: "Hanterar teknisk jargong, tjocka accenter och ämnesspecifik terminologi som ett proffs. Tillräckligt noggrann för publicering, peer review och din avhandlingskommitté.",
      feature3Point1: "Medicinsk och vetenskaplig terminologi",
      feature3Point2: "100+ språk och dialekter",
      feature3Point3: "Ordagrant och tydliga läslägen",
      feature3Point4: "Redigera och exportera i valfritt format",
      feature3Visual1: "Noggrannhet i forskningsklass",
      feature3Visual2: "Betrott av fler än 50 000 forskare",
      feature4Label: "Säkerhet",
      feature4Title: "IRB-klar säkerhet",
      feature4Desc: "Dina känsliga forskningsdata skyddas med säkerhet i företagsklass. GDPR-kompatibelt, HIPAA-klara alternativ och fullständiga revisionsloggar för IRB-krav.",
      feature4Point1: "End-to-end-kryptering",
      feature4Point2: "GDPR- och CCPA-kompatibel",
      feature4Point3: "Policyer för automatisk borttagning",
      feature4Point4: "Säkert teamsamarbete",
      useCasesTitle: "Perfekt för alla forskningsmetoder",
      useCasesSubtitle: "Från etnografi till kliniska prövningar",
      useCase1Title: "Fokusgrupper",
      useCase1Desc: "Hantera 8–20 deltagare med överlappande tal. Perfekt talaridentifiering även under hetsiga diskussioner. Exportera direkt till programvara för kvalitativ analys.",
      useCase2Title: "Djupgående intervjuer",
      useCase2Desc: "Bearbeta hundratals enskilda intervjuer samtidigt. Bibehåll enhetlighet i hela din datauppsättning. Sök direkt i alla transkript.",
      useCase3Title: "Klinisk forskning",
      useCase3Desc: "HIPAA-kompatibla alternativ för patientintervjuer. Noggrann transkribering av medicinsk terminologi. Säker hantering av känsliga hälsouppgifter.",
      useCase4Title: "Etnografiska studier",
      useCase4Desc: "Fältinspelningar i naturliga miljöer. Hantera bakgrundsljud och flera högtalare. Stöd för fler än 100 språk och dialekter.",
      useCase5Title: "Projekt för muntlig historia",
      useCase5Desc: "Bevara hela arkiv utan begränsningar. Skapa sökbara historiska dokument. Perfekt för longitudinella och generationsövergripande studier.",
      useCase6Title: "Avhandlingsforskning",
      useCase6Desc: "Studentvänlig prissättning med fullständiga funktioner. Bearbeta hela din datauppsättning till ett överkomligt pris. Möt snäva deadlines med batchbearbetning.",
      testimonialTitle: "Betrott av ledande forskare",
      testimonialText: "Vårt forskarteam hade 200 timmar fokusgruppsinspelningar från vår studie om folkhälsa. Andra tjänster ville att vi skulle välja vilka sessioner vi skulle transkribera på grund av kostnaden. NeverCap lät oss bearbeta allt under en helg. Identifieringen av 20 talare fungerade faktiskt – även under våra mest röriga diskussioner där alla pratade samtidigt. Det här verktyget har helt förändrat hur vi hanterar kvalitativa data.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Huvudforskare, Folkhälsoinstitutet",
      ctaTitle: "Sluta välja vilka data som ska analyseras",
      ctaSubtitle: "Gå med i fler än 50 000 forskare som transkriberar allt",
      ctaButton: "Prova NeverCap Gratis"
    },
    BusinessTeams: {
      heroBadge: "För affärsteam",
      heroTitle1: "Mötesinspelning gjord",
      heroTitle2: "Enkel",
      heroSubtitle: "Spela in möten direkt i din webbläsare eller ladda upp ljudfiler direkt. Skapa sökbara arkiv från obegränsade konversationer. Förlora aldrig viktiga diskussioner igen med helt obegränsad transkription.",
      heroCtaPrimary: "Börja spela in nu →",
      heroCtaSecondary: "Se hur det fungerar",
      recordingStatus: "Inspelning...",
      statsMeetingMinutes: "Mötesprotokoll",
      statsLiveRecording: "Liveinspelning",
      statsSpeakerID: "Talar-ID",
      statsInstantUpload: "Direktuppladdning och bearbetning",
      featuresTitle: "Allt team behöver för att samla in kunskap",
      featuresSubtitle: "Från liveinspelning till omedelbara uppladdningar har vi eliminerat alla friktionspunkter",
      feature1Title: "Spela in direkt i din webbläsare",
      feature1Desc: "Inga nedladdningar, inga plugins. Börja spela in direkt med ett klick. Perfekt ljudkvalitet, automatisk talaridentifiering och transkription i realtid medan du talar.",
      feature1Benefit1: "Inspelningsstart med ett klick",
      feature1Benefit2: "Ingen programvaruinstallation",
      feature1Benefit3: "Fungerar på vilken enhet som helst",
      feature1Benefit4: "Realtidstranskription",
      feature1Visual1: "Klicka och spela in",
      feature1Visual2: "Ingen installation krävs",
      feature2Title: "Ladda upp valfri ljudfil direkt",
      feature2Desc: "Har du inspelningar från Zoom, Teams eller din telefon? Ladda upp dem direkt. Stöd för alla större ljud- och videoformat. Bearbeta flera filer samtidigt utan väntetid.",
      feature2Benefit1: "Stöder: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Batchuppladdningskapacitet",
      feature2Benefit3: "10-timmarsfiler stöds",
      feature2Benefit4: "Process medan du arbetar",
      feature2Visual1: "Dra och släpp filer",
      feature3Title: "Byggd för teamsamarbete",
      feature3Desc: "Dela transkriptioner med ditt team direkt. Lyssna på inspelningar tillsammans, exportera transkriptioner i flera format och se till att alla är uppdaterade med hjälp av sökbara mötesarkiv.",
      feature3Benefit1: "Dela transkriptioner med vem som helst",
      feature3Benefit2: "Lyssna på originalinspelningar",
      feature3Benefit3: "Exportera transkriptioner i flera format",
      feature3Benefit4: "Sökbara arkiv för hela teamet",
      feature3Visual1: "Teammedlemmar",
      feature3Visual2: "Obegränsat samarbete",
      feature4Title: "Hitta vilken konversation som helst direkt",
      feature4Desc: "Sök bland alla dina möten samtidigt. Hitta det där avgörande beslutet från förra kvartalet eller kundkravet från månader sedan. AI-driven sökning förstår sammanhang, inte bara nyckelord.",
      feature4Benefit1: "Sök alla möten samtidigt",
      feature4Benefit2: "AI förstår sammanhang",
      feature4Benefit3: "Filtrera efter talare eller datum",
      feature4SearchPlaceholder: "🔍 Sök: 'intäktsmål för fjärde kvartalet'",
      feature4SearchResults: "Hittades på 3 möten:",
      feature4Meeting1: "Försäljningsplanering - 15 oktober",
      feature4Meeting1Text: '"...målen för fjärde kvartalet satta till 2 miljoner dollar..."',
      feature4Meeting2: "Styrelsemöte - 20 oktober",
      feature4Meeting2Text: '"...Intäktsprognoser för fjärde kvartalet..."',
      workflowTitle: "Från inspelning till handlingsbara insikter",
      workflowSubtitle: "Ett sömlöst arbetsflöde som fångar varje viktigt ögonblick",
      workflowStep1Title: "Spela in eller ladda upp",
      workflowStep1Desc: "Börja spela in live eller ladda upp befintliga ljudfiler",
      workflowStep2Title: "Automatisk transkribering",
      workflowStep2Desc: "AI transkriberar med 96 % noggrannhet på några minuter",
      workflowStep3Title: "Samarbeta",
      workflowStep3Desc: "Dela, kommentera och extrahera åtgärdspunkter",
      workflowStep4Title: "Sök och analysera",
      workflowStep4Desc: "Få insikter från alla dina möten",
      testimonialsTitle: "Lagens kärlek NeverCap",
      testimonialsSubtitle: "Se hur företag förändrar sin möteskultur",
      testimonial1Text: '"Vi gick från att missa viktiga detaljer till att ha ett sökbart arkiv över varje konversation. Funktionen för direktinspelning innebär att vi aldrig glömmer att spela in viktiga diskussioner."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Produktchef, TechCorp",
      testimonial2Text: '"Otter begränsade oss till 10 filuppladdningar per månad. Nu laddar vi upp alla våra kundsamtal direkt. Det var banbrytande för våra säljteams uppföljningar."',
      testimonial2AuthorName: "Sara Rodriguez",
      testimonial2AuthorRole: "Försäljningschef, ConsultPro",
      testimonial3Text: '"Möjligheten att söka bland månader av möten räddade oss under vår revision. Hittade varje beslut och godkännande på några sekunder."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Sluta förlora viktiga samtal",
      ctaSubtitle: "Gå med i tusentals team som spelar in varje möte med obegränsad transkribering",
      ctaButton: "Börja spela in gratis →"
    },
    Educators: {
      heroBadge: "För lärare och pedagoger",
      heroTitle1: "Förvandla vilken utbildningsvideo som helst till",
      heroTitle2: "Tillgängligt innehåll",
      heroSubtitle: "Klistra bara in YouTube-länkar för att få omedelbara transkriptioner med automatiskt genererade textningar. Förvandla föreläsningar, handledningar och utbildningsvideor till sökbart och lättillgängligt innehåll som alla studenter kan lära sig av.",
      heroCtaPrimary: "Prova gratis - Inget kreditkort",
      heroCtaSecondary: "Titta på demo",
      stats1Number: "1-klicks",
      stats1Label: "YouTube-transkription",
      stats2Number: "100+",
      stats2Label: "Språk som stöds",
      stats3Number: "∞",
      stats3Label: "Obegränsade videor",
      stats4Number: "96 %",
      stats4Label: "Noggrannhetsgrad",
      featuresTitle: "Allt lärare behöver för videotranskription",
      featuresSubtitle: "Från YouTube-föreläsningar till inspelade klasser, gör allt ditt innehåll tillgängligt",
      feature1Title: "Direkta YouTube- och plattformslänkar",
      feature1Desc: "Klistra bara in valfri videolänk och få transkriptioner direkt. Fungerar med YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive med flera. Ingen nedladdning, ingen väntetid.",
      feature1Point1: "Direktlänkstranskription - inga nedladdningar behövs",
      feature1Point2: "Stöd för alla större plattformar",
      feature1Point3: "Bearbeta hela spellistor samtidigt",
      feature1Point4: "Fungerar med privata videor (med tillstånd)",
      feature2Title: "Generera textning och undertexter automatiskt",
      feature2Desc: "Skapa direkt korrekta textningar för alla dina utbildningsvideor. Gör innehållet tillgängligt för elever med hörselnedsättning, personer som inte har språket som modersmål eller de som föredrar att läsa med.",
      feature2Point1: "Exportformat för SRT, VTT och TXT",
      feature2Point2: "Tidsstämplar på ordnivå för perfekt synkronisering",
      feature2Point3: "Redigera och anpassa textning enkelt",
      feature2Point4: "Ladda upp direkt tillbaka till YouTube",
      feature2Visual1: "Språköversättningar",
      feature2Visual2: "Gör ditt innehåll globalt tillgängligt",
      feature3Title: "Organisera efter kurser och kategorier",
      feature3Desc: "Skapa mappar för att organisera dina utskrifter efter kurs, ämne eller termin. Håll allt ditt utbildningsinnehåll snyggt kategoriserat och lättsökbart. Bygg ett omfattande bibliotek med lättillgängligt kursmaterial.",
      feature3Point1: "Skapa obegränsat antal mappar och undermappar",
      feature3Point2: "Tagga videor efter ämne eller svårighetsgrad",
      feature3Point3: "Massorganisera flera transkript",
      feature3Point4: "Sök direkt i allt ditt innehåll",
      feature3VisualTitle: "Ditt kursbibliotek",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fysikföreläsningar",
      feature3Folder3: "Videor om biologilabb",
      feature3Folder4: "Historiska dokumentärer",
      feature3Folder5: "Språkinlärning",
      feature4Title: "Exportera i valfritt format du behöver",
      feature4Desc: "Ladda ner transkript i TXT-, DOCX- eller PDF-format. Perfekt för att skapa studiehandledningar, föreläsningsanteckningar eller lättillgängligt kursmaterial. Dela med studenter eller integrera i ditt lärplattform.",
      feature4Point1: "TXT för enkel textredigering",
      feature4Point2: "DOCX för formaterade dokument",
      feature4Point3: "PDF för enkel delning och utskrift",
      feature4Point4: "Massexportera flera filer samtidigt",
      workflowTitle: "Hur det fungerar",
      workflowSubtitle: "Från videolänk till tillgänglig transkription på några minuter",
      workflowStep1Title: "Klistra in länk",
      workflowStep1Desc: "Kopiera valfri URL för utbildningsvideo och klistra in den",
      workflowStep2Title: "Automatisk transkribering",
      workflowStep2Desc: "AI transkriberar med 96 % noggrannhet",
      workflowStep3Title: "Generera textning",
      workflowStep3Desc: "Skapa automatiskt perfekt synkroniserade undertexter",
      workflowStep4Title: "Dela och exportera",
      workflowStep4Desc: "Ladda ner eller dela med elever",
      useCasesTitle: "Perfekt för alla utbildningsbehov",
      useCasesSubtitle: "Se hur lärare använder NeverCap för att förbättra lärandet",
      useCase1Title: "Inspelade föreläsningar",
      useCase1Text: "Transkribera hela terminer av inspelade föreläsningar. Studenter kan söka efter specifika ämnen, repetera nyckelbegrepp och aldrig missa viktig information.",
      useCase2Title: "Onlinekurser",
      useCase2Text: "Gör dina onlinekurser tillgängliga för internationella studenter med översättningar till fler än 100 språk. Öka antalet inskrivna och nöjdare studenter.",
      useCase3Title: "Studiematerial",
      useCase3Text: "Konvertera videohandledningar till läsbara studieguider. Perfekt för studenter som föredrar att läsa eller behöver repetera innehållet snabbt.",
      useCase4Title: "Tillgänglighetsefterlevnad",
      useCase4Text: "Uppfyll tillgänglighetskraven genom att tillhandahålla textning och transkriptioner för allt videoinnehåll. Säkerställ lika tillgång för alla elever.",
      useCase5Title: "Omvänt klassrum",
      useCase5Text: "Dela videoföreläsningar med transkript före lektionen. Studenterna kan repetera i sin egen takt och komma förberedda för diskussioner.",
      useCase6Title: "Forskning och citat",
      useCase6Text: "Hjälp eleverna att citera videokällor korrekt med tidsstämplar. Perfekt för forskningsprojekt och akademiska uppsatser.",
      testimonialTitle: "Betrott av fler än 50 000 lärare",
      testimonialSubtitle: "Se varför lärare världen över väljer NeverCap",
      testimonialText: '"Jag har använt NeverCap för att transkribera hela min YouTube-kanal med mattehandledningar. Det som brukade ta veckor med andra tjänster tar nu timmar. Möjligheten att klistra in länkar direkt och få omedelbara transkriberingar har förändrat hur jag skapar tillgängligt innehåll. Mina internationella studenter älskar särskilt de flerspråkiga texterna!"',
      testimonialAuthorName: "Professor Karen Mitchell",
      testimonialAuthorRole: "Matematikprofessor, onlinepedagog",
      ctaTitle: "Gör allt ditt utbildningsinnehåll tillgängligt",
      ctaSubtitle: "Gå med tusentals lärare och använd obegränsad transkription",
      ctaButton: "Prova NeverCap Gratis"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Ladda ner YouTube-videor som MP4",
        "placeholder": "Sök eller klistra in din Youtube-länk här",
        "clear_icon": "Rensa inmatning",
        "Download": "Ladda ner",
        "loading_text": "Bearbetar länken för nedladdning. Stanna kvar på sidan.",
        "howToDownload": "Hur laddar man ner?",
        "tutorial": "Titta på handledningen"
      },
      part2: {
        "title": "Så här förvandlar du en YouTube-video till en nedladdningsbar MP4-fil i 3 enkla steg",
        "steps": [
                {
                  title: "Kopiera URL:en",
                  content: "Öppna din målvideo på YouTube och kopiera sedan länken från webbläsarens adressfält."
                },
                {
                  title: "Klistra in länken",
                  content: "Gå till ditt videonedladdningsverktyg och klistra in URL:en i dess inmatningsfält."
                },
                {
                  title: "Ladda ner MP4-filen",
                  content: "När du har bearbetat den, tryck på nedladdningsknappen för att spara din MP4-fil."
                }
              ]
      },
      part3: {
        content: [
                "Har du någonsin behövt titta på YouTube-videor offline?",
                "Oavsett om du pendlar med tunnelbanan, flyger, studerar en viktig handledning, fördjupar dig i färdighetsbyggande innehåll eller arkiverar viktigt videomaterial – är det en vanlig frustration att ha pålitlig offlineåtkomst. Det är här vår nedladdningsprogram lyser.",
                "Nedladdaren låter dig snabbt och enkelt konvertera YouTube-videor till MP4-format för nedladdning. Spara dem på din enhet och titta när som helst.",
                "Processen är snabb, enkel och problemfri. När den väl är nedladdad kan du njuta av dina favoritvideor när och var du än är – inget internet behövs."
              ]
      },
      part4: {
        content: ["Här är de 5 största fördelarna med att ladda ner", "YouTube-videor som MP4-filer"],
        list: [
                {
                  title: "Spara på datakostnader:",
                  content: "Normalt sett förbrukar det mycket mobildata att titta på videor på YouTube. Genom att ladda ner dem för visning offline kan du undvika dessa onödiga kostnader."
                },
                {
                  title: "Titta var som helst, när som helst:",
                  content: "Njut av dina videor sömlöst, även med dålig internetanslutning. Inga fler bekymmer om buffring."
                },
                {
                  title: "Enkel arkivering och bevarande:",
                  content: "Att spara videor som MP4-filer gör det enkelt att bygga upp din personliga samling, särskilt för innehåll som du tycker är verkligt värdefullt eller viktigt."
                },
                {
                  title: "Enklare delning:",
                  content: "Att dela en MP4-fil är mycket bekvämare än att skicka en länk. Du kan skicka videofilen direkt via appar som WhatsApp eller Instagram, vilket eliminerar det extra steget att öppna YouTube."
                },
                {
                  title: "Direktvisning, delade ögonblick:",
                  content: "Vill ni ivrigt visa en favoritvideo för vänner eller familj i närheten? Med MP4-filen nedladdad kan ni alla titta på den tillsammans direkt, utan obekväma pauser i väntan på att den ska laddas."
                }
              ]
      },
      part5: {
        title: "Varför vår nedladdare sticker ut",
        cards: [
                {
                  title: "Enkelhet med ett klick",
                  content: "Enkel installation och intuitiv användning."
                },
                {
                  title: "Blixtsnabbt, obegränsat",
                  content: "Konvertera och ladda ner i topphastighet – inga tak, inga begränsningar."
                },
                {
                  title: "Konvertera direkt",
                  content: "Bearbeta dina filer direkt, ingen väntetid krävs."
                },
                {
                  title: "Noll reklam, noll distraktioner",
                  content: "Njut av ett rent gränssnitt utan popup-fönster, banners eller avbrott – bara sömlös videokonvertering."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Originalkvalitet garanteras",
                  content: "Dina nedladdningar behåller källvideons fulla upplösning för pixelperfekt uppspelning varje gång."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Fungerar var som helst",
                  content: "Helt kompatibel med alla webbläsare, på alla enheter."
                }
              ]
      },
      part6: {
        title: ["Maximera dina YouTube-videonedladdningar", "Med nedladdaren"],
        content: [
                "Enkel konvertering från YouTube till MP4: Snabbt, enkelt och gratis.",
                "Det är där vi utmärker oss. Vårt användarvänliga gränssnitt är utformat för alla – inga tekniska färdigheter krävs. Oavsett din erfarenhetsnivå kan du konvertera videor direkt. Ingen registrering krävs: Få exakt vad du behöver, direkt.",
                "Var lugn – dina nedladdade MP4-filer bibehåller den ursprungliga videokvaliteten och skärpan, precis som du tittade på dem på YouTube.",
                "Fungerar överallt. Helt kompatibel med alla större plattformar och enheter. Oavsett om du använder Windows, macOS, Linux, Android eller iOS – med en smartphone, surfplatta eller dator – kan du ladda ner videor sömlöst."
              ]
      },
      part7: {
        title: "Viktiga frågor om nedladdning av YouTube-videor",
        list: [
                {
                  question: "Kan jag ladda ner en YouTube-video om den är upphovsrättsskyddad?",
                  answer: "Att ladda ner upphovsrättsskyddade YouTube-videor utan upphovsrättsinnehavarens tillstånd är olagligt."
                },
                {
                  question: "Är det här nedladdningsverktyget säkert?",
                  answer: "Ja, det är säkert och pålitligt. Vi kräver ingen personlig information från användare och vidtar kraftfulla åtgärder mot virus. Vi påminner dig om att alltid vara försiktig när du laddar ner filer från internet: undvik att klicka på misstänkta länkar eller ladda ner tvivelaktiga filer."
                },
                {
                  question: "Vilka språk stöds av nedladdning av YouTube till MP4?",
                  answer: "Vår tjänst stöder nedladdning av YouTube-videor på alla populära språk."
                },
                {
                  question: "Vilka faktorer påverkar tiden det tar att ladda ner en YouTube-video?",
                  answer: "Även om vi säkerställer snabbast möjliga nedladdningsupplevelse, påverkas nedladdningstiden också av faktorer som videons längd och din internetanslutningshastighet."
                },
                {
                  question: "När jag laddar ner en MP4-video med min smartphone, var sparas den?"
                },
                {
                  question: "Försämrar nedladdning av YouTube-videor som MP4 videokvaliteten?",
                  answer: "Nej. Att ladda ner YouTube-videor som MP4 med vårt verktyg behåller den ursprungliga videokvaliteten. Konverteringsprocessen bevarar källkvaliteten, vilket säkerställer att du får samma tittarupplevelse som på YouTube."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Branschledande AI-teknik",
      "title": "Om",
      "highlighted_text": "NeverCap",
      "description": "Vårt uppdrag är att tillhandahålla de mest exakta ljud- och videotranskriptionstjänsterna. Genom att utnyttja branschledande AI-teknik uppnår vi transkriptionsnoggrannhet på över 96 %. För vissa större språk kan vi genom teknisk optimering till och med nå 99 % noggrannhet."
    },
    Stats: {
      "title": "Vår",
      "highlighted_text": "Inverkan",
      "subtitle": "Stärker global kommunikation med banbrytande AI-teknik",
      "metrics": [
            {
              "value": "96%+",
              "label": "Noggrannhetsgrad",
              "description": "Branschledande transkriptionsnoggrannhet med avancerad AI"
            },
            {
              "value": "100+",
              "label": "Språk som stöds",
              "description": "Talad ordigenkänning för globalt innehåll"
            },
            {
              "value": "249+",
              "label": "Översättningsspråk",
              "description": "Översätt transkriberad text till praktiskt taget alla språk"
            }
          ]
    },
    Mission: {
      "title": "Varför välja",
      "highlighted_text": "NeverCap",
      "subtitle": "Vi tror på att bryta ner språkbarriärer och göra innehåll tillgängligt för alla",
      "features": [
            {
              "icon": "🎯",
              "title": "Oöverträffad noggrannhet",
              "description": "Våra AI-modeller förfinas kontinuerligt för att leverera transkriptionsnoggrannhet på över 96 %, där vissa större språk når upp till 99 % noggrannhet genom avancerad optimering."
            },
            {
              "icon": "🌍",
              "title": "Globalt språkstöd",
              "description": "Stöd för över 100 språk inom talad ordigenkänning och översättningsfunktioner för fler än 249 språk, vilket gör ditt innehåll verkligt globalt."
            },
            {
              "icon": "⚡",
              "title": "Blixtsnabb bearbetning",
              "description": "Bearbeta timmar av ljud- och videoinnehåll på minuter, inte timmar. Vår optimerade AI-pipeline säkerställer att du får dina transkriptioner snabbt utan att offra kvaliteten."
            },
            {
              "icon": "🔒",
              "title": "Säkerhet i företagsklass",
              "description": "Din datasäkerhet är vår prioritet. Vi använder kryptering enligt branschstandard och följer globala sekretessregler för att hålla ditt innehåll säkert och konfidentiellt."
            }
          ]
    },
    Company: {
      "title": "Företag",
      "highlighted_text": "Information",
      "subtitle": "Kontakta oss för eventuella frågor eller support",
      "details": [
            {
              "label": "Företagsnamn",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Huvudkontor",
              "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Förenta staterna"]
            },
            {
              "label": "Kontakta oss",
              "value": ["e-post", "Support tillgänglig dygnet runt"]
            }
          ]
    },
    CTA: {
      "title": "Redo att uppleva skillnaden?",
      "subtitle": "Gå med tusentals yrkesverksamma som litar på NeverCap för sina transkriberingsbehov",
      "button": "Prova NeverCap Gratis →",
      "disclaimer": "Inget kreditkort krävs • Börja transkribera på några sekunder"
    }
  },
  Privacy: {
    title: "Privatliv",
    titleGradient: "Politik",
    subtitle: "Läs om hur vi samlar in, använder och skyddar dina personuppgifter",
    "lastUpdated": "Senast uppdaterad: {datum}",
    "lastUpdatedDate": "21 juli 2025",
    "privacyPolicyTitle": "Integritetspolicy",
    "policyDescription": 'Denna policy beskriver hur NeverCap (nedan kallat "NeverCap", "vår", "vi", "oss") samlar in, använder och lämnar ut dina personuppgifter när du använder våra tjänster, webbplatser (https://www.nevercap.ai/) och programvara (gemensamt kallade "Tjänsterna").',
    "policyAgreement": "Läs denna integritetspolicy noggrant och se till att du förstår den. Genom att använda någon av våra tjänster godkänner du denna integritetspolicy. Om du inte samtycker till vår användning av dina personuppgifter i enlighet med denna policy måste du omedelbart sluta använda våra tjänster.",
    "policyOverview": "I denna policy beskriver vi: vilka uppgifter vi samlar in och varför; hur dina uppgifter hanteras; och dina rättigheter avseende dina uppgifter. Vi säljer inte dina uppgifter.",
    "scopeTitle": "1. Omfattning av denna integritetspolicy",
    "scopeDescription": "Denna integritetspolicy gäller endast vår insamling och behandling av information om användare av Tjänsterna. Denna integritetspolicy gäller inte för några tjänster, webbplatser eller programvara som drivs av tredje part och som är länkade till oss (oavsett om vi tillhandahåller dessa länkar eller om andra användare delar dem), och den gäller inte heller för innehåll, data, applikationer eller material från tredje part. Vi rekommenderar att du kontrollerar integritetspolicyerna för någon tredje parts webbplats eller programvara innan du lämnar någon information till dem.",
    "collectionTitle": "2. Vad vi samlar in och varför",
    "collectionPrinciple": "Vår vägledande princip är att bara samla in det vi behöver. Här är vad det innebär i praktiken:",
    "identityTitle": "2.1 Identitet och åtkomst",
    "identityDescription": "När du registrerar dig för en av våra produkter ber vi om identifierande information som ditt namn och din e-postadress. Detta gör vi för att tillhandahålla viktig produktfunktionalitet och så att vi kan skicka produktuppdateringar och annan viktig information till dig.",
    "billingTitle": "2.2 Faktureringsinformation",
    "billingDescription": "Om du registrerar dig för en betald produkt kommer du att bli ombedd att ange din betalningsinformation och faktureringsadress. Betalningsinformationen skickas direkt till vår betalningsleverantör och når inte våra servrar.",
    "productInteractionsTitle": "2.3 Produktinteraktioner",
    "productInteractionsDescription": "Vi lagrar innehållet som du laddar upp, tar emot eller hanterar i dina produktkonton på våra servrar. Om du inte tar bort detta innehåll kan vi komma att behålla det så länge ditt konto är aktivt.",
    "websiteInteractionsTitle": "2.4 Webbplatsinteraktioner",
    "websiteInteractionsDescription": "Vi samlar in information om din surfaktivitet för analys- och statistiska ändamål, såsom tester av konverteringsfrekvens och experiment med nya produktdesigner. Detta inkluderar till exempel dina webbläsar- och operativsystemversioner, din IP-adress, vilka webbsidor du besökte och hur lång tid det tog att ladda dem, och vilken webbplats som hänvisade dig till oss. Om du har ett konto och är inloggad är dessa webbanalysdata kopplade till din IP-adress och ditt användarkonto tills ditt konto inte längre är aktivt.",
    "cookiesTitle": "2.5 Kakor",
    "cookiesDescription1": "Vi använder även permanenta förstapartscookies och vissa tredjepartscookies för att lagra vissa preferenser, göra det enklare för dig att använda våra applikationer och utföra A/B-testning samt stödja viss analys.",
    "cookiesDescription2": "En cookie är en textbit som lagras av din webbläsare. Den kan hjälpa till att komma ihåg inloggningsinformation och webbplatsinställningar. Den kan också samla in information som din webbläsartyp, operativsystem, besökta webbsidor, besökets längd, visat innehåll och annan klickdata. Du kan justera inställningar för cookielagring och acceptera eller blockera enskilda cookies i dina webbläsarinställningar, men våra appar kommer inte att fungera och andra aspekter av vår tjänst kanske inte fungerar korrekt om du inaktiverar cookies.",
    "correspondenceTitle": "2.6 Frivillig korrespondens",
    "correspondenceDescription": "När du mejlar oss med en fråga eller ber om hjälp sparar vi den korrespondensen, inklusive din e-postadress, så att vi har en historik över tidigare korrespondens att hänvisa till om du kontaktar oss i framtiden.",
    "accessTitle": "3. När vi får åtkomst till eller delar din information",
    "accessDescription1": "För att tillhandahålla produkter eller tjänster som du har begärt. Vi använder vissa tredjepartsleverantörer för att köra våra applikationer och tillhandahålla Tjänsterna till dig. Detta inkluderar moln- och analysleverantörer.",
    "accessDescription2": "För att undersöka, förebygga eller vidta åtgärder mot missbruk. Att få åtkomst till ett kundkonto vid utredning av potentiellt missbruk är en sista utväg. Vi vill skydda integriteten och säkerheten för både våra kunder och de personer som rapporterar problem till oss, och vi gör vårt bästa för att balansera dessa ansvarsområden under hela processen. Om vi upptäcker att du använder våra produkter för ett begränsat ändamål kommer vi att vidta åtgärder vid behov, inklusive att meddela lämpliga myndigheter där det är motiverat.",
    "accessDescription3": "När det krävs enligt gällande lag.",
    "dataRequests": "Begäran om användardata. Vår policy är att inte svara på myndigheters begäran om användardata om vi inte är tvungna att dela data genom rättsliga processer eller under begränsade omständigheter i händelse av en nödförfrågan. Om amerikanska brottsbekämpande myndigheter har nödvändig order, stämning eller domstolsbeslut som kräver att vi delar data, måste vi följa detta. Likaså kommer vi endast att svara på förfrågningar från myndigheter utanför USA om vi är tvungna av den amerikanska regeringen genom förfaranden som anges i ett avtal eller avtal om ömsesidig rättslig hjälp. Det är vår policy att meddela berörda användare innan vi delar data om vi inte är lagligt förbjudna att göra det, förutom i vissa nödfall.",
    "preservationRequests": "Begäran om bevarande. På samma sätt är vår policy att endast efterkomma begäranden om att bevara data om det krävs enligt US Federal Stored Communications Act, 18 USC Section 2703(f), eller genom en korrekt delgiven amerikansk stämning för civilrättsliga ärenden. Vi delar inte bevarade data om det inte krävs enligt lag eller är tvingat av ett domstolsbeslut som vi väljer att inte överklaga. Dessutom, om vi inte får en korrekt fullmakt, domstolsbeslut eller stämning innan den obligatoriska bevarandeperioden löper ut, kommer vi att förstöra alla bevarade kopior av kunddata i slutet av bevarandeperioden.",
    "taxAudits": "Om vi granskas av en skattemyndighet kan vi vara skyldiga att dela faktureringsrelaterad information. Om det händer kommer vi endast att dela det minsta nödvändiga, såsom faktureringsadresser och information om skattebefrielse.",
    "securityTitle": "4. Hur vi skyddar dina uppgifter",
    "securityDescription": "All data krypteras via SSL/TLS när den överförs från våra servrar till din webbläsare.",
    "deletionTitle": "5. Vad händer när du tar bort ditt innehåll",
    "deletionDescription": "Om du tar bort något innehåll blir det omedelbart oåtkomligt.",
    "locationTitle": "6. Plats och datas placering",
    "locationDescription": "Våra produkter och andra webbtjänster drivs i USA. Om du befinner dig i Europeiska unionen, Storbritannien eller någon annanstans utanför USA, vänligen observera att all information du lämnar till oss kommer att överföras till och lagras i USA. Genom att använda våra webbplatser eller tjänster och/eller förse oss med dina personuppgifter samtycker du till denna överföring.",
    "childrenTitle": "7. Barns integritet",
    "childrenDescription": "Tjänsterna riktar sig inte till barn, och vi samlar inte medvetet in personuppgifter från barn under 13 år. Om du är under 13 år, vänligen lämna inte ut någon personlig information via Tjänsterna. Om du tror att ett barn har lämnat oss personuppgifter i strid med denna policy, vänligen kontakta oss enligt nedan.",
    "updatesTitle": "8. Uppdateringar av denna integritetspolicy",
    "updatesDescription": "Vi kan komma att uppdatera denna policy vid behov för att följa relevanta bestämmelser och återspegla eventuella nya rutiner. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida.",
    "contactTitle": "9. Kontakta oss",
    "contactDescription": "Om du har några frågor, kommentarer eller klagomål gällande vår integritetspolicy, vänligen kontakta oss så strävar vi efter att hantera ditt klagomål så snart som möjligt.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Villkor för",
    titleGradient: "Service",
    subtitle: "Läs dessa villkor noggrant innan du använder våra tjänster",
    "lastUpdated": "Senast uppdaterad: {datum}",
    "lastUpdatedDate": "21 juli 2025",
    "termsOfServiceTitle": "Användarvillkor",
    "thankYou": "Tack för att du använder våra produkter!",
    "companyDefinition": 'När vi säger "Företag", "vi", "vår" eller "oss" i detta dokument, hänvisar vi till NeverCap.',
    "servicesDefinition": 'När vi säger "Tjänster" menar vi alla produkter som skapats och underhålls av NeverCap, oavsett om de levereras i en webbläsare, skrivbordsapplikation, mobilapplikation eller något annat format.',
    "termsUpdate": "Vi kan komma att uppdatera dessa användarvillkor i framtiden. Vanligtvis har dessa ändringar gjorts för att förtydliga några av dessa villkor genom att länka till en utökad relaterad policy. När vi gör en betydande ändring av våra policyer kommer vi att uppdatera datumet högst upp på denna sida och vidta andra lämpliga åtgärder för att meddela kontoinnehavare.",
    "acceptanceTitle": "1. Godkännande av avtal",
    "acceptanceDescription1": "Genom att använda våra Tjänster indikerar du att du godkänner detta Avtal, vilket därmed blir ett bindande avtal mellan dig och NeverCap. Du försäkrar att du har laglig rätt att acceptera dessa Villkor och bekräftar att du är myndig nog att ingå ett bindande avtal. NeverCaps godkännande är uttryckligen villkorat av att du samtycker till alla villkor i detta Avtal.",
    "eligibilityRequirement": "Tjänsterna är inte avsedda för och bör inte användas av någon under 18 år. Genom att använda Tjänsterna försäkrar och garanterar du att du uppfyller ovanstående behörighetskrav.",
    "userResponsibility": 'Termerna "du", "din", "själv" ska även omfatta dina anställda, ombud, affärsrepresentanter och alla andra individer som du ger åtkomst till Tjänsterna via ditt Konto (enligt definitionen nedan). Du ansvarar för att alla personer som har åtkomst till Tjänsterna via ditt konto är medvetna om dessa Villkor och följer dem.',
    "termsRevision": "NeverCap förbehåller sig rätten att revidera och uppdatera dessa villkor från tid till annan efter eget gottfinnande. Alla ändringar träder i kraft omedelbart när de publiceras. Din fortsatta användning av Tjänsterna efter att de reviderade villkoren har publicerats innebär att du accepterar och samtycker till ändringarna. Du förväntas kontrollera denna sida då och då så att du är medveten om eventuella ändringar, eftersom de är bindande för dig.",
    "servicesTitle": "2. NeverCaps tjänster",
    "servicesDescription1": "Våra tjänster gör det möjligt för användare att omvandla röstkonversationer till transkriberad text som kan sökas, översättas och delas med andra.",
    "servicesOptions": 'Du kan välja om du vill använda gratisversionen av Tjänsterna ("Gratistjänster") eller den prenumerationsbaserade betalversionen av Tjänsterna för vilken du kan vara skyldig att betala avgifter ("Betaltjänsterna").',
    "servicesAccess": "Vi kommer att göra Tjänsterna tillgängliga för dig. Du ansvarar för att vidta alla nödvändiga åtgärder för att du ska ha tillgång till Tjänsterna.",
    "accountTermsTitle": "3. Kontovillkor",
    "accountSecurity": "Du är ansvarig för att upprätthålla säkerheten för ditt konto. Företaget kan inte och kommer inte att hållas ansvarigt för någon förlust eller skada till följd av att du inte uppfyller denna säkerhetsskyldighet.",
    "lawfulUse": "Du får inte använda Tjänsterna för något olagligt, oetiskt eller omoraliskt syfte.",
    "contentResponsibility": "Du ansvarar för allt innehåll som publiceras och allt aktivitet som sker under ditt konto. Det inkluderar innehåll som publiceras av andra som antingen: (a) har tillgång till dina inloggningsuppgifter; eller (b) har sina egna inloggningar under ditt konto.",
    "humanRequirement": 'Du måste vara en människa. Konton som registrerats av "botar" eller andra automatiserade metoder är inte tillåtna.',
    "paymentTitle": "4. Betalning, återbetalningar och planändringar",
    "freeTrial": "För betalda tjänster som erbjuder en gratis provperiod förklarar vi provperiodens längd när du registrerar dig. Efter provperioden måste du betala i förskott för att fortsätta använda tjänsten. Om du inte betalar upphör dessa tjänster.",
    "upgradePolicy": "Om du uppgraderar från ett gratisabonnemang till ett betalt abonnemang debiterar vi ditt kort omedelbart och din faktureringscykel börjar på uppgraderingsdagen.",
    "taxes": "Alla avgifter är exklusive alla skatter, avgifter eller tullar som påförs av skattemyndigheterna. Vid behov kommer vi att driva in dessa skatter för skattemyndighetens räkning och betala dem till skattemyndigheterna. Annars är du ansvarig för betalning av alla skatter, avgifter eller tullar.",
    "refunds": "Inga köp återbetalas. Du kan när som helst avsluta betalda tjänster genom att logga in på ditt konto. För betalda prenumerationer träder din uppsägning i kraft i slutet av den innevarande betalda perioden, om inte annat anges.",
    "cancellationTitle": "5. Avbokning och uppsägning",
    "cancellationPolicy": "Om du säger upp Tjänsten före slutet av en betald period träder din uppsägning i kraft omedelbart och du kommer inte att debiteras igen. Vi beräknar inte automatiskt proportionellt oanvänd tid under den senaste faktureringsperioden.",
    "terminationRights": "Vi förbehåller oss rätten att stänga av eller säga upp ditt konto och neka all nuvarande eller framtida användning av våra Tjänster av vilken anledning som helst när som helst. Avstängning innebär att du inte kommer att kunna komma åt kontot eller något innehåll på kontot. Uppsägning kommer dessutom att resultera i att ditt konto eller din åtkomst till ditt konto raderas, och att allt innehåll på ditt konto förverkas och avstår. Vi förbehåller oss också rätten att neka vem som helst användning av Tjänsterna av vilken anledning som helst när som helst. Vi har denna klausul eftersom det statistiskt sett, av hundratusentals konton på våra Tjänster, finns minst ett som gör något olagligt.",
    "abusePolicy": "Verbala, fysiska, skriftliga eller andra övergrepp (inklusive hot om övergrepp eller vedergällning) mot företagets anställd eller tjänsteman kan leda till omedelbar uppsägning av kontot.",
    "submissionsTitle": "6. Inskickade bidrag",
    "submissionsDescription": 'Du bekräftar och samtycker till att alla frågor, kommentarer, förslag, idéer, feedback eller annan information gällande webbplatsen ("Inskickade bidrag") som du lämnar till oss inte är konfidentiella och ska bli vår egendom. Vi äger exklusiva rättigheter, inklusive alla immateriella rättigheter, och har rätt till obegränsad användning och spridning av dessa bidrag för alla lagliga ändamål, kommersiella eller andra, utan erkännande eller ersättning till dig. Du avstår härmed från alla ideella rättigheter till sådana bidrag och du garanterar härmed att sådana bidrag är original från dig eller att du har rätt att skicka in sådana bidrag. Du samtycker till att det inte ska finnas någon regressrätt mot oss för påstådda eller faktiska intrång eller missbruk av någon äganderätt i dina bidrag.',
    "uptimeTitle": "7. Drifttid och säkerhet",
    "serviceAvailability": "Din användning av Tjänsterna sker på egen risk. Vi tillhandahåller dessa Tjänster i befintligt skick och i den utsträckning de är tillgängliga. Vi erbjuder inga serviceavtal för de flesta av våra Tjänster, men tar drifttiden för våra applikationer på största allvar.",
    "throttlingPolicy": "Vi förbehåller oss rätten att tillfälligt begränsa eller begränsa kontoåtkomst i sällsynta fall där en användares aktivitet verifieras negativt påverkan på Tjänstens stabilitet och prestanda för andra användare. I alla utom de mest kritiska fallen kommer vi att kontakta dig för att hitta en lösning innan vi vidtar åtgärder.",
    "dataSecurity": "Vi vidtar många åtgärder för att skydda och säkra dina data genom säkerhetskopior, redundanser och kryptering. Vi tillämpar kryptering för dataöverföring över det offentliga internet.",
    "thirdPartyVendors": "Vi använder tredjepartsleverantörer och hostingpartners för att tillhandahålla nödvändig hårdvara, programvara, nätverk, lagring och relaterad teknik som krävs för att köra Tjänsterna.",
    "siteManagementTitle": "8. Platshantering",
    "siteManagementDescription": "Vi förbehåller oss rätten, men inte skyldigheten, att: (1) övervaka webbplatsen för brott mot dessa användarvillkor; (2) vidta lämpliga rättsliga åtgärder mot alla som, efter eget gottfinnande, bryter mot lagen eller dessa användarvillkor, inklusive, men inte begränsat till, att rapportera en sådan användare till brottsbekämpande myndigheter; (3) efter eget gottfinnande och utan begränsning, vägra, begränsa åtkomst till, begränsa tillgängligheten till eller inaktivera (i den utsträckning det är tekniskt möjligt) något av dina bidrag eller någon del därav; (4) efter eget gottfinnande och utan begränsning, meddelande eller ansvar, ta bort från webbplatsen eller på annat sätt inaktivera alla filer och innehåll som är för stora eller på något sätt är betungande för våra system; och (5) på annat sätt hantera webbplatsen på ett sätt som är utformat för att skydda våra rättigheter och egendom och för att underlätta webbplatsens korrekta funktion.",
    "copyrightTitle": "9. Upphovsrätt och äganderätt till innehåll",
    "copyrightCompliance": "Allt innehåll som publiceras på Tjänsterna måste följa amerikansk upphovsrättslag.",
    "ipRights": "Vi gör inga anspråk på några immateriella rättigheter till det material du tillhandahåller Tjänsterna. Allt uppladdat material förblir ditt.",
    "contentModeration": "Vi förhandsgranskar inte innehåll, men förbehåller oss rätten (men inte skyldigheten) att efter eget gottfinnande vägra eller ta bort innehåll som är tillgängligt via Tjänsten.",
    "trademarkProtection": "Namnen, utseendet och känslan av Tjänsterna är upphovsrättsskyddade © till Företaget. Alla rättigheter förbehållna. Du får inte duplicera, kopiera eller återanvända någon del av HTML, CSS, JavaScript eller visuella designelement utan uttryckligt skriftligt tillstånd från Företaget. Du måste begära tillstånd att använda Företagets logotyp eller någon av Tjänstens logotyper i marknadsföringssyfte. Vänligen skicka oss e-post med förfrågningar om att använda logotyper. Vi förbehåller oss rätten att återkalla detta tillstånd om du bryter mot dessa Användarvillkor.",
    "prohibitedExploitation": "Du samtycker till att inte reproducera, duplicera, kopiera, sälja, vidaresälja eller utnyttja någon del av Tjänsterna, användningen av Tjänsterna eller åtkomsten till Tjänsterna utan uttryckligt skriftligt tillstånd från Företaget.",
    "impersonationProhibition": "Du får inte modifiera en annan webbplats på ett sätt som falskeligen antyder att den är kopplad till Tjänsterna eller Företaget.",
    "dmcaPolicy": "Vi respekterar andras immateriella rättigheter. Om du anser att material som är tillgängligt på eller via webbplatsen gör intrång i någon upphovsrätt som du äger eller kontrollerar, vänligen kontakta oss omedelbart. En kopia av din anmälan kommer att skickas till den person som publicerade eller lagrade materialet som adresseras i anmälan. Observera att du enligt tillämplig lag kan hållas ansvarig för skadestånd om du gör väsentliga felaktiga uppgifter i en anmälan. Om du därför inte är säker på att material som finns på eller länkas till av webbplatsen gör intrång i din upphovsrätt, bör du först överväga att kontakta en advokat.",
    "prohibitedActivitiesTitle": "10. Förbjudna aktiviteter",
    "generalProhibition": "Du får inte besöka eller använda webbplatsen för något annat ändamål än det för vilket vi gör webbplatsen tillgänglig. Webbplatsen får inte användas i samband med några kommersiella strävanden förutom de som uttryckligen rekommenderas eller godkänns av oss.",
    "userObligations": "Som användare av webbplatsen samtycker du till att inte:",
    "dataScraping": "Systematiskt hämta data eller annat innehåll från webbplatsen för att direkt eller indirekt skapa eller sammanställa en samling, sammanställning, databas eller katalog utan skriftligt tillstånd från oss.",
    "fraud": "Lura, bedra eller vilseleda oss och andra användare, särskilt i alla försök att få reda på känslig kontoinformation såsom användarlösenord.",
    "securityInterference": "Kringgå, inaktivera eller på annat sätt störa säkerhetsrelaterade funktioner på webbplatsen, inklusive funktioner som förhindrar eller begränsar användning eller kopiering av innehåll eller upprätthåller begränsningar för användningen av webbplatsen och/eller innehållet däri.",
    "defamation": "Förringa, fläcka ner eller på annat sätt skada oss och/eller webbplatsen, enligt vår uppfattning.",
    "harassment": "Använda information som erhållits från webbplatsen för att trakassera, missbruka eller skada en annan person.",
    "supportAbuse": "Använda våra supporttjänster på fel sätt eller skicka in falska rapporter om missbruk eller tjänstefel.",
    "legalCompliance": "Använda webbplatsen på ett sätt som inte överensstämmer med tillämpliga lagar eller förordningar.",
    "framingProhibition": "Delta i obehörig inramning av eller länkning till webbplatsen.",
    "malware": "Ladda upp eller överföra (eller försöka ladda upp eller överföra) virus, trojanska hästar eller annat material, inklusive överdriven användning av versaler och spamming (kontinuerlig publicering av repetitiv text), som stör någons oavbrutna användning och njutning av webbplatsen eller som modifierar, försämrar, stör, ändrar eller stör användningen, funktionerna, driften eller underhållet av webbplatsen.",
    "automation": "Använda systemet automatiskt, till exempel använda skript för att skicka kommentarer eller meddelanden, eller använda datautvinning, robotar eller liknande verktyg för datainsamling och datautvinning.",
    "copyrightRemoval": "Ta bort meddelandet om upphovsrätt eller annan äganderätt från allt innehåll.",
    "impersonation": "Försöka utge dig för att vara en annan användare eller person eller använda en annan användares användarnamn.",
    "spyware": 'Ladda upp eller överföra (eller försöka ladda upp eller överföra) material som fungerar som en passiv eller aktiv informationsinsamlings- eller överföringsmekanism, inklusive, men inte begränsat till, tydliga grafikutbytesformat ("gifs"), 1×1-pixlar, webbuggar, cookies eller andra liknande enheter (ibland kallade "spionprogram" eller "passiva insamlingsmekanismer" eller "pcms").',
    "disruption": "Störa, avbryta eller skapa en otillbörlig belastning på webbplatsen eller de nätverk eller tjänster som är anslutna till webbplatsen.",
    "employeeHarassment": "Trakassera, irritera, skrämma eller hota någon av våra anställda eller ombud som är engagerade i att tillhandahålla någon del av webbplatsen till dig.",
    "accessCircumvention": "Försöka kringgå alla åtgärder på webbplatsen som är utformade för att förhindra eller begränsa åtkomst till webbplatsen, eller någon del av webbplatsen.",
    "codeCopying": "Kopiera eller anpassa webbplatsens programvara, inklusive men inte begränsat till Flash, PHP, HTML, JavaScript eller annan kod.",
    "reverseEngineering": "Med undantag för vad som är tillåtet enligt tillämplig lag, dechiffrera, dekompilera, disassemblera eller bakåtkompilera någon av de program som ingår i eller på något sätt utgör en del av webbplatsen.",
    "bots": "Med undantag för vad som kan vara resultatet av användning av vanlig sökmotor eller webbläsare, använda, starta, utveckla eller distribuera automatiserade system, inklusive men inte begränsat till spindelprogram, robotar, fuskverktyg, skrapprogram eller offline-läsare som åtkommer webbplatsen, eller använda eller starta obehöriga skript eller annan programvara.",
    "buyingAgents": "Använd en inköpsagent eller inköpsagent för att göra köp på webbplatsen.",
    "unauthorizedUse": "Använda webbplatsen på ett obehörigt sätt, inklusive att samla in användarnamn och/eller e-postadresser till användare elektroniskt eller på annat sätt i syfte att skicka oönskad e-post, eller skapa användarkonton automatiskt eller under falska förespeglingar.",
    "competition": "Använda webbplatsen som en del av någon ansträngning att konkurrera med oss eller på annat sätt använda webbplatsen och/eller innehållet för någon inkomstgenererande verksamhet eller kommersiell verksamhet.",
    "advertising": "Använd webbplatsen för att annonsera eller erbjuda försäljning av varor och tjänster.",
    "profileTransfer": "Sälj eller på annat sätt överför din profil.",
    "featuresTitle": "11. Funktioner och buggar",
    "featuresDescription": "Vi utformar våra tjänster med omsorg, baserat på vår egen erfarenhet och erfarenheterna från kunder som delar med sig av sin tid och feedback. Det finns dock ingen tjänst som tillfredsställer alla. Vi garanterar inte att våra tjänster kommer att uppfylla dina specifika krav eller förväntningar.",
    "bugsDescription": "Vi testar också alla våra funktioner innan vi skickar dem. Precis som med all programvara har våra tjänster oundvikligen vissa buggar. Vi spårar de buggar som rapporteras till oss och arbetar med dem, särskilt de som rör säkerhet eller integritet. Alla rapporterade buggar kommer inte att åtgärdas och vi garanterar inte helt felfria tjänster.",
    "correctionsTitle": "12. Rättelser",
    "informationAccuracy": "Det kan finnas information på webbplatsen som innehåller typografiska fel, felaktigheter eller utelämnanden, inklusive beskrivningar, priser, tillgänglighet och diverse annan information. Vi förbehåller oss rätten att korrigera eventuella fel, felaktigheter eller utelämnanden och att ändra eller uppdatera informationen på webbplatsen när som helst, utan föregående meddelande.",
    "siteAvailability": "Vi kan inte garantera att webbplatsen alltid kommer att vara tillgänglig. Vi kan uppleva problem med hårdvara, programvara eller andra problem, eller behöva utföra underhåll relaterat till webbplatsen, vilket kan resultera i avbrott, förseningar eller fel. Vi förbehåller oss rätten att ändra, revidera, uppdatera, stänga av, avbryta eller på annat sätt modifiera webbplatsen när som helst och av vilken anledning som helst utan att meddela dig. Du samtycker till att vi inte har något ansvar alls för förlust, skada eller besvär som orsakas av din oförmåga att komma åt eller använda webbplatsen under driftstopp eller avbrott på webbplatsen. Ingenting i dessa användarvillkor ska tolkas som en förpliktelse för oss att underhålla och stödja webbplatsen eller att tillhandahålla några korrigeringar, uppdateringar eller utgåvor i samband därmed.",
    "userDataTitle": "13. Användardata",
    "userDataDescription": "Vi kommer att behålla vissa uppgifter som du överför till webbplatsen i syfte att hantera webbplatsens prestanda, såväl som uppgifter som rör din användning av webbplatsen. Även om vi regelbundet säkerhetskopierar data är du ensam ansvarig för alla uppgifter som du överför eller som rör aktivitet du har utfört med hjälp av webbplatsen. Du samtycker till att vi inte har något ansvar gentemot dig för förlust eller korruption av sådana uppgifter, och du avstår härmed från all rätt att väcka talan mot oss till följd av sådan förlust eller korruption av sådana uppgifter.",
    "privacyPolicyTitle": "14. Integritetspolicy",
    "privacyPolicyDescription": "Vi bryr oss om dataskydd och säkerhet. Vänligen granska vår integritetspolicy. Genom att använda webbplatsen godkänner du att vara bunden av vår integritetspolicy, som är införlivad i dessa användarvillkor. Observera att webbplatsen finns i USA. Om du besöker webbplatsen från någon annan region i världen med lagar eller andra krav som reglerar insamling, användning eller utlämnande av personuppgifter som skiljer sig från tillämpliga lagar i USA, överför du genom din fortsatta användning av webbplatsen dina uppgifter till USA, och du samtycker till att dina uppgifter överförs till och behandlas i USA.",
    "liabilityTitle": "15. Ansvar",
    "liabilityIntroduction": "Vi nämner ansvar genomgående i dessa villkor, men för att sammanfatta allt i ett avsnitt:",
    "liabilityWaiver": "Du förstår och samtycker uttryckligen till att Bolaget inte ska vara ansvarigt, vare sig enligt lag eller billighetsprincipen, gentemot dig eller någon tredje part för direkta, indirekta, tillfälliga, utebliven vinst, särskilda, följdskador, straffskadestånd eller exemplariska skador, inklusive, men inte begränsat till, skador för utebliven vinst, goodwill, användning, data eller andra immateriella förluster (även om Bolaget har informerats om möjligheten till sådana skador), till följd av: (1) användning eller oförmåga att använda Tjänsterna; (2) fel, misstag eller felaktigheter i innehåll och material; (3) personskada eller egendomsskada, av någon art, till följd av din åtkomst till och användning av webbplatsen; (4) kostnaden för anskaffning av ersättningsvaror och -tjänster till följd av varor, data, information eller tjänster som köpts eller erhållits eller meddelanden som mottagits eller transaktioner som ingåtts via eller från Tjänsterna; (5) obehörig åtkomst till eller användning av våra säkra servrar och/eller all personlig information och/eller finansiell information som lagras däri; (6) avbrott eller upphörande av överföring till eller från webbplatsen; (7) eventuella buggar, virus, trojanska hästar eller liknande som kan överföras till eller via webbplatsen av tredje part, och/eller; (8) eventuella fel eller utelämnanden i innehåll och material eller för förlust eller skada av något slag som uppstår till följd av användningen av innehåll som publicerats, överförts eller på annat sätt gjorts tillgängligt via webbplatsen; (9) uttalanden eller beteende från tredje part i tjänsten; (10) eller andra frågor som rör dessa användarvillkor eller tjänsterna, oavsett om det är ett kontraktsbrott, skadeståndsgrundande handling (inklusive aktiv eller passiv vårdslöshet) eller någon annan ansvarsteori.",
    "miscellaneousTitle": "16. Diverse",
    "miscellaneousDescription": "Dessa användarvillkor och eventuella policyer eller driftsregler som publiceras av oss på webbplatsen eller med avseende på webbplatsen utgör hela avtalet och överenskommelsen mellan dig och oss. Vår underlåtenhet att utöva eller genomdriva någon rättighet eller bestämmelse i dessa användarvillkor ska inte fungera som ett avstående från sådan rättighet eller bestämmelse. Dessa användarvillkor gäller i den utsträckning som lagen tillåter. Vi kan när som helst överlåta några eller alla våra rättigheter och skyldigheter till andra. Vi ska inte vara ansvariga för någon förlust, skada, försening eller underlåtenhet att agera orsakad av någon orsak utanför vår rimliga kontroll. Om någon bestämmelse eller del av en bestämmelse i dessa användarvillkor bedöms vara olaglig, ogiltig eller inte verkställbar, anses den bestämmelsen eller delen av bestämmelsen vara avskiljbar från dessa användarvillkor och påverkar inte giltigheten och verkställbarheten av några återstående bestämmelser. Det finns inget joint venture-, partnerskaps-, anställnings- eller agenturförhållande som skapas mellan dig och oss till följd av dessa användarvillkor eller användning av webbplatsen. Du samtycker till att dessa användarvillkor inte ska tolkas mot oss på grund av att vi har utarbetat dem. Du avstår härmed från alla försvar du kan ha baserat på den elektroniska formen av dessa användarvillkor och avsaknaden av undertecknande av parterna häri för att tillämpa dessa användarvillkor.",
    "contactTitle": "17. Kontakta oss",
    "contactDescription": "Om du har en fråga om någon av användarvillkoren, vänligen kontakta oss.",
    "neverCap": "NeverCap",
    "site": "Plats",
    "services": "Tjänster"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
