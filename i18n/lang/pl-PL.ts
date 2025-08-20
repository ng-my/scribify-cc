// 波兰语
let message = {
  // Strona główna
  HomePage: {
    home: "Strona główna",
    times:
      "{times} darmowych transkrypcji dziennie, {left} pozostało dzisiaj. ",
    tips: "Przejdź na Pro, aby uzyskać nieograniczone transkrypcje.",
    update: "Ulepsz teraz",
    rename: "Zmień nazwę",
    delete: "Usuń",
    cancel: "Anuluj",
    confirm: "Utwórz",
    dialogLabel: "Nazwa folderu",
    recently: "Ostatnie pliki",
    loading: "Ładowanie",
    tour: {
      step0: {
        title: "Witamy w {name}",
        tip: "Tutaj możesz:",
        content:
          "Transkrybować pojedyncze rozmowy, spotkania, wykłady i więcej",
        next: "Rozpocznij"
      },
      step1: {
        title: "Transkrybuj pliki",
        content:
          "Obsługuje trzy metody transkrypcji: pliki lokalne, linki i nagrania."
      },
      step2: {
        title: "Utwórz folder",
        content: 'Kliknij "+" aby utworzyć folder i zorganizować swoje pliki.'
      },
      step3: {
        title: "Przeglądaj szczegóły transkrypcji i edytuj",
        content:
          "Kliknij element, aby zobaczyć szczegóły transkrypcji, edytować i tłumaczyć."
      },
      next: "dalej",
      finish: "Rozumiem"
    },
    export: {
      export: "Eksportuj",
      title: "Generujemy Twój eksport",
      title2: "Twój plik jest gotowy",
      singleLoadingContent: "1 plik jest kompresowany.",
      singleSuccessContent: "1 plik został skompresowany.",
      loadingContent: "{num} plików jest kompresowanych.",
      successContent: "{num} plików zostało skompresowanych.",
      cancel: "Anuluj eksport",
      error: "Błąd eksportu",
      dialog: {
        title: "Ostrzeżenie",
        content: "Anulować eksport?",
        cancel: "Anuluj eksport",
        continue: "Kontynuuj eksport"
      }
    },
    welcome: {
      title: "Witamy w Scribify!",
      description: "Tutaj możesz:",
      transcribe:
        "Bez wysiłku transkrybować z Scribify—zamień rozmowy głosowe w jasny, przeszukiwalny i udostępnialny tekst w mgnieniu oka.",
      precision:
        "Uzyskaj dokładne transkrypcje z identyfikacją mówiących i znacznikami czasu natychmiast.",
      translate:
        "Przełamuj bariery językowe: tłumacz transkrypcje na ponad 200 języków z łatwością.",
      edit: "Edytuj, udoskonalaj i eksportuj swoje transkrypcje w formatach dopasowanych do Twoich potrzeb.",
      collaborate: "Współpracuj, udostępniając swój przepisany tekst innym.",
      button: "Zacznij",
      tip: "Gotowy na zamianę dźwięku w przepisany tekst? Zacznij eksplorować teraz!",
      tip2: "Rozpocznij eksplorację już teraz!",
      tip1: "Gotowy przekształcić audio w transkrypcję tekstu? "
    },
    subscriptionModal: {
      left: {
        title: "Wybierz Plan Pro, aby odblokować więcej",
        c1: "Nieograniczone transkrypcje",
        c2: "10-godzinne przesyłanie",
        c3: "Najwyższy priorytet",
        c4: "99% dokładność transkrypcji",
        c5: "Ponad 100 obsługiwanych języków",
        c6: "Identyfikacja mówiących",
        c7: "Tłumaczenie transkrypcji",
        t1: "Nieograniczone transkrypcje dla jednej osoby.",
        t2: "Każdy plik może mieć do 10 godzin / 5 GB. Prześlij 50 plików na raz.",
        t3: "Zawsze przepiszemy Twoje pliki tak szybko, jak to możliwe, z najwyższym priorytetem."
      },
      right: {
        title: "Wybierz Plan Pro",
        yearly: "Rocznie",
        monthly: "Miesięcznie",
        save: "Oszczędność",
        preMonth: "miesięcznie",
        preYear: "rocznie",
        firstMonth: "pierwszy miesiąc",
        afterwards: "później"
      },
      subscribe: "Subskrybuj"
    }
  },
  // Strona folderów
  FolderPage: {
    table: {
      failed: "Nieudane",
      selected: "Wybrane",
      success: "Sukces",
      fileList: "Lista Plików"
    },
    dialog: {
      move: {
        title: "Przenieś",
        label: "Wybierz folder",
        placeholder: "Wybierz folder",
        confirm: "Przenieś",
        cancel: "Anuluj"
      },
      rename: {
        title: "Zmień nazwę",
        label: "Nazwa pliku",
        confirm: "Zmień nazwę",
        cancel: "Anuluj"
      },
      delete: {
        title: "Usuń",
        file: "plik",
        files: "pliki",
        label: "Potwierdzić usunięcie? Tej akcji nie można cofnąć.",
        confirm: "Usuń",
        cancel: "Anuluj"
      },
      share: {
        title: "Udostępnij",
        label:
          "Każdy z poniższym bezpiecznym linkiem może zobaczyć tę transkrypcję i powiązany plik multimedialny.",
        confirm: "Kopiuj link",
        success: "Kopiowanie udane"
      },
      export: {
        title: "Eksportuj",
        select: "Wybierz potrzebny format",
        settings: "Ustawienia",
        speaker: "Uwzględnij mówcę",
        timecodes: "Uwzględnij kody czasowe",
        confirm: "Eksportuj",
        cancel: "Anuluj",
        selectErr: "Wybierz jeden lub więcej formatów"
      }
    },
    search: {
      placeholder: "Szukaj"
    },
    recently: "Ostatnio",
    record: "Nagrywaj",
    transcribe: "Transkrybuj",
    unclassified: "Niesklasyfikowane foldery",
    buttons: {
      transcribe: "Transkrybuj pliki",
      url: "Transkrybuj linki",
      record: "Nagrywaj i transkrybuj",
      recording: "Nagrywanie..."
    },
    delSuccess: "Usunięto pomyślnie",
    create: "Utwórz",
    endRecord: {
      title: "Powiadomienie",
      content:
        "Nagrywasz. Ta akcja zakończy nagrywanie. Czy chcesz zakończyć nagrywanie?",
      confirm: "Kontynuuj Nagrywanie",
      cancel: "Zakończ Nagrywanie"
    }
  },
  // Przesyłanie plików i nagrywanie
  FileUploadAndRecording: {
    record: {
      record: "Nagrywaj",
      pause: "Pauza",
      resume: "Wznów",
      stop: "Stop",
      endRecord: "Zakończ nagrywanie",
      delete: "Usuń",
      transcribe: "Transkrybuj",
      permissionDenied:
        "Odmowa dostępu do mikrofonu lub urządzenie nie istnieje",
      dialog: {
        delete: {
          title: "Ostrzeżenie",
          label: "Czy na pewno chcesz usunąć to nagranie?",
          confirm: "Usuń",
          cancel: "Anuluj"
        },
        complete: {
          title: "Nagrywanie zakończone",
          label:
            "Nagranie osiągnęło 10 godzin i zostało automatycznie zatrzymane. Proszę o transkrypcję.",
          confirm: "Rozumiem"
        },
        speaker: {
          content:
            "W przypadku rozpoznawania mówców pliki są ograniczone do 3 godzin. Proszę odznaczyć '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Transkrybuj media online",
        title: "Wklej linki",
        label:
          "Wklej link do wideo lub audio z: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram i innych platform...",
        confirm: "Dodaj",
        cancel: "Anuluj",
        // Wprowadź poprawny link
        errorTitle:
          "Wprowadzony adres linku jest nieprawidłowy. Sprawdź i spróbuj ponownie.",
        linkName: "Link"
      },
      file: {
        orTitle: "Transkrybuj media online",
        dialogTitle: "Transkrybuj pliki",
        tip1: "Przeciągnij pliki tutaj lub kliknij, aby przeglądać",
        tip2: "Kliknij, aby przeglądać",
        or: "lub",
        supported: "Obsługiwane formaty"
      },
      del: {
        title: "Ostrzeżenie",
        content:
          "Cały postęp zostanie utracony. Potwierdzić anulowanie transkrypcji?",
        cancel: "Potwierdź anulowanie",
        confirm: "Kontynuuj transkrypcję"
      },
      files: "Pliki",
      resultDialogTitle: "Transkrybuj pliki",
      resultDialogTitle2: "Transkrypcja pliku",
      cancel: "Anuluj",
      confirm: "Transkrybuj",
      return: "Powrót",
      addMore: "Dodaj więcej",
      language: "Język mediów",
      failed: "Nieudane",
      tooLarge: "Plik przekracza limit (5G).",
      linkUpload: "Przesyłanie",
      fileFormat: "Format pliku jest niedozwolony",
      localFiles: "Pliki lokalne",
      pasteLink: "Link online",
      uploadErr: "Błąd przesyłania",
      hashErr: "Błąd hash",
      table: {
        status: "Status",
        file: "Plik",
        size: "Rozmiar",
        noData: "Brak danych"
      },
      maxFileNum: "Liczba plików nie może przekroczyć {num}.",
      speaker: "Rozpoznaj mówców",
      speakerLabel: "Automatycznie wykryj, kto mówi",
      guest: {
        transcribe: "Rozpisać",
        file: "Plik",
        audio: "Plik audio/wideo",
        Uploading: "Przesyłanie..."
      }
    }
  },
  // Strona szczegółów transkrypcji
  TranscriptionPage: {
    langChooseV1: {
      recently: "Ostatnio",
      popular: "Popularne",
      other: "Inne",
      searchLanguage: "Szukaj języka",
      noMatch: "Nie znaleziono pasującego języka",
      English: "Angielski",
      "English(US)": "Angielski (USA)",
      "English(UK)": "Angielski (UK)",
      Spanish: "Hiszpański",
      Portuguese: "Portugalski",
      French: "Francuski",
      Italian: "Włoski",
      German: "Niemiecki",
      Dutch: "Holenderski",
      Polish: "Polski",
      Danish: "Duński",
      Japanese: "Japoński",
      Korean: "Koreański",
      Hungarian: "Węgierski",
      Czech: "Czeski",
      Chinese: "Chiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Azerbaijani: "Azerski",
      Estonian: "Estoński",
      Belarusian: "Białoruski",
      Bulgarian: "Bułgarski",
      Icelandic: "Islandzki",
      Bosnian: "Bośniacki",
      Persian: "Perski",
      Russian: "Rosyjski",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Finnish: "Fiński",
      Kazakh: "Kazachski",
      Galician: "Galicyjski",
      Catalan: "Kataloński",
      "Chinese(Simplified)": "Chiński (uproszczony)",
      Kannada: "Kannada",
      Croatian: "Chorwacki",
      Latvian: "Łotewski",
      Lithuanian: "Litewski",
      Romanian: "Rumuński",
      Marathi: "Marathi",
      Malay: "Malajski",
      Macedonian: "Macedoński",
      Maori: "Maoryski",
      Afrikaans: "Afrikaans",
      Nepali: "Nepalski",
      Norwegian: "Norweski",
      Swedish: "Szwedzki",
      Serbian: "Serbski",
      Slovak: "Słowacki",
      Slovenian: "Słoweński",
      Swahili: "Suahili",
      Tagalog: "Tagalski",
      Tamil: "Tamilski",
      Thai: "Tajski",
      Turkish: "Turecki",
      Welsh: "Walijski",
      Urdu: "Urdu",
      Ukrainian: "Ukraiński",
      Greek: "Grecki",
      Armenian: "Ormiański",
      Hindi: "Hindi",
      Indonesian: "Indonezyjski",
      Vietnamese: "Wietnamski",
      Albanian: "Albański",
      Amharic: "Amharski",
      Assamese: "Asamski",
      Occitan: "Oksytański",
      Bashkir: "Baszkirski",
      Basque: "Baskijski",
      Breton: "Bretoński",
      Tibetan: "Tybetański",
      Faroese: "Farerski",
      Sanskrit: "Sanskryt",
      Khmer: "Khmerski",
      Georgian: "Gruziński",
      Gujarati: "Gudżarati",
      "Haitian Creole": "Kreolski haitański",
      Hausa: "Hausa",
      Latin: "Łaciński",
      Lao: "Laotański",
      Lingala: "Lingala",
      Luxembourgish: "Luksemburski",
      Malagasy: "Malgaski",
      Maltese: "Maltański",
      Malayalam: "Malajalam",
      Mongolian: "Mongolski",
      Bengali: "Bengalski",
      Burmese: "Birmański",
      Punjabi: "Pendżabski",
      Pashto: "Paszto",
      Sinhala: "Syngaleski",
      Shona: "Shona",
      Somali: "Somalijski",
      Tajik: "Tadżycki",
      Tatar: "Tatarski",
      Telugu: "Telugu",
      Turkmen: "Turkmeński",
      Uzbek: "Uzbecki",
      Hawaiian: "Hawajski",
      "Norwegian Nynorsk": "Norweski Nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundajski",
      Yiddish: "Jidysz",
      Yoruba: "Joruba",
      Javanese: "Jawajski",
      Cantonese: "Kantoński",
      Abkhaz: "Abchaski",
      Afar: "Afar",
      alz: "Alur",
      ach: "Aczoli",
      awa: "Awadhi",
      Avaric: "Awarski",
      Ewe: "Ewe",
      Aymara: "Ajmara",
      Irish: "Irlandzki",
      Oriya: "Orija",
      Oromo: "Oromo",
      Ossetian: "Osetyjski",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Balijski",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampangan",
      nso: "Północny Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beludżi",
      bho: "Bhodżpuri",
      bua: "Buriacki",
      chm: "Maryjski",
      Chamorro: "Czamorro",
      Chechen: "Czeczeński",
      chk: "Chuuk",
      Chuvash: "Czuwaski",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Szan",
      tet: "Tetum",
      Divehi: "Malediwski",
      dyu: "Diula",
      tiv: "Tiw",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndau",
      "South Ndebele": "Południowy Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "Pismo N'Ko",
      "French(Canada)": "Francuski (Kanada)",
      Fijian: "Fidżyjski",
      fon: "Fon",
      "Western Frisian": "Zachodniofryzyjski",
      fur: "Friulski",
      Fulah: "Fulani",
      Kongo: "Kongo",
      Kalaallisut: "Grenlandzki",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgiski",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kaczin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsykański",
      "crh-Latn": "Krymsko-tatarski (łaciński)",
      crh: "Krymsko-tatarski (cyrylica)",
      Quechua: "Keczua",
      Kurdish: "Kurdyjski (Kurmanji)",
      ckb: "Kurdyjski (Sorani)",
      trp: "Kok Borok",
      ltg: "Łatgalski",
      lij: "Liguryjski",
      Limburgish: "Limburgijski",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardzki",
      rom: "Romski",
      mad: "Madurajski",
      Manx: "Manx",
      mwr: "Marwari",
      "ms-Arab": "Malajski (Jawi)",
      Marshallese: "Marszalski",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Maurytyjski kreolski",
      "mni-Mtei": "Meitei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (wschodnie Huasteca)",
      "Southern Sotho": "Południowy Sotho",
      new: "Newarski",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pendżabski (Shahmukhi)",
      "pt-PT": "Portugalski (Portugalia)",
      Chichewa: "Cziczewa",
      cgg: "Kiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotecki",
      "Northern Sami": "Północnosaamski",
      Samoan: "Samoański",
      kri: "Krio",
      crs: "Kreolski seszelski",
      Sango: "Sango",
      "sat-Latn": "Santali (łaciński)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "Szkocki gaelicki",
      sus: "Susu",
      ceb: "Cebuański",
      ber: "Tamazight (Tifinagh)",
      "ber-Latn": "Tamazight (łaciński)",
      Tahitian: "Tahitański",
      Tonga: "Tongijski",
      Tigrinya: "Tigrinia",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuwiński",
      war: "Warajski",
      mak: "Makasarski",
      vec: "Wenecki",
      Uyghur: "Ujgurski",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurcki",
      szl: "Śląski",
      scn: "Sycylijski",
      hil: "Hiligaynon",
      jam: "Jamajski patois",
      sah: "Jakucki",
      ace: "Acehnese",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (łaciński)",
      Inuktitut: "Inuktitut (sylabiczny)",
      yua: "Jukatański maja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Logowanie, rejestracja, zmiana hasła
  IdentityInfoManage: {
    or: "lub", // lub
    LoginBtn: "Zaloguj się przez e-mail",
    LoginGoogle: "Zaloguj się przez Google",
    SignupBtn: "Zarejestruj się przez e-mail",
    SignupGoogle: "Zarejestruj się przez Google",
    SignupDes: "Zarejestruj się już dziś i zobacz magię — za darmo.",
    SignupTitle: "Dokładna i nieograniczona transkrypcja",
    signup: "Zarejestruj się", // rejestracja
    sign_up: "Zarejestruj się", // rejestracja
    loginByGoogle: "Kontynuuj z Google", // logowanie przez Google
    emailAddress: "Wprowadź swój adres email", // wprowadź swój email
    createAccount: "Utwórz nowe konto", // utwórz konto
    accountExists: "Masz już konto? ", // masz już konto? zaloguj się
    agreeTerm: {
      agree: "Kontynuując, zgadzasz się z naszymi {terms} i {policy}.",
      terms: "Warunkami",
      policy: "Polityką prywatności"
    },
    setPassword: "Ustaw hasło", // ustaw hasło
    code: "Kod weryfikacyjny", // kod weryfikacyjny
    resend: "Wyślij ponownie", // wyślij ponownie
    enterPassword: "Hasło: minimum 6 znaków.", // wprowadź hasło
    passwordLeval: "Poziom hasła", // siła hasła
    Weak: "Słabe", // słabe, średnie, silne
    Medium: "Średnie", // słabe, średnie, silne
    Strong: "Silne", // słabe, średnie, silne
    confirmPassword: "Potwierdź swoje hasło", // potwierdź hasło
    invalidEmail: "Nieprawidłowy adres email", // nieprawidłowy adres email
    logInDirectly: "To konto już istnieje. Zaloguj się bezpośrednio.", // konto już istnieje, zaloguj się bezpośrednio
    codeErrorTryAgain: "Błąd kodu weryfikacyjnego. Spróbuj ponownie.", // błąd kodu weryfikacyjnego, spróbuj ponownie
    atLeastSix: "Hasło musi mieć co najmniej 6 znaków.", // hasło musi mieć co najmniej 6 znaków
    passwordNotMatch: "Hasła nie pasują do siebie. Spróbuj ponownie.", // hasła nie pasują do siebie, spróbuj ponownie
    login: "Zaloguj się", // zaloguj się
    log_in: "Zaloguj się", // zaloguj się
    log_In: "Zaloguj się", // zaloguj się
    password: "Hasło", // hasło
    forgotPassword: "Zapomniałeś hasła?", // zapomniałeś hasła?
    noAccount: "Nie masz konta?", // nie masz konta? zarejestruj się
    accountNotExists: "To konto nie istnieje.", // konto nie istnieje
    passwordError: "Błąd hasła", // błąd hasła
    sendCode: "Wyślij kod weryfikacyjny", // wyślij kod weryfikacyjny
    resetPassword: "Zresetuj hasło", // zresetuj hasło
    resetYourPassword: "Zresetuj swoje hasło", // zresetuj swoje hasło
    newOldCantSame: "Nowe hasło musi być inne niż stare hasło.", // nowe hasło musi być inne niż stare hasło
    passwordResetOk: "Hasło zostało pomyślnie zresetowane!", // hasło zostało pomyślnie zresetowane!
    signupToSaveProgress: "Dokończ rejestrację, aby zapisać swój postęp.",
    tip: "Wskazówka",
    tipContentEmail:
      "Właśnie wysłaliśmy hasło logowania do Twojego konta na podany adres e-mail.",
    tipContentPassword:
      "Sprawdź swoją skrzynkę odbiorczą i zaloguj się za pomocą adresu e-mail oraz hasła.",
    codeToEmail:
      "Właśnie wysłaliśmy kod weryfikacyjny na Twój adres e-mail. Sprawdź swoją skrzynkę odbiorczą i wklej kod weryfikacyjny powyżej."
  },
  // Strona szczegółów udostępniania
  Sharepage: {},
  // Strona inicjalizacji
  InitPage: {},
  // Ustawienia konta
  AccountSettingsPage: {
    subscription: "Plan subskrypcji",
    freeversion: "Darmowa",
    transcribeTimesDay: "3 transkrypcje dziennie",
    uploadMinutes: "Przesyłanie 30-minutowe",
    lowerPriority: "Niższy priorytet",
    currentPlan: "Obecny plan",
    professionalEdition: "wersja profesjonalna",
    unlimitedTranscription: "Nielimitowana transkrypcja",
    unlimitedNumberOfTimes:
      "Nieograniczona częstotliwość i czas trwania transkrypcji.",
    filesUploadedAtOnce:
      "Każdy plik może mieć do 10 godzin/5 GB. Prześlij 50 plików naraz.",
    highestPriority: "najwyższy priorytet",
    weWillGiveTheHighest:
      "Zawsze transkrybujemy Twoje pliki najszybciej jak to możliwe z najwyższym priorytetem.",
    theFirstMonth: "Pierwszy miesiąc",
    subscribeTo: "subskrybuj",
    basicVersionFree: "Wersja podstawowa (darmowa)",
    return: "Powrót",
    annualize: "roczny",
    monthly: "miesięczny",
    everyYear: "co roku",
    saved: "zapisano",
    byTheMonth: "miesięcznie",
    firstMonth: "pierwszy miesiąc",
    afterwardsEveryMonth: "Następnie co miesiąc",
    manageSubscription: "Zarządzaj subskrypcją",
    professionalYearbook: "Profesjonalna roczna",
    professionalMonthly: "Profesjonalna miesięczna",
    subscriptionWillCancelledOn: "Twoja subskrypcja zostanie anulowana",
    displayLanguage: "Język wyświetlania",
    update: "Ulepsz teraz",
    basicversion: "Wersja podstawowa (Darmowa)",
    daily: "{start} z {end} dziennych transkrypcji wykorzystanych",
    upgradetoPro: "Ulepsz do Pro",
    accountSetting: "Ustawienia konta",
    logOut: "Wyloguj się",
    account: "Konto",
    email: "Email",
    id: "ID",
    password: "Hasło",
    resetPassword: "Zresetuj hasło",
    logIn: "Zaloguj się",
    tryForFree: "Wypróbuj za darmo",
    notFund: "Nie znaleziono",
    couldntFind: "Nie znaleźliśmy tego, czego szukasz.",
    proAnnual: "Pro Roczna",
    proMonthly: "Pro Miesięczna",
    perMonth: "miesięcznie",
    afterwards: "następnie",
    accuracy: "dokładność transkrypcji",
    supported: "obsługiwane języki",
    identification: "Identyfikacja mówcy",
    transcriptSranslation: "Tłumaczenie transkrypcji",
    perYear: "rocznie",
    getProPlan: "Zdobądź plan Pro",
    changeToAnnual: "Zmień na roczny",
    automaticRenewalon: "Automatyczne odnawianie",
    eachMonth: "Automatyczne odnawianie {time}. dnia każdego miesiąca.",
    automaticRenewal:
      "Automatyczne odnowienie nie powiodło się, sprawdź metodę płatności.",
    eachYear: "Automatyczne odnawianie w dniu {time} każdego roku.",
    returnAccountSetting: "Powrót",
    needsToWaitLonger:
      "Poczekaj dłużej, zanim Twoje pliki zostaną przetranskrybowane.",
    freeThreeTimesDay: "Codziennie przetranskrybuj 3 pliki za darmo.",
    oneFileUploaded:
      "Każdy plik może trwać do 30 minut. Prześlij 1 plik na raz.",
    uploadWithinHours: "Przesyłanie w ciągu 10 godzin",
    yourSubscription: "Twoja subskrypcja zostanie anulowana {time}.",
    save: "Oszczędzać"
  },
  // Mapa języków
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Chiński (uproszczony)",
      "Chinese(Traditional)": "Chiński (tradycyjny)",
      Japanese: "Japoński",
      Danish: "Duński",
      German: "Niemiecki",
      English: "Angielski",
      Spanish: "Hiszpański",
      French: "Francuski",
      Italian: "Włoski",
      Hungarian: "Węgierski",
      Dutch: "Holenderski",
      Norwegian: "Norweski",
      Polish: "Polski",
      Portuguese: "Portugalski",
      Finnish: "Fiński",
      Swedish: "Szwedzki",
      Turkish: "Turecki",
      Greek: "Grecki",
      Russian: "Rosyjski",
      Ukrainian: "Ukraiński",
      Hebrew: "Hebrajski",
      Arabic: "Arabski",
      Korean: "Koreański"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Szablon SaaS Nuxt3 typu open-source, z wstępnie zintegrowanymi globalnymi bramkami płatności (Stripe/Cream), Google OAuth, routingiem i18n oraz narzędziami do optymalizacji SEO. Zaprojektowany dla deweloperów uruchamiających wielojęzyczne aplikacje internetowe, oferuje wsparcie SSR/SSG i bezpieczeństwo klasy produkcyjnej od razu po instalacji.",
    startLink: "Rozpocznij bezpłatny okres próbny~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Dołącz do listy oczekujących, otrzymuj najnowsze wiadomości NuxtPro jako pierwszy ORAZ zniżki!",
      placeholder: "Wprowadź swój email",
      button: "Dołącz do listy oczekujących",
      joinCountMessage:
        "🔥 Wczesny użytkownik #{count} właśnie dołączył do listy oczekujących!"
    },
    seo: {
      title: "Szablon SaaS Nuxt z otwartym kodem źródłowym | NuxtPro",
      description:
        "Szablon NuxtJS ze wszystkim, czego potrzebujesz, aby zaprezentować swój produkt klientom. Od pomysłu do produkcji w 5 minut."
    },
    api: {
      title: "to jest demo",
      corpInfo: "informacje o firmie"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "błąd pobierania wideo"
      },
      mse: {
        code: 2,
        msg: "błąd dodawania strumienia"
      },
      parse: {
        code: 3,
        msg: "błąd analizy"
      },
      format: {
        code: 4,
        msg: "nieprawidłowy format"
      },
      decoder: {
        code: 5,
        msg: "błąd dekodowania"
      },
      runtime: {
        code: 6,
        msg: "błędy gramatyczne"
      },
      timeout: {
        code: 7,
        msg: "przekroczenie czasu odtwarzania"
      },
      other: {
        code: 8,
        msg: "inne błędy"
      }
    },
    HAVE_NOTHING: "Brak informacji o gotowości audio/wideo",
    HAVE_METADATA: "Metadane audio/wideo są gotowe ",
    HAVE_CURRENT_DATA:
      "Dane o aktualnym położeniu odtwarzania są dostępne, ale nie ma wystarczających danych do odtworzenia następnej klatki/milisekundy",
    HAVE_FUTURE_DATA: "Dostępne są aktualne dane i przynajmniej jedna klatka",
    HAVE_ENOUGH_DATA:
      "Dostępne dane są wystarczające do rozpoczęcia odtwarzania",
    NETWORK_EMPTY: "Audio/wideo nie zostało zainicjalizowane",
    NETWORK_IDLE:
      "Audio/wideo jest aktywne i zostało wybrane dla zasobów, ale sieć nie jest używana",
    NETWORK_LOADING: "Przeglądarka pobiera dane",
    NETWORK_NO_SOURCE: "Nie znaleziono źródła audio/wideo",
    MEDIA_ERR_ABORTED: "Proces pobierania został przerwany przez użytkownika",
    MEDIA_ERR_NETWORK: "Wystąpił błąd podczas pobierania",
    MEDIA_ERR_DECODE: "Wystąpił błąd podczas dekodowania",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Audio/wideo nie jest obsługiwane",
    REPLAY: "Odtwórz ponownie",
    ERROR: "Sieć jest offline",
    PLAY_TIPS: "Odtwórz",
    PAUSE_TIPS: "Pauza",
    PLAYNEXT_TIPS: "Odtwórz następne",
    DOWNLOAD_TIPS: "Pobierz",
    ROTATE_TIPS: "Obróć",
    RELOAD_TIPS: "Odśwież",
    FULLSCREEN_TIPS: "Pełny ekran",
    EXITFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu",
    CSSFULLSCREEN_TIPS: "Pełny ekran CSS",
    EXITCSSFULLSCREEN_TIPS: "Wyjdź z pełnego ekranu CSS",
    TEXTTRACK: "Napisy",
    PIP: "PIP",
    SCREENSHOT: "Zrzut ekranu",
    LIVE: "NA ŻYWO",
    OFF: "Wyłącz",
    OPEN: "Otwórz",
    MINI_DRAG: "Kliknij i przytrzymaj, aby przeciągnąć",
    MINISCREEN: "Mini ekran",
    REFRESH_TIPS: "Spróbuj ponownie",
    REFRESH: "Odśwież",
    FORWARD: "Do przodu",
    LIVE_TIP: "Na żywo",
    TM_SUBTITLE_SHOW_TIPS: "Włącz napisy",
    TM_SUBTITLE_HIDE_TIPS: "Wyłącz napisy",
    TM_MINIMIZE_TIPS: "Ukryj wideo"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja: 25 sierpnia 2025 r.",
    policyDescription:
      "Niniejsza Polityka opisuje sposób, w jaki Scribify (zwany dalej „Scribify”, „nasz”, „my”, „nas”) gromadzi, wykorzystuje i ujawnia Twoje dane osobowe, gdy korzystasz z naszych usług, stron internetowych",
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: "i oprogramowania (zwanych łącznie „Usługami”).",
    policyAgreement:
      "Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności i upewnienie się, że ją rozumiesz. Korzystając z naszych Usług, akceptujesz niniejszą Politykę Prywatności. Jeśli nie wyrażasz zgody na wykorzystywanie przez nas Twoich danych osobowych zgodnie z niniejszą Polityką, musisz natychmiast zaprzestać korzystania z naszych Usług.",
    policyOverview:
      "W niniejszej polityce określamy: jakie dane gromadzimy i dlaczego; jak przetwarzamy Twoje dane; oraz Twoje prawa związane z Twoimi danymi. Nie sprzedajemy Twoich danych.",
    scopeTitle: "1. Zakres niniejszej Polityki Prywatności",
    whatWeCollectTitle: "2. Co zbieramy i dlaczego",
    accessShareTitle:
      "3. Kiedy uzyskujemy dostęp do Twoich danych lub udostępniamy je",
    secureDataTitle: "4. Jak zabezpieczamy Twoje dane",
    deleteContentTitle: "5. Co się dzieje, gdy usuniesz swoją treść",
    locationTitle: "6. Lokalizacja witryny i danych",
    childrenPrivacyTitle: "7. Prywatność dzieci",
    updatesTitle: "8. Aktualizacje niniejszej Polityki Prywatności",
    contactUsTitle: "9. Skontaktuj się z nami",
    identityAccessTitle: "2.1 Tożsamość i dostęp",
    billingInfoTitle: "2.2 Informacje rozliczeniowe",
    productInteractionsTitle: "2.3 Interakcje produktów",
    websiteInteractionsTitle: "2.4 Interakcje ze stroną internetową",
    cookiesTitle: "2.5 Pliki cookie",
    voluntaryCorrespondenceTitle: "2.6 Korespondencja dobrowolna",
    scopeContent:
      "Niniejsza Polityka Prywatności dotyczy wyłącznie gromadzenia i przetwarzania przez nas informacji o użytkownikach Usług. Niniejsza Polityka Prywatności nie ma zastosowania do usług, stron internetowych ani oprogramowania obsługiwanych przez osoby trzecie, do których prowadzą linki z naszej strony (niezależnie od tego, czy to my udostępniamy te linki, czy inni użytkownicy je udostępniają), ani do treści, danych, aplikacji ani materiałów pochodzących od osób trzecich. Zalecamy zapoznanie się z polityką prywatności stron internetowych lub oprogramowania osób trzecich przed udostępnieniem im jakichkolwiek informacji.",
    collectPrinciple:
      "Naszą naczelną zasadą jest zbieranie tylko tego, czego potrzebujemy. Oto, co to oznacza w praktyce:",
    identityAccessContent:
      "Rejestrując się w jednym z naszych produktów, prosimy o podanie danych identyfikacyjnych, takich jak imię i nazwisko oraz adres e-mail. Ma to na celu zapewnienie podstawowych funkcji produktu oraz umożliwienie nam wysyłania aktualizacji i innych istotnych informacji.",
    billingInfoContent:
      "Jeśli zarejestrujesz się w celu zakupu produktu płatnego, zostaniesz poproszony o podanie danych do płatności i adresu rozliczeniowego. Dane do płatności są przesyłane bezpośrednio do naszego systemu przetwarzania płatności i nie trafiają na nasze serwery.",
    productInteractionsContent:
      "Przechowujemy na naszych serwerach treści, które przesyłasz, odbierasz lub przechowujesz na swoich kontach produktowych. O ile nie usuniesz tych treści, możemy je przechowywać tak długo, jak długo Twoje konto jest aktywne.",
    websiteInteractionsContent:
      "Gromadzimy informacje o Twojej aktywności w przeglądarce do celów analitycznych i statystycznych, takich jak testowanie współczynnika konwersji i eksperymentowanie z nowymi projektami produktów. Obejmuje to na przykład wersje Twojej przeglądarki i systemu operacyjnego, Twój adres IP, odwiedzone strony internetowe i czas ich ładowania oraz stronę, która Cię do nas skierowała. Jeśli posiadasz konto i jesteś zalogowany, te dane analityczne są powiązane z Twoim adresem IP i kontem użytkownika, dopóki Twoje konto nie będzie już aktywne.",
    cookiesContent1:
      "Używamy również trwałych plików cookie własnych i niektórych plików cookie podmiotów trzecich, aby zapisywać pewne preferencje, ułatwiać korzystanie z naszych aplikacji, przeprowadzać testy A/B, a także wspierać niektóre analizy.",
    cookiesContent2:
      "Plik cookie to fragment tekstu przechowywany przez przeglądarkę. Może on pomóc w zapamiętaniu danych logowania i preferencji witryny. Może również gromadzić informacje takie jak typ przeglądarki, system operacyjny, odwiedzane strony internetowe, czas trwania wizyty, przeglądane treści i inne dane dotyczące kliknięć. Możesz dostosować ustawienia przechowywania plików cookie oraz akceptować lub blokować poszczególne pliki cookie w ustawieniach przeglądarki, jednak nasze aplikacje nie będą działać, a inne aspekty naszych usług mogą nie działać poprawnie, jeśli wyłączysz obsługę plików cookie.",
    voluntaryCorrespondenceContent:
      "Gdy wysyłasz do nas wiadomość e-mail z pytaniem lub prośbą o pomoc, przechowujemy tę korespondencję, łącznie z Twoim adresem e-mail, aby mieć historię wcześniejszej korespondencji, która może się przydać, jeśli skontaktujesz się z nami w przyszłości.",
    accessShareContent1:
      "Aby dostarczać żądane przez Ciebie produkty lub usługi. Korzystamy z usług zewnętrznych podprocesorów, aby pomóc w obsłudze naszych aplikacji i świadczeniu Ci Usług. Dotyczy to również dostawców usług w chmurze i usług analitycznych.",
    accessShareContent2:
      "W celu zbadania, zapobiegania lub podjęcia działań w związku z nadużyciami. Dostęp do konta klienta podczas badania potencjalnego nadużycia jest ostatecznością. Chcemy chronić prywatność i bezpieczeństwo zarówno naszych klientów, jak i osób zgłaszających nam problemy i dokładamy wszelkich starań, aby zrównoważyć te obowiązki w całym procesie. Jeśli odkryjemy, że korzystasz z naszych produktów w celach objętych ograniczeniami, podejmiemy niezbędne działania, w tym powiadomimy odpowiednie organy, jeśli będzie to uzasadnione.",
    accessShareContent3: "Jeśli wymagają tego obowiązujące przepisy prawa.",
    userDataRequests:
      "- Żądania udostępnienia danych użytkowników. Naszą polityką jest nieodpowiadanie na rządowe żądania udostępnienia danych użytkowników, chyba że jesteśmy do tego zobowiązani na mocy postępowania prawnego lub w wyjątkowych okolicznościach w przypadku żądania w trybie pilnym. Jednakże, jeśli amerykańskie organy ścigania posiadają niezbędny nakaz sądowy, wezwanie do sądu w postępowaniu karnym lub nakaz sądowy nakazujący nam udostępnienie danych, musimy się do niego zastosować. Podobnie, będziemy odpowiadać na żądania władz rządowych spoza Stanów Zjednoczonych wyłącznie na wniosek rządu USA, zgodnie z procedurami określonymi w umowie o wzajemnej pomocy prawnej. Naszą polityką jest powiadamianie użytkowników, których dane dotyczą, przed udostępnieniem danych, chyba że jest to prawnie zabronione, oraz z wyjątkiem sytuacji nadzwyczajnych.",
    preservationRequests:
      "- Żądania dotyczące zabezpieczenia danych. Podobnie, naszą polityką jest spełnianie żądań dotyczących zabezpieczenia danych wyłącznie na mocy amerykańskiej federalnej ustawy o przechowywaniu danych (US Federal Stored Communications Act), § 2703(f) tytułu 18 Kodeksu Stanów Zjednoczonych (USC), lub na mocy prawidłowo doręczonego wezwania sądowego w sprawach cywilnych. Nie udostępniamy zabezpieczonych danych, chyba że wymaga tego prawo lub nakaz sądowy, od którego nie wnosimy apelacji. Ponadto, o ile nie otrzymamy odpowiedniego nakazu sądowego, postanowienia sądu lub wezwania sądowego przed upływem wymaganego okresu przechowywania, zniszczymy wszelkie zabezpieczone kopie danych klientów po upływie okresu przechowywania.",
    taxAudit:
      "- W przypadku kontroli przez organ podatkowy możemy zostać zobowiązani do udostępnienia informacji dotyczących rozliczeń. W takim przypadku udostępnimy tylko niezbędne informacje, takie jak adresy rozliczeniowe i informacje o zwolnieniach podatkowych.",
    secureDataContent1: "Wszystkie dane są szyfrowane za pomocą",
    sslTlsLink: "SSL/TLS",
    secureDataContent2:
      "gdy są przesyłane z naszych serwerów do Twojej przeglądarki.",
    deleteContentContent:
      "Jeśli usuniesz jakąkolwiek treść, stanie się ona natychmiast niedostępna.",
    locationContent:
      "Nasze produkty i inne zasoby internetowe są obsługiwane w Stanach Zjednoczonych. Jeśli mieszkasz w Unii Europejskiej, Wielkiej Brytanii lub innym miejscu poza Stanami Zjednoczonymi, pamiętaj, że wszelkie informacje, które nam przekazujesz, będą przesyłane do Stanów Zjednoczonych i tam przechowywane. Korzystając z naszych stron internetowych lub Usług i/lub przekazując nam swoje dane osobowe, wyrażasz zgodę na takie przesyłanie.",
    childrenPrivacyContent:
      "Usługi nie są skierowane do dzieci i świadomie nie gromadzimy danych osobowych dzieci poniżej 13. roku życia. Jeśli nie masz ukończonych 13 lat, prosimy o nieprzesyłanie żadnych danych osobowych za pośrednictwem Usług. Jeśli uważasz, że dziecko przekazało nam dane osobowe z naruszeniem niniejszej Polityki, skontaktuj się z nami, korzystając z poniższych wskazówek.",
    updatesContent:
      "Możemy aktualizować tę politykę w razie potrzeby, aby była zgodna z obowiązującymi przepisami i odzwierciedlała wszelkie nowe praktyki. Za każdym razem, gdy wprowadzimy istotną zmianę w naszych zasadach, odświeżymy datę na górze tej strony.",
    contactUsContent1:
      "Jeśli masz jakiekolwiek pytania, uwagi lub skargi dotyczące naszej Polityki prywatności, prosimy o kontakt:",
    contactUs: "Skontaktuj się z nami",
    contactUsContent2:
      "i postaramy się rozpatrzyć Twoją skargę najszybciej jak to możliwe."
  },
  termsOfService: {
    termsOfServiceTitle: "Warunki korzystania z usługi",
    lastUpdated: "Ostatnia aktualizacja: 21 września 2022 r.",
    thankYouMessage: "Dziękujemy za korzystanie z naszych produktów!",
    companyReference:
      "Kiedy w niniejszym dokumencie używamy słów „Firma”, „my”, „nasz” lub „nas”, mamy na myśli Scribify.",
    servicesDefinition:
      "Gdy mówimy o „Usługach”, mamy na myśli wszelkie produkty tworzone i utrzymywane przez Scribify, niezależnie od tego, czy są dostarczane w przeglądarce internetowej, aplikacji komputerowej, aplikacji mobilnej czy w innym formacie.",
    termsUpdateNotice:
      "Możemy aktualizować niniejsze Warunki korzystania z usługi w przyszłości. Zazwyczaj zmiany te mają na celu doprecyzowanie niektórych z tych warunków poprzez dodanie linku do rozszerzonej, powiązanej polityki. Za każdym razem, gdy wprowadzamy istotną zmianę w naszych zasadach, odświeżamy datę na górze tej strony i podejmujemy wszelkie inne stosowne kroki w celu powiadomienia posiadaczy kont.",
    acceptanceOfAgreementTitle: "1. Akceptacja Umowy",
    scribifyServicesTitle: "2. Usługi Scribify",
    accountTermsTitle: "3. Warunki konta",
    paymentRefundsTitle: "4. Płatności, zwroty i zmiany planu",
    cancellationTerminationTitle: "5. Anulowanie i rozwiązanie umowy",
    submissionsTitle: "6. Zgłoszenia",
    uptimeSecurityTitle: "7. Czas sprawności i bezpieczeństwo",
    siteManagementTitle: "8. Zarządzanie witryną",
    copyrightContentTitle: "9. Prawa autorskie i własność treści",
    prohibitedActivitiesTitle: "10. Zabronione działania",
    featuresBugsTitle: "11. Funkcje i błędy",
    correctionsTitle: "12. KOREKTY",
    userDataTitle: "13. Dane użytkownika",
    privacyPolicyTitle: "14. Polityka prywatności",
    liabilityTitle: "15. Odpowiedzialność",
    miscellaneousTitle: "16. Różne",
    contactUsTitle: "17. Skontaktuj się z nami",
    acceptanceContent1:
      "Korzystając z naszych Usług, wyrażasz zgodę na niniejszą Umowę, która tym samym staje się wiążącą umową między Tobą a Scribify. Oświadczasz, że jesteś prawnie zdolny do zaakceptowania niniejszych Warunków i potwierdzasz, że osiągnąłeś wiek umożliwiający zawarcie wiążącej umowy. Akceptacja Scribify jest wyraźnie uzależniona od Twojej zgody na wszystkie postanowienia niniejszej Umowy.",
    acceptanceContent2:
      "Usługi nie są przeznaczone dla osób poniżej 18 roku życia i nie powinny być przez nie używane. Korzystając z Usług, oświadczasz i gwarantujesz, że spełniasz powyższe wymagania kwalifikacyjne.",
    acceptanceContent3:
      "Terminy „Ty”, „Twój”, „Ty sam” obejmują również Twoich pracowników, agentów, przedstawicieli handlowych i wszelkie inne osoby, którym zapewniasz dostęp do Usług za pośrednictwem swojego Konta (zgodnie z definicją poniżej). Ponosisz odpowiedzialność za zapewnienie, że wszystkie osoby uzyskujące dostęp do Usług za pośrednictwem Twojego konta znają niniejsze Warunki i ich przestrzegają.",
    acceptanceContent4:
      "Scribify zastrzega sobie prawo do okresowej zmiany i aktualizacji niniejszych Warunków według własnego uznania. Wszystkie zmiany wchodzą w życie natychmiast po ich opublikowaniu. Dalsze korzystanie z Usług po opublikowaniu zmienionych Warunków oznacza akceptację i zgodę na zmiany. Oczekuje się, że będziesz regularnie sprawdzać tę stronę, aby być na bieżąco z wszelkimi zmianami, ponieważ są one dla Ciebie wiążące.",
    servicesContent1:
      "Nasze Usługi umożliwiają użytkownikom przekształcanie rozmów głosowych w transkrybowany tekst, który można przeszukiwać, tłumaczyć i udostępniać innym osobom.",
    servicesContent2:
      "Możesz wybrać, czy chcesz korzystać z bezpłatnej wersji Usług („Usługi bezpłatne”), czy z płatnej wersji Usług opartej na subskrypcji, za którą możesz być zobowiązany do uiszczenia opłat („Usługi płatne”).",
    servicesContent3:
      "Udostępnimy Ci Usługi. Ponosisz odpowiedzialność za podjęcie wszelkich niezbędnych działań, aby uzyskać dostęp do Usług.",
    accountTerms1:
      "- Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta. Firma nie ponosi i nie będzie ponosić odpowiedzialności za jakiekolwiek straty lub szkody wynikające z nieprzestrzegania przez Ciebie tego obowiązku bezpieczeństwa.",
    accountTerms2:
      "- Nie możesz używać Usług w celach niezgodnych z prawem, nieetycznych lub niemoralnych.",
    accountTerms3:
      "- Ponosisz odpowiedzialność za wszystkie treści publikowane i działania podejmowane na Twoim koncie. Dotyczy to również treści publikowanych przez inne osoby, które: (a) mają dostęp do Twoich danych logowania; lub (b) posiadają własne loginy do Twojego konta.",
    accountTerms4:
      "- Musisz być człowiekiem. Konta zarejestrowane przez „boty” lub inne zautomatyzowane metody są niedozwolone.",
    paymentContent1:
      "- W przypadku Usług płatnych, które oferują bezpłatny okres próbny, informujemy o jego długości podczas rejestracji. Po upływie okresu próbnego, aby móc nadal korzystać z Usługi, należy uiścić opłatę z góry. Jeśli nie dokonasz opłaty, Usługi przestaną obowiązywać.",
    paymentContent2:
      "- Jeśli dokonujesz aktualizacji z planu bezpłatnego na plan płatny, obciążymy Twoją kartę natychmiast, a cykl rozliczeniowy rozpocznie się w dniu aktualizacji.",
    paymentContent3:
      "- Wszystkie opłaty nie obejmują podatków, opłat ani ceł nałożonych przez organy podatkowe. W razie potrzeby pobierzemy te podatki w imieniu organu podatkowego i przekażemy je organom podatkowym. W przeciwnym razie jesteś odpowiedzialny za zapłatę wszystkich podatków, opłat lub ceł.",
    paymentContent4:
      "- Wszystkie zakupy nie podlegają zwrotowi. Możesz anulować dowolne usługi płatne w dowolnym momencie, logując się na swoje konto. W przypadku subskrypcji płatnych, anulowanie wejdzie w życie z końcem bieżącego okresu rozliczeniowego, o ile nie zaznaczono inaczej.",
    cancellationContent1:
      "- Jeśli anulujesz Usługę przed upływem opłaconego okresu, anulacja wejdzie w życie natychmiast i nie zostaniesz obciążony żadnymi opłatami. Nie naliczamy automatycznie proporcjonalnego czasu niewykorzystanego w ostatnim cyklu rozliczeniowym.",
    cancellationContent2:
      "- Mamy prawo zawiesić lub zamknąć Twoje konto i odmówić Ci dostępu do naszych Usług, zarówno obecnie, jak i w przyszłości, z dowolnego powodu i w dowolnym momencie. Zawieszenie oznacza utratę dostępu do konta i wszelkich treści na nim zawartych. Ponadto zamknięcie konta spowoduje usunięcie konta lub zablokowanie dostępu do niego, a także utratę i zrzeczenie się wszelkich treści na koncie. Zastrzegamy sobie również prawo do odmowy korzystania z Usług dowolnej osobie, z dowolnego powodu i w dowolnym momencie. Wprowadziliśmy tę klauzulę, ponieważ statystycznie rzecz biorąc, spośród setek tysięcy kont w naszych Usługach, co najmniej jedno prowadzi do niegodziwych działań.",
    cancellationContent3:
      "- Werbalne, fizyczne, pisemne lub inne formy znęcania się (w tym groźby znęcania się lub odwetu) nad pracownikiem lub członkiem zarządu Spółki mogą skutkować natychmiastowym zamknięciem konta.",
    submissionsContent:
      "Przyjmujesz do wiadomości i zgadzasz się, że wszelkie pytania, komentarze, sugestie, pomysły, opinie lub inne informacje dotyczące Witryny („Zgłoszenia”) przekazane nam przez Ciebie nie są poufne i staną się naszą wyłączną własnością. Będziemy posiadać wyłączne prawa, w tym wszelkie prawa własności intelektualnej, i będziemy uprawnieni do nieograniczonego wykorzystywania i rozpowszechniania tych Zgłoszeń w dowolnym zgodnym z prawem celu, komercyjnym lub innym, bez konieczności potwierdzania tego faktu lub wypłacania Ci odszkodowania. Niniejszym zrzekasz się wszelkich praw moralnych do takich Zgłoszeń i gwarantujesz, że wszystkie takie Zgłoszenia są Twoje i że masz prawo je przesłać. Zgadzasz się, że nie przysługuje Ci żadne roszczenie wobec nas z tytułu domniemanego lub faktycznego naruszenia lub sprzeniewierzenia jakichkolwiek praw własności do Twoich Zgłoszeń.",
    uptimeContent1:
      "- Korzystasz z Usług na własne ryzyko. Usługi te świadczymy „w stanie, w jakim się znajdują” i „w miarę dostępności”. Nie oferujemy umów o poziomie usług dla większości naszych Usług, ale poważnie traktujemy kwestię dostępności naszych aplikacji.",
    uptimeContent2:
      "Zastrzegamy sobie prawo do tymczasowego wyłączenia Twojego konta, jeśli Twoje korzystanie z Usług znacznie przekroczy typowe korzystanie z nich przez innych klientów. Oczywiście skontaktujemy się z Tobą przed podjęciem jakichkolwiek działań, z wyjątkiem rzadkich przypadków, gdy poziom korzystania może negatywnie wpłynąć na działanie Usługi dla innych klientów.",
    uptimeContent3:
      "- Podejmujemy wiele działań w celu ochrony i zabezpieczenia Twoich danych poprzez tworzenie kopii zapasowych, redundancję i szyfrowanie. Stosujemy szyfrowanie transmisji danych w publicznym Internecie.",
    uptimeContent4:
      "- Korzystamy z usług zewnętrznych dostawców i partnerów hostingowych w celu zapewnienia niezbędnego sprzętu, oprogramowania, sieci, pamięci masowej i powiązanych technologii wymaganych do prowadzenia Usług.",
    siteManagementContent:
      "Zastrzegamy sobie prawo, ale nie obowiązek, do: (1) monitorowania Witryny pod kątem naruszeń niniejszych Warunków korzystania z usługi; (2) podejmowania odpowiednich kroków prawnych przeciwko każdemu, kto według naszego wyłącznego uznania narusza prawo lub niniejsze Warunki korzystania z usługi, w tym, bez ograniczeń, zgłaszania takiego użytkownika organom ścigania; (3) według naszego wyłącznego uznania i bez ograniczeń, odmowy, ograniczenia dostępu do, ograniczenia dostępności lub wyłączenia (w zakresie technologicznie wykonalnym) któregokolwiek z Twoich Wkładów lub jakiejkolwiek jego części; (4) według naszego wyłącznego uznania i bez ograniczeń, powiadomienia lub odpowiedzialności, usunięcia z Witryny lub w inny sposób wyłączenia wszystkich plików i treści o nadmiernym rozmiarze lub w jakikolwiek sposób obciążających nasze systemy; oraz (5) w inny sposób zarządzania Witryną w sposób mający na celu ochronę naszych praw i własności oraz ułatwienie prawidłowego funkcjonowania Witryny.",
    copyrightContent1:
      "- Wszelkie treści publikowane w ramach Usług muszą być zgodne z prawem autorskim obowiązującym w Stanach Zjednoczonych.",
    copyrightContent2:
      "- Nie rościmy sobie żadnych praw własności intelektualnej do materiałów udostępnianych przez Ciebie w ramach Usług. Wszystkie przesłane materiały pozostają Twoją własnością.",
    copyrightContent3:
      "- Nie dokonujemy wstępnej selekcji treści, ale zastrzegamy sobie prawo (ale nie obowiązek), według własnego uznania, do odmowy publikacji lub usunięcia wszelkich treści dostępnych za pośrednictwem Serwisu.",
    copyrightContent4:
      "- Nazwy, wygląd i działanie Usług są chronione prawem autorskim © Spółki. Wszelkie prawa zastrzeżone. Zabrania się powielania, kopiowania ani ponownego wykorzystywania jakiejkolwiek części kodu HTML, CSS, JavaScript lub elementów graficznych bez wyraźnej pisemnej zgody Spółki. Należy wystąpić o pozwolenie na używanie logo Spółki lub logo Usług w celach promocyjnych.",
    emailUs: "napisz do nas",
    copyrightContent5:
      "prośby o użycie logo. Zastrzegamy sobie prawo do cofnięcia tego pozwolenia w przypadku naruszenia niniejszych Warunków korzystania z usługi.",
    copyrightContent6:
      "- Użytkownik zgadza się nie odtwarzać, nie duplikować, nie kopiować, nie sprzedawać, nie odsprzedawać ani nie wykorzystywać żadnej części Usług, sposobu korzystania z Usług ani dostępu do Usług bez wyraźnej pisemnej zgody Spółki.",
    copyrightContent7:
      "- Nie wolno modyfikować innej witryny internetowej w sposób fałszywie sugerujący, że jest ona powiązana z Usługami lub Spółką.",
    copyrightContent8:
      "- Szanujemy prawa własności intelektualnej innych osób. Jeśli uważasz, że jakikolwiek materiał dostępny na Stronie lub za jej pośrednictwem narusza jakiekolwiek prawa autorskie, które posiadasz lub kontrolujesz, prosimy o natychmiastowe powiadomienie.",
    contactUs: "Skontaktuj się z nami",
    copyrightContent9:
      "Kopia Twojego Powiadomienia zostanie wysłana do osoby, która opublikowała lub przechowywała materiały, których dotyczy Powiadomienie. Informujemy, że zgodnie z obowiązującym prawem możesz ponieść odpowiedzialność za szkody, jeśli w Powiadomieniu podasz istotne nieprawdziwe informacje. Dlatego, jeśli nie masz pewności, czy materiały znajdujące się na Stronie lub do których linki znajdują się na Stronie naruszają Twoje prawa autorskie, powinieneś najpierw rozważyć kontakt z prawnikiem.",
    prohibitedActivitiesIntro:
      "Nie możesz uzyskiwać dostępu do Witryny ani korzystać z niej w żadnym innym celu niż ten, dla którego ją udostępniamy. Witryny nie wolno wykorzystywać w związku z żadnymi przedsięwzięciami komercyjnymi, z wyjątkiem tych, które zostały przez nas wyraźnie zatwierdzone lub poparte.",
    prohibitedActivitiesUserAgreement:
      "Jako użytkownik Serwisu zgadzasz się, że nie będziesz:",
    prohibitedActivity1:
      "- Systematyczne pobieranie danych lub innej treści ze Strony w celu tworzenia lub kompilowania, bezpośrednio lub pośrednio, zbiorów, kompilacji, baz danych lub katalogów bez naszej pisemnej zgody.",
    prohibitedActivity2:
      "- Oszukiwać, wprowadzać w błąd nas i innych użytkowników, zwłaszcza w celu zdobycia poufnych informacji o koncie, takich jak hasła użytkowników.",
    prohibitedActivity3:
      "- Omijać, wyłączać lub w inny sposób ingerować w funkcje związane z bezpieczeństwem Witryny, w tym funkcje, które uniemożliwiają lub ograniczają korzystanie z Treści lub ich kopiowanie lub nakładają ograniczenia na korzystanie z Witryny i/lub Treści w niej zawartych.",
    prohibitedActivity4:
      "- naszym zdaniem dyskredytować, szkalować lub w inny sposób szkodzić nam i/lub Witrynie.",
    prohibitedActivity5:
      "- Wykorzystywać informacji uzyskanych ze Strony w celu nękania, znęcania się lub wyrządzania krzywdy innej osobie.",
    prohibitedActivity6:
      "- Niewłaściwie korzystaj z naszych usług wsparcia lub przesyłaj fałszywe raporty o nadużyciach lub niewłaściwym zachowaniu.",
    prohibitedActivity7:
      "- Korzystać ze Strony w sposób niezgodny z obowiązującymi przepisami prawa.",
    prohibitedActivity8:
      "- Angażować się w nieautoryzowane tworzenie ramek lub linków do Witryny.",
    prohibitedActivity9:
      "- Przesyłać lub przekazywać (lub podejmować próby przesyłania lub przekazywać) wirusów, koni trojańskich lub innych materiałów, w tym nadmiernego używania wielkich liter i spamowania (ciągłego zamieszczania powtarzalnego tekstu), które zakłócają nieprzerwane korzystanie z Witryny przez jakąkolwiek stronę lub powodują zmiany, upośledzenia, zakłócenia, modyfikacje lub zakłócają korzystanie z Witryny, jej funkcje, działanie lub konserwację.",
    prohibitedActivity10:
      "- Podejmować jakiekolwiek zautomatyzowane działania związane z korzystaniem z systemu, takie jak stosowanie skryptów do wysyłania komentarzy lub wiadomości, bądź korzystanie z narzędzi do eksploracji danych, robotów lub podobnych narzędzi do gromadzenia i ekstrakcji danych.",
    prohibitedActivity11:
      "- Usuń informacje o prawach autorskich i innych prawach własności z wszelkich Treści.",
    prohibitedActivity12:
      "- Próba podszywania się pod innego użytkownika lub osobę albo posługiwania się nazwą użytkownika innego użytkownika.",
    prohibitedActivity13:
      "- Przesyłać lub przekazywać (lub podejmować próby przesłania lub przekazania) jakichkolwiek materiałów, które działają jako pasywny lub aktywny mechanizm gromadzenia lub przekazywania informacji, w tym, bez ograniczeń, formatów wymiany czystych grafik („gifów”), pikseli 1×1, błędów sieciowych, plików cookie lub innych podobnych urządzeń (czasami określanych jako „oprogramowanie szpiegujące” lub „pasywne mechanizmy gromadzenia” lub „pcms”).",
    prohibitedActivity14:
      "- Zakłócać, przerywać lub powodować nadmierne obciążenie Witryny lub sieci i usług połączonych z Witryną.",
    prohibitedActivity15:
      "- Nękać, drażnić, zastraszać lub grozić któremukolwiek z naszych pracowników lub agentów zajmujących się udostępnianiem jakiejkolwiek części Witryny.",
    prohibitedActivity16:
      "- Podejmować próby obejścia jakichkolwiek środków Witryny mających na celu uniemożliwienie lub ograniczenie dostępu do Witryny lub jakiejkolwiek jej części.",
    prohibitedActivity17:
      "- Kopiowanie lub adaptowanie oprogramowania Witryny, w tym między innymi Flash, PHP, HTML, JavaScript i innych kodów.",
    prohibitedActivity18:
      "- Z wyjątkiem przypadków dozwolonych przez obowiązujące prawo, nie wolno rozszyfrowywać, dekompilować, dezasemblować ani dokonywać inżynierii wstecznej żadnego oprogramowania wchodzącego w skład Witryny lub w jakikolwiek sposób stanowiącego jej część.",
    prohibitedActivity19:
      "- Z wyjątkiem przypadków wynikających ze standardowego korzystania z wyszukiwarki lub przeglądarki internetowej, nie wolno używać, uruchamiać, rozwijać ani rozpowszechniać żadnych zautomatyzowanych systemów, w tym między innymi pająków, robotów, narzędzi do oszukiwania, scraperów ani czytników offline uzyskujących dostęp do Witryny, ani używać lub uruchamiać żadnych nieautoryzowanych skryptów lub innego oprogramowania.",
    prohibitedActivity20:
      "- Dokonuj zakupów na Stronie za pośrednictwem agenta kupującego lub pośrednika zakupowego.",
    prohibitedActivity21:
      "- Nie wolno wykorzystywać Serwisu w sposób nieautoryzowany, w tym zbierać nazw użytkowników i/lub adresów e-mail użytkowników drogą elektroniczną lub inną w celu wysyłania niechcianej poczty elektronicznej lub tworzyć kont użytkowników za pomocą środków automatycznych lub pod fałszywymi pozorami.",
    prohibitedActivity22:
      "- Korzystać ze Strony w celu konkurowania z nami lub w inny sposób wykorzystywać Stronę i/lub Treści w celach generujących dochód lub w ramach przedsięwzięcia komercyjnego.",
    prohibitedActivity23:
      "- Wykorzystywać Serwis do reklamowania lub oferowania sprzedaży towarów i usług.",
    prohibitedActivity24: "- Sprzedać lub w inny sposób przenieść swój profil.",
    featuresContent1:
      "Projektujemy nasze Usługi z dbałością, opierając się na własnym doświadczeniu oraz na doświadczeniach klientów, którzy poświęcają nam swój czas i dzielą się swoimi opiniami. Nie ma jednak usługi, która zadowoliłaby wszystkich. Nie gwarantujemy, że nasze Usługi spełnią Państwa konkretne wymagania lub oczekiwania.",
    featuresContent2:
      "Testujemy również wszystkie nasze funkcje przed ich udostępnieniem. Jak w przypadku każdego oprogramowania, nasze Usługi nieuchronnie zawierają błędy. Śledzimy zgłaszane nam błędy i pracujemy nad nimi, zwłaszcza nad tymi związanymi z bezpieczeństwem i prywatnością. Nie wszystkie zgłoszone błędy zostaną naprawione i nie gwarantujemy, że Usługi będą całkowicie wolne od błędów.",
    correctionsContent1:
      "Informacje na Stronie mogą zawierać błędy typograficzne, nieścisłości lub pominięcia, w tym opisy, ceny, dostępność i inne informacje. Zastrzegamy sobie prawo do poprawiania wszelkich błędów, nieścisłości lub pominięć oraz do zmiany lub aktualizacji informacji na Stronie w dowolnym momencie i bez uprzedniego powiadomienia.",
    correctionsContent2:
      "Nie możemy zagwarantować, że Strona będzie dostępna przez cały czas. Możemy napotkać problemy ze sprzętem, oprogramowaniem lub inne problemy, a także przeprowadzić konserwację Strony, co może skutkować przerwami, opóźnieniami lub błędami. Zastrzegamy sobie prawo do zmiany, rewizji, aktualizacji, zawieszenia, zaprzestania lub innej modyfikacji Strony w dowolnym momencie i z dowolnego powodu bez powiadomienia. Zgadzasz się, że nie ponosimy żadnej odpowiedzialności za jakiekolwiek straty, szkody lub niedogodności spowodowane brakiem dostępu do Strony lub korzystania z niej podczas przestoju lub zaprzestania jej działania. Żadne z postanowień niniejszych Warunków korzystania z usługi nie będzie interpretowane jako zobowiązujące nas do utrzymywania i wspierania Strony ani do dostarczania jakichkolwiek korekt, aktualizacji lub wydań w związku z tym.",
    userDataContent:
      "Będziemy przechowywać pewne dane przesyłane przez Ciebie do Serwisu w celu zarządzania jego działaniem, a także dane dotyczące korzystania z niego. Chociaż regularnie tworzymy kopie zapasowe danych, ponosisz wyłączną odpowiedzialność za wszelkie dane przesyłane przez Ciebie lub związane z jakąkolwiek aktywnością wykonywaną przez Ciebie za pośrednictwem Serwisu. Zgadzasz się, że nie ponosimy wobec Ciebie żadnej odpowiedzialności za utratę lub uszkodzenie takich danych i niniejszym zrzekasz się wszelkich praw dochodzenia roszczeń wobec nas z tytułu takiej utraty lub uszkodzenia takich danych.",
    privacyPolicyContent1:
      "Dbamy o prywatność i bezpieczeństwo danych. Zapoznaj się z naszą",
    privacyPolicy: "Polityka prywatności",
    privacyPolicyContent2:
      "Korzystając z Witryny, wyrażasz zgodę na przestrzeganie naszej Polityki Prywatności, która stanowi integralną część niniejszych Warunków Korzystania z Usługi. Informujemy, że Witryna jest hostowana w Stanach Zjednoczonych. Jeśli uzyskujesz dostęp do Witryny z dowolnego innego regionu świata, w którym obowiązują przepisy lub inne wymogi dotyczące gromadzenia, wykorzystywania lub ujawniania danych osobowych, które różnią się od przepisów obowiązujących w Stanach Zjednoczonych, dalsze korzystanie z Witryny oznacza przekazanie Twoich danych do Stanów Zjednoczonych i wyrażasz zgodę na ich przesyłanie i przetwarzanie w Stanach Zjednoczonych.",
    liabilityIntro:
      "Wspominamy o odpowiedzialności w całym niniejszym Regulaminie, ale żeby zawrzeć to wszystko w jednej sekcji:",
    liabilityContent:
      "Wyraźnie rozumiesz i zgadzasz się, że Spółka nie ponosi odpowiedzialności, z mocy prawa lub w oparciu o zasadę słuszności, wobec Ciebie lub jakiejkolwiek osoby trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, utracone zyski, szkody szczególne, wynikowe, karne lub przykładowe, w tym, ale nie wyłącznie, szkody za utratę zysków, dobrej woli, użytkowania, danych lub inne straty niematerialne (nawet jeśli Spółka została poinformowana o możliwości wystąpienia takich szkód), wynikające z: (1) korzystania z Usług lub niemożności korzystania z nich; (2) błędów, pomyłek lub nieścisłości w treści i materiałach; (3) obrażeń ciała lub szkód majątkowych, jakiegokolwiek rodzaju, wynikających z dostępu do witryny i korzystania z niej; (4) kosztów zakupu towarów i usług zastępczych wynikających z jakichkolwiek towarów, danych, informacji lub usług zakupionych lub uzyskanych lub wiadomości otrzymanych lub transakcji zawartych za pośrednictwem Usług; (5) jakiegokolwiek nieautoryzowanego dostępu do lub korzystania z naszych bezpiecznych serwerów i/lub wszelkich danych osobowych i/lub informacji finansowych w nich przechowywanych; (6) jakiekolwiek przerwanie lub zaprzestanie transmisji do lub z witryny; (7) jakiekolwiek błędy, wirusy, konie trojańskie lub podobne, które mogą zostać przesłane do lub za pośrednictwem witryny przez osoby trzecie i/lub; (8) jakiekolwiek błędy lub pominięcia w jakiejkolwiek treści i materiałach lub za jakiekolwiek straty lub szkody poniesione w wyniku korzystania z jakiejkolwiek treści opublikowanej, przesłanej lub w inny sposób udostępnionej za pośrednictwem witryny; (9) oświadczenia lub zachowanie jakiejkolwiek osoby trzeciej w ramach usługi; (10) lub jakakolwiek inna kwestia związana z niniejszymi Warunkami korzystania z usługi lub Usługami, niezależnie od tego, czy stanowi to naruszenie umowy, czyn niedozwolony (w tym zaniedbanie czynne lub bierne), czy jakąkolwiek inną teorię odpowiedzialności.",
    miscellaneousContent:
      "Niniejsze Warunki Świadczenia Usług oraz wszelkie polityki lub zasady operacyjne opublikowane przez nas w Serwisie lub w odniesieniu do Serwisu stanowią całość umowy i porozumienia między Tobą a nami. Niewykonanie lub niewyegzekwowanie przez nas któregokolwiek z praw lub postanowień niniejszych Warunków Świadczenia Usług nie stanowi zrzeczenia się takiego prawa lub postanowienia. Niniejsze Warunki Świadczenia Usług obowiązują w najszerszym zakresie dozwolonym przez prawo. Możemy w dowolnym momencie przenieść część lub całość naszych praw i obowiązków na inne osoby. Nie ponosimy odpowiedzialności za jakiekolwiek straty, szkody, opóźnienia lub zaniechania spowodowane przyczynami pozostającymi poza naszą uzasadnioną kontrolą. Jeżeli którekolwiek z postanowień niniejszych Warunków Świadczenia Usług zostanie uznane za niezgodne z prawem, nieważne lub niewykonalne, to postanowienie lub część postanowienia uznaje się za oddzielne od niniejszych Warunków Świadczenia Usług i nie wpływa to na ważność i wykonalność pozostałych postanowień. W wyniku niniejszych Warunków Świadczenia Usług lub korzystania z Serwisu nie powstaje między Tobą a nami żaden stosunek joint venture, partnerstwa, zatrudnienia ani agencyjny. Zgadzasz się, że niniejsze Warunki Świadczenia Usług nie będą interpretowane na naszą niekorzyść z tytułu ich sporządzenia. Niniejszym zrzekasz się wszelkich zarzutów, jakie możesz mieć w związku z elektroniczną formą niniejszych Warunków świadczenia usług oraz brakiem podpisania przez strony niniejszego dokumentu w celu wykonania niniejszych Warunków świadczenia usług.",
    contactUsContent1:
      "Jeśli masz pytanie dotyczące któregokolwiek z Warunków korzystania z usługi, skontaktuj się z nami.",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Cechy",
    UnlimitedTranscription: "Nieograniczona transkrypcja",
    BulkUpload: "Przesyłanie zbiorcze",
    Accuracy: "96% dokładności",
    Pricing: "Wycena",
    UseCases: "Przypadki użycia",
    AllUseCases: "Wszystkie przypadki użycia",
    Podcasters: "Podcasterzy",
    Journalists: "Dziennikarze",
    ContentCreators: "Twórcy treści",
    Researchers: "Badacze",
    BusinessTeams: "Zespoły biznesowe",
    Educators: "Nauczyciele",
    Resources: "Zasoby",
    YouTubetoMP4: "YouTube do MP4",
    StartFreeTrial: "Wypróbuj za darmo"
  },
  Footer: {
    des: "Pierwsza na świecie, w pełni nieograniczona usługa transkrypcji AI. Bez limitów, bez ograniczeń, tylko swoboda tworzenia.",
    Features: "Cechy",
    UseCases: "Przypadki użycia",
    Company: "Firma",
    featureMenus: ["Nieograniczona transkrypcja", "Przesyłanie zbiorcze", "96% dokładności"],
    useCaseMenus: [
      "Wszystkie przypadki użycia",
      "Podcasterzy",
      "Dziennikarze",
      "Twórcy treści",
      "Badacze",
      "Zespoły biznesowe",
      "Nauczyciele"
    ],
    companyMenus: [
      "O",
      "Wycena",
      "Prywatność",
      "Warunki"
    ]
  },
  Index: {
    Hero: {
      badge: "Koniec z „shrinkflacją” – naprawdę nieograniczone możliwości",
      h1: "Przestań płacić za limity:",
      gradient: "Naprawdę nieograniczona transkrypcja AI",
      subtitle: "Prześlij całe swoje archiwum podcastów. Transkrybuj wszystkie swoje wywiady. Przetwarzaj 50 plików jednocześnie. Bez miesięcznych limitów i limitów przesyłania. Wreszcie transkrypcja skalowana do Twoich rzeczywistych potrzeb.",
      FreeTrial: "Wypróbuj za darmo – bez karty kredytowej",
      HowWorks: "Zobacz jak to działa",
      Unlimited: "Nieograniczone przesyłanie plików",
      NoCap: "Brak miesięcznego limitu minut",
      Hour: "Obsługiwane pliki 10-godzinne",
      ExploreUseCases: "Poznaj przypadki użycia"
    },
    Stats: {
      monthlyMinutes: "Minuty miesięczne",
      fileUploads: "Przesyłanie plików",
      batchProcessing: "Przetwarzanie wsadowe",
      maxFileLength: "Maksymalna długość pliku"
    },
    FeaturesGrid: {
      try_now: "Wypróbuj teraz",
      no_signup: "Nie jest wymagana rejestracja",
      experience_unltd: "Doświadcz naprawdę nieograniczonej transkrypcji",
      upload_50: "Prześlij do 50 plików na raz, właśnie tutaj",
      no_limits: "Koniec z ukrytymi ograniczeniami",
      no_surprises: "Koniec z niespodziankami",
      transparency: "Podczas gdy inni po cichu skracają minuty lub ukrywają limity drobnym drukiem, my wierzymy w radykalną przejrzystość",
      feat_unltd: "Naprawdę nieograniczone",
      feat_unltd_desc: "Żadnych „zasad dozwolonego użytku” ukrytych w terminologii. Żadnych limitów pamięci podszywających się pod „nieograniczony”. Prześlij całe swoje archiwum, przepisz wszystko. Mówimy serio.",
      feat_bulk: "Wolność przesyłania zbiorczego",
      feat_bulk_desc: "Masz dość „3 importów na raz” lub „10 plików miesięcznie”? Prześlij 50 plików jednocześnie, tyle razy, ile potrzebujesz. Idealne do przetwarzania zaległości.",
      feat_batch: "Przetwarzanie wsadowe",
      feat_batch_desc: "Przetwórz cały sezon podcastu w ciągu jednej nocy. Prześlij 50 wywiadów jednocześnie. Pozwól naszej sztucznej inteligencji pracować, gdy śpisz. Obudź się z gotowymi transkryptami.",
      feat_accuracy: "96% dokładności",
      feat_accuracy_desc: "Wiodąca w branży sztuczna inteligencja z inteligentną interpunkcją, kalendarzem wypowiedzi nawet 20 mówców oraz bezbłędną obsługą akcentów i terminologii technicznej.",
      feat_langs: "Ponad 100 języków",
      feat_langs_desc: "Transkrybuj w ponad 100 językach, tłumacz na ponad 249. Bez dodatkowych opłat za różne języki. Globalna zawartość, jedna prosta cena.",
      feat_pro: "Funkcje profesjonalne",
      feat_pro_desc: "Znaczniki czasu na poziomie słów umożliwiają precyzyjne pozycjonowanie dźwięku/obrazu, dokładną identyfikację mówcy nawet podczas szybkich zmian tematu rozmowy, a także idealnie sformatowany tekst z akapitami, zdaniami i interpunkcją, ułatwiający czytanie."
    },
    UseCases: {
      built_for: "Zbudowany dla",
      "heavy_users": "Intensywni użytkownicy tacy jak Ty",
      "join_users": "Dołącz do youtuberów, twórców treści i podcasterów, którzy zrezygnowali z usług „shrinkflation”",
      "podcasters": {
        "title": "Podcasterzy",
        "des": "Prześlij cały swój katalog archiwalny. Twórz notatki do każdego odcinka. Koniec z wybieraniem odcinków do transkrypcji."
      },
      "content_creators": {
        "title": "Twórcy treści",
        "des": "Zamień swoją bibliotekę wideo w wyszukiwalny tekst. Generuj napisy do wszystkiego. Bez odliczania minut, po prostu twórz."
      },
      "journalists": {
        "title": "Dziennikarze",
        "des": "Prześlij wszystkie swoje wywiady naraz. Koniec z przeszkodami w postaci „10 plików miesięcznie” pod presją terminu. Przetwarzaj wszystko."
      },
      researchers: {
        title: "Badacze",
        des: "Transkrybuj godziny spotkań grup fokusowych i wywiadów. Prześlij całe badanie na raz. Uzyskaj dokładną identyfikację mówcy."
      },
      business_teams: {
        title: "Zespoły biznesowe",
        des: "Nagrywaj każdą rozmowę bez obaw o limity. Uzyskaj analizy AI dotyczące wszystkich rozmów, a nie tylko wybranych."
      },
      educators: {
        title: "Nauczyciele",
        des: "Transkrybuj cały cykl wykładów. Zapewnij dostępność wszystkich treści. Nie ma możliwości wyboru między kursami ze względu na limit minut."
      }
    },
    Testimonials: {
      title: "Kochany przez",
      highlighted_users: "Ponad 50 000 użytkowników",
      subtitle: "Zobacz, dlaczego profesjonaliści wybierają NeverCap zamiast ograniczonych alternatyw",
      Mike: {
        "text": "O cholera, to naprawdę działa! Robię podcast od 3 lat i przepisuję wszystko ręcznie jak idiota. Wrzuciłem 6 odcinków naraz i idealnie rozdzieliłem mnie i mojego współprowadzącego. Odcinek o kawiarni, który myślałem, że jest zepsuty? Transkrypcja jest krystalicznie czysta. Nigdy więcej nie będę tego sam przepisywał.",
        "author": "Mike Rodriguez",
        "role": "Gospodarz podcastu"
      },
      Sarah: {
        "text": "Uczę online i potrzebowałam napisów do moich filmów. Wypróbowałam 3 inne narzędzia, które albo miały dziwne ograniczenia, albo działały bez końca. To po prostu... działa? Wrzuciłam wykład po hiszpańsku i w 2 minuty dostałam idealne napisy. Moi uczniowie z problemami ze słuchem są zachwyceni. Szkoda, że nie znalazłam tego wcześniej!",
        "author": "Sarah Chen",
        "role": "Nauczyciel online"
      },
      Jessica: {
        "text": "Używałem tego na rozmowach kwalifikacyjnych i jestem niesamowicie dokładny. Miałem dwugodzinną rozmowę kwalifikacyjną w łamanym angielskim i hiszpańskim i wszystko było w porządku, nawet znaczniki czasu. Płaciłem mojemu stażyście 200 dolarów miesięcznie za samo przepisywanie. To dosłownie oszczędza mi pieniądze każdego miesiąca.",
        "author": "Jessica Park",
        "role": "Dziennikarz niezależny"
      }
    },
    PricingPreview: {
      "title": "Przejrzyste ceny",
      "highlighted_text": "Bez ukrytych czapek",
      "subtitle": "Wybierz swój plan. Bez gwiazdek, bez drobnego druku, bez niespodzianek"
    },
    FAQSection: {
      "title": "Często zadawane pytania",
      "titleHighlight": "Pytania",
      "questions": [
        {
          "q": "nieograniczona_polityka",
          "question": "Czy to naprawdę jest nieograniczone? Gdzie jest haczyk?",
          "answer": "Tak, to naprawdę nieograniczone! Bez miesięcznych limitów minut, bez opłat za przekroczenie limitu. Jedyne ograniczenia są natury technicznej: pojedyncze pliki mogą mieć długość do 10 godzin lub rozmiar do 5 GB, a jednocześnie można przetworzyć 50 plików. Możesz jednak przesyłać dowolną liczbę pakietów przez cały miesiąc."
        },
        {
          "q": "dokładność",
          "question": "Jak dokładna jest transkrypcja?",
          "answer": "Gwarantujemy 96% dokładności i czysty dźwięk. Nasza sztuczna inteligencja jest wyszkolona na milionach godzin zróżnicowanych treści i wyjątkowo dobrze radzi sobie z akcentami, terminologią techniczną i wieloma mówcami. W przypadku trudnych nagrań audio, nasze inteligentne funkcje ulepszania pomagają uzyskać lepsze rezultaty."
        },
        {
          "q": "języki",
          "question": "Jakie języki są obsługiwane?",
          "answer": "Obsługujemy transkrypcję w ponad 100 językach, w tym angielskim, hiszpańskim, mandaryńskim, hindi, arabskim, francuskim i wielu innych. Dodatkowo, transkrypcje można tłumaczyć na 249 różnych języków, co czyni je idealnym rozwiązaniem dla treści o zasięgu globalnym."
        },
        {
          "q": "prędkość",
          "question": "Jak szybka jest transkrypcja?",
          "answer": "Błyskawiczna prędkość! Plik audio o długości godziny zazwyczaj przetwarza się w mniej niż 5 minut. Dzięki przetwarzaniu wsadowemu możesz przesłać 50 plików jednocześnie i pozwolić im przetwarzać się równolegle. Większość użytkowników budzi się i odkrywa, że cała ich biblioteka została przepisana w ciągu nocy."
        },
        {
          "q": "anulowanie",
          "question": "Czy mogę anulować w dowolnym momencie?",
          "answer": "Oczywiście! Bez umów, bez opłat za anulowanie. Możesz w dowolnym momencie zmienić subskrypcję na wyższą, niższą lub ją anulować w panelu administracyjnym. W przypadku anulowania zachowasz dostęp do subskrypcji do końca okresu rozliczeniowego."
        },
        {
          "q": "bezpieczeństwo",
          "question": "Czy moje dane są bezpieczne?",
          "answer": "Twoje bezpieczeństwo jest naszym priorytetem. Posiadamy certyfikat SOC 2, stosujemy 256-bitowe szyfrowanie wszystkich danych i nigdy nie wykorzystujemy Twoich treści do trenowania naszych modeli. Możesz usunąć swoje pliki w dowolnym momencie, a my automatycznie je usuniemy po 30 dniach. Zgodność z RODO i CCPA."
        },
        {
          "q": "formaty_eksportu",
          "question": "Jakie formaty eksportu są dostępne?",
          "answer": "Pobierz transkrypty w dowolnym formacie: PDF, Word (DOCX), Excel, CSV, napisy SRT, zwykły tekst (TXT) i napisy VTT. Idealne dla każdego procesu pracy."
        },
        {
          "q": "formaty_plików",
          "question": "Jakie pliki audio i wideo mogę przesłać?",
          "answer": "Obsługujemy praktycznie każdy format audio i wideo, jaki napotkasz: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV i wiele innych. Jeśli potrafisz coś odtworzyć, możemy to przepisać."
        }
      ]
    },
    CTASection: {
      "title": "Gotowy na przełamanie ograniczeń?",
      "subtitle": "Dołącz do ponad 50 000 profesjonalistów, którzy przeszli na całkowicie nieograniczoną transkrypcję",
      "button": "Wypróbuj NeverCap za darmo",
      "disclaimer": "Do Planu Bezpłatnego nie jest wymagana karta kredytowa • Możesz w każdej chwili dokonać aktualizacji, aby uzyskać nieograniczony dostęp"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: "Koniec z „shrinkflacją”",
      heroTitleLine1: "Naprawdę nieograniczone",
      heroTitleLine2: "Transkrypcja AI",
      heroSubtitle: "Podczas gdy Trint ogranicza Cię do 50 godzin, a Otter do 10 plików miesięcznie, my zapewniamy to, co obiecujemy: nieograniczoną transkrypcję bez ukrytych limitów.",
      primaryCta: "Wypróbuj za darmo – bez karty kredytowej",
      secondaryCta: "Zobacz prawdę",
      comparisonBadLabel: "Co robią inni",
      comparisonBadTitle: "Ukryte granice wszędzie",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trynt:",
      comparisonBadItem1Text: "„Nieograniczony” = limit 50 godzin/miesiąc",
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Wydra:",
      comparisonBadItem2Text: "3 importy na całe życie (bezpłatne), 10/miesiąc (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Świetliki:",
      comparisonBadItem3Text: "Limit przechowywania 800 minut",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Opis:",
      comparisonBadItem4Text: "Maksymalnie 30 godzin/miesiąc",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Ukryte w regulaminie",
      comparisonGoodLabel: "Co robimy",
      comparisonGoodTitle: "Naprawdę nieograniczone",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Brak miesięcznych limitów minut",
      comparisonGoodItem1Text: "kiedykolwiek",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Nieograniczone przesyłanie plików",
      comparisonGoodItem2Text: "zawsze",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Brak limitów przechowywania",
      comparisonGoodItem3Text: "w ogóle",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "Przesyłanie zbiorcze 50 plików",
      comparisonGoodItem4Text: "kiedykolwiek",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Przejrzysta polityka",
      comparisonGoodItem5Text: "z góry",
      feature1Label: "Bez ograniczeń",
      feature1TitlePart1: "Transkrypcja 1000 godzin?",
      feature1TitlePart2: "Ta sama cena.",
      feature1Description: "Przestań liczyć minuty. Przestań oglądać limity. Niezależnie od tego, czy przepisujesz 10 godzin, czy 10 000 godzin miesięcznie, płacisz tę samą stałą stawkę. Bez opłat za przekroczenie limitu. Bez niespodziewanych rachunków.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Żadnych sztuczek związanych z polityką „dozwolonego użytku”",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Brak dławienia po X godzinach",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Brak niepokoju na koniec miesiąca",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Godziny miesięczne",
      feature1Stat2Number: "0 zł",
      feature1Stat2Label: "Opłaty za przekroczenie limitu",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Prześlij w dowolnym momencie",
      feature1Stat4Number: "100%",
      feature1Stat4Label: "Przezroczysty",
      feature2Label: "Wolność masowa",
      feature2TitlePart1: "Prześlij swoje",
      feature2TitlePart2: "Całe archiwum",
      feature2Description: "Otter daje Ci 3 darmowe importy na całe życie, 10 miesięcznie w wersji Pro. Dajemy Ci nieograniczony dostęp. Prześlij swoje zaległości w podcastach, wszystkie wywiady, lata nagrań. Bez ograniczeń.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 plików na partię",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Obsługiwane pliki 10-godzinne",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Przetwarzaj podczas snu",
      feature2TableRow1Label: "Wydra wolna",
      feature2TableRow1Value: "3 importy na całe życie",
      feature2TableRow2Label: "Otter Pro",
      feature2TableRow2Value: "10 plików/miesiąc",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Limit 50 godzin/miesiąc",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Naprawdę nieograniczone ✓",
      feature3Label: "Dowód społeczny",
      feature3TitlePart1: "Użytkownicy są",
      feature3TitlePart2: "Zmiana codziennie",
      feature3Description: "„Płacę 100 dolarów rocznie za Ottera, a oni ograniczają mnie do 10 importów plików miesięcznie. Jak tylko pojawi się alternatywa z nielimitowanymi importami, to mnie nie ma!” – Prawdziwy użytkownik Reddita",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Przełączono ponad 50 000 użytkowników",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Z „shrinkflation” Ottera",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Nigdy nie wrócę",
      feature3Stat1Number: "50 tys.+",
      feature3Stat1Label: "Zadowoleni użytkownicy",
      feature3Stat2Number: "1 mln+",
      feature3Stat2Label: "Przetworzone pliki",
      feature3Stat3Number: "96%",
      feature3Stat3Label: "Dokładność",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Brak ukrytych opłat",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuty/miesiąc",
      trustBadge2Number: "100+",
      trustBadge2Label: "Języki",
      trustBadge3Number: "96%",
      trustBadge3Label: "Dokładność",
      trustBadge4Number: "50",
      trustBadge4Label: "Przesyłanie zbiorcze",
      ctaTitle: "Przestań płacić za fałszywy nielimitowany",
      ctaSubtitle: "Dołącz do tysięcy osób, które przeszły na naprawdę nieograniczoną transkrypcję",
      finalCta: "Wypróbuj NeverCap za darmo"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Wolność przesyłania zbiorczego",
      heroTitleLine1: "Prześlij 50 plików.",
      heroTitleHighlight: "Przetwarzaj wszystko.",
      heroSubtitle: "Otter daje Ci 3 dożywotnie importy. TRZY. Na całe życie. Zapewniamy nielimitowane przesyłanie, 50 plików jednocześnie, kiedy tylko potrzebujesz.",
      primaryCta: "Rozpocznij przesyłanie zbiorcze →",
      secondaryCta: "Zobacz ograniczenia",
      redditQuote: "„Mam do przepisania trzy lata odcinków podcastów. Otter mówi, że dostaję trzy importy na całe życie. TRZY. To obraźliwe”.",
      redditAuthorIcon: "📍",
      redditAuthorText: "Prawdziwa frustracja z powodu r/podcastingu",
      comparisonSectionTitlePart1: "Ten",
      comparisonSectionTitleHighlight: "Śmieszne ograniczenia",
      comparisonSectionTitlePart2: "Oni narzucają",
      comparisonSubtitle: "W jaki sposób konkurenci ograniczają Twoją możliwość przetwarzania treści",
      limitCard1Service: "Wydra wolna",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Importy na całe życie",
      limitCard1DescriptionLine2: "(Tak, przez CAŁE twoje życie)",
      limitCard2Service: "Otter Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Pliki miesięcznie",
      limitCard2DescriptionLine2: "(Plan 100 USD/rok)",
      limitCard3Service: "Opisz",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Plik na raz",
      limitCard3DescriptionLine2: "(Sekwencyjne przesyłanie)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Nieograniczone przesyłanie",
      limitCard4DescriptionLine2: "50 plików na partię",
      feature1Label: "Moc wsadowa",
      feature1TitlePart1: "Przetwórz swoje",
      feature1TitleHighlight: "Całe archiwum",
      feature1TitlePart2: "Nocny",
      feature1Description: "Prześlij 50 plików przed snem. Obudź się, aby ukończyć transkrypcje. Bez kolejek, czekania, komunikatów „proszę o aktualizację”. Po prostu czysta moc obliczeniowa na wyciągnięcie ręki.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 jednoczesnych przesłań",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Przetwarzanie równoległe",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Obsługiwane pliki 10-godzinne",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Maksymalnie 5 GB na plik",
      uploadAnimationText1: "50 plików",
      uploadAnimationText2: "Upuść i przetwórz",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "wywiad_raw.mp4",
      fileBadge3: "spotkanie_2024.wav",
      fileBadge4: "wykład_pełny.mov",
      fileBadge5: "+ 46 kolejnych plików...",
      feature2Label: "Prędkość",
      feature2TitlePart1: "Od przesłania do",
      feature2TitleHighlight: "Zrobione w ciągu kilku godzin",
      feature2Description: "Nasza infrastruktura przetwarzania równoległego oznacza, że Twoje 50 plików nie czeka w kolejce. Wszystkie są transkrybowane jednocześnie. To, co kiedyś zajmowało tygodnie, teraz zajmuje godziny.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Plik 1-godzinny: 5 minut",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 plików: przetwarzanych równolegle",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Powiadomienie e-mail po zakończeniu",
      timelineStep1Icon: "1",
      timelineStep1Title: "Wgrywać",
      timelineStep1Time: "0 minut",
      timelineStep2Icon: "2",
      timelineStep2Title: "Przetwarzanie",
      timelineStep2Time: "5-30 minut",
      timelineStep3Icon: "3",
      timelineStep3Title: "Magia AI",
      timelineStep3Time: "30-60 minut",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Kompletny",
      timelineStep4Time: "< 2 godziny",
      feature3Label: "Wolność",
      feature3TitlePart1: "Brak kolejek.",
      feature3TitleHighlight: "Bez czekania.",
      feature3TitlePart2: "Bez ograniczeń.",
      feature3Description: "Podczas gdy inni każą Ci czekać w wirtualnych kolejkach lub ubiegać się o „priorytetowe przetwarzanie”, my traktujemy każde przesłanie z powagą. Twoja treść jest ważna i nie powinna czekać.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Brak poziomów priorytetowych",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Ta sama prędkość dla wszystkich",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Prześlij w dowolnym momencie, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Zawsze gotowy",
      feature3VisualSubtext: "Prześlij, gdy tylko najdzie Cię natchnienie",
      useCasesTitlePart1: "Idealny dla",
      useCasesTitleHighlight: "Ciężkie przesyłanie danych",
      useCasesSubtitle: "Rzeczywiste scenariusze, w których masowe przesyłanie danych ratuje sytuację",
      useCase1Title: "Archiwum podcastów",
      useCase1Description: "Prześlij 3 lata odcinków naraz. Twórz transkrypcje dla całego swojego katalogu. Generuj treści SEO dla każdego odcinka.",
      useCase2Title: "Tworzenie kursów",
      useCase2Description: "Przetwarzaj wszystkie swoje wykłady wideo jednocześnie. Twórz dostępne transkrypcje dla studentów. Twórz materiały do kursu z możliwością wyszukiwania.",
      useCase3Title: "Zaległości w rozmowach kwalifikacyjnych",
      useCase3Description: "Pozbądź się góry nietranskrypowanych wywiadów. Przetwórz tygodnie badań w kilka godzin. Dotrzymaj terminu bez paniki.",
      useCase4Title: "Biblioteka YouTube",
      useCase4Description: "Twórz napisy do całego kanału. Twórz posty na blogu z treści wideo. Popraw SEO wszystkich filmów.",
      useCase5Title: "Archiwum spotkań",
      useCase5Description: "Prześlij nagrania ze spotkań z wielu miesięcy. Twórz przeszukiwalne notatki ze spotkań. Nigdy więcej nie przegap ważnych decyzji.",
      useCase6Title: "Dane badawcze",
      useCase6Description: "Przetwarzaj grupy fokusowe na masową skalę. Transkrybuj wszystkie wywiady z uczestnikami. Efektywnie analizuj dane jakościowe.",
      ctaTitle: "Przestań prosić o więcej przesłań",
      ctaSubtitle: "Uzyskaj nieograniczone przetwarzanie zbiorcze, które naprawdę działa",
      finalCta: "Prześlij teraz 50 plików →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Najwyższa dokładność w branży",
      heroTitleLine1: "Dokładność 96%.",
      heroTitleHighlight: "Każde słowo ma znaczenie.",
      heroSubtitle: "Wiodąca w branży dokładność w 12 głównych językach. Znaczniki czasu na poziomie słów dla idealnej synchronizacji. Inteligentna identyfikacja mówcy, która obsługuje szybkie rozmowy. Profesjonalne formatowanie, które jest naprawdę czytelne.",
      primaryCta: "Sprawdź naszą dokładność →",
      secondaryCta: "Zobacz języki",
      statCard1Percentage: "96%",
      statCard1DescriptionLine1: "Dokładność w",
      statCard1DescriptionLine2: "12 głównych języków",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Dokładność z",
      statCard2DescriptionLine2: "Akcenty i dialekty",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Poziom słowa",
      statCard3DescriptionLine2: "Precyzja znacznika czasu",
      languageSectionTitlePart1: "96% dokładności w 12 głównych językach",
      languageSubtitle: "Transkrypcja na poziomie profesjonalnym dla treści globalnych",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "angielski",
      languageCard1Accuracy: "96% dokładności",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "hiszpański",
      languageCard2Accuracy: "96% dokładności",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarynka",
      languageCard3Accuracy: "96% dokładności",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "francuski",
      languageCard4Accuracy: "96% dokładności",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "niemiecki",
      languageCard5Accuracy: "96% dokładności",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "japoński",
      languageCard6Accuracy: "96% dokładności",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "koreański",
      languageCard7Accuracy: "96% dokładności",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "portugalski",
      languageCard8Accuracy: "96% dokładności",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "rosyjski",
      languageCard9Accuracy: "96% dokładności",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "włoski",
      languageCard10Accuracy: "96% dokładności",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Holenderski",
      languageCard11Accuracy: "96% dokładności",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "arabski",
      languageCard12Accuracy: "96% dokładności",
      moreLanguagesText: "+ 88 dodatkowych języków obsługiwanych z dokładnością 95%+",
      feature1Label: "Precyzja",
      feature1TitlePart1: "Poziom słowa",
      feature1TitleHighlight: "Znaczniki czasu",
      feature1Description: "Każde słowo jest idealnie zsynchronizowane z jego pozycją audio. Twórz klikalne transkrypcje, generuj precyzyjne napisy lub przeskakuj do konkretnych momentów w nagraniach. Precyzja 100 ms, której ufają profesjonaliści.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "Dokładność znacznika czasu 100 ms",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Idealny do edycji wideo",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikalne interaktywne transkrypcje",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Napisy z dokładnością do klatki",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Mówca 1",
      transcriptLine1Text: "Witamy w dzisiejszym odcinku podcastu.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Mówca 2",
      transcriptLine2Text: "Dziękuję za zaproszenie do programu!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Mówca 1",
      transcriptLine3Text: "Zajmijmy się teraz naszym głównym tematem...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Mówca 2",
      transcriptLine4Text: "Oczywiście, chętnie o tym porozmawiam.",
      feature2Label: "Inteligentna sztuczna inteligencja",
      feature2TitlePart1: "Uchwyty",
      feature2TitleHighlight: "Szybkie rozmowy",
      feature2Description: "Nasza sztuczna inteligencja precyzyjnie identyfikuje mówców nawet w przypadku nakładających się wypowiedzi, przerw i szybkich rozmów. Idealne rozwiązanie do wywiadów, podcastów i spotkań, gdzie mówcy często się wtrącają.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Identyfikuje do 20 mówców",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Doskonale radzi sobie z przerwami",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Działa z nakładającą się mową",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Utrzymuje dokładność w przesłuchu",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Zidentyfikowano mówców",
      feature2VisualSubtext: "Nawet w szybkich rozmowach",
      feature3Label: "Czytelność",
      feature3TitlePart1: "Doskonale",
      feature3TitleHighlight: "Sformatowany tekst",
      feature3Description: "Koniec ze ścianami tekstu. Nasza sztuczna inteligencja automatycznie dodaje akapity, zdania i znaki interpunkcyjne dokładnie tam, gdzie ich miejsce. Efekt? Transkrypcje, które są naprawdę przyjemne w czytaniu i łatwe do przejrzenia.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Inteligentne podziały akapitów",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Dokładna interpunkcja",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Prawidłowa kapitalizacja",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Czysty, skanowalny wydruk",
      formattingTitle: "Przed i po",
      formattingBeforeLabel: "❌ Inne:",
      formattingBeforeText: "Więc dzisiaj porozmawiamy o nowych funkcjach, nad którymi pracowaliśmy. Myślę, że bardzo Ci się spodobają. Użytkownicy prosili o nie od dawna i w końcu je wprowadziliśmy.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Dzisiaj porozmawiamy o nowych funkcjach, nad którymi pracowaliśmy. Myślę, że bardzo Wam się spodobają. Użytkownicy prosili o nie od dawna i w końcu je wprowadziliśmy.",
      comparisonSubtitle: "Dokładność",
      comparisonSectionTitle: "Porównanie",
      comparisonDes: "Zobacz, jak wypadamy na tle konkurencji",
      tableHeader1: "Funkcja",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Opisz",
      tableHeader5: "Obrót silnika",
      tableRow1Feature: "Dokładność (czysty dźwięk)",
      tableRow1NeverCap: "96%",
      tableRow1Otter: "95%",
      tableRow1Descript: "94%",
      tableRow1Rev: "94%",
      tableRow2Feature: "Znaczniki czasu na poziomie słów",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Identyfikacja mówcy",
      tableRow3NeverCap: "20 mówców",
      tableRow3Otter: "16 głośników",
      tableRow3Descript: "10 głośników",
      tableRow3Rev: "✕",
      tableRow4Feature: "Obsługuje przesłuchy",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Ograniczony",
      tableRow4Descript: "Ograniczony",
      tableRow4Rev: "✕",
      tableRow5Feature: "Inteligentne formatowanie",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Podstawowy",
      tableRow6Feature: "12 języków w 96%",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Doświadcz 96% dokładności",
      ctaSubtitle: "Prześlij swoje najtrudniejsze nagranie audio i zobacz różnicę",
      finalCta: "Sprawdź naszą dokładność już teraz →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Proste, przejrzyste ceny",
      "highlighted_text": "Bez ukrytych czapek",
      "description": "Wybierz plan, który odpowiada Twoim potrzebom. Zmień lub zwiększ plan w dowolnym momencie. Bez umów, bez niespodzianek."
    },
    Cards: {
      "title": "Proste i przejrzyste ceny.",
      "highlighted_text": "Bez ukrytych wielkich liter.",
      "description": "Wybierz plan, który odpowiada Twoim potrzebom. Zmień lub zwiększ plan w dowolnym momencie. Bez umów, bez niespodzianek.",
      "plans": [
        {
          "name": "Bezpłatny",
          "price": "0 zł",
          "period": "miesiąc",
          "discount": "Idealne do wypróbowania naszej usługi",
          "limits": {
            "title": "Dzienne limity",
            "items": [
              "3 pliki dziennie (łącznie ≈90 min dziennie)",
              "Do 30 min na plik (≤250 MB)",
              "Prześlij 1 plik na raz",
              "Standardowa kolejka priorytetowa"
            ]
          },
          "features": {
            "title": "Cechy",
            "items": [
              "Ponad 100 języków",
              "Etykiety głośników",
              "Tłumaczenie",
              "Wszystkie formaty eksportu"
            ]
          },
          "cta": {
            "text": "Zacznij za darmo. Bez karty kredytowej.",
            "button": "Zacznij za darmo"
          }
        },
        {
          "name": "Miesięcznik Pro",
          "price": "17,99 USD",
          "period": "miesiąc",
          "discount": "9,99 USD za pierwszy miesiąc",
          "limits": {
            "title": "Brak miesięcznego limitu",
            "items": [
              "Nieograniczona liczba minut",
              "Do 10 godzin / 5 GB na plik",
              "Prześlij 50 plików na raz",
              "Kolejka priorytetowa"
            ]
          },
          "features": {
            "title": "Wszystko za darmo, plus",
            "items": [
              "Znaczniki czasu na poziomie słów",
              "Zaawansowana identyfikacja mówcy",
              "Sformatowane akapity i interpunkcja",
              "Wsparcie priorytetowe"
            ]
          },
          "cta": {
            "text": "Nielimitowane minuty. Priorytetowa prędkość. Przesyłanie zbiorcze.",
            "button": "Przejdź na tryb profesjonalny"
          },
          "badge": "Najpopularniejsze"
        },
        {
          "name": "Pro Roczny",
          "price": "8,99 USD",
          "period": "miesiąc",
          "discount": "Rocznie rozliczane w kwocie 107,88 USD",
          "limits": {
            "title": "Tak samo jak Pro Monthly",
            "items": [
              "Nieograniczona liczba minut",
              "Do 10 godzin / 5 GB na plik",
              "Prześlij 50 plików na raz",
              "Kolejka priorytetowa"
            ]
          },
          "features": {
            "title": "Wszystko za darmo, plus",
            "items": [
              "Znaczniki czasu na poziomie słów",
              "Zaawansowana identyfikacja mówcy",
              "Sformatowane akapity i interpunkcja",
              "Wsparcie priorytetowe"
            ]
          },
          "cta": {
            "text": "Nielimitowane minuty. Priorytetowa prędkość. Przesyłanie zbiorcze.",
            "button": "Przejdź na tryb profesjonalny"
          },
          "badge": "Najlepsza wartość – zaoszczędź 50%"
        }
      ],
      "disclaimer": "„Nieograniczony” oznacza brak miesięcznego limitu i sztucznego spowolnienia. Zasada dozwolonego użytku dotyczy nadużyć w zakresie automatyzacji lub redystrybucji."
    },
    ComparisonTable: {
      "header": {
        "title": "Porównaj wszystkie funkcje",
        "highlighted_text": "Wszystkie funkcje",
        "subtitle": "Zobacz dokładnie, co otrzymasz w ramach każdego planu. Bez ukrytych ograniczeń."
      },
      "plans": [
        "Cechy",
        "Bezpłatny",
        "Miesięcznik Pro",
        "Pro Roczny"
      ],
      "features": [
        {
          "name": "Cena",
          "values": [
            "0 zł/miesiąc",
            {
              "main": "17,99 USD/miesiąc",
              "note": "9,99 USD za pierwszy miesiąc"
            },
            {
              "main": "8,99 USD/miesiąc",
              "note": "Wystawiono fakturę 107,88 USD/rok"
            }
          ]
        },
        {
          "name": "Miesięczne minuty",
          "values": ["~2700 (90/dzień)", "Nieograniczony", "Nieograniczony"]
        },
        {
          "name": "Maksymalny czas trwania pliku",
          "values": ["30 minut", "10 godzin", "10 godzin"]
        },
        {
          "name": "Maksymalny rozmiar pliku",
          "values": ["250 MB", "5 GB", "5 GB"]
        },
        {
          "name": "Przesyłanie zbiorcze",
          "values": ["1 plik", "50 plików", "50 plików"]
        },
        {
          "name": "Prędkość przetwarzania",
          "values": ["Standard", "Priorytet", "Priorytet"]
        },
        {
          "name": "Obsługiwane języki",
          "values": ["Ponad 100 języków", "Ponad 100 języków", "Ponad 100 języków"]
        },
        {
          "name": "Tłumaczenie",
          "values": ["PRAWDA", "PRAWDA", "PRAWDA"]
        },
        {
          "name": "Identyfikacja mówcy",
          "values": ["Podstawowy", "Zaawansowany (20 mówców)", "Zaawansowany (20 mówców)"]
        },
        {
          "name": "Znaczniki czasu na poziomie słów",
          "values": ["FAŁSZ", "PRAWDA", "PRAWDA"]
        },
        {
          "name": "Sformatowane akapity",
          "values": ["FAŁSZ", "PRAWDA", "PRAWDA"]
        },
        {
          "name": "Formaty eksportu",
          "values": ["Wszystkie formaty", "Wszystkie formaty", "Wszystkie formaty"]
        },
        {
          "name": "Wsparcie",
          "values": ["E-mail", "E-mail priorytetowy", "E-mail priorytetowy"]
        },
        {
          "name": "Przechowywanie danych",
          "values": ["30 dni", "Na zawsze", "Na zawsze"]
        }
      ]
    },
    FAQ: {
      "title": "Często zadawane pytania",
      "titleHighligt": "Pytania",
      "items": [
        {
          "q": "nieograniczona_polityka",
          "question": "Czy to naprawdę jest nieograniczone?",
          "answer": "Tak! Plany Pro nie mają miesięcznych limitów minut. Jedyne ograniczenia są natury technicznej: maksymalny czas trwania pliku to 10 godzin, a jego rozmiar to 5 GB. Możesz przetwarzać tyle plików, ile potrzebujesz."
        },
        {
          "q": "zmiana_planu",
          "question": "Czy mogę zmienić plan w dowolnym momencie?",
          "answer": "Oczywiście! Możesz anulować subskrypcję w dowolnym momencie z poziomu panelu. Możesz zmienić wersję na wyższą lub niższą, kiedy tylko chcesz."
        },
        {
          "q": "metody_płatności",
          "question": "Jakie metody płatności akceptujecie?",
          "answer": "Akceptujemy wszystkie główne karty kredytowe i debetowe, a także płatności przez PayPal, co zapewnia bezpieczne i bezproblemowe płatności."
        },
        {
          "q": "bezpłatny_wersja_próbna",
          "question": "Czy istnieje bezpłatna wersja próbna Pro?",
          "answer": "Tak! Wypróbuj wersję Pro za darmo przez 7 dni, bez karty kredytowej. Dodatkowo, po wykupieniu subskrypcji, otrzymasz 45% zniżki na pierwszy miesiąc."
        },
        {
          "q": "przechowywanie_plików",
          "question": "Jak długo przechowujecie moje pliki?",
          "answer": "Plan darmowy: 30 dni. Plany Pro: Na zawsze! Twoje transkrypty są zawsze dostępne na Twoim koncie."
        },
        {
          "q": "bezpieczeństwo_danych",
          "question": "A co z bezpieczeństwem danych?",
          "answer": "Posiadamy certyfikat SOC 2 i stosujemy 256-bitowe szyfrowanie. Nigdy nie wykorzystujemy Twoich treści do trenowania naszych modeli. Twoje dane należą do Ciebie."
        }
      ]
    },
    CTA: {
      "title": "Gotowy na nieograniczone możliwości?",
      "subtitle": "Dołącz do ponad 50 000 profesjonalistów, którzy transkrybują bez ograniczeń",
      "button": "Wypróbuj NeverCap za darmo →",
      "disclaimer": "Nie jest wymagana karta kredytowa • Rozpocznij transkrypcję w kilka sekund"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Zbudowany dla",
      heavyUsers: "Intensywni użytkownicy",
      whoActuallyNeed: "Kto naprawdę potrzebuje nieograniczonego",
      heroSubtitle: "Od podcasterów z wieloletnim stażem po badaczy z setkami wywiadów. Zobacz, jak profesjonaliści wykorzystują NeverCap, aby uwolnić się od limitów przesyłania i minut.",
      podcasters: {
        title: "Podcasterzy",
        pain: "„Przestańcie wybierać odcinki, które zasługują na transkrypcję”",
        description: "Prześlij całe archiwum podcastów na raz. Twórz notatki do podcastów, poprawiaj SEO i wykorzystuj treści bez liczenia minut.",
        benefits: {
          benefit1: "Prześlij wszystkie odcinki, a nie tylko 3",
          benefit2: "Generuj przyjazne dla SEO notatki do pokazu",
          benefit3: "Utwórz przeszukiwalne archiwa",
          benefit4: "Przekształć w treść bloga"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Odcinki"
          },
          stat2: {
            number: "200 godzin",
            label: "Zapisano"
          },
          stat3: {
            number: "3x",
            label: "Ruch SEO"
          }
        }
      },
      journalists: {
        title: "Dziennikarze i pisarze",
        pain: "„Presja terminów spotyka się z ograniczeniami przesyłania”",
        description: "Prześlij wszystkie wywiady zbiorczo przed upływem terminu. Przeszukuj transkrypcje natychmiast i nigdy nie przegap ważnego cytatu.",
        benefits: {
          benefit1: "Przesyłanie zbiorcze przed terminami",
          benefit2: "Przeszukaj wszystkie wywiady na raz",
          benefit3: "Dokładne cytaty z sygnaturami czasowymi",
          benefit4: "Obsługa akcentów i języków"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Wywiady/miesiąc"
          },
          stat2: {
            number: "96%",
            label: "Dokładność"
          },
          stat3: {
            number: "5 minut",
            label: "Na godzinę"
          }
        }
      },
      contentCreators: {
        title: "Twórcy treści",
        pain: "„Dostępność nie powinna być droga”",
        description: "Dodaj napisy do całego swojego kanału YouTube. Twórz napisy w wielu językach i błyskawicznie popraw SEO swojego filmu.",
        benefits: {
          benefit1: "Dodaj napisy do wszystkich filmów jednocześnie",
          benefit2: "249 tłumaczeń językowych",
          benefit3: "Pliki SRT gotowe do użycia w serwisie YouTube",
          benefit4: "Zwiększ pozycję wideo w rankingu SEO"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Filmy"
          },
          stat2: {
            number: "100+",
            label: "Języki"
          },
          stat3: {
            number: "249",
            label: "Tłumaczenia"
          }
        }
      },
      researchers: {
        title: "Badacze i pracownicy naukowi",
        pain: "„Dane jakościowe nie powinny czekać w kolejce”",
        description: "Przetwarzaj całe badania jednocześnie. Zarządzaj grupami fokusowymi, wywiadami i dyskusjami panelowymi z perfekcyjną identyfikacją mówcy.",
        benefits: {
          benefit1: "Przetwarzaj grupy fokusowe masowo",
          benefit2: "Identyfikacja 20 mówców",
          benefit3: "Eksport do oprogramowania analitycznego",
          benefit4: "Bezpieczeństwo zgodne z RODO"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Badanie"
          },
          stat2: {
            number: "96%",
            label: "Dokładność grupy"
          },
          stat3: {
            number: "RODO",
            label: "Uległy"
          }
        }
      },
      businessTeams: {
        title: "Zespoły biznesowe",
        pain: "„Nagrywanie spotkań powinno być bezproblemowe”",
        description: "Nagrywaj spotkania bezpośrednio lub przesyłaj pliki audio do natychmiastowej transkrypcji. Twórz przeszukiwalne archiwa z nieograniczonej liczby rozmów i nigdy więcej nie trać ważnych dyskusji.",
        benefits: {
          benefit1: "Bezpośrednie nagrywanie i transkrypcja dźwięku",
          benefit2: "Nieograniczone nagrania spotkań",
          benefit3: "Przeszukiwalne archiwum spotkań",
          benefit4: "Natychmiastowe przesyłanie plików audio"
        },
        stats: {
          stat1: {
            number: "Na żywo",
            label: "Nagranie"
          },
          stat2: {
            number: "Natychmiastowy",
            label: "Wgrywać"
          },
          stat3: {
            number: "20+",
            label: "Głośniki"
          }
        }
      },
      educators: {
        title: "Nauczyciele",
        pain: "„Filmy na YouTube potrzebują natychmiastowej transkrypcji”",
        description: "Wystarczy wkleić linki z YouTube, aby uzyskać natychmiastowe transkrypcje i automatycznie generowane napisy. Przekształć dowolny film edukacyjny w przystępną, wyszukiwalną treść.",
        benefits: {
          benefit1: "Transkrypcja bezpośredniego linku do YouTube",
          benefit2: "Automatyczne generowanie napisów do filmów",
          benefit3: "Transkrybuj całe kursy",
          benefit4: "Przeszukiwalne archiwa wykładów"
        },
        stats: {
          stat1: {
            number: "1 kliknięcie",
            label: "Wklej YouTube"
          },
          stat2: {
            number: "Automatyczny",
            label: "Napisy"
          },
          stat3: {
            number: "100+",
            label: "Języki"
          }
        }
      },
      quotes: {
        title: "Prawdziwi użytkownicy,",
        titleHighlight: "Prawdziwa wolność",
        subtitle: "Posłuchaj ekspertów, którzy uwolnili się od sztucznych ograniczeń",
        testimonials: {
          mike: {
            textBefore: "„Miałem",
            highlight: "3 lata odcinków",
            textAfter: "Siedzę bez transkrypcji. Otter chciał, żebym wybrał 3. TRZY. NeverCap pozwolił mi wgrać wszystkie 150 odcinków w jeden weekend.",
            name: "Mike Rodriguez",
            role: "Gospodarz podcastu"
          },
          jessica: {
            textBefore: "„Jako niezależny dziennikarz nie mogę sobie pozwolić na Trint’s",
            highlight: "100 USD/miesiąc",
            textAfter: ', ale nie mogę też pracować z limitem 10 plików miesięcznie w Otterze. NeverCap uratowało mi to karierę."',
            name: "Jessica Park",
            role: "Dziennikarz niezależny"
          },
          sarah: {
            textBefore: "„Nasz zespół badawczy miał",
            highlight: "200 godzin",
            textAfter: "nagrań grup fokusowych. Przetworzyliśmy wszystko w weekend, zamiast racjonować minuty w miesiącu.",
            name: "Dr Sarah Chen",
            role: "Główny badacz"
          },
          carlos: {
            textBefore: "„Tworzę treści edukacyjne w języku hiszpańskim. NeverCap transkrybuje idealnie i",
            highlight: "tłumaczy się na angielski",
            textAfter: "dla szerszego zasięgu. Bez ograniczeń, tylko rozwój.",
            name: "Carlos Martinez",
            role: "Edukator YouTube"
          }
        }
      },
      industries: {
        title: "Zaufany na całym świecie",
        titleHighlight: "Branże",
        subtitle: "Profesjonaliści na całym świecie przechodzą na prawdziwie nieograniczone",
        list: {
          media: "Media i publikacje",
          education: "Edukacja",
          healthcare: "Opieka zdrowotna",
          technology: "Technologia",
          finance: "Finanse",
          legal: "Prawny"
        }
      },
      cta: {
        title: "Twój przypadek użycia również potrzebuje nieograniczonych możliwości",
        subtitle: "Dołącz do ponad 50 000 profesjonalistów, którzy przestali liczyć minuty i zaczęli tworzyć",
        button: "Rozpocznij swoją nieograniczoną podróż →"
      }
    },
    Podcasters: {
      badge: "🎙️ Stworzone dla podcasterów",
      heroTitle: "Transkrybuj swoje",
      heroTitleHighlight: "Całe archiwum podcastów",
      heroSubtitle: "Prześlij cały swój katalog archiwalny. Twórz notatki do każdego odcinka. Koniec z wybieraniem odcinków do transkrypcji. Przetwarzaj 50 odcinków jednocześnie, nieograniczoną liczbę razy w miesiącu.",
      ctaPrimary: "Rozpocznij transkrypcję za darmo",
      ctaSecondary: "Zobacz jak to działa",
      trustBadge1: "🎙️ Ponad 10 000 podcasterów",
      trustBadge2: "∞ Nieograniczona liczba odcinków",
      trustBadge3: "📝 Transkrypcje gotowe pod SEO",
      stats: {
        stat1: {
          number: "∞",
          label: "Odcinki/miesiąc"
        },
        stat2: {
          number: "50",
          label: "Przesyłanie zbiorcze"
        },
        stat3: {
          number: "10 godzin",
          label: "Maksymalna długość odcinka"
        },
        stat4: {
          number: "96%",
          label: "Dokładność"
        }
      },
      problemTitle: "Ten",
      problemTitleHighlight: "Problem z transkrypcją podcastu",
      problemSubtitle: "W przypadku innych usług musisz wybrać, które odcinki są „warte” przepisywania",
      problems: {
        problem1: {
          title: "Limity przesyłania Usuń archiwa",
          description: "Otter daje Ci 3 darmowe importy na całe życie, 10 miesięcznie w wersji Pro. Jak transkrybować odcinki z 3 lat?"
        },
        problem2: {
          title: "Brakujące możliwości SEO",
          description: "Każdy nietranskrypowany odcinek to stracony ruch SEO. Ale Descript ogranicza Cię do maksymalnie 30 godzin miesięcznie."
        },
        problem3: {
          title: "Koszty rosną gwałtownie wraz ze wzrostem",
          description: "W miarę rozwoju podcastu koszty transkrypcji gwałtownie rosną. Opłata za przekroczenie limitu godzinowego w wysokości 2 USD uniemożliwia skalowanie."
        }
      },
      solutionTitle: "Ten",
      solutionTitleHighlight: "NeverCap Rozwiązanie",
      solutionDescription: "Prawdziwie nieograniczona transkrypcja. Prześlij całe swoje archiwum. Transkrybuj każdy nowy odcinek. Twórz notatki do odcinków na dużą skalę. Bez limitów, bez ograniczeń, tylko rozwój.",
      workflowTitle: "Twój przepływ pracy w podcaście,",
      workflowTitleHighlight: "Uproszczony",
      workflowSubtitle: "Od nagrania do zoptymalizowanych pod kątem SEO notatek z pokazu w ciągu kilku minut",
      workflow: {
        step1: {
          title: "Prześlij odcinki",
          description: "Dodaj 50 odcinków na raz. MP3, MP4, WAV – obsługujemy je wszystkie."
        },
        step2: {
          title: "AI transkrybuje",
          description: "96% dokładności w identyfikacji mówcy. Idealne do wywiadów."
        },
        step3: {
          title: "Inteligentne formatowanie",
          description: "Sztuczna inteligencja automatycznie dodaje akapity, zdania i znaki interpunkcyjne."
        },
        step4: {
          title: "Publikuj i ranguj",
          description: "Eksportuj na swoją stronę internetową. Obserwuj, jak rośnie ruch SEO."
        }
      },
      featuresTitle: "Funkcje Podcasterów",
      featuresTitleHighlight: "Naprawdę potrzebuję",
      featuresSubtitle: "Stworzone przez podcasterów, dla podcasterów",
      features: {
        feature1: {
          title: "Wykrywanie wielu głośników",
          description: "Automatycznie identyfikuje i oznacza do 20 prelegentów. Idealne do dyskusji panelowych, wywiadów i programów współprowadzonych."
        },
        feature2: {
          title: "Rozdziały z znacznikami czasu",
          description: "Generuj klikalne znaczniki czasu dla opisów na YouTube. Pozwól słuchaczom natychmiast przejść do ulubionych fragmentów."
        },
        feature3: {
          title: "Inteligentne formatowanie",
          description: "Automatycznie dodaje akapity, zdania i znaki interpunkcyjne. Uzyskaj przejrzyste, czytelne transkrypcje. Oszczędź godziny na postprodukcji."
        },
        feature4: {
          title: "Optymalizacja SEO",
          description: "Transkrypcje sformatowane pod kątem wyszukiwarek. Zwiększ rozpoznawalność swojego podcastu i dotrzyj do nowych odbiorców."
        },
        feature5: {
          title: "Ponad 100 języków",
          description: "Transkrybuj w dowolnym języku. Tłumacz na ponad 249 języków. Docieraj do odbiorców na całym świecie bez wysiłku."
        },
        feature6: {
          title: "Przetwarzanie wsadowe",
          description: "Prześlij 50 odcinków przed snem. Obudź się, żeby dokończyć transkrypcje. Przetwórz całe archiwum w ciągu nocy."
        }
      },
      testimonialsTitle: "Podcasterzy, którzy stworzyli",
      testimonialsTitleHighlight: "Przełącznik",
      testimonialsSubtitle: "Prawdziwe historie od prawdziwych podcasterów",
      testimonials: {
        mike: {
          text: "„Prowadzę podcast od 3 lat i przepisuję wszystko ręcznie jak idiota. Wgrałem 6 odcinków naraz i idealnie rozdzieliłem mnie i mojego współprowadzącego. Odcinek o kawiarni, który myślałem, że jest zepsuty? Transkrypcja jest krystalicznie czysta. Nigdy więcej nie będę tego sam przepisywał”.",
          name: "Mike Rodriguez",
          role: "Gospodarz podcastu „The Daily Grind”"
        },
        sarah: {
          text: "„Otter ograniczał mnie do 10 importów plików miesięcznie. Mam 150 zaległych odcinków. NeverCap pozwolił mi przesłać wszystko w 3 partiach. Mój ruch organiczny wzrósł o 300% od czasu dodania transkrypcji do starych odcinków. To dosłownie się zwraca.”",
          name: "Sarah Chen",
          role: "Twórca „Tech Talks Today”"
        }
      },
      comparisonTitle: "Dlaczego podcasterzy wybierają",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Zobacz, jak wypadamy na tle konkurencji",
      comparison: {
        headers: {
          feature: "Funkcja",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Twórca opisu"
        },
        rows: {
          monthlyLimit: {
            feature: "Miesięczny limit odcinków",
            nevercap: "Nieograniczony",
            otter: "~13 odcinków (1200 min)",
            descript: "~30 odcinków (30 godz.)"
          },
          uploadLimit: {
            feature: "Limit przesyłania plików",
            nevercap: "Nieograniczony",
            otter: "10 miesięcznie",
            descript: "1 na raz"
          },
          batchProcessing: {
            feature: "Przetwarzanie wsadowe",
            nevercap: "50 plików",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksymalna długość odcinka",
            nevercap: "10 godzin",
            otter: "90 minut",
            descript: "Nieograniczony"
          },
          speakerDetection: {
            feature: "Wykrywanie głośników",
            nevercap: "20 mówców",
            otter: "16 głośników",
            descript: "10 głośników"
          },
          smartFormatting: {
            feature: "Inteligentne formatowanie",
            nevercap: "✓ Idealny",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Cena",
            nevercap: "17,99 USD/mies.",
            otter: "16,99 USD/mies.",
            descript: "30 USD/mies."
          }
        }
      },
      ctaTitle: "Zacznij przepisywać każdy odcinek",
      ctaSubtitle: "Dołącz do ponad 10 000 podcasterów, którzy nigdy nie martwią się o ograniczenia",
      ctaButton: "Prześlij swoje pierwsze 50 odcinków za darmo →",
      ctaDisclaimer: "Nie jest wymagana karta kredytowa • Przetwarzaj nieograniczoną liczbę odcinków • Anuluj w dowolnym momencie"
    },
    Journalists: {
      hero: {
        badge: "📰 Dla dziennikarzy i pisarzy",
        title: "Transkrybuj każdy wywiad.",
        titleHighlight: "Nie przegap żadnego cytatu.",
        subtitle: "Przestań wybierać wywiady, które zasługują na transkrypcję. Prześlij wszystkie nagrania jednocześnie, przeszukaj je błyskawicznie i dotrzymuj terminów bez stresu związanego z przesyłaniem.",
        ctaPrimary: "Rozpocznij nieograniczone przesyłanie →",
        ctaSecondary: "Zobacz jak to działa",
        stats: {
          uploads: {
            number: "∞",
            label: "Przesyłanie plików"
          },
          accuracy: {
            number: "96%",
            label: "Dokładność"
          },
          speed: {
            number: "5 minut",
            label: "Na godzinę"
          }
        },
        dashboard: {
          title: "Kolejka do wywiadu",
          status: "• Całe przetwarzanie",
          interviews: {
            cityCouncil: {
              title: "Spotkanie Rady Miasta",
              duration: "2 godz. 15 min • Przesyłanie...",
              action: "Przetwarzanie"
            },
            expertInterview: {
              title: "Wywiad z ekspertem – dr Chen",
              duration: "45 min • Transkrypcja...",
              action: "96% zrobione"
            },
            pressConference: {
              title: "Konferencja prasowa",
              duration: "1 godz. 30 min • Gotowe",
              action: "Widok →"
            },
            phoneInterview: {
              title: "Wywiad telefoniczny – źródło",
              duration: "35 min • Gotowe",
              action: "Widok →"
            }
          }
        }
      },
      problem: {
        title: "Ten",
        titleHighlight: "Problem z transkrypcją dziennikarską",
        subtitle: "Inne usługi wymagają od Ciebie wyboru wywiadów, które są „warte” przepisywania",
        problems: {
          uploadLimits: {
            title: "Limity przesyłania uniemożliwiają prowadzenie śledztw",
            description: "Otter oferuje 10 importów plików miesięcznie w wersji Pro. Jak przepisać 3 tygodnie przesłuchań śledczych?"
          },
          missingQuotes: {
            title: "Brak kluczowych cytatów",
            description: "Każdy nietranskrypowany wywiad mógłby zawierać kluczowy cytat z artykułu. Trint ogranicza jednak czas do maksymalnie 50 godzin miesięcznie."
          },
          costExplosion: {
            title: "Koszty rosną wraz z terminami",
            description: "W miarę pogłębiania się śledztwa koszty transkrypcji gwałtownie rosną. Opłata za przekroczenie limitu w wysokości 100 USD miesięcznie sprawia, że przekazanie najświeższych wiadomości jest niemożliwe."
          }
        },
        solution: {
          title: "Ten",
          titleHighlight: "NeverCap Rozwiązanie",
          description: "Prawdziwie nieograniczona transkrypcja. Prześlij całe swoje śledztwo. Transkrybuj każdy wywiad. Natychmiastowe wyszukiwanie wszystkich cytatów. Bez wielkich liter, bez ograniczeń, po prostu dziennikarstwo."
        }
      },
      solution: {
        title: "Wreszcie,",
        titleHighlight: "Prawdziwa wolność",
        titleSuffix: "dla dziennikarzy",
        subtitle: "Prześlij wszystko. Transkrybuj wszystko. Przeszukaj wszystko.",
        solutions: {
          unlimitedUploads: {
            label: "Nieograniczone przesyłanie",
            title: "Przesyłaj zbiorczo całe swoje śledztwo",
            description: "Koniec z wybieraniem wywiadów do transkrypcji. Prześlij 50 plików jednocześnie. Przetwarzaj nagrania z miesięcy w ciągu jednej nocy. Całe Twoje śledztwo, transkrypcja.",
            points: {
              simultaneousUpload: "Prześlij 50 plików jednocześnie",
              noLimits: "Brak miesięcznych limitów przesyłania danych",
              processWhileWrite: "Przetwarzaj podczas pisania",
              longRecordings: "Obsługa 10-godzinnych nagrań"
            },
            visual: {
              number: "50",
              label: "Pliki na raz"
            }
          },
          instantSearch: {
            label: "Natychmiastowe wyszukiwanie",
            title: "Znajdź dowolną ofertę w kilka sekund",
            description: "Przeszukuj wszystkie swoje transkrypcje natychmiast. Znajdź idealny cytat sprzed trzech miesięcy. Nigdy więcej nie zgubisz ważnych stwierdzeń w notatkach.",
            points: {
              searchAll: "Wyszukaj we wszystkich wywiadach",
              wordTimestamps: "Znaczniki czasu na poziomie słów",
              jumpToMoments: "Przejdź do dokładnych momentów",
              exportCitations: "Eksportuj z cytatami"
            },
            searchDemo: {
              placeholder: "oświadczenie w sprawie polityki klimatycznej",
              resultsText: "Znaleziono w 4 wywiadach:",
              results: {
                mayorInterview: "„...nasza polityka klimatyczna ulegnie zmianie...”",
                expertPanel: "„...oświadczenie polityczne wyraźnie pokazuje...”"
              }
            }
          },
          professionalAccuracy: {
            label: "Profesjonalna dokładność",
            title: "96% dokładności, którą możesz wycenić",
            description: "Uzyskaj transkrypcje tak dokładne, że możesz je cytować bezpośrednio. Obsługuje akcenty, terminologię techniczną i szybkie konwersacje. Idealne formatowanie, które jest naprawdę czytelne.",
            points: {
              accuracyGuarantee: "Gwarancja dokładności 96%",
              handlesAccents: "Obsługuje akcenty i dialekty",
              smartPunctuation: "Inteligentna interpunkcja i akapity",
              speakerIdentification: "Identyfikacja mówcy"
            },
            visual: {
              accuracy: "96%",
              label: "Współczynnik dokładności",
              transcript: {
                speaker1: "„Śledztwo ujawniło istotne rozbieżności w sprawozdaniach finansowych”.",
                speaker2: "„Czy może Pan wyjaśnić, na czym dokładnie polegają te rozbieżności?”"
              }
            }
          }
        }
      },
      features: {
        title: "Wszystko a",
        titleHighlight: "Potrzeby dziennikarzy",
        subtitle: "Profesjonalne narzędzia, które szanują Twój przepływ pracy",
        featuresList: {
          languages: {
            title: "Ponad 100 języków",
            description: "Wywiady z osobami z całego świata w 12 głównych językach, dokładność 96%."
          },
          exportFormats: {
            title: "Formaty eksportu",
            description: "Word, PDF, SRT, TXT. Zgodne z każdym procesem pracy."
          },
          sourceProtection: {
            title: "Ochrona źródła",
            description: "Szyfrowanie na poziomie bankowym. Twoje źródła pozostają poufne."
          },
          timestamps: {
            title: "Znaczniki czasu",
            description: "Kliknij dowolny cytat, aby przejść do dokładnego fragmentu nagrania."
          },
          teamSharing: {
            title: "Udostępnianie zespołowe",
            description: "Współpracuj z redaktorami. Udostępniaj transkrypcje bezpiecznie."
          },
          mobileReady: {
            title: "Gotowy na urządzenia mobilne",
            description: "Prześlij z telefonu. Przeglądaj transkrypty w dowolnym miejscu."
          },
          smartFormatting: {
            title: "Inteligentne formatowanie",
            description: "Automatyczne akapity i interpunkcja dla czytelnych transkryptów."
          },
          batchProcessing: {
            title: "Przetwarzanie wsadowe",
            description: "Prześlij 50 plików naraz. Przetwarzaj przez noc, podczas gdy śpisz."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Miałem 3 lata wywiadów, które nie były przepisywane z powodu limitów przesyłania. NeverCap pozwoliło mi to przetworzyć wszystko w jeden weekend. Zmiana zasad gry.",
          name: "Jessica Park",
          role: "Dziennikarz niezależny, były użytkownik Otter"
        }
      },
      cta: {
        title: "Rozpocznij transkrypcję",
        titleHighlight: "Bez ograniczeń",
        subtitle: "Dołącz do tysięcy dziennikarzy, którzy przestali liczyć przesyłane materiały i zaczęli skupiać się na historiach",
        ctaPrimary: "Wypróbuj bez ograniczeń za darmo →",
        ctaSecondary: "Zobacz ceny"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Dla twórców treści",
        title: "Podpis Twój",
        titleHighlight: "Cały kanał",
        titleSuffix: "Bez liczenia minut",
        subtitle: "Przestań wybierać filmy, które zasługują na napisy. Przetwarzaj całą swoją bibliotekę YouTube, generuj napisy w ponad 100 językach i pobieraj filmy bezpośrednio z dowolnej platformy. Bez miesięcznych limitów, bez ograniczeń przesyłania – po prostu pełna swoboda twórcza.",
        ctaPrimary: "Rozpocznij nieograniczone tworzenie napisów →",
        ctaSecondary: "Zobacz jak to działa",
        stats: {
          videos: {
            number: "∞",
            label: "Filmy/miesiąc"
          },
          languages: {
            number: "100+",
            label: "Języki"
          },
          accuracy: {
            number: "96%",
            label: "Dokładność"
          },
          platforms: {
            number: "10+",
            label: "Platformy"
          }
        }
      },
      platforms: {
        title: "Pobieranie i transkrypcja z dowolnej platformy",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Dysk Google",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagram"
        }
      },
      features: {
        title: "Wszystko, czego potrzebujesz",
        titleHighlight: "Skala zawartości",
        subtitle: "Profesjonalne narzędzia bez ograniczeń zawodowych",
        oneClickImport: {
          label: "Importowanie jednym kliknięciem",
          title: "Wklej link.",
          titleHighlight: "Pobierz transkrypt.",
          description: "Koniec z pobieraniem i ponownym przesyłaniem. Wystarczy wkleić link do YouTube, TikToka lub Instagrama i uzyskać natychmiastowe transkrypcje. Przetwarzaj wszystkie zaległości na swoim kanale w jeden weekend.",
          points: {
            directYoutube: "Transkrypcja bezpośredniego linku do YouTube",
            multiplePlatforms: "Pobierz z ponad 10 platform",
            batchPlaylists: "Przetwarzanie wsadowe całych list odtwarzania",
            autoSync: "Automatyczna synchronizacja z kanałami"
          },
          demo: {
            instruction: "Wklej adres URL swojego filmu:",
            url: "https://youtube.com/watch?v=...",
            status: "Pobieranie i transkrypcja..."
          }
        },
        globalReach: {
          label: "Globalny zasięg",
          title: "Ponad 100 języków.",
          titleHighlight: "Zero ograniczeń.",
          description: "Dotrzyj do odbiorców na całym świecie dzięki automatycznemu tłumaczeniu na ponad 100 języków. Twórz napisy w wielu językach jednocześnie. Bez dodatkowych opłat i miesięcznych limitów na tłumaczenia.",
          points: {
            highAccuracy: "96% dokładności w 12 głównych językach",
            unlimitedTranslations: "Nieograniczona liczba tłumaczeń w zestawie",
            multicultural: "Idealny do treści wielokulturowych",
            autoDetect: "Automatyczne wykrywanie języka źródłowego"
          },
          visual: {
            number: "100+",
            title: "Obsługiwane języki",
            subtitle: "Przetłumacz raz, dotrzyj do wszystkich"
          }
        },
        flexibleExport: {
          label: "Elastyczny eksport",
          title: "Każdy format",
          titleHighlight: "Potrzebujesz",
          description: "Eksportuj w formacie, który pasuje do Twojego przepływu pracy. Od plików SRT dla YouTube, przez VTT dla odtwarzaczy internetowych, po edytowalne dokumenty dla skryptów. Wszystkie eksporty są nieograniczone, wliczone w każdy plan.",
          points: {
            videoFormats: "SRT i VTT dla platform wideo",
            editingFormats: "DOCX i PDF do edycji",
            dataAnalysis: "CSV do analizy danych",
            simpleScripts: "TXT dla prostych skryptów"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "Tekst",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Od przesłania do",
        titleHighlight: "Opublikowany",
        titleSuffix: "w minutach",
        subtitle: "Najszybszy sposób na dodanie napisów do całej biblioteki treści",
        steps: {
          pasteLinks: {
            title: "Wklej linki",
            description: "Dodaj link do YouTube, TikToka lub dowolnego innego filmu. Możesz też przesłać pliki bezpośrednio."
          },
          autoTranscribe: {
            title: "Automatyczna transkrypcja",
            description: "Przetwarzanie AI z dokładnością 96%. Obsługuje akcenty i wielu mówców."
          },
          editTranslate: {
            title: "Edytuj i tłumacz",
            description: "Udoskonal swoje napisy. Tłumacz natychmiast na ponad 100 języków."
          },
          exportPublish: {
            title: "Eksportuj i publikuj",
            description: "Pobierz w dowolnym formacie. Prześlij na swoją platformę. Gotowe!"
          }
        }
      },
      testimonials: {
        title: "Twórcy są",
        titleHighlight: "Zmiana codziennie",
        subtitle: "Od ograniczonych planów do nieograniczonej wolności",
        carlos: {
          textBefore: "Tworzę treści edukacyjne w języku hiszpańskim. NeverCap transkrybuje idealnie i",
          textAfter: "Dla szerszego zasięgu. Bez ograniczeń, tylko wzrost. Liczba wyświetleń mojego kanału wzrosła trzykrotnie po dodaniu napisów wielojęzycznych.",
          highlight: "tłumaczy się na angielski",
          name: "Carlos Martinez",
          role: "Edukator YouTube • 250 tys. subskrybentów"
        },
        sarah: {
          textBefore: "Opis poszukiwany za 30 USD/miesiąc",
          textAfter: "Mam ponad 500 zaległych filmów. NeverCap pozwoliło mi to przetworzyć wszystko w jeden weekend. Wzrost SEO dzięki napisom zwrócił się już w pierwszym miesiącu.",
          highlight: "30 godzin",
          name: "Sarah Lee",
          role: "Vloger lifestylowy • 180 tys. subskrybentów"
        },
        jake: {
          textBefore: "Ten",
          textAfter: "Funkcja ta zmienia zasady gry. Nie muszę już niczego pobierać. Wystarczy wkleić, przepisać i gotowe. Przetwarzanie klipów podcastów na TikToka nigdy nie było prostsze.",
          highlight: "bezpośrednie pobieranie z YouTube",
          name: "Jake Wilson",
          role: "Gospodarz podcastu • Twórca w 1% najlepszych"
        },
        yuki: {
          textBefore: "Tworzę treści w 5 językach. Inne usługi są płatne.",
          textAfter: ". NeverCap daje mi nieograniczoną liczbę tłumaczeń. Moja międzynarodowa publiczność wzrosła o 400% odkąd zacząłem korzystać z poprawnych napisów w języku ojczystym.",
          highlight: "według tłumaczenia",
          name: "Yuki Tanaka",
          role: "Twórca gier • 500 tys. subskrybentów"
        }
      },
      cta: {
        title: "Cały Twój kanał. Z napisami. Dzisiaj.",
        subtitle: "Dołącz do ponad 50 000 twórców, którzy przestali liczyć minuty i zaczęli tworzyć",
        button: "Rozpocznij nieograniczone tworzenie napisów →"
      }
    },
    Researchers: {
      heroBadge: "Zbudowany dla doskonałości akademickiej",
      heroTitle1: "Transkrybuj każdy wywiad.",
      heroTitle2: "Przeanalizuj wszystkie swoje dane.",
      heroSubtitle: "Przestań wybierać grupy fokusowe do transkrypcji. Przetwarzaj wszystkie dane jakościowe z 96% dokładnością i bezbłędną identyfikacją mówców – nawet gdy 20 uczestników mówi na zmianę.",
      heroCtaPrimary: "Wypróbuj za darmo – bez karty kredytowej",
      heroCtaSecondary: "Zobacz jak to działa",
      statsInterviewHours: "Godziny wywiadów",
      statsAccuracy: "Dokładność",
      statsSpeakersId: "Identyfikator mówcy",
      statsCompliant: "Uległy",
      problemTitle: "Problem transkrypcji badań",
      problemSubtitle: "W przypadku innych usług musisz wybrać, które dane są „warte” przepisać",
      problemCard1Title: "Limity przesyłania zabijają badania",
      problemCard1Desc: "Otter daje ci 3 importy na całe życie. Jak przepisać 200 godzin nagrań z grup fokusowych?",
      problemCard2Title: "Brak krytycznych danych",
      problemCard2Desc: "Każdy nietranskrypowany wywiad może zawierać przełomowe spostrzeżenia. Ale Rev pobiera minimalną opłatę w wysokości 2 dolarów za minutę.",
      problemCard3Title: "Pieniądze z grantów znikają",
      problemCard3Desc: "W miarę rozrastania się zbioru danych koszty transkrypcji gwałtownie rosną. Koszt 500 dolarów za grupę fokusową sprawia, że skalowanie jest niemożliwe.",
      solutionTitle: "Rozwiązanie NeverCap",
      solutionDesc: "Prawdziwie nieograniczona transkrypcja. Prześlij całe swoje badanie. Transkrybuj każdy wywiad. Przeanalizuj wszystkie swoje dane. Bez limitów, bez ograniczeń, po prostu research.",
      feature1Label: "Bez ograniczeń",
      feature1Title: "Przetwórz całe badanie za jednym razem",
      feature1Desc: "Prześlij wszystkie 200 godzin wywiadów dziś wieczorem. Obudź się z kompletnymi, przeszukiwalnymi transkryptami. Bez miesięcznych limitów, bez limitów na plik, bez bzdur o „dozwolonym użytku”.",
      feature1Point1: "Jednoczesne przesyłanie zbiorcze 50 plików",
      feature1Point2: "Przetwarzaj badania longitudinalne w całości",
      feature1Point3: "Brak limitów przechowywania transkryptów",
      feature1Point4: "Eksport do NVivo, MAXQDA, Atlas.ti",
      feature1Visual1: "Nieograniczone godziny",
      feature1Visual2: "Ta sama cena niezależnie od tego, czy 10 czy 10 000 godzin",
      feature2Label: "Inteligentna sztuczna inteligencja",
      feature2Title: "Grupy fokusowe Nails za każdym razem",
      feature2Desc: "Nasza sztuczna inteligencja śledzi do 20 mówców, nawet jeśli się nawzajem przekrzykują, przerywają sobie nawzajem lub wszyscy mówią jednocześnie. Każdy głos jest rejestrowany i poprawnie oznaczany.",
      feature2Point1: "Identyfikacja 20 mówców",
      feature2Point2: "Radzi sobie z przesłuchem i przerwami",
      feature2Point3: "Etykiety głośników, które możesz zmienić",
      feature2Point4: "Znak czasu dla każdego słowa",
      conversationParticipant1: "Uczestnik 1",
      conversationText1: "Największą barierą, z jaką się mierzymy, są bez wątpienia koszty leczenia...",
      conversationParticipant2: "Uczestnik 2",
      conversationText2: "Zdecydowanie, ale dodałbym, że dostęp to...",
      conversationParticipant3: "Uczestnik 3",
      conversationText3: "—przepraszam, że przerywam, ale transport też jest bardzo ważny.",
      conversationText4: "Tak! Właśnie to chciałem powiedzieć.",
      conversationParticipant4: "Uczestnik 4",
      conversationText5: "Na obszarach wiejskich liczy się wszystko: koszt, dostęp ORAZ transport.",
      feature3Label: "Precyzja",
      feature3Title: "96% dokładności, która się utrzymuje",
      feature3Desc: "Radzi sobie z żargonem technicznym, ostrymi akcentami i terminologią branżową jak profesjonalista. Wystarczająco dokładny, aby nadawać się do publikacji, recenzji i komisji rozdawniczej.",
      feature3Point1: "Terminologia medyczna i naukowa",
      feature3Point2: "Ponad 100 języków i dialektów",
      feature3Point3: "Tryby odczytu dosłownego i czystego",
      feature3Point4: "Edytuj i eksportuj w dowolnym formacie",
      feature3Visual1: "Dokładność na poziomie badawczym",
      feature3Visual2: "Zaufało nam ponad 50 000 badaczy",
      feature4Label: "Bezpieczeństwo",
      feature4Title: "Bezpieczeństwo gotowe na IRB",
      feature4Desc: "Twoje poufne dane badawcze są chronione dzięki zabezpieczeniom klasy korporacyjnej. Zgodność z RODO, opcje zgodne z HIPAA i pełne ścieżki audytu dla wymagań IRB.",
      feature4Point1: "Szyfrowanie typu end-to-end",
      feature4Point2: "Zgodność z RODO i CCPA",
      feature4Point3: "Zasady automatycznego usuwania",
      feature4Point4: "Bezpieczna współpraca zespołowa",
      useCasesTitle: "Idealny do każdej metody badawczej",
      useCasesSubtitle: "Od etnografii do badań klinicznych",
      useCase1Title: "Grupy fokusowe",
      useCase1Desc: "Obsługa 8-20 uczestników z nakładającymi się wypowiedziami. Doskonała identyfikacja mówcy nawet podczas zażartych dyskusji. Eksport bezpośrednio do oprogramowania do analizy jakościowej.",
      useCase2Title: "Wywiady pogłębione",
      useCase2Desc: "Przetwarzaj setki wywiadów indywidualnych jednocześnie. Zachowaj spójność w całym zbiorze danych. Przeszukuj wszystkie transkrypty natychmiast.",
      useCase3Title: "Badania kliniczne",
      useCase3Desc: "Zgodne z HIPAA rozwiązania do przeprowadzania wywiadów z pacjentami. Dokładna transkrypcja terminologii medycznej. Bezpieczne przetwarzanie poufnych danych medycznych.",
      useCase4Title: "Studia etnograficzne",
      useCase4Desc: "Nagrania terenowe w naturalnych warunkach. Obsługa szumów tła i wielu głośników. Obsługa ponad 100 języków i dialektów.",
      useCase5Title: "Projekty historii mówionej",
      useCase5Desc: "Zachowaj całe archiwa bez ograniczeń. Twórz przeszukiwalne zapisy historyczne. Idealne do badań longitudinalnych i pokoleniowych.",
      useCase6Title: "Badania do rozprawy",
      useCase6Desc: "Przyjazne dla studentów ceny z pełnym zestawem funkcji. Przetwarzaj cały zestaw danych w przystępnej cenie. Dotrzymuj napiętych terminów dzięki przetwarzaniu wsadowemu.",
      testimonialTitle: "Zaufali nam wiodący badacze",
      testimonialText: "Nasz zespół badawczy dysponował 200 godzinami nagrań grup fokusowych z badania zdrowia publicznego. Inne służby chciały, abyśmy sami wybierali sesje do transkrypcji ze względu na koszty. NeverCap pozwoliło nam przetworzyć wszystko w ciągu weekendu. Identyfikacja 20 osób faktycznie zadziałała – nawet podczas najbardziej chaotycznych dyskusji, gdy wszyscy mówili jednocześnie. To narzędzie całkowicie zmieniło sposób, w jaki przetwarzamy dane jakościowe.",
      testimonialAuthorName: "Dr Sarah Chen",
      testimonialAuthorRole: "Główny badacz, Instytut Zdrowia Publicznego",
      ctaTitle: "Przestań wybierać, które dane analizować",
      ctaSubtitle: "Dołącz do ponad 50 000 badaczy, którzy transkrybują wszystko",
      ctaButton: "Wypróbuj NeverCap za darmo"
    },
    BusinessTeams: {
      heroBadge: "Dla zespołów biznesowych",
      heroTitle1: "Nagranie ze spotkania wykonane",
      heroTitle2: "Łatwy",
      heroSubtitle: "Nagrywaj spotkania bezpośrednio w przeglądarce lub przesyłaj pliki audio natychmiast. Twórz przeszukiwalne archiwa z nieograniczonej liczby rozmów. Nigdy więcej nie przegap ważnych dyskusji dzięki prawdziwie nieograniczonej transkrypcji.",
      heroCtaPrimary: "Rozpocznij nagrywanie teraz →",
      heroCtaSecondary: "Zobacz jak to działa",
      recordingStatus: "Nagranie...",
      statsMeetingMinutes: "Protokół ze spotkania",
      statsLiveRecording: "Nagrywanie na żywo",
      statsSpeakerID: "Identyfikator mówcy",
      statsInstantUpload: "Natychmiastowe przesyłanie i przetwarzanie",
      featuresTitle: "Wszystko, czego potrzebują zespoły, aby zdobywać wiedzę",
      featuresSubtitle: "Od nagrywania na żywo po natychmiastowe przesyłanie – wyeliminowaliśmy wszystkie punkty tarcia",
      feature1Title: "Nagrywaj bezpośrednio w swojej przeglądarce",
      feature1Desc: "Bez pobierania, bez wtyczek. Rozpocznij nagrywanie natychmiast jednym kliknięciem. Doskonała jakość dźwięku, automatyczne wykrywanie mówcy i transkrypcja w czasie rzeczywistym podczas mówienia.",
      feature1Benefit1: "Rozpoczęcie nagrywania jednym kliknięciem",
      feature1Benefit2: "Brak instalacji oprogramowania",
      feature1Benefit3: "Działa na każdym urządzeniu",
      feature1Benefit4: "Transkrypcja w czasie rzeczywistym",
      feature1Visual1: "Kliknij i nagraj",
      feature1Visual2: "Nie wymaga konfiguracji",
      feature2Title: "Natychmiastowe przesyłanie dowolnego pliku audio",
      feature2Desc: "Masz nagrania z Zoom, Teams lub telefonu? Prześlij je natychmiast. Obsługuje wszystkie główne formaty audio i wideo. Przetwarzaj wiele plików jednocześnie bez czekania.",
      feature2Benefit1: "Obsługuje: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Możliwość przesyłania wsadowego",
      feature2Benefit3: "Obsługiwane pliki 10-godzinne",
      feature2Benefit4: "Przetwarzaj podczas pracy",
      feature2Visual1: "Przeciągnij i upuść pliki",
      feature3Title: "Stworzone do współpracy zespołowej",
      feature3Desc: "Natychmiast udostępniaj transkrypcje swojemu zespołowi. Słuchajcie nagrań razem, eksportujcie transkrypcje w wielu formatach i upewnijcie się, że wszyscy są na bieżąco dzięki przeszukiwalnym archiwom spotkań.",
      feature3Benefit1: "Udostępniaj transkrypty dowolnym osobom",
      feature3Benefit2: "Posłuchaj oryginalnych nagrań",
      feature3Benefit3: "Eksportuj transkrypty w wielu formatach",
      feature3Benefit4: "Archiwa z możliwością przeszukiwania w obrębie całego zespołu",
      feature3Visual1: "Członkowie zespołu",
      feature3Visual2: "Nieograniczona współpraca",
      feature4Title: "Znajdź dowolną rozmowę natychmiast",
      feature4Desc: "Przeszukuj wszystkie swoje spotkania jednocześnie. Znajdź kluczową decyzję z poprzedniego kwartału lub wymagania klienta sprzed miesięcy. Wyszukiwanie oparte na sztucznej inteligencji rozumie kontekst, a nie tylko słowa kluczowe.",
      feature4Benefit1: "Przeszukaj wszystkie spotkania na raz",
      feature4Benefit2: "Sztuczna inteligencja rozumie kontekst",
      feature4Benefit3: "Filtruj według mówcy lub daty",
      feature4SearchPlaceholder: "🔍 Wyszukaj: „Cele przychodowe na IV kwartał”",
      feature4SearchResults: "Znaleziono na 3 spotkaniach:",
      feature4Meeting1: "Planowanie sprzedaży – 15 października",
      feature4Meeting1Text: "„...cele na IV kwartał ustalono na 2 mln USD...”",
      feature4Meeting2: "Posiedzenie Zarządu - 20 października",
      feature4Meeting2Text: "„...prognozy przychodów na IV kwartał...”",
      workflowTitle: "Od rejestrowania do praktycznych wniosków",
      workflowSubtitle: "Płynny przepływ pracy, który uchwyca każdą ważną chwilę",
      workflowStep1Title: "Nagraj lub prześlij",
      workflowStep1Desc: "Rozpocznij nagrywanie na żywo lub prześlij istniejące pliki audio",
      workflowStep2Title: "Automatyczna transkrypcja",
      workflowStep2Desc: "Sztuczna inteligencja przepisuje z dokładnością 96% w ciągu kilku minut",
      workflowStep3Title: "Współpracować",
      workflowStep3Desc: "Udostępniaj, komentuj i wyodrębniaj elementy działań",
      workflowStep4Title: "Szukaj i analizuj",
      workflowStep4Desc: "Znajdź spostrzeżenia ze wszystkich swoich spotkań",
      testimonialsTitle: "Zespoły kochają NeverCap",
      testimonialsSubtitle: "Zobacz, jak firmy zmieniają swoją kulturę spotkań",
      testimonial1Text: "„Przeszliśmy od pomijania kluczowych szczegółów do posiadania przeszukiwalnego archiwum każdej rozmowy. Funkcja bezpośredniego nagrywania oznacza, że nigdy nie zapomnimy o uchwyceniu ważnych dyskusji”.",
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Menedżer produktu, TechCorp",
      testimonial2Text: "„Otter ograniczył nas do 10 plików przesyłanych miesięcznie. Teraz przesyłamy wszystkie połączenia od klientów natychmiast. To prawdziwy przełom w procesie follow-upu naszego zespołu sprzedaży”.",
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Dyrektor sprzedaży, ConsultPro",
      testimonial3Text: "Możliwość przeszukiwania spotkań obejmujących wiele miesięcy uratowała nas podczas audytu. Każda decyzja i zatwierdzenie zostały znalezione w ciągu kilku sekund.",
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Dyrektor operacyjny, FinanceHub",
      ctaTitle: "Przestań tracić ważne rozmowy",
      ctaSubtitle: "Dołącz do tysięcy zespołów nagrywających każde spotkanie z nieograniczoną transkrypcją",
      ctaButton: "Rozpocznij nagrywanie za darmo →"
    },
    Educators: {
      heroBadge: "Dla nauczycieli i edukatorów",
      heroTitle1: "Zmień dowolny film edukacyjny w",
      heroTitle2: "Dostępna treść",
      heroSubtitle: "Wystarczy wkleić linki z YouTube, aby uzyskać natychmiastowe transkrypcje z automatycznie generowanymi napisami. Przekształć wykłady, samouczki i filmy edukacyjne w wyszukiwalne, dostępne treści, z których może uczyć się każdy student.",
      heroCtaPrimary: "Wypróbuj za darmo – bez karty kredytowej",
      heroCtaSecondary: "Obejrzyj demo",
      stats1Number: "1 kliknięcie",
      stats1Label: "Transkrypcja YouTube",
      stats2Number: "100+",
      stats2Label: "Obsługiwane języki",
      stats3Number: "∞",
      stats3Label: "Nieograniczone filmy",
      stats4Number: "96%",
      stats4Label: "Współczynnik dokładności",
      featuresTitle: "Wszystko, czego potrzebują nauczyciele do transkrypcji wideo",
      featuresSubtitle: "Od wykładów na YouTube po nagrane zajęcia – zapewnij dostępność wszystkich swoich treści",
      feature1Title: "Natychmiastowe linki do YouTube i platform",
      feature1Desc: "Wystarczy wkleić link do dowolnego filmu, aby uzyskać natychmiastowe transkrypcje. Działa z YouTube, Vimeo, Facebookiem, X (Twitterem), TikTokiem, Instagramem, Dropboxem, Dyskiem Google i innymi. Bez pobierania i czekania.",
      feature1Point1: "Transkrypcja z bezpośrednim linkiem – nie wymaga pobierania",
      feature1Point2: "Wsparcie dla wszystkich głównych platform",
      feature1Point3: "Przetwarzaj całe listy odtwarzania na raz",
      feature1Point4: "Działa z prywatnymi filmami (za zgodą)",
      feature2Title: "Automatyczne generowanie napisów i napisów",
      feature2Desc: "Twórz błyskawicznie precyzyjne napisy do wszystkich swoich filmów edukacyjnych. Zadbaj o to, aby treści były dostępne dla uczniów z wadami słuchu, osób niebędących rodzimymi użytkownikami języka lub tych, którzy wolą czytać ze zrozumieniem.",
      feature2Point1: "Formaty eksportu SRT, VTT i TXT",
      feature2Point2: "Znaczniki czasu na poziomie słów zapewniające idealną synchronizację",
      feature2Point3: "Łatwe edytowanie i dostosowywanie napisów",
      feature2Point4: "Prześlij bezpośrednio z powrotem na YouTube",
      feature2Visual1: "Tłumaczenia językowe",
      feature2Visual2: "Udostępnij swoje treści globalnie",
      feature3Title: "Zorganizuj według kursów i kategorii",
      feature3Desc: "Twórz foldery, aby uporządkować swoje transkrypty według kursu, przedmiotu lub semestru. Utrzymuj wszystkie swoje materiały edukacyjne w przejrzystym podziale na kategorie i łatwo je przeszukiwać. Zbuduj obszerną bibliotekę dostępnych materiałów dydaktycznych.",
      feature3Point1: "Twórz nieograniczoną liczbę folderów i podfolderów",
      feature3Point2: "Oznaczaj filmy według tematu lub poziomu trudności",
      feature3Point3: "Masowe organizowanie wielu transkryptów",
      feature3Point4: "Przeszukuj natychmiast całą swoją zawartość",
      feature3VisualTitle: "Twoja biblioteka kursów",
      feature3Folder1: "Matematyka 101",
      feature3Folder2: "Wykłady z fizyki",
      feature3Folder3: "Filmy z laboratorium biologicznego",
      feature3Folder4: "Dokumenty historyczne",
      feature3Folder5: "Nauka języków",
      feature4Title: "Eksportuj w dowolnym potrzebnym formacie",
      feature4Desc: "Pobierz transkrypty w formatach TXT, DOCX lub PDF. Idealne do tworzenia przewodników do nauki, notatek z wykładów lub materiałów dydaktycznych w przystępnym formacie. Udostępnij studentom lub zintegruj z systemem zarządzania nauczaniem.",
      feature4Point1: "TXT do prostej edycji tekstu",
      feature4Point2: "DOCX dla dokumentów sformatowanych",
      feature4Point3: "Plik PDF do łatwego udostępniania i drukowania",
      feature4Point4: "Jednoczesny eksport wielu plików",
      workflowTitle: "Jak to działa",
      workflowSubtitle: "Od łącza wideo do dostępnego transkryptu w ciągu kilku minut",
      workflowStep1Title: "Wklej link",
      workflowStep1Desc: "Skopiuj adres URL dowolnego filmu edukacyjnego i wklej go",
      workflowStep2Title: "Automatyczna transkrypcja",
      workflowStep2Desc: "Sztuczna inteligencja transkrybuje z dokładnością 96%",
      workflowStep3Title: "Generuj napisy",
      workflowStep3Desc: "Automatyczne tworzenie idealnie zsynchronizowanych napisów",
      workflowStep4Title: "Udostępnij i eksportuj",
      workflowStep4Desc: "Pobierz lub udostępnij uczniom",
      useCasesTitle: "Idealny do wszelkich potrzeb edukacyjnych",
      useCasesSubtitle: "Zobacz, jak nauczyciele wykorzystują NeverCap, aby ulepszyć naukę",
      useCase1Title: "Nagrane wykłady",
      useCase1Text: "Transkrybuj całe semestry nagranych wykładów. Studenci mogą wyszukiwać konkretne tematy, powtarzać kluczowe koncepcje i nigdy nie przegapić ważnych informacji.",
      useCase2Title: "Kursy online",
      useCase2Text: "Udostępnij swoje kursy online studentom zagranicznym dzięki tłumaczeniom na ponad 100 języków. Zwiększ liczbę zapisów i poziom satysfakcji.",
      useCase3Title: "Materiały do nauki",
      useCase3Text: "Przekształć samouczki wideo w czytelne przewodniki do nauki. Idealne dla studentów, którzy wolą czytać lub potrzebują szybko przejrzeć materiał.",
      useCase4Title: "Zgodność z dostępnością",
      useCase4Text: "Spełnij wymagania dotyczące dostępności, zapewniając napisy i transkrypcje do wszystkich materiałów wideo. Zapewnij równy dostęp wszystkim uczniom.",
      useCase5Title: "Odwrócona klasa",
      useCase5Text: "Udostępnij wykłady wideo z transkrypcjami przed zajęciami. Studenci mogą przeglądać je we własnym tempie i przygotować się do dyskusji.",
      useCase6Title: "Badania i cytowania",
      useCase6Text: "Pomóż uczniom dokładnie cytować źródła wideo za pomocą znaczników czasu. Idealne rozwiązanie do projektów badawczych i prac naukowych.",
      testimonialTitle: "Zaufało nam ponad 50 000 nauczycieli",
      testimonialSubtitle: "Zobacz, dlaczego nauczyciele na całym świecie wybierają NeverCap",
      testimonialText: "„Używam NeverCap do transkrypcji całego mojego kanału YouTube z samouczkami matematycznymi. To, co kiedyś zajmowało tygodnie w innych serwisach, teraz zajmuje godziny. Możliwość bezpośredniego wklejania linków i uzyskiwania natychmiastowych transkrypcji odmieniła sposób, w jaki tworzę treści dostępne dla osób z niepełnosprawnościami. Moi studenci z zagranicy szczególnie cenią sobie napisy w wielu językach!”",
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Profesor matematyki, edukator online",
      ctaTitle: "Udostępnij wszystkie swoje materiały edukacyjne",
      ctaSubtitle: "Dołącz do tysięcy edukatorów korzystających z naprawdę nieograniczonej transkrypcji",
      ctaButton: "Wypróbuj NeverCap za darmo"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Pobierz filmy z YouTube'a w formacie MP4",
        "placeholder": "Wyszukaj lub wklej tutaj swój link do YouTube",
        "clear_icon": "Wyczyść dane wejściowe",
        "Download": "Pobierać",
        "loading_text": "Przetwarzanie linku do pobrania. Pozostań na stronie.",
        "howToDownload": "Jak pobrać?",
        "tutorial": "Obejrzyj samouczek"
      },
      part2: {
        "title": "Oto jak w 3 prostych krokach przekształcić film z YouTube w plik MP4 do pobrania",
        "steps": [
          {
            title: "Skopiuj adres URL",
            content: "Otwórz docelowy film w serwisie YouTube, a następnie skopiuj link z paska adresu przeglądarki."
          },
          {
            title: "Wklej link",
            content: "Przejdź do narzędzia do pobierania filmów i wklej adres URL w polu wejściowym."
          },
          {
            title: "Pobierz plik MP4",
            content: "Po przetworzeniu kliknij przycisk pobierania, aby zapisać plik MP4."
          }
        ]
      },
      part3: {
        content: [
          "Czy kiedykolwiek zdarzyło Ci się chcieć oglądać filmy na YouTube w trybie offline?",
          "Niezależnie od tego, czy dojeżdżasz metrem, lecisz samolotem, studiujesz ważny samouczek, zgłębiasz materiały rozwijające umiejętności, czy archiwizujesz ważne materiały wideo – niezawodny dostęp offline to częsta frustracja. Właśnie w tym miejscu nasz program do pobierania sprawdza się znakomicie.",
          "Program do pobierania pozwala szybko i łatwo konwertować filmy z YouTube do formatu MP4, aby można je było pobrać. Zapisz je na swoim urządzeniu i oglądaj w dowolnym momencie.",
          "Proces jest szybki, prosty i bezproblemowy. Po pobraniu możesz oglądać ulubione filmy, kiedy tylko chcesz i gdziekolwiek jesteś – bez dostępu do internetu."
        ]
      },
      part4: {
        content: ["Oto 5 głównych korzyści płynących z pobierania", "Filmy z YouTube jako pliki MP4"],
        list: [
          {
            title: "Oszczędź na kosztach danych:",
            content: "Oglądanie filmów na YouTube zazwyczaj zużywa znaczną ilość danych mobilnych. Pobierając je do oglądania offline, możesz uniknąć tych niepotrzebnych kosztów."
          },
          {
            title: "Oglądaj gdziekolwiek i kiedykolwiek:",
            content: "Ciesz się płynnie swoimi filmami, nawet przy słabym połączeniu internetowym. Koniec z buforowaniem."
          },
          {
            title: "Łatwa archiwizacja i przechowywanie:",
            content: "Zapisywanie filmów w formacie MP4 ułatwia budowanie osobistej kolekcji, zwłaszcza jeśli zawiera ona treści, które uważasz za naprawdę wartościowe lub ważne."
          },
          {
            title: "Prostsze udostępnianie:",
            content: "Udostępnianie pliku MP4 jest znacznie wygodniejsze niż wysyłanie linku. Możesz wysłać plik wideo bezpośrednio przez aplikacje takie jak WhatsApp czy Instagram, eliminując dodatkowy krok otwierania YouTube'a."
          },
          {
            title: "Natychmiastowy podgląd, wspólne chwile:",
            content: "Z entuzjazmem pokazujesz ulubiony film znajomym lub rodzinie w pobliżu? Po pobraniu pliku MP4 możecie go wszyscy płynnie obejrzeć razem, bez krępujących przerw w oczekiwaniu na załadowanie."
          }
        ]
      },
      part5: {
        title: "Dlaczego nasz program do pobierania wyróżnia się",
        cards: [
          {
            title: "Prostota za pomocą jednego kliknięcia",
            content: "Łatwa konfiguracja i intuicyjna obsługa."
          },
          {
            title: "Błyskawicznie szybki, nieograniczony",
            content: "Konwertuj i pobieraj z maksymalną prędkością — bez limitów i ograniczeń."
          },
          {
            title: "Konwertuj w locie",
            content: "Przetwarzaj pliki natychmiast, bez czekania."
          },
          {
            title: "Zero reklam, zero rozpraszaczy",
            content: "Ciesz się przejrzystym interfejsem bez wyskakujących okienek, banerów i przerw – zapewniasz płynną konwersję wideo."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Gwarancja oryginalnej jakości",
            content: "Pobrane pliki zachowują pełną rozdzielczość źródłowego filmu, co pozwala na ich odtwarzanie z zachowaniem doskonałej jakości obrazu."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Działa wszędzie",
            content: "Pełna kompatybilność z dowolną przeglądarką, na dowolnym urządzeniu."
          }
        ]
      },
      part6: {
        title: ["Zmaksymalizuj liczbę pobrań filmów z YouTube", "Z programem do pobierania"],
        content: [
          "Bezproblemowa konwersja z YouTube do MP4: szybka, prosta i bezpłatna.",
          "W tym się wyróżniamy. Nasz przyjazny dla użytkownika interfejs jest zaprojektowany dla każdego – nie są wymagane żadne umiejętności techniczne. Niezależnie od poziomu doświadczenia, możesz konwertować filmy natychmiast. Bez konieczności rejestracji: uzyskaj dokładnie to, czego potrzebujesz, od razu.",
          "Nie martw się — pobrane pliki MP4 zachowają oryginalną jakość i wyrazistość obrazu, dokładnie tak, jak oglądałeś je na YouTube.",
          "Działa wszędzie, gdzie jesteś. Pełna kompatybilność ze wszystkimi głównymi platformami i urządzeniami. Niezależnie od tego, czy korzystasz z systemu Windows, macOS, Linux, Android czy iOS — na smartfonie, tablecie czy komputerze stacjonarnym — możesz bezproblemowo pobierać filmy."
        ]
      },
      part7: {
        title: "Kluczowe pytania dotyczące pobierania filmów z YouTube",
        list: [
          {
            question: "Czy mogę pobrać film z YouTube, jeśli jest on objęty prawami autorskimi?",
            answer: "Pobieranie filmów z serwisu YouTube objętych prawami autorskimi bez zgody właściciela praw autorskich jest nielegalne."
          },
          {
            question: "Czy to narzędzie do pobierania jest bezpieczne?",
            answer: "Tak, jest bezpieczny i godny zaufania. Nie wymagamy od użytkowników żadnych danych osobowych i stosujemy silne środki antywirusowe. Przypominamy o zachowaniu ostrożności podczas pobierania plików z internetu: unikaj klikania podejrzanych linków i pobierania podejrzanych plików."
          },
          {
            question: "Jakie języki obsługuje pobieranie plików YouTube w formacie MP4?",
            answer: "Nasza usługa umożliwia pobieranie filmów z YouTube we wszystkich popularnych językach."
          },
          {
            question: "Jakie czynniki wpływają na czas pobierania filmu z YouTube?",
            answer: "Chociaż dbamy o jak najszybsze pobieranie, na czas pobierania wpływają również takie czynniki, jak długość filmu i szybkość połączenia internetowego."
          },
          {
            question: "Gdzie jest zapisywany film w formacie MP4, który pobieram za pomocą smartfona?"
          },
          {
            question: "Czy pobieranie filmu z YouTube w formacie MP4 pogarsza jakość obrazu?",
            answer: "Nie. Pobieranie filmów z YouTube w formacie MP4 za pomocą naszego narzędzia zachowuje oryginalną jakość wideo. Proces konwersji zachowuje jakość źródłową, zapewniając takie same wrażenia wizualne jak na YouTube."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Wiodąca w branży technologia AI",
      "title": "O",
      "highlighted_text": "NeverCap",
      "description": "Naszą misją jest świadczenie najdokładniejszych usług transkrypcji audio i wideo. Wykorzystując wiodącą w branży technologię sztucznej inteligencji, osiągamy dokładność transkrypcji przekraczającą 96%. W przypadku niektórych głównych języków, dzięki optymalizacji technicznej, możemy osiągnąć nawet 99% dokładności."
    },
    Stats: {
      "title": "Nasz",
      "highlighted_text": "Uderzenie",
      "subtitle": "Wzmocnienie globalnej komunikacji dzięki najnowocześniejszej technologii sztucznej inteligencji",
      "metrics": [
        {
          "value": "96%+",
          "label": "Współczynnik dokładności",
          "description": "Najwyższa w branży dokładność transkrypcji dzięki zaawansowanej sztucznej inteligencji"
        },
        {
          "value": "100+",
          "label": "Obsługiwane języki",
          "description": "Rozpoznawanie mowy w treściach globalnych"
        },
        {
          "value": "249+",
          "label": "Języki tłumaczenia",
          "description": "Przetłumacz transkrybowany tekst na praktycznie każdy język"
        }
      ]
    },
    Mission: {
      "title": "Dlaczego warto wybrać",
      "highlighted_text": "NeverCap",
      "subtitle": "Wierzymy w przełamywanie barier językowych i udostępnianie treści każdemu",
      "features": [
        {
          "icon": "🎯",
          "title": "Niezrównana dokładność",
          "description": "Nasze modele sztucznej inteligencji są stale udoskonalane, aby zapewnić dokładność transkrypcji przekraczającą 96%. W przypadku niektórych ważniejszych języków, dzięki zaawansowanej optymalizacji, dokładność transkrypcji sięga nawet 99%."
        },
        {
          "icon": "🌍",
          "title": "Globalne wsparcie językowe",
          "description": "Obsługa ponad 100 języków w zakresie rozpoznawania mowy i możliwość tłumaczenia na ponad 249 języków, dzięki czemu Twoje treści będą miały prawdziwie globalny zasięg."
        },
        {
          "icon": "⚡",
          "title": "Błyskawiczne przetwarzanie",
          "description": "Przetwarzaj godziny treści audio i wideo w ciągu minut, a nie godzin. Nasz zoptymalizowany proces oparty na sztucznej inteligencji gwarantuje szybkie otrzymywanie transkrypcji bez utraty jakości."
        },
        {
          "icon": "🔒",
          "title": "Bezpieczeństwo klasy korporacyjnej",
          "description": "Bezpieczeństwo Twoich danych jest naszym priorytetem. Stosujemy standardowe szyfrowanie branżowe i przestrzegamy globalnych przepisów dotyczących prywatności, aby zapewnić bezpieczeństwo i poufność Twoich treści."
        }
      ]
    },
    Company: {
      "title": "Firma",
      "highlighted_text": "Informacja",
      "subtitle": "Skontaktuj się z nami, jeśli masz jakiekolwiek pytania lub potrzebujesz wsparcia",
      "details": [
        {
          "label": "Nazwa firmy",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Siedziba",
          "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Stany Zjednoczone"]
        },
        {
          "label": "Skontaktuj się z nami",
          "value": ["e-mail", "Wsparcie dostępne 24/7"]
        }
      ]
    },
    CTA: {
      "title": "Gotowy poczuć różnicę?",
      "subtitle": "Dołącz do tysięcy profesjonalistów, którzy ufają NeverCap w zakresie swoich potrzeb transkrypcyjnych",
      "button": "Wypróbuj NeverCap za darmo →",
      "disclaimer": "Nie jest wymagana karta kredytowa • Rozpocznij transkrypcję w kilka sekund"
    }
  },
  Privacy: {
    title: "Prywatność",
    titleGradient: "Polityka",
    subtitle: "Dowiedz się, jak zbieramy, wykorzystujemy i chronimy Twoje dane osobowe",
    "lastUpdated": "Ostatnia aktualizacja: {data}",
    "lastUpdatedDate": "21 lipca 2025 r.",
    "privacyPolicyTitle": "Polityka prywatności",
    "policyDescription": 'Niniejsza Polityka opisuje, w jaki sposób NeverCap (zwana dalej \"NeverCap\", \"nasz\", \"my\", \"nas\") gromadzi, wykorzystuje i ujawnia Twoje dane osobowe, gdy korzystasz z naszych usług, stron internetowych (https://www.nevercap.ai/) i oprogramowania (zwanych łącznie \"Usługami\").',
    "policyAgreement": "Prosimy o uważne zapoznanie się z niniejszą Polityką Prywatności i upewnienie się, że ją rozumiesz. Korzystając z naszych Usług, akceptujesz niniejszą Politykę Prywatności. Jeśli nie wyrażasz zgody na wykorzystywanie przez nas Twoich danych osobowych zgodnie z niniejszą Polityką, musisz natychmiast zaprzestać korzystania z naszych Usług.",
    "policyOverview": "W niniejszej polityce określamy: jakie dane gromadzimy i dlaczego; jak przetwarzamy Twoje dane; oraz Twoje prawa związane z Twoimi danymi. Nie sprzedajemy Twoich danych.",
    "scopeTitle": "1. Zakres niniejszej Polityki Prywatności",
    "scopeDescription": "Niniejsza Polityka Prywatności dotyczy wyłącznie gromadzenia i przetwarzania przez nas informacji o użytkownikach Usług. Niniejsza Polityka Prywatności nie ma zastosowania do usług, stron internetowych ani oprogramowania obsługiwanych przez osoby trzecie, do których prowadzą linki z naszej strony (niezależnie od tego, czy to my udostępniamy te linki, czy inni użytkownicy je udostępniają), ani do treści, danych, aplikacji ani materiałów pochodzących od osób trzecich. Zalecamy zapoznanie się z polityką prywatności stron internetowych lub oprogramowania osób trzecich przed udostępnieniem im jakichkolwiek informacji.",
    "collectionTitle": "2. Co zbieramy i dlaczego",
    "collectionPrinciple": "Naszą naczelną zasadą jest zbieranie tylko tego, czego potrzebujemy. Oto, co to oznacza w praktyce:",
    "identityTitle": "2.1 Tożsamość i dostęp",
    "identityDescription": "Rejestrując się w jednym z naszych produktów, prosimy o podanie danych identyfikacyjnych, takich jak imię i nazwisko oraz adres e-mail. Ma to na celu zapewnienie podstawowych funkcji produktu oraz umożliwienie nam wysyłania aktualizacji i innych istotnych informacji.",
    "billingTitle": "2.2 Informacje rozliczeniowe",
    "billingDescription": "Jeśli zarejestrujesz się w celu zakupu produktu płatnego, zostaniesz poproszony o podanie danych do płatności i adresu rozliczeniowego. Dane do płatności są przesyłane bezpośrednio do naszego systemu przetwarzania płatności i nie trafiają na nasze serwery.",
    "productInteractionsTitle": "2.3 Interakcje produktów",
    "productInteractionsDescription": "Przechowujemy na naszych serwerach treści, które przesyłasz, odbierasz lub przechowujesz na swoich kontach produktowych. O ile nie usuniesz tych treści, możemy je przechowywać tak długo, jak długo Twoje konto jest aktywne.",
    "websiteInteractionsTitle": "2.4 Interakcje ze stroną internetową",
    "websiteInteractionsDescription": "Gromadzimy informacje o Twojej aktywności w przeglądarce do celów analitycznych i statystycznych, takich jak testowanie współczynnika konwersji i eksperymentowanie z nowymi projektami produktów. Obejmuje to na przykład wersje Twojej przeglądarki i systemu operacyjnego, Twój adres IP, odwiedzone strony internetowe i czas ich ładowania oraz stronę, która Cię do nas skierowała. Jeśli posiadasz konto i jesteś zalogowany, te dane analityczne są powiązane z Twoim adresem IP i kontem użytkownika, dopóki Twoje konto nie będzie już aktywne.",
    "cookiesTitle": "2.5 Pliki cookie",
    "cookiesDescription1": "Używamy również trwałych plików cookie własnych i niektórych plików cookie podmiotów trzecich, aby zapisywać pewne preferencje, ułatwiać korzystanie z naszych aplikacji, przeprowadzać testy A/B, a także wspierać niektóre analizy.",
    "cookiesDescription2": "Plik cookie to fragment tekstu przechowywany przez przeglądarkę. Może on pomóc w zapamiętaniu danych logowania i preferencji witryny. Może również gromadzić informacje takie jak typ przeglądarki, system operacyjny, odwiedzane strony internetowe, czas trwania wizyty, przeglądane treści i inne dane dotyczące kliknięć. Możesz dostosować ustawienia przechowywania plików cookie oraz akceptować lub blokować poszczególne pliki cookie w ustawieniach przeglądarki, jednak nasze aplikacje nie będą działać, a inne aspekty naszych usług mogą nie działać poprawnie, jeśli wyłączysz obsługę plików cookie.",
    "correspondenceTitle": "2.6 Korespondencja dobrowolna",
    "correspondenceDescription": "Gdy wysyłasz do nas wiadomość e-mail z pytaniem lub prośbą o pomoc, przechowujemy tę korespondencję, łącznie z Twoim adresem e-mail, aby mieć historię wcześniejszej korespondencji, która może się przydać, jeśli skontaktujesz się z nami w przyszłości.",
    "accessTitle": "3. Kiedy uzyskujemy dostęp do Twoich danych lub udostępniamy je",
    "accessDescription1": "Aby dostarczać żądane przez Ciebie produkty lub usługi. Korzystamy z usług zewnętrznych podprocesorów, aby pomóc w obsłudze naszych aplikacji i świadczeniu Ci Usług. Dotyczy to również dostawców usług w chmurze i usług analitycznych.",
    "accessDescription2": "W celu zbadania, zapobiegania lub podjęcia działań w związku z nadużyciami. Dostęp do konta klienta podczas badania potencjalnego nadużycia jest ostatecznością. Chcemy chronić prywatność i bezpieczeństwo zarówno naszych klientów, jak i osób zgłaszających nam problemy i dokładamy wszelkich starań, aby zrównoważyć te obowiązki w całym procesie. Jeśli odkryjemy, że korzystasz z naszych produktów w celach objętych ograniczeniami, podejmiemy niezbędne działania, w tym powiadomimy odpowiednie organy, jeśli będzie to uzasadnione.",
    "accessDescription3": "Jeśli wymagają tego obowiązujące przepisy prawa.",
    "dataRequests": "Żądania udostępnienia danych użytkowników. Naszą polityką jest nieodpowiadanie na rządowe żądania udostępnienia danych użytkowników, chyba że jesteśmy do tego zobowiązani na mocy postępowania prawnego lub w wyjątkowych okolicznościach w przypadku żądania w trybie pilnym. Jednakże, jeśli amerykańskie organy ścigania posiadają odpowiedni nakaz sądowy, wezwanie do sądu w postępowaniu karnym lub postanowienie sądowe nakazujące nam udostępnienie danych, musimy się do niego zastosować. Podobnie, będziemy odpowiadać na żądania władz rządowych spoza Stanów Zjednoczonych wyłącznie na wniosek rządu USA, zgodnie z procedurami określonymi w umowie o wzajemnej pomocy prawnej. Naszą polityką jest powiadamianie użytkowników, których dane dotyczą, przed udostępnieniem danych, chyba że jest to prawnie zabronione, oraz z wyjątkiem sytuacji nadzwyczajnych.",
    "preservationRequests": "Żądania dotyczące zabezpieczenia danych. Podobnie, naszą polityką jest spełnianie żądań dotyczących zabezpieczenia danych wyłącznie na mocy amerykańskiej federalnej ustawy o przechowywaniu danych (US Federal Stored Communications Act), § 2703(f) tytułu 18 Kodeksu Stanów Zjednoczonych (USC), lub na mocy prawidłowo doręczonego wezwania sądowego w sprawach cywilnych. Nie udostępniamy zabezpieczonych danych, chyba że wymaga tego prawo lub nakaz sądowy, od którego nie wnosimy apelacji. Ponadto, o ile nie otrzymamy odpowiedniego nakazu sądowego, postanowienia sądu lub wezwania sądowego przed upływem wymaganego okresu przechowywania, zniszczymy wszelkie zabezpieczone kopie danych klientów po upływie okresu przechowywania.",
    "taxAudits": "W przypadku kontroli przez organ podatkowy możemy zostać zobowiązani do udostępnienia informacji dotyczących rozliczeń. W takim przypadku udostępnimy jedynie niezbędne informacje, takie jak adresy rozliczeniowe i informacje o zwolnieniach podatkowych.",
    "securityTitle": "4. Jak zabezpieczamy Twoje dane",
    "securityDescription": "Wszystkie dane przesyłane z naszych serwerów do Twojej przeglądarki są szyfrowane za pomocą protokołu SSL/TLS.",
    "deletionTitle": "5. Co się dzieje, gdy usuniesz swoją treść",
    "deletionDescription": "Jeśli usuniesz jakąkolwiek treść, stanie się ona natychmiast niedostępna.",
    "locationTitle": "6. Lokalizacja witryny i danych",
    "locationDescription": "Nasze produkty i inne zasoby internetowe są obsługiwane w Stanach Zjednoczonych. Jeśli mieszkasz w Unii Europejskiej, Wielkiej Brytanii lub innym miejscu poza Stanami Zjednoczonymi, pamiętaj, że wszelkie informacje, które nam przekazujesz, będą przesyłane do Stanów Zjednoczonych i tam przechowywane. Korzystając z naszych stron internetowych lub Usług i/lub przekazując nam swoje dane osobowe, wyrażasz zgodę na takie przesyłanie.",
    "childrenTitle": "7. Prywatność dzieci",
    "childrenDescription": "Usługi nie są skierowane do dzieci i świadomie nie gromadzimy danych osobowych dzieci poniżej 13. roku życia. Jeśli nie masz ukończonych 13 lat, prosimy o nieprzesyłanie żadnych danych osobowych za pośrednictwem Usług. Jeśli uważasz, że dziecko przekazało nam dane osobowe z naruszeniem niniejszej Polityki, skontaktuj się z nami, korzystając z poniższych wskazówek.",
    "updatesTitle": "8. Aktualizacje niniejszej Polityki Prywatności",
    "updatesDescription": "Możemy aktualizować tę politykę w razie potrzeby, aby była zgodna z obowiązującymi przepisami i odzwierciedlała wszelkie nowe praktyki. Za każdym razem, gdy wprowadzimy istotną zmianę w naszych zasadach, odświeżymy datę na górze tej strony.",
    "contactTitle": "9. Skontaktuj się z nami",
    "contactDescription": "Jeśli masz jakiekolwiek pytania, uwagi lub skargi dotyczące naszej Polityki prywatności, skontaktuj się z nami. Postaramy się rozpatrzyć Twoją skargę najszybciej, jak to możliwe.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Warunki",
    titleGradient: "Praca",
    subtitle: "Przed skorzystaniem z naszych usług prosimy o dokładne zapoznanie się z niniejszymi warunkami.",
    "lastUpdated": "Ostatnia aktualizacja: {data}",
    "lastUpdatedDate": "21 lipca 2025 r.",
    "termsOfServiceTitle": "Warunki korzystania z usługi",
    "thankYou": "Dziękujemy za korzystanie z naszych produktów!",
    "companyDefinition": "Kiedy w niniejszym dokumencie używamy słów „Firma”, „my”, „nasz” lub „nas”, mamy na myśli NeverCap.",
    "servicesDefinition": "Kiedy mówimy o „Usługach”, mamy na myśli wszelkie produkty stworzone i utrzymywane przez NeverCap, niezależnie od tego, czy są dostarczane w przeglądarce internetowej, aplikacji komputerowej, aplikacji mobilnej czy w innym formacie.",
    "termsUpdate": "Możemy aktualizować niniejsze Warunki korzystania z usługi w przyszłości. Zazwyczaj zmiany te mają na celu doprecyzowanie niektórych z tych warunków poprzez dodanie linku do rozszerzonej, powiązanej polityki. Za każdym razem, gdy wprowadzamy istotną zmianę w naszych zasadach, odświeżamy datę na górze tej strony i podejmujemy wszelkie inne stosowne kroki w celu powiadomienia posiadaczy kont.",
    "acceptanceTitle": "1. Akceptacja Umowy",
    "acceptanceDescription1": "Korzystając z naszych Usług, wyrażasz zgodę na niniejszą Umowę, która tym samym staje się wiążącą umową między Tobą a NeverCap. Oświadczasz, że jesteś prawnie zdolny do zaakceptowania niniejszych Warunków i potwierdzasz, że osiągnąłeś wiek umożliwiający zawarcie wiążącej umowy. Akceptacja NeverCap jest wyraźnie uzależniona od Twojej zgody na wszystkie postanowienia niniejszej Umowy.",
    "eligibilityRequirement": "Usługi nie są przeznaczone dla osób poniżej 18 roku życia i nie powinny być przez nie używane. Korzystając z Usług, oświadczasz i gwarantujesz, że spełniasz powyższe wymagania kwalifikacyjne.",
    "userResponsibility": "Terminy „Ty”, „Twój”, „Twój Ty” obejmują również Twoich pracowników, agentów, przedstawicieli handlowych i wszelkie inne osoby, którym zapewniasz dostęp do Usług za pośrednictwem swojego Konta (zgodnie z definicją poniżej). Ponosisz odpowiedzialność za zapewnienie, że wszystkie osoby uzyskujące dostęp do Usług za pośrednictwem Twojego konta znają niniejsze Warunki i ich przestrzegają.",
    "termsRevision": "NeverCap zastrzega sobie prawo do okresowej zmiany i aktualizacji niniejszych Warunków według własnego uznania. Wszystkie zmiany wchodzą w życie natychmiast po ich opublikowaniu. Dalsze korzystanie z Usług po opublikowaniu zmienionych Warunków oznacza akceptację i zgodę na zmiany. Oczekuje się, że będziesz regularnie sprawdzać tę stronę, aby być na bieżąco z wszelkimi zmianami, ponieważ są one dla Ciebie wiążące.",
    "servicesTitle": "2. Usługi NeverCap",
    "servicesDescription1": "Nasze Usługi umożliwiają użytkownikom przekształcanie rozmów głosowych w transkrybowany tekst, który można przeszukiwać, tłumaczyć i udostępniać innym osobom.",
    "servicesOptions": "Możesz wybrać, czy chcesz korzystać z bezpłatnej wersji Usług („Usługi bezpłatne”), czy z płatnej wersji Usług opartej na subskrypcji, za którą możesz być zobowiązany do uiszczenia opłat („Usługi płatne”).",
    "servicesAccess": "Udostępnimy Ci Usługi. Ponosisz odpowiedzialność za podjęcie wszelkich niezbędnych działań, aby uzyskać dostęp do Usług.",
    "accountTermsTitle": "3. Warunki konta",
    "accountSecurity": "Jesteś odpowiedzialny za utrzymanie bezpieczeństwa swojego konta. Spółka nie ponosi i nie będzie ponosić odpowiedzialności za jakiekolwiek straty lub szkody wynikające z nieprzestrzegania przez Ciebie tego obowiązku bezpieczeństwa.",
    "lawfulUse": "Nie możesz używać Usług w celach niezgodnych z prawem, nieetycznych lub niemoralnych.",
    "contentResponsibility": "Ponosisz odpowiedzialność za wszystkie treści publikowane na Twoim koncie i wszelkie działania podejmowane na Twoim koncie. Dotyczy to również treści publikowanych przez inne osoby, które: (a) mają dostęp do Twoich danych logowania; lub (b) posiadają własne loginy do Twojego konta.",
    "humanRequirement": "Musisz być człowiekiem. Konta zarejestrowane przez „boty” lub inne zautomatyzowane metody są niedozwolone.",
    "paymentTitle": "4. Płatności, zwroty i zmiany planu",
    "freeTrial": "W przypadku płatnych Usług, które oferują bezpłatny okres próbny, informujemy o jego długości podczas rejestracji. Po upływie okresu próbnego, aby móc nadal korzystać z Usługi, należy uiścić opłatę z góry. Jeśli nie dokonasz opłaty, Usługi przestaną obowiązywać.",
    "upgradePolicy": "Jeśli dokonujesz uaktualnienia z planu bezpłatnego do planu płatnego, obciążymy Twoją kartę natychmiast, a cykl rozliczeniowy rozpocznie się w dniu uaktualnienia.",
    "taxes": "Wszystkie opłaty nie obejmują podatków, opłat ani ceł nałożonych przez organy podatkowe. W razie potrzeby pobierzemy te podatki w imieniu organu podatkowego i przekażemy je organom podatkowym. W przeciwnym razie jesteś odpowiedzialny za zapłatę wszystkich podatków, opłat lub ceł.",
    "refunds": "Wszystkie zakupy nie podlegają zwrotowi. Możesz anulować dowolne usługi płatne w dowolnym momencie, logując się na swoje konto. W przypadku subskrypcji płatnych, anulowanie wejdzie w życie z końcem bieżącego okresu rozliczeniowego, o ile nie zaznaczono inaczej.",
    "cancellationTitle": "5. Anulowanie i rozwiązanie umowy",
    "cancellationPolicy": "Jeśli anulujesz Usługę przed upływem opłaconego okresu, anulacja wejdzie w życie natychmiast i nie zostaniesz obciążony żadnymi opłatami. Nie naliczamy automatycznie proporcjonalnego naliczenia za niewykorzystany czas w ostatnim cyklu rozliczeniowym.",
    "terminationRights": "Zastrzegamy sobie prawo do zawieszenia lub zamknięcia Twojego konta i odmowy wszelkiego obecnego lub przyszłego korzystania z naszych Usług z dowolnego powodu i w dowolnym momencie. Zawieszenie oznacza utratę dostępu do konta i wszelkich treści na nim zawartych. Ponadto zamknięcie konta spowoduje usunięcie Twojego konta lub zablokowanie dostępu do niego, a także utratę i zrzeczenie się wszelkich treści na koncie. Zastrzegamy sobie również prawo do odmowy korzystania z Usług dowolnej osobie z dowolnego powodu i w dowolnym momencie. Wprowadziliśmy tę klauzulę, ponieważ statystycznie rzecz biorąc, spośród setek tysięcy kont w naszych Usługach, co najmniej jedno prowadzi do niegodziwych działań.",
    "abusePolicy": "Werbalne, fizyczne, pisemne lub inne formy znęcania się (w tym groźby znęcania się lub odwetu) nad pracownikiem lub członkiem zarządu Spółki mogą skutkować natychmiastowym zamknięciem konta.",
    "submissionsTitle": "6. Zgłoszenia",
    "submissionsDescription": "Użytkownik przyjmuje do wiadomości i zgadza się, że wszelkie pytania, komentarze, sugestie, pomysły, opinie lub inne informacje dotyczące Witryny („Zgłoszenia”) przekazane nam przez Użytkownika nie są poufne i staną się naszą wyłączną własnością. Będziemy posiadać wyłączne prawa, w tym wszelkie prawa własności intelektualnej, i będziemy uprawnieni do nieograniczonego korzystania i rozpowszechniania tych Zgłoszeń w dowolnym zgodnym z prawem celu, komercyjnym lub innym, bez konieczności potwierdzania lub wypłacania Użytkownikowi odszkodowania. Niniejszym zrzeka się Pan wszelkich praw moralnych do takich Zgłoszeń i gwarantuje, że wszystkie Zgłoszenia są oryginalne i pochodzą od Użytkownika lub że Użytkownik ma prawo je przesyłać. Użytkownik zgadza się, że nie przysługuje mu żadne roszczenie wobec nas z tytułu domniemanego lub faktycznego naruszenia lub sprzeniewierzenia jakichkolwiek praw własności do Zgłoszeń.",
    "uptimeTitle": "7. Czas sprawności i bezpieczeństwo",
    "serviceAvailability": "Korzystasz z Usług na własne ryzyko. Usługi te świadczymy w stanie „takim, jaki jest” i „w miarę dostępności”. Nie oferujemy umów o poziomie usług (SLA) dla większości naszych Usług, ale poważnie podchodzimy do kwestii dostępności naszych aplikacji.",
    "throttlingPolicy": "Zastrzegamy sobie prawo do tymczasowego ograniczenia dostępu do konta w rzadkich przypadkach, gdy potwierdzimy, że aktywność użytkownika negatywnie wpływa na stabilność i wydajność Usługi dla innych użytkowników. W każdym przypadku, z wyjątkiem najbardziej krytycznych, skontaktujemy się z Tobą w celu znalezienia rozwiązania przed podjęciem działań.",
    "dataSecurity": "Podejmujemy wiele działań w celu ochrony i zabezpieczenia Twoich danych poprzez tworzenie kopii zapasowych, redundancję i szyfrowanie. Stosujemy szyfrowanie transmisji danych w publicznym Internecie.",
    "thirdPartyVendors": "Korzystamy z usług zewnętrznych dostawców i partnerów hostingowych w celu zapewnienia niezbędnego sprzętu, oprogramowania, sieci, pamięci masowej i powiązanych technologii wymaganych do prowadzenia Usług.",
    "siteManagementTitle": "8. Zarządzanie witryną",
    "siteManagementDescription": "Zastrzegamy sobie prawo, ale nie obowiązek, do: (1) monitorowania Witryny pod kątem naruszeń niniejszych Warunków korzystania z usługi; (2) podejmowania odpowiednich kroków prawnych przeciwko każdemu, kto według naszego wyłącznego uznania narusza prawo lub niniejsze Warunki korzystania z usługi, w tym, bez ograniczeń, zgłaszania takiego użytkownika organom ścigania; (3) według naszego wyłącznego uznania i bez ograniczeń, odmowy, ograniczenia dostępu do, ograniczenia dostępności lub wyłączenia (w zakresie technologicznie wykonalnym) któregokolwiek z Twoich Wkładów lub jakiejkolwiek jego części; (4) według naszego wyłącznego uznania i bez ograniczeń, powiadomienia lub odpowiedzialności, usunięcia z Witryny lub w inny sposób wyłączenia wszystkich plików i treści o nadmiernym rozmiarze lub w jakikolwiek sposób obciążających nasze systemy; oraz (5) w inny sposób zarządzania Witryną w sposób mający na celu ochronę naszych praw i własności oraz ułatwienie prawidłowego funkcjonowania Witryny.",
    "copyrightTitle": "9. Prawa autorskie i własność treści",
    "copyrightCompliance": "Wszystkie treści publikowane w ramach Usług muszą być zgodne z prawem autorskim obowiązującym w Stanach Zjednoczonych.",
    "ipRights": "Nie rościmy sobie żadnych praw własności intelektualnej do materiałów, które udostępniasz w ramach Usług. Wszystkie przesłane materiały pozostają Twoją własnością.",
    "contentModeration": "Nie dokonujemy wstępnej selekcji treści, ale zastrzegamy sobie prawo (ale nie obowiązek), według własnego uznania, do odmowy publikacji lub usunięcia wszelkich treści dostępnych za pośrednictwem Serwisu.",
    "trademarkProtection": "Nazwy, wygląd i działanie Usług są chronione prawem autorskim © Spółki. Wszelkie prawa zastrzeżone. Zabrania się powielania, kopiowania ani ponownego wykorzystywania jakiejkolwiek części kodu HTML, CSS, JavaScript lub elementów graficznych bez wyraźnej pisemnej zgody Spółki. Należy wystąpić o pozwolenie na używanie logo Spółki lub logo Usług w celach promocyjnych. Prosimy o przesłanie nam prośby o użycie logotypów drogą mailową. Zastrzegamy sobie prawo do cofnięcia tego pozwolenia w przypadku naruszenia niniejszych Warunków korzystania z Usług.",
    "prohibitedExploitation": "Użytkownik zgadza się nie odtwarzać, nie duplikować, nie kopiować, nie sprzedawać, nie odsprzedawać ani nie wykorzystywać żadnej części Usług, sposobu korzystania z Usług ani dostępu do Usług bez wyraźnej pisemnej zgody Spółki.",
    "impersonationProhibition": "Nie wolno modyfikować innej witryny internetowej w sposób fałszywie sugerujący, że jest ona powiązana z Usługami lub Spółką.",
    "dmcaPolicy": "Szanujemy prawa własności intelektualnej innych osób. Jeśli uważasz, że jakikolwiek materiał dostępny w Serwisie lub za jego pośrednictwem narusza Twoje prawa autorskie, prosimy o natychmiastowy kontakt z nami. Kopia Twojego Powiadomienia zostanie wysłana do osoby, która opublikowała lub przechowywała materiały, których dotyczy Powiadomienie. Informujemy, że zgodnie z obowiązującym prawem możesz ponieść odpowiedzialność za szkody, jeśli w Powiadomieniu podasz istotne nieprawdziwe informacje. Dlatego jeśli nie masz pewności, czy materiał dostępny w Serwisie lub do którego linki znajdują się w Serwisie narusza Twoje prawa autorskie, powinieneś najpierw rozważyć kontakt z prawnikiem.",
    "prohibitedActivitiesTitle": "10. Zabronione działania",
    "generalProhibition": "Nie możesz uzyskiwać dostępu do Witryny ani korzystać z niej w żadnym innym celu niż ten, dla którego ją udostępniamy. Witryny nie wolno wykorzystywać w związku z żadnymi przedsięwzięciami komercyjnymi, z wyjątkiem tych, które zostały przez nas wyraźnie zatwierdzone lub poparte.",
    "userObligations": "Jako użytkownik Serwisu zgadzasz się, że nie będziesz:",
    "dataScraping": "Systematyczne pobieranie danych lub innej treści ze Strony w celu tworzenia lub kompilowania, bezpośrednio lub pośrednio, zbiorów, kompilacji, baz danych lub katalogów bez naszej pisemnej zgody.",
    "fraud": "Oszukiwać, wprowadzać w błąd lub wprowadzać nas i innych użytkowników, zwłaszcza w celu zdobycia poufnych informacji o koncie, takich jak hasła użytkowników.",
    "securityInterference": "Omijać, wyłączać lub w inny sposób ingerować w funkcje związane z bezpieczeństwem Witryny, w tym funkcje, które uniemożliwiają lub ograniczają korzystanie z Treści lub ich kopiowanie lub nakładają ograniczenia na korzystanie z Witryny i/lub Treści w niej zawartych.",
    "defamation": "Naszym zdaniem dyskredytować, oczerniać lub w inny sposób szkodzić nam i/lub Witrynie.",
    "harassment": "Nie należy wykorzystywać informacji uzyskanych ze Strony w celu nękania, znęcania się lub wyrządzania krzywdy innej osobie.",
    "supportAbuse": "Niewłaściwie korzystaj z naszych usług wsparcia lub przesyłaj fałszywe raporty o nadużyciach lub niewłaściwym zachowaniu.",
    "legalCompliance": "Korzystać ze Strony w sposób niezgodny z obowiązującymi przepisami prawa.",
    "framingProhibition": "Nie wolno angażować się w nieautoryzowane tworzenie ramek lub linków do Witryny.",
    "malware": "Przesyłać lub przekazywać (lub podejmować próby przesyłania lub przekazywania) wirusów, koni trojańskich lub innych materiałów, w tym nadmiernego używania wielkich liter i spamowania (ciągłego zamieszczania powtarzalnego tekstu), które zakłócają nieprzerwane korzystanie z Witryny przez jakąkolwiek stronę lub powodują utratę przyjemności z jej korzystania lub modyfikują, upośledzają, zakłócają, zmieniają lub utrudniają korzystanie z Witryny, jej funkcje, działanie lub konserwację.",
    "automation": "Nie podejmuj żadnych zautomatyzowanych działań związanych z korzystaniem z systemu, takich jak używanie skryptów do wysyłania komentarzy lub wiadomości, ani nie stosuj żadnych narzędzi do eksploracji danych, robotów lub podobnych narzędzi do gromadzenia i ekstrakcji danych.",
    "copyrightRemoval": "Usuń informacje o prawach autorskich i innych prawach własności z dowolnej Treści.",
    "impersonation": "Próba podszywania się pod innego użytkownika lub osobę, lub posługiwanie się nazwą użytkownika innego użytkownika.",
    "spyware": "Przesyłać lub transmitować (lub podejmować próby przesyłania lub transmitowania) jakichkolwiek materiałów, które działają jako pasywny lub aktywny mechanizm gromadzenia lub transmisji informacji, w tym, bez ograniczeń, formatów wymiany czystej grafiki („gifów”), pikseli 1×1, błędów sieciowych, plików cookie lub innych podobnych urządzeń (czasami określanych jako „oprogramowanie szpiegujące” lub „pasywne mechanizmy gromadzenia” lub „pcms”).",
    "disruption": "Zakłócać, przerywać lub stwarzać nadmierne obciążenie dla Witryny lub sieci i usług połączonych z Witryną.",
    "employeeHarassment": "Nękać, drażnić, zastraszać lub grozić któremukolwiek z naszych pracowników lub agentów zajmujących się udostępnianiem jakiejkolwiek części Witryny.",
    "accessCircumvention": "Podejmować próby obejścia jakichkolwiek środków Witryny mających na celu uniemożliwienie lub ograniczenie dostępu do Witryny lub jakiejkolwiek jej części.",
    "codeCopying": "Kopiowanie lub adaptowanie oprogramowania Witryny, w tym między innymi Flash, PHP, HTML, JavaScript i innych kodów.",
    "reverseEngineering": "Z wyjątkiem przypadków dozwolonych przez obowiązujące prawo, nie wolno rozszyfrowywać, dekompilować, dezasemblować ani dokonywać inżynierii wstecznej żadnego oprogramowania wchodzącego w skład Witryny lub w jakikolwiek sposób stanowiącego jej część.",
    "bots": "Z wyjątkiem przypadków wynikających ze standardowego korzystania z wyszukiwarki lub przeglądarki internetowej, nie wolno używać, uruchamiać, rozwijać ani rozpowszechniać żadnych zautomatyzowanych systemów, w tym między innymi pająków, robotów, narzędzi do oszukiwania, scraperów ani czytników offline uzyskujących dostęp do Witryny, ani używać lub uruchamiać żadnych nieautoryzowanych skryptów lub innego oprogramowania.",
    "buyingAgents": "Dokonuj zakupów na Stronie za pośrednictwem agenta kupującego lub pośrednika ds. zakupów.",
    "unauthorizedUse": "Nie wolno wykorzystywać Serwisu w sposób nieautoryzowany, w tym zbierać nazw użytkowników i/lub adresów e-mail użytkowników drogą elektroniczną lub inną w celu wysyłania niechcianej poczty elektronicznej lub tworzyć kont użytkowników za pomocą środków automatycznych lub pod fałszywymi pozorami.",
    "competition": "Nie wolno wykorzystywać Witryny w celu konkurowania z nami lub wykorzystywać Witryny i/lub Treści w celach zarobkowych lub komercyjnych.",
    "advertising": "Korzystaj z Witryny w celu reklamowania lub oferowania sprzedaży towarów i usług.",
    "profileTransfer": "Sprzedaj lub w inny sposób przekaż swój profil.",
    "featuresTitle": "11. Funkcje i błędy",
    "featuresDescription": "Projektujemy nasze Usługi z dbałością, opierając się na własnym doświadczeniu oraz na doświadczeniach klientów, którzy poświęcają nam swój czas i dzielą się swoimi opiniami. Nie ma jednak usługi, która zadowoliłaby wszystkich. Nie gwarantujemy, że nasze Usługi spełnią Państwa konkretne wymagania lub oczekiwania.",
    "bugsDescription": "Testujemy również wszystkie nasze funkcje przed ich udostępnieniem. Jak w przypadku każdego oprogramowania, nasze Usługi nieuchronnie zawierają błędy. Śledzimy zgłaszane nam błędy i pracujemy nad nimi, zwłaszcza nad tymi związanymi z bezpieczeństwem i prywatnością. Nie wszystkie zgłoszone błędy zostaną naprawione i nie gwarantujemy, że Usługi będą całkowicie wolne od błędów.",
    "correctionsTitle": "12. Poprawki",
    "informationAccuracy": "Informacje na Stronie mogą zawierać błędy typograficzne, nieścisłości lub pominięcia, w tym opisy, ceny, dostępność i inne informacje. Zastrzegamy sobie prawo do poprawiania wszelkich błędów, nieścisłości lub pominięć oraz do zmiany lub aktualizacji informacji na Stronie w dowolnym momencie i bez uprzedniego powiadomienia.",
    "siteAvailability": "Nie możemy zagwarantować, że Strona będzie dostępna przez cały czas. Możemy napotkać problemy ze sprzętem, oprogramowaniem lub inne problemy, a także przeprowadzić konserwację Strony, co może skutkować przerwami, opóźnieniami lub błędami. Zastrzegamy sobie prawo do zmiany, rewizji, aktualizacji, zawieszenia, zaprzestania lub innej modyfikacji Strony w dowolnym momencie i z dowolnego powodu bez powiadomienia. Zgadzasz się, że nie ponosimy żadnej odpowiedzialności za jakiekolwiek straty, szkody lub niedogodności spowodowane brakiem dostępu do Strony lub korzystania z niej podczas przestoju lub zaprzestania jej działania. Żadne z postanowień niniejszych Warunków korzystania z usługi nie będzie interpretowane jako zobowiązujące nas do utrzymywania i wspierania Strony ani do dostarczania jakichkolwiek korekt, aktualizacji lub wydań w związku z tym.",
    "userDataTitle": "13. Dane użytkownika",
    "userDataDescription": "Będziemy przechowywać pewne dane przesyłane przez Ciebie do Serwisu w celu zarządzania jego działaniem, a także dane dotyczące korzystania z niego. Chociaż regularnie tworzymy kopie zapasowe danych, ponosisz wyłączną odpowiedzialność za wszelkie dane przesyłane przez Ciebie lub związane z jakąkolwiek aktywnością wykonywaną przez Ciebie za pośrednictwem Serwisu. Zgadzasz się, że nie ponosimy wobec Ciebie żadnej odpowiedzialności za utratę lub uszkodzenie takich danych i niniejszym zrzekasz się wszelkich praw dochodzenia roszczeń wobec nas z tytułu takiej utraty lub uszkodzenia takich danych.",
    "privacyPolicyTitle": "14. Polityka prywatności",
    "privacyPolicyDescription": "Dbamy o prywatność i bezpieczeństwo danych. Prosimy o zapoznanie się z naszą Polityką Prywatności. Korzystając z Witryny, wyrażasz zgodę na przestrzeganie naszej Polityki Prywatności, która stanowi integralną część niniejszych Warunków Korzystania z Usługi. Informujemy, że Witryna jest hostowana w Stanach Zjednoczonych. Jeśli uzyskujesz dostęp do Witryny z dowolnego innego regionu świata, w którym obowiązują przepisy lub inne wymogi dotyczące gromadzenia, wykorzystywania lub ujawniania danych osobowych, które różnią się od przepisów obowiązujących w Stanach Zjednoczonych, dalsze korzystanie z Witryny oznacza przekazanie Twoich danych do Stanów Zjednoczonych i wyrażasz zgodę na ich przekazywanie i przetwarzanie w Stanach Zjednoczonych.",
    "liabilityTitle": "15. Odpowiedzialność",
    "liabilityIntroduction": "Wspominamy o odpowiedzialności w całym niniejszym Regulaminie, ale żeby zawrzeć to wszystko w jednej sekcji:",
    "liabilityWaiver": "Wyraźnie rozumiesz i zgadzasz się, że Spółka nie ponosi odpowiedzialności, z mocy prawa lub w oparciu o zasadę słuszności, wobec Ciebie lub jakiejkolwiek osoby trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, utracone zyski, szkody szczególne, wynikowe, karne lub przykładowe, w tym, ale nie wyłącznie, szkody za utratę zysków, dobrej woli, użytkowania, danych lub inne straty niematerialne (nawet jeśli Spółka została poinformowana o możliwości wystąpienia takich szkód), wynikające z: (1) korzystania z Usług lub niemożności korzystania z nich; (2) błędów, pomyłek lub nieścisłości w treści i materiałach; (3) obrażeń ciała lub szkód majątkowych, jakiegokolwiek rodzaju, wynikających z dostępu do witryny i korzystania z niej; (4) kosztów zakupu towarów i usług zastępczych wynikających z jakichkolwiek towarów, danych, informacji lub usług zakupionych lub uzyskanych lub wiadomości otrzymanych lub transakcji zawartych za pośrednictwem Usług; (5) jakiegokolwiek nieautoryzowanego dostępu do lub korzystania z naszych bezpiecznych serwerów i/lub wszelkich danych osobowych i/lub informacji finansowych w nich przechowywanych; (6) jakiekolwiek przerwanie lub zaprzestanie transmisji do lub z witryny; (7) jakiekolwiek błędy, wirusy, konie trojańskie lub podobne, które mogą zostać przesłane do lub za pośrednictwem witryny przez osoby trzecie i/lub; (8) jakiekolwiek błędy lub pominięcia w jakiejkolwiek treści i materiałach lub za jakiekolwiek straty lub szkody poniesione w wyniku korzystania z jakiejkolwiek treści opublikowanej, przesłanej lub w inny sposób udostępnionej za pośrednictwem witryny; (9) oświadczenia lub zachowanie jakiejkolwiek osoby trzeciej w ramach usługi; (10) lub jakakolwiek inna kwestia związana z niniejszymi Warunkami korzystania z usługi lub Usługami, niezależnie od tego, czy stanowi to naruszenie umowy, czyn niedozwolony (w tym zaniedbanie czynne lub bierne), czy jakąkolwiek inną teorię odpowiedzialności.",
    "miscellaneousTitle": "16. Różne",
    "miscellaneousDescription": "Niniejsze Warunki Świadczenia Usług oraz wszelkie polityki lub zasady operacyjne opublikowane przez nas w Serwisie lub w odniesieniu do Serwisu stanowią całość umowy i porozumienia między Tobą a nami. Niewykonanie lub niewyegzekwowanie przez nas któregokolwiek z praw lub postanowień niniejszych Warunków Świadczenia Usług nie stanowi zrzeczenia się takiego prawa lub postanowienia. Niniejsze Warunki Świadczenia Usług obowiązują w najszerszym zakresie dozwolonym przez prawo. Możemy w dowolnym momencie przenieść część lub całość naszych praw i obowiązków na inne osoby. Nie ponosimy odpowiedzialności za jakiekolwiek straty, szkody, opóźnienia lub zaniechania spowodowane przyczynami pozostającymi poza naszą uzasadnioną kontrolą. Jeżeli którekolwiek z postanowień niniejszych Warunków Świadczenia Usług zostanie uznane za niezgodne z prawem, nieważne lub niewykonalne, to postanowienie lub część postanowienia uznaje się za oddzielne od niniejszych Warunków Świadczenia Usług i nie wpływa to na ważność i wykonalność pozostałych postanowień. W wyniku niniejszych Warunków Świadczenia Usług lub korzystania z Serwisu nie powstaje między Tobą a nami żaden stosunek joint venture, partnerstwa, zatrudnienia ani agencyjny. Zgadzasz się, że niniejsze Warunki Świadczenia Usług nie będą interpretowane na naszą niekorzyść z tytułu ich sporządzenia. Niniejszym zrzekasz się wszelkich zarzutów, jakie możesz mieć w związku z elektroniczną formą niniejszych Warunków świadczenia usług oraz brakiem podpisania przez strony niniejszego dokumentu w celu wykonania niniejszych Warunków świadczenia usług.",
    "contactTitle": "17. Skontaktuj się z nami",
    "contactDescription": "Jeśli masz pytania dotyczące któregokolwiek z Warunków korzystania z usługi, skontaktuj się z nami.",
    "neverCap": "NeverCap",
    "site": "Strona",
    "services": "Usługi"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
