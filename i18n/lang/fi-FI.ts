// 芬兰语
let message = {
  // Etusivu
  HomePage: {
    home: "Kaikki Transkriptit",
    times: "{times} ilmaista litterointia päivässä, {left} jäljellä tänään. ",
    tips: "Päivitä Pro-versioon saadaksesi rajattomasti litterointeja.",
    update: "Päivitä nyt",
    rename: "Nimeä uudelleen",
    delete: "Poista",
    cancel: "Peruuta",
    confirm: "Luo",
    dialogLabel: "Kansion nimi",
    recently: "Viimeaikaiset tiedostot",
    loading: "Lataa",
    tour: {
      step0: {
        title: "Tervetuloa {name}",
        tip: "Täällä voit:",
        content:
          "Tekstittää kertaluonteisia keskusteluja, kokouksia, luentoja ja paljon muuta",
        next: "Aloita"
      },
      step1: {
        title: "Tekstitä tiedostoja",
        content:
          "Tukee kolmea tekstitysmenetelmää: paikalliset tiedostot, linkit ja nauhoitukset."
      },
      step2: {
        title: "Luo kansio",
        content:
          'Napsauta "+" luodaksesi kansion ja järjestelläksesi tiedostoja.'
      },
      step3: {
        title: "Näytä tekstitystiedot ja muokkaa",
        content:
          "Napsauta kohdetta nähdäksesi tekstitystiedot, muokataksesi tai kääntääksesi sen."
      },
      next: "seuraava",
      finish: "Selvä"
    },
    export: {
      export: "Vie",
      title: "Luomme vientiäsi",
      title2: "Tiedostosi on valmis",
      singleLoadingContent: "1 tiedosto pakataan.",
      singleSuccessContent: "1 tiedosto on pakattu.",
      loadingContent: "{num} tiedostoa pakataan.",
      successContent: "{num} tiedostoa on pakattu.",
      cancel: "Peruuta vienti",
      error: "Vihevirhe",
      dialog: {
        title: "Varoitus",
        content: "Peruutetaanko vienti?",
        cancel: "Peruuta vienti",
        continue: "Jatka vientiä"
      }
    },
    welcome: {
      title: "Tervetuloa Scribifyyn!",
      description: "Täällä voit:",
      transcribe:
        "Litteroi vaivattomasti Scribifyllä—muunna puhekeskustelut selkeäksi, haettavaksi ja jaettavaksi tekstiksi hetkessä.",
      precision:
        "Saa tarkat litteraatiot puhujatunnisteilla ja aikaleimalla välittömästi.",
      translate:
        "Murra kielimuuri: käännä litteraatiot yli 200 kielelle helposti.",
      edit: "Muokkaa, hio ja vie litteraatiosi tarpeitasi vastaavissa muodoissa.",
      collaborate:
        "Tee yhteistyötä jakamalla litteroitu tekstisi muiden kanssa.",
      button: "Aloita",
      tip: "Valmis muuntamaan ääntä litteroiduksi tekstiksi? Aloita tutkiminen nyt!",
      tip2: "Aloita tutkiminen nyt!",
      tip1: "Valmis muuttamaan äänen litteroiduksi tekstiksi? "
    },
    subscriptionModal: {
      left: {
        title: "Hanki Pro-suunnitelma avataksesi lisää ominaisuuksia",
        c1: "Rajattomat litteroinnit",
        c2: "10 tunnin lataukset",
        c3: "Korkein prioriteetti",
        c4: "99% litterointitarkkuus",
        c5: "Yli 100 tuettua kieltä",
        c6: "Puhujan tunnistus",
        c7: "Litteraation kääntäminen",
        t1: "Rajattomat litteroinnit yhdelle henkilölle.",
        t2: "Jokainen tiedosto voi olla jopa 10 tuntia / 5 GB. Lataa 50 tiedostoa kerralla.",
        t3: "Litteroimme tiedostosi aina mahdollisimman pian korkeimmalla prioriteetilla."
      },
      right: {
        title: "Hanki Pro-suunnitelma",
        yearly: "Vuosittain",
        monthly: "Kuukausittain",
        save: "Säästö",
        preMonth: "kuukaudessa",
        preYear: "vuodessa",
        firstMonth: "ensimmäinen kuukausi",
        afterwards: "sen jälkeen"
      },
      subscribe: "Tilaa"
    }
  },
  // Kansiosivu
  FolderPage: {
    table: {
      failed: "Epäonnistui",
      selected: "Valittu",
      success: "Onnistui",
      fileList: "Tiedostoluettelo"
    },
    dialog: {
      move: {
        title: "Siirrä",
        label: "Valitse kansio",
        placeholder: "Valitse kansio",
        confirm: "Siirrä",
        cancel: "Peruuta"
      },
      rename: {
        title: "Nimeä uudelleen",
        label: "Tiedostonimi",
        confirm: "Nimeä uudelleen",
        cancel: "Peruuta"
      },
      delete: {
        title: "Poista",
        file: "tiedosto",
        files: "tiedostoa",
        label: "Vahvista poisto? Tätä toimintoa ei voi peruuttaa.",
        confirm: "Poista",
        cancel: "Peruuta"
      },
      share: {
        title: "Jaa",
        label:
          "Kuka tahansa, jolla on seuraava turvalinkki, voi tarkastella tätä tekstitystä ja siihen liittyvää mediatiedostoa.",
        confirm: "Kopioi linkki",
        success: "Kopiointi onnistui"
      },
      export: {
        title: "Vie",
        select: "Valitse tarvitsemasi muoto",
        settings: "Asetukset",
        speaker: "Sisällytä puhuja",
        timecodes: "Sisällytä aikakoodit",
        confirm: "Vie",
        cancel: "Peruuta",
        selectErr: "Valitse yksi tai useampi muoto"
      }
    },
    search: {
      placeholder: "Etsi"
    },
    recently: "Viimeaikaiset",
    record: "Nauhoita",
    transcribe: "Tekstitä",
    unclassified: "Luokittelemattomat kansiot",
    buttons: {
      transcribe: "Tekstitä tiedostoja",
      url: "Tekstitä linkit",
      record: "Nauhoita ja tekstitä",
      recording: "Nauhoitetaan..."
    },
    delSuccess: "Poisto onnistui",
    create: "Luo",
    endRecord: {
      title: "Kehote",
      content:
        "Olet nauhoittamassa. Tämä toiminto lopettaa nauhoituksen. Haluatko lopettaa nauhoituksen?",
      confirm: "Jatka Nauhoitusta",
      cancel: "Lopeta Nauhoitus"
    }
  },
  // Tiedoston lataus ja nauhoitus
  FileUploadAndRecording: {
    record: {
      record: "Nauhoita",
      pause: "Keskeytä",
      resume: "Jatka",
      stop: "Lopeta",
      endRecord: "Lopeta tallennus",
      delete: "Poista",
      transcribe: "Tekstitä",
      permissionDenied: "Mikrofonilupa evätty tai laitetta ei ole olemassa",
      dialog: {
        delete: {
          title: "Varoitus",
          label: "Haluatko varmasti poistaa tämän nauhoituksen?",
          confirm: "Poista",
          cancel: "Peruuta"
        },
        complete: {
          title: "Nauhoitus valmis",
          label:
            "Nauhoitus on saavuttanut 10 tuntia ja on pysähtynyt automaattisesti. Tekstitä se.",
          confirm: "Selvä"
        },
        speaker: {
          content:
            "Puhujien tunnistuksessa tiedostojen enimmäiskesto on 3 tuntia. Poista valinta kohdasta '{text}'."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Tekstitä verkkomedia",
        title: "Liitä linkit",
        label:
          "Liitä videolinkkisi tai äänilinkkisi palveluista: YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram ja muut...",
        confirm: "Lisää",
        cancel: "Peruuta",
        errorTitle:
          "Antamasi linkkiosoite on virheellinen. Tarkista ja yritä uudelleen.",
        linkName: "Linkki"
      },
      file: {
        orTitle: "Tekstitä verkkomedia",
        dialogTitle: "Tekstitä tiedostoja",
        tip1: "Vedä tiedostot tähän tai napsauta selataksesi",
        tip2: "Napsauta selataksesi",
        or: "tai",
        supported: "Tuetut tiedostomuodot"
      },
      del: {
        title: "Varoitus",
        content:
          "Kaikki edistyminen menetetään. Haluatko varmasti peruuttaa tekstityksen?",
        cancel: "Vahvista peruutus",
        confirm: "Jatka tekstitystä"
      },
      files: "Tiedostot",
      resultDialogTitle: "Tekstitä tiedostoja",
      resultDialogTitle2: "Litteroi tiedosto",
      cancel: "Peruuta",
      confirm: "Tekstitä",
      return: "Palaa",
      addMore: "Lisää lisää",
      language: "Median kieli",
      failed: "Epäonnistui",
      tooLarge: "Tiedosto ylittää rajan (5G).",
      linkUpload: "Ladataan",
      fileFormat: "Tiedostomuoto ei ole sallittu",
      localFiles: "Paikalliset tiedostot",
      pasteLink: "Online-linkki",
      uploadErr: "Latausvirhe",
      hashErr: "Tarkistusvirhe",
      table: {
        status: "Tila",
        file: "Tiedosto",
        size: "Koko",
        noData: "Ei tietoja"
      },
      maxFileNum: "Tiedostojen määrä ei voi ylittää {num}.",
      speaker: "Tunnista puhujat",
      speakerLabel: "Havaise puhuja automaattisesti",
      guest: {
        transcribe: "Litteroi",
        file: "Tiedosto",
        audio: "Ääni-/videotiedosto",
        Uploading: "Ladataan..."
      }
    }
  },
  // Tekstitystiedot sivu
  TranscriptionPage: {
    langChooseV1: {
      recently: "Viimeaikaiset",
      popular: "Suositut",
      other: "Muut",
      searchLanguage: "Hae kieltä",
      noMatch: "Kieltä ei löytynyt",
      English: "Englanti",
      "English(US)": "Englanti (USA)",
      "English(UK)": "Englanti (Iso-Britannia)",
      Spanish: "Espanja",
      Portuguese: "Portugali",
      French: "Ranska",
      Italian: "Italia",
      German: "Saksa",
      Dutch: "Hollanti",
      Polish: "Puola",
      Danish: "Tanska",
      Japanese: "Japani",
      Korean: "Korea",
      Hungarian: "Unkari",
      Czech: "Tšekki",
      Chinese: "Kiina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Azerbaijani: "Azeri",
      Estonian: "Viro",
      Belarusian: "Valkovenäjä",
      Bulgarian: "Bulgaria",
      Icelandic: "Islanti",
      Bosnian: "Bosnia",
      Persian: "Persia",
      Russian: "Venäjä",
      "Chinese(Traditional)": "Perinteinen kiina",
      Finnish: "Suomi",
      Kazakh: "Kazakstan",
      Galician: "Galicia",
      Catalan: "Katalaani",
      "Chinese(Simplified)": "Yksinkertaistettu kiina",
      Kannada: "Kannada",
      Croatian: "Kroatia",
      Latvian: "Latvia",
      Lithuanian: "Liettua",
      Romanian: "Romania",
      Marathi: "Marathi",
      Malay: "Malaiji",
      Macedonian: "Makedonia",
      Maori: "Maori",
      Afrikaans: "Afrikaans",
      Nepali: "Nepali",
      Norwegian: "Norja",
      Swedish: "Ruotsi",
      Serbian: "Serbia",
      Slovak: "Slovakia",
      Slovenian: "Slovenia",
      Swahili: "Swahili",
      Tagalog: "Tagalog",
      Tamil: "Tamil",
      Thai: "Thaimaa",
      Turkish: "Turkki",
      Welsh: "Kymri",
      Urdu: "Urdu",
      Ukrainian: "Ukraina",
      Greek: "Kreikka",
      Armenian: "Armenia",
      Hindi: "Hindi",
      Indonesian: "Indonesia",
      Vietnamese: "Vietnam",
      Albanian: "Albania",
      Amharic: "Amhara",
      Assamese: "Assam",
      Occitan: "Oksitaani",
      Bashkir: "Baškiiri",
      Basque: "Baski",
      Breton: "Bretoni",
      Tibetan: "Tiibet",
      Faroese: "Fääri",
      Sanskrit: "Sanskrit",
      Khmer: "Khmer",
      Georgian: "Georgia",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haitin kreoli",
      Hausa: "Hausa",
      Latin: "Latina",
      Lao: "Laos",
      Lingala: "Lingala",
      Luxembourgish: "Luxemburg",
      Malagasy: "Madagaskar",
      Maltese: "Malta",
      Malayalam: "Malayalam",
      Mongolian: "Mongolia",
      Bengali: "Bengali",
      Burmese: "Burma",
      Punjabi: "Punjabi",
      Pashto: "Pashto",
      Sinhala: "Sinhala",
      Shona: "Shona",
      Somali: "Somalia",
      Tajik: "Tadžikki",
      Tatar: "Tataari",
      Telugu: "Telugu",
      Turkmen: "Turkmenistan",
      Uzbek: "Uzbekistan",
      Hawaiian: "Havaiji",
      "Norwegian Nynorsk": "Norjan nynorsk",
      Sindhi: "Sindhi",
      Sundanese: "Sundanese",
      Yiddish: "Jiddiš",
      Yoruba: "Yoruba",
      Javanese: "Jaava",
      Cantonese: "Kantoninkiina",
      Abkhaz: "Abhasia",
      Afar: "Afar",
      alz: "Alz",
      ach: "Acholi",
      awa: "Awadhi",
      Avaric: "Avaari",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "Irlanti",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osseetti",
      tpi: "Tok-pisin",
      bew: "Betawi",
      ban: "Bali",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Pohjoissotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Balutši",
      bho: "Bhojpuri",
      bua: "Burjaatti",
      chm: "Marin kieli",
      Chamorro: "Tšamorro",
      Chechen: "Tšetšeeni",
      chk: "Chuuk",
      Chuvash: "Tšuvassi",
      Tswana: "Tswana",
      Tsonga: "Tsonga",
      "fa-AF": "Dari",
      shn: "Shan",
      tet: "Tetum",
      Divehi: "Dhivehi",
      dyu: "Dyula",
      tiv: "Tiv",
      din: "Dinka",
      doi: "Dogri",
      "ndc-ZW": "Ndebele",
      "South Ndebele": "Eteländebele",
      dov: "Dombesa",
      "bm-Nkoo": "N'ko (Länsiafrikkalainen kirjaimisto)",
      "French(Canada)": "Ranska (Kanada)",
      Fijian: "Fidži",
      fon: "Fon",
      "Western Frisian": "Länsifriisi",
      fur: "Friuli",
      Fulah: "Fula",
      Kongo: "Kongo",
      Kalaallisut: "Grönlanti",
      gom: "Konkani",
      Guarani: "Guarani",
      cnh: "Hakha Chin",
      hrx: "Hunsrik",
      Kyrgyz: "Kirgisia",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kachin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchí",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikka",
      "crh-Latn": "Krimintataari (latinalainen)",
      crh: "Krimintataari (kyrillinen)",
      Quechua: "Ketšua",
      Kurdish: "Kurdi (Kurmanji)",
      ckb: "Kurdi (Sorani)",
      trp: "Kokborok",
      ltg: "Latgalli",
      lij: "Liguria",
      Limburgish: "Limburg",
      Kirundi: "Rundi",
      luo: "Luo",
      Luganda: "Ganda",
      Kinyarwanda: "Ruanda",
      lmo: "Lombardi",
      rom: "Romani",
      mad: "Madura",
      Manx: "Manksin",
      mwr: "Marwari",
      "ms-Arab": "Malaiji (Jawi-kirjaimisto)",
      Marshallese: "Marshall",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Morisyen",
      "mni-Mtei": "Meitei (Manipuri)",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Itäinen Huasteca)",
      "Southern Sotho": "Eteläsotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Punjabi (Shahmukhi-kirjaimisto)",
      "pt-PT": "Portugali (Portugali)",
      Chichewa: "Nyanja",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Twi",
      zap: "Sapoteekki",
      "Northern Sami": "Pohjoissaame",
      Samoan: "Samoa",
      kri: "Sierraleonenkrioli",
      crs: "Seychellienkreoli",
      Sango: "Sango",
      "sat-Latn": "Santali (latinalainen)",
      sat: "Santali (Ogham-kirjaimisto)",
      Esperanto: "Esperanto",
      Swati: "Swazi",
      "Scottish Gaelic": "Skotlanningaeli",
      sus: "Susu",
      ceb: "Cebu",
      ber: "Tamazight (Tifinagh-kirjaimisto)",
      "ber-Latn": "Tamazight (latinalainen)",
      Tahitian: "Tahiti",
      Tonga: "Tonga",
      Tigrinya: "Tigrinja",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuva",
      war: "Waray",
      mak: "Makasar",
      vec: "Venetsia",
      Uyghur: "Uiguuri",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtti",
      szl: "Sileesia",
      scn: "Sisilia",
      hil: "Hiligaino",
      jam: "Jamaikankreoli",
      sah: "Sakha",
      ace: "Aceh",
      iba: "Iban",
      Igbo: "Igbo",
      ilo: "Ilokano",
      "iu-Latn": "Inuktitut (latinalainen)",
      Inuktitut: "Inuktitut (tavukirjoitus)",
      yua: "Jukataninmaja",
      Dzongkha: "Dzongkha",
      Zulu: "Zulu"
    }
  },
  // Kirjautuminen, rekisteröityminen, salasanan vaihto
  IdentityInfoManage: {
    or: "tai",
    LoginBtn: "Kirjaudu sisään sähköpostilla",
    LoginGoogle: "Kirjaudu sisään Googlella",
    SignupBtn: "Rekisteröidy sähköpostilla",
    SignupGoogle: "Rekisteröidy Googlella",
    SignupDes: "Rekisteröidy tänään ja koe taika — ilmaiseksi.",
    SignupTitle: "Tarkka ja rajaton transkriptio",
    signup: "Rekisteröidy",
    sign_up: "Rekisteröidy",
    loginByGoogle: "Jatka Googlella",
    emailAddress: "Anna sähköpostiosoitteesi",
    createAccount: "Luo uusi tili",
    accountExists: "Onko sinulla jo tili? ",
    agreeTerm: {
      agree: "Jatkamalla hyväksyt meidän {terms} ja {policy}.",
      terms: "Ehdot",
      policy: "Tietosuojakäytäntö"
    },
    setPassword: "Aseta salasana",
    code: "Vahvistuskoodi",
    resend: "Lähetä uudelleen",
    enterPassword: "Salasana: vähintään 6 merkkiä.",
    passwordLeval: "Salasanan vahvuus",
    Weak: "Heikko",
    Medium: "Kohtalainen",
    Strong: "Vahva",
    confirmPassword: "Vahvista salasanasi",
    invalidEmail: "Virheellinen sähköpostiosoite",
    logInDirectly: "Tämä tili on jo olemassa. Kirjaudu suoraan sisään.",
    codeErrorTryAgain: "Vahvistuskoodi virheellinen. Yritä uudelleen.",
    atLeastSix: "Salasanan on oltava vähintään 6 merkkiä pitkä.",
    passwordNotMatch: "Salasanat eivät täsmää. Yritä uudelleen.",
    login: "Kirjaudu sisään",
    log_in: "Kirjaudu sisään",
    log_In: "Kirjaudu sisään",
    password: "Salasana",
    forgotPassword: "Unohditko salasanasi?",
    noAccount: "Eikö sinulla ole tiliä？",
    accountNotExists: "Tiliä ei ole olemassa.",
    passwordError: "Väärä salasana",
    sendCode: "Lähetä vahvistuskoodi",
    resetPassword: "Nollaa salasana",
    resetYourPassword: "Nollaa salasanasi",
    newOldCantSame: "Uusi salasana ei voi olla sama kuin vanha salasana.",
    passwordResetOk: "Salasanan nollaus onnistui！",
    signupToSaveProgress:
      "Viimeistele rekisteröityminen tallentaaksesi edistymisesi.",
    tip: "Vihje",
    tipContentEmail:
      "Olemme juuri lähettäneet tilisi kirjautumissalasanan sähköpostiisi.",
    tipContentPassword:
      "Tarkista saapuneet-kansiostasi ja kirjaudu sisään sähköpostiosoitteellasi ja salasanallasi.",
    codeToEmail:
      "Lähetimme juuri vahvistuskoodin sähköpostiisi. Tarkista saapuneet viestit ja liitä vahvistuskoodi yllä olevaan kenttään."
  },
  // Jaa sivu
  Sharepage: {},
  // Alustussivu
  InitPage: {},
  // Tiliasetukset
  AccountSettingsPage: {
    subscription: "Tilaussuunnitelma",
    freeversion: "Ilmainen",
    transcribeTimesDay: "3 transkriptiota päivässä",
    uploadMinutes: "30 minuutin lataukset",
    lowerPriority: "Matalampi prioriteetti",
    currentPlan: "Nykyinen suunnitelma",
    professionalEdition: "ammattimainen versio",
    unlimitedTranscription: "Rajoittamaton transkriptio",
    unlimitedNumberOfTimes: "Rajoittamaton transkriptioitiöisyys ja kesto.",
    filesUploadedAtOnce:
      "Jokainen tiedosto voi olla enintään 10 tuntia pitkä / 5 GB. Lataa 50 tiedostoa kerralla.",
    highestPriority: "korkein prioriteetti",
    weWillGiveTheHighest:
      "Transkriboimme tiedostosi mahdollisimman nopeasti korkeimmalla prioriteetilla.",
    theFirstMonth: "Ensimmäinen kuukausi",
    subscribeTo: "tilaa",
    basicVersionFree: "Perusversio (ilmainen)",
    return: "Palaa",
    annualize: "vuosittain",
    monthly: "kuukausittain",
    everyYear: "joka vuosi",
    saved: "säästetty",
    byTheMonth: "kuukaudessa",
    firstMonth: "ensimmäinen kuukausi",
    afterwardsEveryMonth: "Sen jälkeen joka kuukausi",
    manageSubscription: "Hallitse tilausta",
    professionalYearbook: "Ammattimainen vuosikerta",
    professionalMonthly: "Ammattimainen kuukausittainen",
    subscriptionWillCancelledOn: "Tilauksesi peruutetaan",
    displayLanguage: "Näyttökieli",
    update: "Päivitä nyt",
    basicversion: "Perusversio (Ilmainen)",
    daily: "{start} / {end} päivittäisestä transkriptiosta käytetty",
    upgradetoPro: "Päivitä Pro-versioon",
    accountSetting: "Tilin asetukset",
    logOut: "Kirjaudu ulos",
    account: "Tili",
    email: "Sähköposti",
    id: "Tunnus",
    password: "Salasana",
    resetPassword: "Nollaa salasana",
    logIn: "Kirjaudu sisään",
    tryForFree: "Kokeile ilmaiseksi",
    notFund: "Ei löytynyt",
    couldntFind: "Emme löytäneet etsimääsi.",
    proAnnual: "Pro Vuosittain",
    proMonthly: "Pro Kuukausittain",
    perMonth: "kuukaudessa",
    afterwards: "sen jälkeen",
    accuracy: "transkription tarkkuus",
    supported: "tuetut kielet",
    identification: "Puhujan tunnistus",
    transcriptSranslation: "Transkription käännös",
    perYear: "vuodessa",
    getProPlan: "Hanki Pro-suunnitelma",
    changeToAnnual: "Vaihda vuosittaiseen",
    automaticRenewalon: "Automaattinen uusinta",
    eachMonth: "Automaattinen uusinta kuukauden {time}. päivänä.",
    automaticRenewal:
      "Automaattinen uusiminen epäonnistui, tarkista maksutapa.",
    eachYear: "Automaattinen uusiminen {time} joka vuosi.",
    returnAccountSetting: "Takaisin",
    needsToWaitLonger: "Odota kauemmin ennen kuin tiedostosi litteroidaan.",
    freeThreeTimesDay: "Litteroi 3 tiedostoa ilmaiseksi joka päivä.",
    oneFileUploaded:
      "Jokainen tiedosto voi olla enintään 30 minuuttia pitkä. Lataa 1 tiedosto kerrallaan.",
    uploadWithinHours: "10 tunnin lataukset",
    yourSubscription: "Tilauksesi peruutetaan {time}.",
    save: "Säästää",
      freeversion2: "Ilmainen Suunnitelma"
},
  // Kielen vastaavuussuhteet
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Kiina (yksinkertaistettu)",
      "Chinese(Traditional)": "Kiina (perinteinen)",
      Japanese: "Japani",
      Danish: "Tanska",
      German: "Saksa",
      English: "Englanti",
      Spanish: "Espanja",
      French: "Ranska",
      Italian: "Italia",
      Hungarian: "Unkari",
      Dutch: "Hollanti",
      Norwegian: "Norja",
      Polish: "Puola",
      Portuguese: "Portugali",
      Finnish: "Suomi",
      Swedish: "Ruotsi",
      Turkish: "Turkki",
      Greek: "Kreikka",
      Russian: "Venäjä",
      Ukrainian: "Ukraina",
      Hebrew: "Heprea",
      Arabic: "Arabia",
      Korean: "Korea"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Avoimen lähdekoodin Nuxt3 SaaS -malli, joka on esiin-tehty integroitu globaaleihin maksuyhdyskäytäviin (Stripe/Cream), Google OAuth:iin, i18n-reititykseen ja SEO-optimointityökaluihin. Suunniteltu kehittäjille, jotka julkaisevat monikielisiä verkkosovelluksia, se tarjoaa SSR/SSG-tuen ja tuotantotason turvallisuuden heti käyttöönotettaessa.",
    startLink: "Aloita ilmainen kokeilu~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "Liity odotuslistalle, saa NuxtPron uusimmat uutiset ensimmäisenä ja alennukset!",
      placeholder: "Syötä sähköpostiosoitteesi",
      button: "Liity odotuslistalle",
      joinCountMessage:
        "🔥 Varhainen käyttäjä #{count} juuri liittyi odotuslistalle!"
    },
    seo: {
      title: "Avoimen lähdekoodin Nuxt SaaS -runko | NuxtPro",
      description:
        "NuxtJS-runko kaikilla ominaisuuksilla, jotta tuotteesi tavoittaa asiakkaat. Ideasta tuotantoon 5 minuutissa."
    },
    api: {
      title: "tämä on esittely",
      corpInfo: "yritystiedot"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "videon latausvirhe"
      },
      mse: {
        code: 2,
        msg: "virhe virtaa liitettäessä"
      },
      parse: {
        code: 3,
        msg: "jäsennysvirhe"
      },
      format: {
        code: 4,
        msg: "väärä muoto"
      },
      decoder: {
        code: 5,
        msg: "dekoodausvirhe"
      },
      runtime: {
        code: 6,
        msg: "kielioppivirheet"
      },
      timeout: {
        code: 7,
        msg: "toiston aikakatkaisu"
      },
      other: {
        code: 8,
        msg: "muut virheet"
      }
    },
    HAVE_NOTHING: "Ei tietoa siitä, onko ääni/video valmiita",
    HAVE_METADATA: "Äänen/videon metadata on valmiina ",
    HAVE_CURRENT_DATA:
      "Tietoja nykyisestä toistopaikasta on saatavilla, mutta ei riittävästi tietoa seuraavan kehyksen/millisekunnin toistamiseen",
    HAVE_FUTURE_DATA: "Nykyinen ja vähintään yksi kehys saatavilla",
    HAVE_ENOUGH_DATA:
      "Käytettävissä olevat tiedot riittävät toiston aloittamiseen",
    NETWORK_EMPTY: "Ääni/video ei ole alustettu",
    NETWORK_IDLE:
      "Ääni/video on aktiivinen ja sen resurssit on valittu, mutta verkkoa ei käytetä",
    NETWORK_LOADING: "Selain lataa tietoja",
    NETWORK_NO_SOURCE: "Ääni-/videolähdettä ei löytynyt",
    MEDIA_ERR_ABORTED: "Hakutoiminto keskeytetty käyttäjän toimesta",
    MEDIA_ERR_NETWORK: "Latauksen aikana tapahtui virhe",
    MEDIA_ERR_DECODE: "Dekoodauksen aikana tapahtui virhe",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Ääni/video ei ole tuettu",
    REPLAY: "Toista uudelleen",
    ERROR: "Verkko on poissa käytöstä",
    PLAY_TIPS: "Toista",
    PAUSE_TIPS: "Tauko",
    PLAYNEXT_TIPS: "Toista seuraava",
    DOWNLOAD_TIPS: "Lataa",
    ROTATE_TIPS: "Kierrä",
    RELOAD_TIPS: "Lataa uudelleen",
    FULLSCREEN_TIPS: "Koko näyttö",
    EXITFULLSCREEN_TIPS: "Poistu koko näytöstä",
    CSSFULLSCREEN_TIPS: "Css-koko näyttö",
    EXITCSSFULLSCREEN_TIPS: "Poistu css-koko näytöstä",
    TEXTTRACK: "Tekstitys",
    PIP: "PIP",
    SCREENSHOT: "Kuvakaappaus",
    LIVE: "LIVE",
    OFF: "Pois",
    OPEN: "Avaa",
    MINI_DRAG: "Napsauta ja pidä hiirtä pohjassa vetämistä varten",
    MINISCREEN: "Pieni näyttö",
    REFRESH_TIPS: "Kokeile",
    REFRESH: "Päivitä",
    FORWARD: "eteenpäin",
    LIVE_TIP: "Suora lähetys",
    TM_SUBTITLE_SHOW_TIPS: "Ota tekstitykset käyttöön",
    TM_SUBTITLE_HIDE_TIPS: "Poista tekstitykset käytöstä",
    TM_MINIMIZE_TIPS: "Piilota video"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Tietosuojakäytäntö",
    lastUpdated: "Viimeksi päivitetty: 25. elokuuta 2025",
    policyDescription:
      'Tässä käytäntöasiakirjassa kuvataan, miten Scribify (jäljempänä "Scribify", "me") kerää, käyttää ja luovuttaa henkilötietojasi, kun käytät palveluitamme, verkkosivustojamme',
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 'ja ohjelmistoja (yhdessä "Palvelut").',
    policyAgreement:
      "Lue tämä tietosuojakäytäntö huolellisesti ja varmista, että ymmärrät sen. Käyttämällä mitä tahansa Palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy henkilötietojesi käyttöä tämän tietosuojakäytännön mukaisesti, sinun on lopetettava Palveluidemme käyttö välittömästi.",
    policyOverview:
      "Tässä tietosuojakäytännössä kerromme, mitä tietoja keräämme ja miksi; miten tietojasi käsitellään; ja mitkä ovat oikeutesi tietoihisi liittyen. Emme myy tietojasi.",
    scopeTitle: "1. Tietosuojakäytännön soveltamisala",
    whatWeCollectTitle: "2. Mitä keräämme ja miksi",
    accessShareTitle: "3. Milloin käytämme tai jaamme tietojasi",
    secureDataTitle: "4. Kuinka suojaamme tietosi",
    deleteContentTitle: "5. Mitä tapahtuu, kun poistat sisältösi",
    locationTitle: "6. Sivuston ja datan sijainti",
    childrenPrivacyTitle: "7. Lasten yksityisyys",
    updatesTitle: "8. Tämän tietosuojakäytännön päivitykset",
    contactUsTitle: "9. Ota yhteyttä",
    identityAccessTitle: "2.1 Henkilöllisyys ja käyttöoikeudet",
    billingInfoTitle: "2.2 Laskutustiedot",
    productInteractionsTitle: "2.3 Tuotteiden yhteisvaikutukset",
    websiteInteractionsTitle: "2.4 Verkkosivuston vuorovaikutus",
    cookiesTitle: "2.5 Evästeet",
    voluntaryCorrespondenceTitle: "2.6 Vapaaehtoinen kirjeenvaihto",
    scopeContent:
      "Tämä tietosuojakäytäntö koskee vain Palveluiden käyttäjiä koskevien tietojen keräämistä ja käsittelyä. Tämä tietosuojakäytäntö ei koske kolmansien osapuolten ylläpitämiä palveluita, verkkosivustoja tai ohjelmistoja, jotka ovat linkitettyjä meihin (riippumatta siitä, tarjoammeko me nämä linkit vai jakavatko muut käyttäjät niitä), eikä se koske kolmansien osapuolten sisältöä, tietoja, sovelluksia tai materiaaleja. Suosittelemme, että tarkistat minkä tahansa kolmannen osapuolen verkkosivuston tai ohjelmiston tietosuojakäytännöt ennen kuin annat niille tietoja.",
    collectPrinciple:
      "Ohjaavana periaatteenamme on kerätä vain se, mitä tarvitsemme. Käytännössä se tarkoittaa seuraavaa:",
    identityAccessContent:
      "Kun rekisteröidyt johonkin tuotteistamme, pyydämme sinulta tunnistettavia tietoja, kuten nimesi ja sähköpostiosoitteesi. Tämä on tarpeen tuotteen olennaisten toimintojen tarjoamiseksi ja jotta voimme lähettää sinulle tuotepäivityksiä ja muita tärkeitä tietoja.",
    billingInfoContent:
      "Jos rekisteröidyt maksulliseen tuotteeseen, sinua pyydetään antamaan maksutietosi ja laskutusosoitteesi. Maksutiedot lähetetään suoraan maksupalvelullemme, eivätkä ne päädy palvelimillemme.",
    productInteractionsContent:
      "Tallennamme palvelimillemme sisältöä, jonka lataat, vastaanotat tai ylläpidät tuotetileilläsi. Ellet poista tätä sisältöä, voimme säilyttää sitä niin kauan kuin tilisi on aktiivinen.",
    websiteInteractionsContent:
      "Keräämme tietoja selaustoiminnastasi analytiikka- ja tilastotarkoituksiin, kuten konversioastetestaukseen ja uusien tuotemallien kokeilemiseen. Näitä tietoja ovat esimerkiksi selaimesi ja käyttöjärjestelmäsi versiot, IP-osoitteesi, vierailemasi verkkosivut ja niiden latausaika sekä verkkosivusto, joka ohjasi sinut meille. Jos sinulla on tili ja olet kirjautuneena sisään, nämä verkkoanalytiikkatiedot yhdistetään IP-osoitteeseesi ja käyttäjätiliisi, kunnes tilisi ei ole enää aktiivinen.",
    cookiesContent1:
      "Käytämme myös pysyviä ensimmäisen osapuolen evästeitä ja joitakin kolmannen osapuolen evästeitä tiettyjen asetusten tallentamiseen, sovellustemme käytön helpottamiseen, A/B-testauksen suorittamiseen sekä analytiikan tukemiseen.",
    cookiesContent2:
      "Eväste on selaimesi tallentama tekstitiedosto. Se voi auttaa muistamaan kirjautumistiedot ja sivuston asetukset. Se voi myös kerätä tietoja, kuten selaimesi tyyppi, käyttöjärjestelmä, vieraillut verkkosivut, vierailun kesto, katsottu sisältö ja muita klikkaustietoja. Voit muuttaa evästeiden säilytysasetuksia ja hyväksyä tai estää yksittäisiä evästeitä selaimesi asetuksissa, vaikka sovelluksemme eivät toimi ja muut palvelumme osat eivät välttämättä toimi oikein, jos poistat evästeet käytöstä.",
    voluntaryCorrespondenceContent:
      "Kun lähetät meille sähköpostia kysymyksen tai pyydät apua, säilytämme kyseisen viestinnän, mukaan lukien sähköpostiosoitteesi, jotta meillä on historia aiemmasta viestinnästä, josta voimme tarkistaa, jos otat meihin yhteyttä tulevaisuudessa.",
    accessShareContent1:
      "Tarjotaksemme pyytämiäsi tuotteita tai palveluita. Käytämme joitakin kolmannen osapuolen alihankkijoita sovellustemme suorittamiseen ja Palveluiden tarjoamiseen sinulle. Näihin kuuluvat pilvi- ja analytiikkapalveluntarjoajat.",
    accessShareContent2:
      "Väärinkäytösten tutkimiseksi, estämiseksi tai niihin liittyvien toimien toteuttamiseksi. Asiakkaan tilin käyttö mahdollista väärinkäyttöä tutkittaessa on viimeinen keino. Haluamme suojella sekä asiakkaidemme että meille ongelmista ilmoittavien henkilöiden yksityisyyttä ja turvallisuutta, ja teemme parhaamme tasapainottaaksemme nämä vastuut koko prosessin ajan. Jos havaitsemme, että käytät tuotteitamme rajoitettuun tarkoitukseen, ryhdymme tarvittaviin toimiin, mukaan lukien tarvittaessa asianmukaisten viranomaisten ilmoittaminen.",
    accessShareContent3: "Kun sovellettava laki niin vaatii.",
    userDataRequests:
      "- Käyttäjätietojen pyynnöt. Käytäntömme on olla vastaamatta viranomaisten käyttäjätietoja koskeviin pyyntöihin, ellei laillinen prosessi tai rajoitetut olosuhteet vaadi meitä jakamaan tietoja, meidän on noudatettava niitä, jos Yhdysvaltain lainvalvontaviranomaisilla on kuitenkin tarvittava määräys, rikosoikeudellinen haaste tai tuomioistuimen määräys, joka edellyttää meitä jakamaan tietoja, meidän on noudatettava niitä. Vastaavasti vastaamme Yhdysvaltojen ulkopuolisten viranomaisten pyyntöihin vain, jos Yhdysvaltain hallitus velvoittaa meitä siihen keskinäisen oikeusapusopimuksen tai -sopimuksen mukaisesti. Käytäntömme on ilmoittaa asianomaisille käyttäjille ennen tietojen jakamista, ellei meitä lain mukaan kielletä tekemästä niin, lukuun ottamatta joitakin hätätilanteita.",
    preservationRequests:
      "- Säilytyspyynnöt. Vastaavasti käytäntömme on noudattaa tietojen säilyttämistä koskevia pyyntöjä vain, jos Yhdysvaltain liittovaltion tallennettua viestintää koskeva laki, 18 USC:n pykälä 2703(f) tai asianmukaisesti tiedoksi annettu Yhdysvaltain haaste siviilioikeudellisissa asioissa sitä edellyttää. Emme jaa säilytettyjä tietoja, ellei laki sitä vaadi tai tuomioistuimen määräys sitä vaadi, josta emme päätä valittaa. Lisäksi, ellemme saa asianmukaista määräystä, oikeuden määräystä tai haastetta ennen vaaditun säilytysajan päättymistä, tuhoamme kaikki säilytetyt kopiot asiakastiedoista säilytysajan päättyessä.",
    taxAudit:
      "- Jos veroviranomainen tarkastaa meidät, meidän on ehkä jaettava laskutukseen liittyviä tietoja. Tässä tapauksessa jaamme vain välttämättömät tiedot, kuten laskutusosoitteet ja verovapautustiedot.",
    secureDataContent1: "Kaikki tiedot salataan",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "kun tiedot lähetetään palvelimiltamme selaimeesi.",
    deleteContentContent:
      "Jos poistat sisältöä, se muuttuu välittömästi käyttökelvottomaksi.",
    locationContent:
      "Tuotteitamme ja muita verkkosivustojamme hoidetaan Yhdysvalloissa. Jos olet Euroopan unionissa, Isossa-Britanniassa tai muualla Yhdysvaltojen ulkopuolella, huomaathan, että kaikki meille antamasi tiedot siirretään ja tallennetaan Yhdysvaltoihin. Käyttämällä verkkosivustojamme tai palveluitamme ja/tai antamalla meille henkilötietojasi suostut tähän siirtoon.",
    childrenPrivacyContent:
      "Palvelut eivät ole suunnattu lapsille, emmekä tietoisesti kerää alle 13-vuotiaiden lasten henkilötietoja. Jos olet alle 13-vuotias, älä lähetä mitään henkilötietoja Palveluiden kautta. Jos uskot, että lapsi on antanut meille henkilötietoja tämän Käytännön vastaisesti, ota meihin yhteyttä alla kuvatulla tavalla.",
    updatesContent:
      "Saatamme päivittää tätä käytäntöä tarvittaessa asiaankuuluvien määräysten noudattamiseksi ja uusien käytäntöjen huomioon ottamiseksi. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme päivämäärän tämän sivun yläreunassa.",
    contactUsContent1:
      "Jos sinulla on kysyttävää, kommentteja tai valituksia tietosuojakäytännöstämme, ole hyvä ja",
    contactUs: "ota meihin yhteyttä",
    contactUsContent2:
      "ja pyrimme käsittelemään valituksesi mahdollisimman pian."
  },
  termsOfService: {
    termsOfServiceTitle: "Palveluehdot",
    lastUpdated: "Viimeksi päivitetty: 21. syyskuuta 2022",
    thankYouMessage: "Kiitos, että käytät tuotteitamme!",
    companyReference:
      "Kun sanomme tässä asiakirjassa ”Yritys”, ”me”, ”meidän” tai ”meitä”, viittaamme Scribifyyn.",
    servicesDefinition:
      'Kun sanomme "Palvelut", tarkoitamme mitä tahansa Scribifyn luomaa ja ylläpitämää tuotetta, toimitettiinpa se sitten verkkoselaimessa, työpöytäsovelluksessa, mobiilisovelluksessa tai muussa muodossa.',
    termsUpdateNotice:
      "Saatamme päivittää näitä käyttöehtoja tulevaisuudessa. Tyypillisesti nämä muutokset ovat olleet joidenkin ehtojen selventämistä linkittämällä laajennettuun asiaankuuluvaan käytäntöön. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme tämän sivun yläreunassa olevan päivämäärän ja ryhdymme muihin asianmukaisiin toimiin ilmoittaaksemme siitä tilinhaltijoille.",
    acceptanceOfAgreementTitle: "1. Sopimuksen hyväksyminen",
    scribifyServicesTitle: "2. Scribifyn palvelut",
    accountTermsTitle: "3. Tilin ehdot",
    paymentRefundsTitle: "4. Maksaminen, hyvitykset ja sopimusmuutokset",
    cancellationTerminationTitle: "5. Peruutus ja irtisanominen",
    submissionsTitle: "6. Lähetykset",
    uptimeSecurityTitle: "7. Käyttöaika ja turvallisuus",
    siteManagementTitle: "8. Sivuston hallinta",
    copyrightContentTitle: "9. Tekijänoikeudet ja sisällön omistajuus",
    prohibitedActivitiesTitle: "10. Kielletyt toiminnot",
    featuresBugsTitle: "11. Ominaisuudet ja virheet",
    correctionsTitle: "12. KORJAUKSET",
    userDataTitle: "13. Käyttäjätiedot",
    privacyPolicyTitle: "14. Tietosuojakäytäntö",
    liabilityTitle: "15. Vastuu",
    miscellaneousTitle: "16. Sekalaiset",
    contactUsTitle: "17. Ota yhteyttä",
    acceptanceContent1:
      "Käyttämällä Palveluitamme ilmoitat hyväksyväsi tämän Sopimuksen, josta tulee sitova sopimus sinun ja Scribifyn välillä. Vakuutat, että olet laillisesti kykenevä hyväksymään nämä Ehdot ja vahvistat, että olet täysi-ikäinen solmimaan sitovan sopimuksen. Scribifyn hyväksyntä on nimenomaisesti ehdollinen sille, että hyväksyt kaikki tämän Sopimuksen ehdot.",
    acceptanceContent2:
      "Palveluita ei ole tarkoitettu alle 18-vuotiaille, eikä heidän tule käyttää niitä. Käyttämällä Palveluita vakuutat ja takaat, että täytät edellä mainitut kelpoisuusvaatimukset.",
    acceptanceContent3:
      'Termit "sinä", "sinun" ja "itse" sisältävät myös työntekijäsi, edustajasi, liikekumppanisi ja kaikki muut henkilöt, joille annat pääsyn Palveluihin Tilisi kautta (kuten alla on määritelty). Olet vastuussa siitä, että kaikki Palveluita tilisi kautta käyttävät henkilöt ovat tietoisia näistä Ehdoista ja noudattavat niitä.',
    acceptanceContent4:
      "Scribify pidättää oikeuden tarkistaa ja päivittää näitä ehtoja aika ajoin oman harkintansa mukaan. Kaikki muutokset tulevat voimaan välittömästi niiden julkaisemisen jälkeen. Jatkamalla Palveluiden käyttöä tarkistettujen ehtojen julkaisemisen jälkeen hyväksyt muutokset. Sinun odotetaan tarkistavan tämä sivu aika ajoin, jotta olet tietoinen mahdollisista muutoksista, sillä ne sitovat sinua.",
    servicesContent1:
      "Palvelumme mahdollistavat käyttäjien muuntaa äänikeskusteluja litteroiduksi tekstiksi, jota voidaan hakea, kääntää ja jakaa muiden kanssa.",
    servicesContent2:
      'Voit valita, käytätkö Palveluiden ilmaisversiota ("Ilmaiset palvelut") vai Palveluiden tilauspohjaista maksullista versiota, josta saatat joutua maksamaan maksuja ("Maksulliset palvelut").',
    servicesContent3:
      "Tarjoamme Palvelut käyttöösi. Olet vastuussa kaikkien tarvittavien järjestelyjen tekemisestä Palveluiden käyttöä varten.",
    accountTerms1:
      "- Olet vastuussa tilisi turvallisuuden ylläpitämisestä. Yhtiö ei ole eikä tule olemaan vastuussa mistään menetyksistä tai vahingoista, jotka johtuvat tämän turvallisuusvelvoitteen noudattamatta jättämisestä.",
    accountTerms2:
      "- Et saa käyttää Palveluita mihinkään laittomaan, epäeettiseen tai moraalittomaan tarkoitukseen.",
    accountTerms3:
      "- Olet vastuussa kaikesta tililläsi julkaistusta sisällöstä ja toiminnasta. Tämä sisältää sisällön, jonka ovat julkaisseet muut, joilla joko: (a) on pääsy kirjautumistietoihisi; tai (b) on omat kirjautumistunnuksensa tilillesi.",
    accountTerms4:
      '- Sinun on oltava ihminen. "Botien" tai muiden automatisoitujen menetelmien avulla rekisteröidyt tilit eivät ole sallittuja.',
    paymentContent1:
      "- Maksullisten Palveluiden, jotka tarjoavat ilmaisen kokeilujakson, kokeilujakson kesto selitetään rekisteröitymisen yhteydessä. Kokeilujakson jälkeen sinun on maksettava etukäteen voidaksesi jatkaa Palvelun käyttöä. Jos et maksa, nämä palvelut päättyvät.",
    paymentContent2:
      "- Jos päivität ilmaisesta tilauksesta maksulliseen tilaukseen, veloitamme korttiasi välittömästi ja laskutusjaksosi alkaa päivityspäivänä.",
    paymentContent3:
      "- Kaikki maksut eivät sisällä veroviranomaisten määräämiä veroja, maksuja tai tulleja. Tarvittaessa keräämme kyseiset verot veroviranomaisen puolesta ja tilitämme ne veroviranomaisille. Muussa tapauksessa olet vastuussa kaikkien verojen, maksujen tai tullien maksamisesta.",
    paymentContent4:
      "- Kaikki ostokset ovat hyvittämättömiä. Voit peruuttaa minkä tahansa maksullisen palvelun milloin tahansa kirjautumalla tilillesi. Maksullisten tilausten peruutus tulee voimaan kuluvan maksetun kauden lopussa, ellei toisin mainita.",
    cancellationContent1:
      "- Jos peruutat Palvelun ennen maksetun ajan päättymistä, peruutuksesi tulee voimaan välittömästi, eikä sinulta veloiteta enää mitään. Emme automaattisesti suhteuta käyttämätöntä aikaa viimeisimmällä laskutusjaksolla.",
    cancellationContent2:
      "- Meillä on oikeus keskeyttää tai lopettaa tilisi ja evätä kaikki nykyinen tai tuleva Palveluidemme käyttö mistä tahansa syystä milloin tahansa. Keskeyttäminen tarkoittaa, että et voi käyttää tiliäsi tai sen sisältöä. Irtisanominen johtaa lisäksi tilisi tai tilillesi pääsyn poistamiseen sekä kaiken tilisi sisällön menettämiseen ja luovuttamiseen. Pidätämme myös oikeuden evätä Palveluiden käytön keneltä tahansa mistä tahansa syystä milloin tahansa. Meillä on tämä lauseke, koska tilastollisesti katsottuna sadoista tuhansista Palveluidemme tileistä ainakin yksi tekee jotain rikollista.",
    cancellationContent3:
      "- Yhtiön työntekijään tai toimihenkilöön kohdistuva suullinen, fyysinen, kirjallinen tai muu väärinkäyttö (mukaan lukien väärinkäytön tai koston uhkaaminen) voi johtaa tilin välittömään sulkemiseen.",
    submissionsContent:
      'Hyväksyt ja hyväksyt, että kaikki meille toimittamasi kysymykset, kommentit, ehdotukset, ideat, palautteet tai muut Sivustoa koskevat tiedot ("Lähetykset") ovat ei-luottamuksellisia ja niistä tulee yksinomaista omaisuuttamme. Meillä on yksinoikeudet, mukaan lukien kaikki immateriaalioikeudet, ja meillä on oikeus käyttää ja levittää näitä Lähetyksiä rajoituksetta mihin tahansa lailliseen tarkoitukseen, kaupalliseen tai muuhun, ilman sinulle annettavaa tunnustusta tai korvausta. Luovut täten kaikista moraalisista oikeuksista tällaisiin Lähetyksiin ja takaat täten, että kaikki tällaiset Lähetykset ovat alkuperäisiä sinulle tai että sinulla on oikeus lähettää tällaisia Lähetyksiä. Hyväksyt, ettei meitä vastaan voi nostaa kannetta mistään väitetystä tai todellisesta Lähetystesi omistusoikeuden loukkauksesta tai väärinkäytöstä.',
    uptimeContent1:
      '- Palveluiden käyttö on yksinomaan omalla vastuullasi. Tarjoamme näitä Palveluita "sellaisenaan" ja "saatavuuden mukaan". Emme tarjoa palvelutasosopimuksia useimmille Palveluillemme, mutta otamme sovellustemme käyttöajan vakavasti.',
    uptimeContent2:
      "- Pidätämme oikeuden tilapäisesti poistaa tilisi käytöstä, jos käyttösi ylittää merkittävästi muiden Palveluiden asiakkaiden tyypillisen käytön. Otamme luonnollisesti sinuun yhteyttä ennen toimenpiteisiin ryhtymistä, paitsi harvinaisissa tapauksissa, joissa käyttötaso voi vaikuttaa negatiivisesti Palvelun suorituskykyyn muille asiakkaille.",
    uptimeContent3:
      "- Käytämme monia toimenpiteitä tietojesi suojaamiseksi ja turvaamiseksi varmuuskopioiden, redundanssien ja salauksen avulla. Käytämme salausta tiedonsiirrossa julkisessa internetissä.",
    uptimeContent4:
      "- Käytämme kolmannen osapuolen toimittajia ja hosting-kumppaneita tarjoamaan Palveluiden suorittamiseen tarvittavat laitteistot, ohjelmistot, verkot, tallennustilan ja niihin liittyvän teknologian.",
    siteManagementContent:
      "Pidätämme oikeuden, mutta emme velvollisuutta, seuraavaa: (1) valvoa Sivustoa näiden Käyttöehtojen rikkomusten varalta; (2) ryhtyä asianmukaisiin oikeustoimiin ketä tahansa vastaan, joka oman harkintamme mukaan rikkoo lakia tai näitä Käyttöehtoja, mukaan lukien rajoituksetta tällaisen käyttäjän ilmoittaminen lainvalvontaviranomaisille; (3) oman harkintamme mukaan ja rajoituksetta evätä, rajoittaa pääsyä, rajoittaa saatavuutta tai poistaa käytöstä (siinä määrin kuin se on teknisesti mahdollista) minkä tahansa Muodoksesi tai minkä tahansa sen osan; (4) oman harkintamme mukaan ja rajoituksetta, ilman erillistä ilmoitusta tai vastuuta poistaa Sivustolta tai muuten poistaa käytöstä kaikki tiedostot ja sisällöt, jotka ovat kooltaan liian suuria tai jotka millään tavalla rasittavat järjestelmiämme; ja (5) muutoin hallita Sivustoa tavalla, joka on suunniteltu suojaamaan oikeuksiamme ja omaisuuttamme ja helpottamaan Sivuston asianmukaista toimintaa.",
    copyrightContent1:
      "- Kaiken Palveluihin lähetetyn sisällön on oltava Yhdysvaltain tekijänoikeuslain mukaista.",
    copyrightContent2:
      "- Emme vaadi immateriaalioikeuksia Palveluihin toimittamaanne materiaaliin. Kaikki ladatut materiaalit pysyvät sinun omaisuutenasi.",
    copyrightContent3:
      "- Emme esitarkista sisältöä, mutta pidätämme oikeuden (mutta emme velvollisuutta) oman harkintamme mukaan kieltäytyä tai poistaa mitä tahansa Palvelun kautta saatavilla olevaa sisältöä.",
    copyrightContent4:
      "- Palveluiden nimet, ulkoasu ja käyttökokemus ovat Yhtiön tekijänoikeuksin suojattuja. Kaikki oikeudet pidätetään. Et saa kopioida, kopioida tai käyttää uudelleen mitään osaa HTML-, CSS-, JavaScript- tai visuaalisista suunnitteluelementeistä ilman Yhtiön nimenomaista kirjallista lupaa. Sinun on pyydettävä lupaa käyttää Yhtiön logoa tai Palvelun logoja mainostarkoituksiin. Ole hyvä",
    emailUs: "Lähetä meille sähköpostia",
    copyrightContent5:
      "pyyntöjä logojen käyttöön. Pidätämme oikeuden peruuttaa tämän luvan, jos rikot näitä käyttöehtoja.",
    copyrightContent6:
      "- Sitoudut olemaan kopioimatta, jäljentämättä, myymättä, jälleenmyymättä tai hyödyntämättä mitään osaa Palveluista, Palveluiden käytöstä tai Palveluihin pääsystä ilman Yhtiön nimenomaista kirjallista lupaa.",
    copyrightContent7:
      "- Et saa muokata toista verkkosivustoa siten, että se antaa virheellisen kuvan siitä, että se liittyy Palveluihin tai Yhtiöön.",
    copyrightContent8:
      "- Kunnioitamme muiden immateriaalioikeuksia. Jos uskot, että Sivustolla tai sen kautta saatavilla oleva materiaali loukkaa omistamiasi tai hallinnoimiasi tekijänoikeuksia, ole hyvä ja ota välittömästi yhteyttä",
    contactUs: "ota meihin yhteyttä",
    copyrightContent9:
      "Ilmoituksestasi lähetetään kopio henkilölle, joka julkaisi tai tallensi Ilmoituksessa mainitun materiaalin. Huomaa, että sovellettavan lain nojalla sinut voidaan pitää vahingonkorvausvastuussa, jos annat Ilmoituksessa olennaisesti vääriä tietoja. Jos et siis ole varma, loukkaako Sivustolla oleva tai Sivustolta linkitetty materiaali tekijänoikeuksiasi, sinun kannattaa ensin ottaa yhteyttä asianajajaan.",
    prohibitedActivitiesIntro:
      "Et saa käyttää Sivustoa mihinkään muuhun tarkoitukseen kuin siihen, johon Sivusto on käytettävissä. Sivustoa ei saa käyttää mihinkään kaupalliseen toimintaan, paitsi jos se on nimenomaisesti hyväksyttyä tai hyväksyttyä.",
    prohibitedActivitiesUserAgreement: "Sivuston käyttäjänä sitoudut olemaan:",
    prohibitedActivity1:
      "- Hae systemaattisesti tietoja tai muuta sisältöä sivustolta luodaksesi tai kootaksesi, suoraan tai epäsuorasti, kokoelman, koosteen, tietokannan tai hakemiston ilman kirjallista lupaamme.",
    prohibitedActivity2:
      "- Huijata, petostaa tai johtaa harhaan meitä ja muita käyttäjiä, erityisesti yrittämällä saada selville arkaluonteisia tilitietoja, kuten käyttäjien salasanoja.",
    prohibitedActivity3:
      "- Kiertää, poistaa käytöstä tai muulla tavoin häiritä Sivuston turvallisuuteen liittyviä ominaisuuksia, mukaan lukien ominaisuuksia, jotka estävät tai rajoittavat Sisällön käyttöä tai kopiointia tai asettavat rajoituksia Sivuston ja/tai sen sisältämän Sisällön käytölle.",
    prohibitedActivity4:
      "- Halventaa, tahrata tai muuten vahingoittaa mielestämme meitä ja/tai Sivustoa.",
    prohibitedActivity5:
      "- Käyttää Sivustolta saatuja tietoja toisen henkilön häirintään, hyväksikäyttöön tai vahingoittamiseen.",
    prohibitedActivity6:
      "- Käytä tukipalveluitamme väärin tai lähetä vääriä ilmoituksia väärinkäytöksistä tai väärinkäytöksistä.",
    prohibitedActivity7:
      "- Käytä Sivustoa tavalla, joka on ristiriidassa sovellettavien lakien tai määräysten kanssa.",
    prohibitedActivity8:
      "- Osallistu sivuston luvattomaan kehystämiseen tai linkittämiseen.",
    prohibitedActivity9:
      "- Lataa tai lähetä (tai yritä ladata tai lähettää) viruksia, troijalaisia tai muuta materiaalia, mukaan lukien liiallinen isojen kirjainten käyttö ja roskapostitus (jatkuva toistuvan tekstin lähettäminen), joka häiritsee kenen tahansa osapuolen Sivuston keskeytymätöntä käyttöä ja nautintoa tai muokkaa, heikentää, keskeyttää, muuttaa tai häiritsee Sivuston käyttöä, ominaisuuksia, toimintoja, toimintaa tai ylläpitoa.",
    prohibitedActivity10:
      "- Käytä järjestelmää millään tavalla automaattisesti, kuten käytä komentosarjoja kommenttien tai viestien lähettämiseen tai käytä tiedonlouhintaa, robotteja tai vastaavia tiedonkeruu- ja poimintatyökaluja.",
    prohibitedActivity11:
      "- Poista tekijänoikeus- tai muut omistusoikeusilmoitukset mistä tahansa sisällöstä.",
    prohibitedActivity12:
      "- Yritä esiintyä toisena käyttäjänä tai henkilönä tai käyttää toisen käyttäjän käyttäjätunnusta.",
    prohibitedActivity13:
      '- Lataa tai lähetä (tai yritä ladata tai lähettää) mitään materiaalia, joka toimii passiivisena tai aktiivisena tiedonkeruu- tai -lähetysmekanismina, mukaan lukien rajoituksetta selkeät grafiikanvaihtomuodot ("gif"), 1×1-pikselit, verkkovirheet, evästeet tai muut vastaavat laitteet (joita joskus kutsutaan "vakoiluohjelmiksi" tai "passiivisiksi keräysmekanismeiksi" tai "pcms").',
    prohibitedActivity14:
      "- Häiritse, keskeytä tai kuormita kohtuuttomasti Sivustoa tai Sivustoon yhdistettyjä verkkoja tai palveluita.",
    prohibitedActivity15:
      "- Häiritse, ärsytä, pelottele tai uhkaile ketään työntekijöitämme tai edustajiamme, jotka osallistuvat Sivuston minkä tahansa osan tarjoamiseen sinulle.",
    prohibitedActivity16:
      "- Yritä ohittaa Sivuston toimenpiteitä, joiden tarkoituksena on estää tai rajoittaa pääsyä Sivustolle tai sen osaan.",
    prohibitedActivity17:
      "- Sivuston ohjelmiston, mukaan lukien, mutta ei rajoittuen, Flashin, PHP:n, HTML:n, JavaScriptin tai muun koodin, kopioiminen tai muokkaaminen.",
    prohibitedActivity18:
      "- Ellei sovellettava laki sitä salli, tulkita, purkaa, hajottaa tai takaisinmallintaa mitään Sivustoon kuuluvaa tai sitä millään tavalla muodostavaa ohjelmistoa.",
    prohibitedActivity19:
      "- Käytä, käynnistä, kehitä tai jaa mitään automatisoitua järjestelmää, mukaan lukien rajoituksetta kaikki hakurobotit, huijausohjelmat, kaavintaohjelmat tai offline-lukijat, jotka käyttävät Sivustoa, tai käytä tai käynnistä luvattomia komentosarjoja tai muita ohjelmistoja, lukuun ottamatta sitä, mikä voi olla seurausta tavanomaisesta hakukoneen tai internetselaimen käytöstä.",
    prohibitedActivity20:
      "- Käytä ostoagenttia tai ostoedustajaa tehdäksesi ostoksia Sivustolla.",
    prohibitedActivity21:
      "- Sivuston luvaton käyttö, mukaan lukien käyttäjien käyttäjätunnusten ja/tai sähköpostiosoitteiden kerääminen sähköisesti tai muilla keinoin ei-toivottujen sähköpostien lähettämistä varten tai käyttäjätilien luominen automaattisesti tai väärien perusteiden avulla.",
    prohibitedActivity22:
      "- Käyttää Sivustoa osana mitään pyrkimystä kilpailla kanssamme tai muutoin käyttää Sivustoa ja/tai Sisältöä mihinkään tuloja tuottavaan tarkoitukseen tai kaupalliseen toimintaan.",
    prohibitedActivity23:
      "- Käyttää Sivustoa mainostaakseen tai tarjotakseen myytäväksi tavaroita ja palveluita.",
    prohibitedActivity24: "- Myydä tai muuten siirtää profiilisi.",
    featuresContent1:
      "Suunnittelemme Palvelumme huolella omien kokemustemme ja asiakkaidemme kokemusten pohjalta, jotka jakavat aikaansa ja palautettaan. Ei kuitenkaan ole olemassa sellaista asiaa kuin palvelu, joka miellyttäisi kaikkia. Emme takaa, että Palvelumme täyttävät erityisvaatimuksesi tai odotuksesi.",
    featuresContent2:
      "Testaamme myös kaikki ominaisuutemme ennen niiden julkaisemista. Kuten minkä tahansa ohjelmiston kanssa, Palveluissamme on väistämättä joitakin virheitä. Seuraamme meille ilmoitettuja virheitä ja työskentelemme niiden parissa, erityisesti turvallisuuteen tai yksityisyyteen liittyvien virheiden osalta. Kaikkia ilmoitettuja virheitä ei korjata, emmekä takaa täysin virheettömiä Palveluita.",
    correctionsContent1:
      "Sivustolla saattaa olla tietoja, jotka sisältävät typografisia virheitä, epätarkkuuksia tai puutteita, mukaan lukien kuvaukset, hinnat, saatavuus ja monia muita tietoja. Pidätämme oikeuden korjata virheitä, epätarkkuuksia tai puutteita sekä muuttaa tai päivittää Sivuston tietoja milloin tahansa ilman ennakkoilmoitusta.",
    correctionsContent2:
      "Emme voi taata, että Sivusto on käytettävissä kaikkina aikoina. Saatamme kohdata laitteisto-, ohjelmisto- tai muita ongelmia tai joutua suorittamaan Sivustoon liittyviä huoltotoimenpiteitä, jotka johtavat keskeytyksiin, viivästyksiin tai virheisiin. Pidätämme oikeuden muuttaa, tarkistaa, päivittää, keskeyttää, lopettaa tai muuten muokata Sivustoa milloin tahansa ja mistä tahansa syystä ilman erillistä ilmoitusta sinulle. Hyväksyt, ettemme ole millään tavalla vastuussa mistään menetyksestä, vahingosta tai haitasta, joka aiheutuu siitä, että et voi käyttää Sivustoa sen käyttökatkoksen tai lopettamisen aikana. Mitään näissä Käyttöehdoissa ei voida tulkita siten, että se velvoittaisi meitä ylläpitämään ja tukemaan Sivustoa tai toimittamaan siihen liittyviä korjauksia, päivityksiä tai julkaisuja.",
    userDataContent:
      "Säilytämme tiettyjä tietoja, jotka lähetät Sivustolle, Sivuston suorituskyvyn hallintaa varten, sekä tietoja, jotka liittyvät Sivuston käyttöön. Vaikka teemme säännöllisiä varmuuskopioita tiedoista, olet yksin vastuussa kaikista lähettämistäsi tiedoista tai tiedoista, jotka liittyvät mihin tahansa Sivuston avulla suorittamaasi toimintaan. Hyväksyt, ettemme ole vastuussa sinulle tällaisten tietojen katoamisesta tai vioittumisesta, ja luovut täten oikeudesta nostaa meitä vastaan ​​kanne, joka johtuu tällaisten tietojen katoamisesta tai vioittumisesta.",
    privacyPolicyContent1:
      "Välitämme tietosuojasta ja -turvallisuudesta. Tutustu valikoimaamme",
    privacyPolicy: "Tietosuojakäytäntö",
    privacyPolicyContent2:
      "Käyttämällä Sivustoa hyväksyt Tietosuojakäytäntömme, joka on sisällytetty näihin Käyttöehtoihin. Huomaa, että Sivustoa isännöidään Yhdysvalloissa. Jos käytät Sivustoa mistä tahansa muualta maailmasta, jonka lait tai muut vaatimukset henkilötietojen keräämisestä, käytöstä tai luovuttamisesta poikkeavat Yhdysvaltojen sovellettavista laeista, jatkamalla Sivuston käyttöä siirrät tietosi Yhdysvaltoihin ja suostut tietojesi siirtämiseen ja käsittelyyn Yhdysvalloissa.",
    liabilityIntro:
      "Mainitsemme vastuun kaikissa näissä ehdoissa, mutta yhteen osioon kootaksemme kaiken:",
    liabilityContent:
      "Ymmärrät ja hyväksyt nimenomaisesti, että Yhtiö ei ole lain tai oikeudenmukaisuuden nojalla vastuussa sinulle tai kolmannelle osapuolelle mistään suorista, epäsuorista, satunnaisista, menetetyistä voitoista, erityisistä, seuraamuksellisista, rankaisevista tai esimerkinomaisista vahingoista, mukaan lukien, mutta ei rajoittuen, vahingot voittojen, liikearvon, käytön, tietojen tai muiden aineettomien tappioiden menetyksestä (vaikka Yhtiölle olisi ilmoitettu tällaisten vahinkojen mahdollisuudesta), jotka johtuvat: (1) Palveluiden käytöstä tai käytön estymisestä; (2) sisällön ja materiaalien virheistä, erehdyksistä tai epätarkkuuksista; (3) minkä tahansa luonteen omaisuusvahingoista tai henkilövahingoista, jotka johtuvat sivuston käytöstä; (4) korvaavien tavaroiden ja palveluiden hankintakustannuksista, jotka johtuvat Palveluiden kautta ostetuista tai hankituista tavaroista, tiedoista, tiedoista tai palveluista tai vastaanotetuista viesteistä tai tehdyistä tapahtumista; (5) luvattomasta pääsystä suojattuihin palvelimiimme tai niiden ja/tai kaikkien niillä tallennettujen henkilötietojen ja/tai taloudellisten tietojen käytöstä; (6) sivustolle tai sivustolta tapahtuvan tiedonsiirron keskeytymisestä tai lopettamisesta; (7) kaikki virheet, virukset, troijalaiset tai vastaavat, joita kolmas osapuoli voi lähettää sivustolle tai sen kautta, ja/tai; (8) kaikki virheet tai puutteet sisällössä ja materiaaleissa tai minkäänlaiset menetykset tai vahingot, jotka johtuvat sivuston kautta julkaistun, lähetetyn tai muuten saatavilla olevan sisällön käytöstä; (9) kolmannen osapuolen lausunnot tai toiminta palvelussa; (10) tai mikä tahansa muu näihin käyttöehtoihin tai palveluihin liittyvä asia, olipa se sitten sopimusrikkomus, oikeudenloukkaus (mukaan lukien aktiivinen tai passiivinen huolimattomuus) tai mikä tahansa muu vastuun peruste.",
    miscellaneousContent:
      "Nämä käyttöehdot ja kaikki Sivustolle tai Sivustoon julkaisemamme käytännöt tai toimintasäännöt muodostavat koko sopimuksen ja yhteisymmärryksen sinun ja meidän välillämme. Se, että emme käytä tai pane täytäntöön mitään näiden käyttöehtojen oikeutta tai määräystä, ei tarkoita kyseisen oikeuden tai määräyksen luopumista. Näitä käyttöehtoja sovelletaan lain sallimassa laajuudessa. Voimme siirtää osan tai kaikki oikeutemme ja velvollisuutemme muille milloin tahansa. Emme ole vastuussa mistään menetyksestä, vahingosta, viivästyksestä tai toiminnan laiminlyönnistä, joka johtuu kohtuullisen hallintamme ulkopuolella olevasta syystä. Jos jokin näiden käyttöehtojen määräys tai sen osa katsotaan laittomaksi, mitättömäksi tai täytäntöönpanokelvottomaksi, kyseinen määräys tai sen osa katsotaan erotettavaksi näistä käyttöehdoista, eikä se vaikuta jäljellä olevien määräysten pätevyyteen ja täytäntöönpanokelpoisuuteen. Sinun ja meidän välillemme ei synny yhteisyritystä, kumppanuutta, työsuhdetta tai edustussuhdetta näiden käyttöehtojen tai Sivuston käytön seurauksena. Hyväksyt, että näitä käyttöehtoja ei tulkita meitä vastaan sillä perusteella, että olemme laatineet ne. Luovut täten kaikista puolustuksista, jotka sinulla saattavat perustua näiden käyttöehtojen sähköiseen muotoon ja siihen, että osapuolet eivät ole allekirjoittaneet näitä käyttöehtoja.",
    contactUsContent1:
      "Jos sinulla on kysyttävää jostakin käyttöehdoista, ole hyvä ja",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Ominaisuudet",
    UnlimitedTranscription: "Rajoittamaton transkriptio",
    BulkUpload: "Joukkolataus",
    Accuracy: "96 % tarkkuus",
    Pricing: "Hinnoittelu",
    UseCases: "Käyttötapaukset",
    AllUseCases: "Kaikki käyttötapaukset",
    Podcasters: "Podcastien tekijät",
    Journalists: "Toimittajat",
    ContentCreators: "Sisällöntuottajat",
    Researchers: "Tutkijat",
    BusinessTeams: "Liiketoimintatiimit",
    Educators: "Opettajat",
    Resources: "Resurssit",
    YouTubetoMP4: "YouTubesta MP4:ään",
    StartFreeTrial: "Kokeile ilmaiseksi"
  },
  Footer: {
    des: "Maailman ensimmäinen aidosti rajoittamaton tekoälypohjainen transkriptiopalvelu. Ei ylärajoja, ei rajoituksia, vain luomisvapaus.",
    Features: "Ominaisuudet",
    UseCases: "Käyttötapaukset",
    Company: "Yritys",
    featureMenus: ["Rajoittamaton transkriptio", "Joukkolataus", "96 % tarkkuus"],
    useCaseMenus: [
          "Kaikki käyttötapaukset",
          "Podcastien tekijät",
          "Toimittajat",
          "Sisällöntuottajat",
          "Tutkijat",
          "Liiketoimintatiimit",
          "Opettajat"
        ],
    companyMenus: [
          "Noin",
          "Hinnoittelu",
          "Tietosuoja",
          "Ehdot"
        ]
  },
  Index: {
    Hero: {
      badge: 'Ei enää "kutistumista" - Itse asiassa rajattomasti',
      h1: "Lopeta rajojen maksaminen:",
      gradient: "Todella rajaton tekoälyn transkriptio",
      subtitle: "Tekoälymme litteroi videon ja muuntaa äänen tekstiksi, käsittelemällä 50 tiedostoa kerralla ilman kuukausittaisia rajoituksia. Litterointi, joka todella skaalautuu kanssasi.",
      FreeTrial: "Kokeile ilmaiseksi – ei luottokorttia",
      HowWorks: "Katso, miten se toimii",
      Unlimited: "Rajoittamaton tiedostojen lataus",
      NoCap: "Ei kuukausittaista minuuttikattoa",
      Hour: "10 tunnin tiedostot tuettu",
      ExploreUseCases: "Tutustu käyttötapauksiin"
    },
    Stats: {
      monthlyMinutes: "Kuukausittaiset minuutit",
      fileUploads: "Tiedostojen lataukset",
      batchProcessing: "Eräkäsittely",
      maxFileLength: "Tiedoston enimmäispituus"
    },
    FeaturesGrid: {
      try_now: "Kokeile nyt",
      no_signup: "Ei rekisteröitymistä vaadita",
      experience_unltd: "Koe todella rajaton transkriptio",
      upload_50: "Lataa jopa 50 tiedostoa kerralla, juuri tähän",
      no_limits: "Edistynyt",
      no_surprises: "Tekoälytranskriptio",
      transparency: "Ei enää piilotettuja rajoituksia, ei enää yllätyksiä - Kun toiset hiljaa lyhentävät minuuttejasi tai piilottavat rajoituksia pienellä präntättyyn, me uskomme radikaaliin läpinäkyvyyteen",
      feat_unltd: "Oikeastaan rajaton",
      feat_unltd_desc: 'Ei "kohtuullisen käytön käytäntöä" salassa. Ei tallennusrajoituksia, jotka naamioidaan "rajattomaksi". Lataa koko arkistosi, litteroi kaikki äänitteiden litterointitarpeesi. Olemme tosissamme.',
      feat_bulk: "Joukkolatauksen vapaus",
      feat_bulk_desc: 'Oletko kyllästynyt "kolmeen elinikäiseen tuontiin" tai "kymmeneen tiedostoon kuukaudessa"? Lataa 50 tiedostoa kerralla, niin monta kertaa kuin tarvitset. Täydellinen ratkaisu ruuhkan käsittelyyn.',
      feat_batch: "Eräkäsittely",
      feat_batch_desc: "Käsittele koko podcast-kausi yön aikana. Lataa 50 haastattelua kerralla. Anna tekoälymme työskennellä nukkuessasi. Herää valmiiden litterointien ääreen.",
      feat_accuracy: "96 % tarkkuus",
      feat_accuracy_desc: "Alan johtava tekoälymme litteroi äänen älykkäillä välimerkeillä, jopa 20 puhujan puheenvuoroilla ja käsittelee aksentit ja tekniset termit virheettömästi.",
      feat_langs: "Yli 100 kieltä",
      feat_langs_desc: "Litteroi videoita ja ääntä yli 100 kielelle, käännä yli 249 kielelle. Ei lisämaksuja eri kielistä. Maailmanlaajuista sisältöä, yksi helppo hinta.",
      feat_pro: "Ammattimaiset ominaisuudet",
      feat_pro_desc: "Sanatason aikaleimat tarkkaan äänen/videon paikannukseen, tarkkaan puhujan tunnistukseen jopa nopeiden keskustelunvaihdosten aikana ja täydellisesti muotoiltuun tekstiin, jossa on kappaleita, lauseita ja välimerkkejä helppoa lukemista varten.",
        features: "Ominaisuudet"
    },
    UseCases: {
      built_for: "Irtotavarana",
      "heavy_users": "Ääni- ja videotranskriptio",
      "join_users": 'Rakennettu kaltaisillesi ahkerakäyttäjille - Liity YouTube-käyttäjien, sisällöntuottajien ja podcast-juontajien joukkoon, jotka vaihtoivat "kutistumisinflaatio"-palveluista',
      "podcasters": {
        "title": "Podcastien tekijät",
        "des": "Lataa koko aiempi jaksoluettelosi. Luo muistiinpanoja jokaiselle jaksolle. Ei enää tarvitse valita, mitkä jaksot litteroidaan."
      },
      "content_creators": {
        "title": "Sisällöntuottajat",
        "des": "Muunna videokirjastosi haettavaksi tekstiksi käyttämällä palveluamme, joka litteroi videotiedostot automaattisesti. Luo tekstitykset kaikkeen. Ei minuuttien laskemista, vain luomista."
      },
      "journalists": {
        "title": "Toimittajat",
        "des": 'Lataa kaikki haastattelusi kerralla. Ei enää "10 tiedostoa kuukaudessa" -esteitä määräajan lähestyessä. Käsittele kaikki.'
      },
      researchers: {
        title: "Tutkijat",
        des: "Litteroi tuntikausien fokusryhmien ja haastattelujen verran. Lataa koko tutkimuksesi kerralla. Hanki tarkka puhujan tunnistus."
      },
      business_teams: {
        title: "Liiketoimintatiimit",
        des: "Tallenna jokainen puhelu murehtimatta rajoituksista. Saat tekoälyn avulla tietoa kaikista keskusteluista, ei vain muutamista valituista."
      },
      educators: {
        title: "Opettajat",
        des: "Litteroi koko luentosarja. Tee kaikesta sisällöstä saavutettavaa. Ei valintaa kurssien välillä aikarajoitusten vuoksi."
      }
    },
    Testimonials: {
      title: "Rakastettu",
      highlighted_users: "Yli 50 000 käyttäjää",
      subtitle: "Katso, miksi ammattilaiset valitsevat NeverCapin rajoitettujen vaihtoehtojen sijaan",
      Mike: {
        "text": "Voi herranjumala, tämä oikeasti toimii! Olen tehnyt podcastia kolme vuotta ja litteroin kaiken manuaalisesti kuin idiootti. Latasin kuusi jaksoa kerralla ja se erotti minut ja juontajaparini täydellisesti toisistaan. Se kahvilajakso, jonka luulin pilalle menneeksi? Kristallinkirkas litterointi. En aio enää koskaan kirjoittaa näitä itse.",
        "author": "Mike Rodriguez",
        "role": "Podcast-juontaja"
      },
      Sarah: {
        "text": "Opetan verkossa ja tarvitsin tekstityksiä videoihini. Kokeilin kolmea muuta työkalua, joissa joko oli outoja rajoituksia tai niiden lukeminen kesti ikuisuuden. Tämä vain... toimii? Latasin espanjankielisen luentoni, sain täydelliset tekstitykset noin kahdessa minuutissa. Kuulovammaiset oppilaani ovat niin tyytyväisiä. Kunpa olisin löytänyt tämän aiemmin!",
        "author": "Sarah Chen",
        "role": "Verkko-opettaja"
      },
      Jessica: {
        "text": "Olen käyttänyt tätä haastatteluissani ja on uskomatonta, kuinka tarkka se on. Minulla oli kahden tunnin haastattelu murtavalla englannilla ja espanjalla, ja kaikki tuli oikein, jopa aikaleimat. Maksoin harjoittelijalleni 200 dollaria kuukaudessa pelkästään tekstin litteroinnista. Tämä säästää minulta kirjaimellisesti rahaa joka kuukausi.",
        "author": "Jessican puisto",
        "role": "Freelance-toimittaja"
      }
    },
    PricingPreview: {
      "title": "Läpinäkyvä hinnoittelu",
      "highlighted_text": "Ei piilotettuja korkkeja",
      "subtitle": "Valitse sopimuksesi. Ei tähtiä, ei pienellä präntättyä tekstiä, ei yllätyksiä"
    },
    FAQSection: {
      "title": "Usein kysytyt kysymykset",
      "titleHighlight": "Kysymykset",
      "questions": [
            {
              "q": "Tekoälytranskriptio",
              "question": "Mitä on tekoälyn transkriptio ja miten se toimii?",
              "answer": "Tekoälytranskriptio on prosessi, jossa ääni muunnetaan automaattisesti tekstiksi edistyneen tekoälyn avulla. NeverCapilla lataat vain tiedostosi, ja tekoälymme litteroi sisällön jopa 96 %:n tarkkuudella. Palvelumme on suunniteltu litteroimaan videotiedostoja (kuten MP4, MOV) ja äänitiedostoja (kuten MP3, WAV) luettavaan ja muokattavaan tekstiin, joka sisältää puhujatunnisteet ja aikaleimat."
            },
            {
              "q": "rajoittamaton_käytäntö",
              "question": "Onko se todella rajaton? Mikä on juju?",
              "answer": "Kyllä, se on todella rajaton! Ei kuukausittaisia minuuttirajoituksia tai ylitysmaksuja. Ainoat rajoitukset ovat teknisiä: yksittäiset tiedostot voivat olla jopa 10 tuntia pitkiä tai 5 Gt:n kokoisia, ja voit käsitellä 50 tiedostoa kerralla. Mutta voit ladata niin monta erää kuin haluat, koko kuukauden ajan."
            },
            {
              "q": "tarkkuus",
              "question": "Kuinka tarkka transkriptio on?",
              "answer": "Takaamme 96 %:n tarkkuuden selkeän äänentoiston takaamiseksi. Tekoälymme on koulutettu miljoonien tuntien monipuolisen sisällön parissa ja käsittelee aksentteja, teknisiä termejä ja useita puhujia poikkeuksellisen hyvin. Haastavassa äänessä älykkäät parannusominaisuutemme auttavat parantamaan tuloksia."
            },
            {
              "q": "kielet",
              "question": "Mitä kieliä tuette?",
              "answer": "Tuemme transkriptiota yli 100 kielellä, mukaan lukien englanti, espanja, mandariinikiina, hindi, arabia, ranska ja paljon muuta. Lisäksi voit kääntää transkriptiosi 249 eri kielelle, mikä tekee siitä täydellisen vaihtoehdon globaalille sisällölle."
            },
            {
              "q": "nopeus",
              "question": "Kuinka nopea transkriptio on?",
              "answer": "Salamannopeasti! Tunnin mittainen äänitiedosto käsitellään tyypillisesti alle viidessä minuutissa. Eräkäsittelyllä voit ladata 50 tiedostoa samanaikaisesti ja antaa niiden käsitellä rinnakkain. Useimmat käyttäjät heräävät ja huomaavat koko kirjastonsa litteroituna yön aikana."
            },
            {
              "q": "peruutus",
              "question": "Voinko peruuttaa milloin tahansa?",
              "answer": "Ehdottomasti! Ei sopimuksia, ei peruutusmaksuja. Voit päivittää, alentaa tai peruuttaa tilauksesi milloin tahansa hallintapaneelistasi. Jos peruutat, säilytät käyttöoikeutesi laskutusjaksosi loppuun asti."
            },
            {
              "q": "turvallisuus",
              "question": "Ovatko tietoni turvassa?",
              "answer": "Turvallisuutesi on meille ensisijaisen tärkeää. Olemme SOC 2 -sertifioituja, käytämme 256-bittistä salausta kaikessa datassa emmekä koskaan käytä sisältöäsi malliemme kouluttamiseen. Voit poistaa tiedostosi milloin tahansa, ja tyhjennämme ne automaattisesti 30 päivän kuluttua. GDPR- ja CCPA-yhteensopiva."
            },
            {
              "q": "vientimuodot",
              "question": "Mitä vientimuotoja on saatavilla?",
              "answer": "Lataa tekstitiedostosi missä tahansa tarvitsemassasi muodossa: PDF, Word (DOCX), Excel, CSV, SRT-tekstitykset, pelkkä teksti (TXT) ja VTT-tekstitykset. Täydellinen mihin tahansa työnkulkuusi."
            },
            {
              "q": "tiedostomuodot",
              "question": "Mitä ääni- ja videotiedostoja voin ladata?",
              "answer": "Tuemme käytännössä kaikkia kohtaamiasi ääni- ja videoformaatteja: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV ja paljon muuta. Jos osaat toistaa sen, voimme litteroida sen."
            }
          ]
    },
    CTASection: {
      "title": "Valmis irrottautumaan rajoituksista?",
      "subtitle": "Liity yli 50 000 ammattilaisen joukkoon, jotka ovat siirtyneet aidosti rajoittamattomaan transkriptioon",
      "button": "Kokeile NeverCapia ilmaiseksi",
      "disclaimer": "Ilmaisversioon ei tarvita luottokorttia • Päivitä milloin tahansa saadaksesi rajoittamattoman käyttöoikeuden"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Ei enää "kutistumisinflaatiota"',
      heroTitleLine1: "Todella rajaton",
      heroTitleLine2: "Tekoälytranskriptio",
      heroSubtitle: "Vaikka Trint rajoittaa työaikasi 50 tuntiin ja Otter 10 tiedostoon kuukaudessa, me pidämme lupauksemme: rajattoman litteroinnin ilman piilotettuja työajan rajoituksia.",
      primaryCta: "Kokeile ilmaiseksi – ei luottokorttia",
      secondaryCta: "Näe totuus",
      comparisonBadLabel: "Mitä muut tekevät",
      comparisonBadTitle: "Piilotetut rajat kaikkialla",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trintti:",
      comparisonBadItem1Text: '"Rajaton" = 50 tuntia/kuukausi -katto',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Saukko:",
      comparisonBadItem2Text: "3 elinikäistä tuontia (ilmainen), 10/kk (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Tulikärpäset:",
      comparisonBadItem3Text: "800 minuutin tallennusraja",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Kuvaus:",
      comparisonBadItem4Text: "Enintään 30 tuntia/kk",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Piilotettu käyttöehdoissa",
      comparisonGoodLabel: "Mitä me teemme",
      comparisonGoodTitle: "Oikeastaan rajaton",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Ei kuukausittaisia minuuttirajoituksia",
      comparisonGoodItem1Text: "koskaan",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Rajoittamaton tiedostojen lataus",
      comparisonGoodItem2Text: "aina",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Ei tallennusrajoituksia",
      comparisonGoodItem3Text: "lainkaan",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 tiedoston erälataus",
      comparisonGoodItem4Text: "milloin tahansa",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Läpinäkyvä käytäntö",
      comparisonGoodItem5Text: "etukäteen",
      feature1Label: "Ei rajoja",
      feature1TitlePart1: "Litteroida 1 000 tuntia?",
      feature1TitlePart2: "Sama hinta.",
      feature1Description: "Lopeta minuuttien laskeminen. Lopeta aikakattojen katsominen. Litteroitpa sitten 10 tuntia tai 10 000 tuntia kuukaudessa, maksat saman kiinteän hinnan. Ei ylitysmaksuja. Ei yllätyslaskuja.",
      feature1Point1Icon: "✓",
      feature1Point1Text: 'Ei "kohtuullisen käytön" käytäntötemppuja',
      feature1Point2Icon: "✓",
      feature1Point2Text: "Ei rajoituksia X tunnin jälkeen",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ei kuun lopun ahdistusta",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Kuukausittaiset tunnit",
      feature1Stat2Number: "0 dollaria",
      feature1Stat2Label: "Ylitysmaksut",
      feature1Stat3Number: "24/7",
      feature1Stat3Label: "Lataa milloin tahansa",
      feature1Stat4Number: "100 %",
      feature1Stat4Label: "Läpinäkyvä",
      feature2Label: "Irtotavaravapaus",
      feature2TitlePart1: "Lataa oma",
      feature2TitlePart2: "Koko arkisto",
      feature2Description: "Otter tarjoaa sinulle 3 elinikäistä tuontia ilmaiseksi, 10 kuukaudessa Prossa. Tarjoamme rajattomasti. Lataa podcast-julkaisusi, kaikki haastattelusi ja vuosien tallenteet. Ei rajoituksia.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "50 tiedostoa erää kohden",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10 tunnin tiedostot tuettuja",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Prosessi nukkuessasi",
      feature2TableRow1Label: "Saukkovapaa",
      feature2TableRow1Value: "3 elinikäistä tuontia",
      feature2TableRow2Label: "Saukko Pro",
      feature2TableRow2Value: "10 tiedostoa/kuukausi",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "50 tuntia/kk yläraja",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Todella rajaton ✓",
      feature3Label: "Sosiaalinen todiste",
      feature3TitlePart1: "Käyttäjät ovat",
      feature3TitlePart2: "Vaihtaminen päivittäin",
      feature3Description: '\"Maksan Otterista 100 dollaria vuodessa ja he rajoittavat tiedostojen tuonnin 10 kuukaudessa. Heti kun on olemassa vaihtoehto, jossa on rajoittamaton tuonti, lähden!\" - Oikea Reddit-käyttäjä',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Yli 50 000 käyttäjää vaihtoi palvelua",
      feature3Point2Icon: "✓",
      feature3Point2Text: 'Otterin "kutistumisinflaatiosta"',
      feature3Point3Icon: "✓",
      feature3Point3Text: "Ei koskaan takaisin",
      feature3Stat1Number: "50 000+",
      feature3Stat1Label: "Tyytyväiset käyttäjät",
      feature3Stat2Number: "1 kk+",
      feature3Stat2Label: "Käsitellyt tiedostot",
      feature3Stat3Number: "96 %",
      feature3Stat3Label: "Tarkkuus",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Ei piilokuluja",
      trustBadge1Number: "∞",
      trustBadge1Label: "Minuuttia/kuukausi",
      trustBadge2Number: "yli 100",
      trustBadge2Label: "Kielet",
      trustBadge3Number: "96 %",
      trustBadge3Label: "Tarkkuus",
      trustBadge4Number: "50",
      trustBadge4Label: "Erälataus",
      ctaTitle: "Lopeta Fake Unlimited -palvelun maksaminen",
      ctaSubtitle: "Liity tuhansien ihmisten joukkoon, jotka ovat siirtyneet todella rajoittamattomaan transkriptioon",
      finalCta: "Kokeile NeverCapia ilmaiseksi"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Joukkolatauksen vapaus",
      heroTitleLine1: "Lataa 50 tiedostoa.",
      heroTitleHighlight: "Prosessoi kaikki.",
      heroSubtitle: "Otter tarjoaa sinulle kolme elinikäistä tuontia. KOLME. Koko elämäsi ajaksi. Tarjoamme rajattomasti latauksia, 50 tiedostoa kerrallaan, milloin tahansa tarvitset.",
      primaryCta: "Aloita joukkolataus →",
      secondaryCta: "Katso rajat",
      redditQuote: '"Minulla on litteroitavana kolmen vuoden podcast-jaksot. Saukko sanoo, että saan kolme elinikäistä tuontioikeutta. KOLME. Tämä on loukkaavaa."',
      redditAuthorIcon: "📍",
      redditAuthorText: "Todellinen turhautuminen r/podcastingista",
      comparisonSectionTitlePart1: "The",
      comparisonSectionTitleHighlight: "Naurettavat rajat",
      comparisonSectionTitlePart2: "He asettavat",
      comparisonSubtitle: "Miten kilpailijat rajoittavat kykyäsi käsitellä sisältöä",
      limitCard1Service: "Saukkovapaa",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Elinaikaiset tuonnit",
      limitCard1DescriptionLine2: "(Kyllä, KOKO elämäsi ajan)",
      limitCard2Service: "Saukko Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Tiedostoja kuukaudessa",
      limitCard2DescriptionLine2: "(100 dollaria/vuosisuunnitelma)",
      limitCard3Service: "Kuvaus",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Tiedosto kerrallaan",
      limitCard3DescriptionLine2: "(Peräkkäinen lataus)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Rajoittamaton määrä latauksia",
      limitCard4DescriptionLine2: "50 tiedostoa erää kohden",
      feature1Label: "Erävirta",
      feature1TitlePart1: "Käsittele omaasi",
      feature1TitleHighlight: "Koko arkisto",
      feature1TitlePart2: "Yön yli",
      feature1Description: 'Lataa 50 tiedostoa ennen nukkumaanmenoa. Herää saadaksesi transkriptiot valmiiksi. Ei jonotusta, ei odottelua, ei "päivitä" -viestejä. Vain puhdasta prosessointitehoa sormiesi ulottuvilla.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 samanaikaista latausta",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Rinnakkaiskäsittely",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10 tunnin tiedostot tuettuja",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Enimmäiskoko 5 Gt tiedostoa kohden",
      uploadAnimationText1: "50 tiedostoa",
      uploadAnimationText2: "Pudota ja käsittele",
      fileBadge1: "podcast_jakso_001.mp3",
      fileBadge2: "haastattelu_raaka.mp4",
      fileBadge3: "kokous_2024.wav",
      fileBadge4: "luento_koko.mov",
      fileBadge5: "+ 46 tiedostoa lisää...",
      feature2Label: "Nopeus",
      feature2TitlePart1: "Lähetyksestä kohteeseen",
      feature2TitleHighlight: "Valmis tunneissa",
      feature2Description: "Rinnakkaiskäsittelyinfrastruktuurimme ansiosta 50 tiedostoasi eivät jonota. Ne kaikki litteroidaan samanaikaisesti. Se, mikä ennen kesti viikkoja, vie nyt tunteja.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1 tunnin tiedosto: 5 minuuttia",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 tiedostoa: käsitellään rinnakkain",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Sähköposti-ilmoitus, kun se on valmis",
      timelineStep1Icon: "1",
      timelineStep1Title: "Lataa",
      timelineStep1Time: "0 minuuttia",
      timelineStep2Icon: "2",
      timelineStep2Title: "Käsittely",
      timelineStep2Time: "5–30 minuuttia",
      timelineStep3Icon: "3",
      timelineStep3Title: "Tekoälyn taikuutta",
      timelineStep3Time: "30–60 minuuttia",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Täydellinen",
      timelineStep4Time: "< 2 tuntia",
      feature3Label: "Vapaus",
      feature3TitlePart1: "Ei jonoja.",
      feature3TitleHighlight: "Ei odottelua.",
      feature3TitlePart2: "Ei rajoja.",
      feature3Description: 'Vaikka toiset jonottavat virtuaalisesti tai päivittävät "prioriteettikäsittelyä" varten, me käsittelemme jokaisen latauksen kiireellisesti. Sisältösi on tärkeää, eikä sen pitäisi odottaa.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Ei prioriteettitasoja",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Sama nopeus kaikille",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Lataa milloin tahansa, 24/7",
      feature3VisualNumber: "24/7",
      feature3VisualTitle: "Aina valmiina",
      feature3VisualSubtext: "Lataa aina kun inspiraatio iskee",
      useCasesTitlePart1: "Täydellinen",
      useCasesTitleHighlight: "Raskaat lataajat",
      useCasesSubtitle: "Todellisia tilanteita, joissa joukkolataus pelastaa päivän",
      useCase1Title: "Podcast-arkisto",
      useCase1Description: "Lataa kolmen vuoden jaksot kerralla. Luo transkriptioita koko aiemmalle jaksollesi. Luo hakukoneoptimoitua sisältöä jokaiselle jaksolle.",
      useCase2Title: "Kurssin luominen",
      useCase2Description: "Käsittele kaikki luentovideosi samanaikaisesti. Luo opiskelijoille helppokäyttöisiä transkriptioita. Rakenna haettavia kurssimateriaaleja.",
      useCase3Title: "Haastattelujono",
      useCase3Description: "Selvitä litteroimattomien haastattelujen vuori. Käsittele viikkojen tutkimus tunneissa. Pidä kiinni määräajasta ilman paniikkia.",
      useCase4Title: "YouTube-kirjasto",
      useCase4Description: "Luo tekstitykset koko kanavallesi. Luo blogikirjoituksia videosisällöstä. Paranna hakukoneoptimointia kaikissa videoissa.",
      useCase5Title: "Kokousarkisto",
      useCase5Description: "Lataa kuukausien tallennetut kokoukset. Luo haettavia kokousmuistiinpanoja. Älä koskaan enää kadota tärkeitä päätöksiä.",
      useCase6Title: "Tutkimusdata",
      useCase6Description: "Käsittele kohderyhmäkeskusteluja kerralla. Litteroi kaikki osallistujien haastattelut. Analysoi laadullista dataa tehokkaasti.",
      ctaTitle: "Lopeta uusien latausten pyytäminen",
      ctaSubtitle: "Hanki rajoittamaton joukkokäsittely, joka todella toimii",
      finalCta: "Lataa 50 tiedostoa nyt →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Alan johtavaa tarkkuutta",
      heroTitleLine1: "96 % tarkkuus.",
      heroTitleHighlight: "Jokainen sana on tärkeä.",
      heroSubtitle: "Alan johtavaa tarkkuutta 12 pääkielellä. Sanatason aikaleimat täydelliseen synkronointiin. Älykäs puhujan tunnistus, joka käsittelee nopeat keskustelut. Ammattimainen muotoilu, joka on todella luettava.",
      primaryCta: "Testaa tarkkuuttamme →",
      secondaryCta: "Katso kielet",
      statCard1Percentage: "96 %",
      statCard1DescriptionLine1: "Tarkkuus",
      statCard1DescriptionLine2: "12 pääkieltä",
      statCard2Percentage: "95%+",
      statCard2DescriptionLine1: "Tarkkuus",
      statCard2DescriptionLine2: "Aksentit ja murteet",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Sanataso",
      statCard3DescriptionLine2: "Aikaleiman tarkkuus",
      languageSectionTitlePart1: "96 % tarkkuus",
      languageSubtitle: "Ammattitason transkriptio globaalille sisällölle",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "englanti",
      languageCard1Accuracy: "96 % tarkkuus",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "espanjaa",
      languageCard2Accuracy: "96 % tarkkuus",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "mandariinikiina",
      languageCard3Accuracy: "96 % tarkkuus",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "ranskalainen",
      languageCard4Accuracy: "96 % tarkkuus",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "saksa",
      languageCard5Accuracy: "96 % tarkkuus",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japani",
      languageCard6Accuracy: "96 % tarkkuus",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Korealainen",
      languageCard7Accuracy: "96 % tarkkuus",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "portugali",
      languageCard8Accuracy: "96 % tarkkuus",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "venäjä",
      languageCard9Accuracy: "96 % tarkkuus",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "italialainen",
      languageCard10Accuracy: "96 % tarkkuus",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "hollantilainen",
      languageCard11Accuracy: "96 % tarkkuus",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "arabia",
      languageCard12Accuracy: "96 % tarkkuus",
      moreLanguagesText: "+ 88 muuta kieltä tuettu yli 95 %:n tarkkuudella",
      feature1Label: "Tarkkuus",
      feature1TitlePart1: "Sanataso",
      feature1TitleHighlight: "Aikaleimat",
      feature1Description: "Jokainen sana on täydellisesti synkronoitu äänitiedoston sijainnin kanssa. Luo klikattavia transkriptioita, luo tarkkoja tekstityksiä tai hyppää tarkkoihin hetkiin tallenteissasi. 100 ms:n tarkkuus, johon ammattilaiset luottavat.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms aikaleiman tarkkuus",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Täydellinen videoiden editointiin",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Klikattavat interaktiiviset transkriptiot",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Ruututarkat tekstitykset",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Kaiutin 1",
      transcriptLine1Text: "Tervetuloa tämän päivän podcast-jaksoon.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Kaiutin 2",
      transcriptLine2Text: "Kiitos, että sain olla ohjelmassa!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Kaiutin 1",
      transcriptLine3Text: "Sukelletaanpa pääaiheeseemme...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Kaiutin 2",
      transcriptLine4Text: "Ehdottomasti, olen innoissani tästä keskustelusta.",
      feature2Label: "Älykäs tekoäly",
      feature2TitlePart1: "Kahvat",
      feature2TitleHighlight: "Nopeat keskustelut",
      feature2Description: "Tekoälymme tunnistaa puhujat tarkasti jopa päällekkäisten puheiden, keskeytysten ja nopeiden edestakaisten keskustelujen aikana. Täydellinen haastatteluihin, podcasteihin ja kokouksiin, joissa puhujat usein keskeyttävät.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Tunnistaa jopa 20 puhujaa",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Selviytyy keskeytyksistä täydellisesti",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Toimii päällekkäisen puheen kanssa",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Säilyttää tarkkuuden ylikuulumisessa",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Puhujat tunnistettu",
      feature2VisualSubtext: "Jopa nopeissa keskusteluissa",
      feature3Label: "Luettavuus",
      feature3TitlePart1: "Täysin",
      feature3TitleHighlight: "Muotoiltu teksti",
      feature3Description: "Ei enää tekstiseiniä. Tekoälymme lisää automaattisesti kappaleet, lauseet ja välimerkit juuri omiin paikkoihinsa. Lopputuloksena? Transkriptioita, joita on todella miellyttävä lukea ja helppo skannata.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Älykkäät kappaleenvaihdot",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Tarkat välimerkit",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Oikea isojen kirjainten käyttö",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Puhdas, skannattava tuloste",
      formattingTitle: "Ennen ja jälkeen",
      formattingBeforeLabel: "❌ Muut:",
      formattingBeforeText: "Joten tänään puhuisimme uusista ominaisuuksista, joiden parissa olemme työstäneet. Uskon, että tulette todella pitämään niistä. Käyttäjät ovat pyytäneet niitä jo pitkään, ja saimme ne vihdoin valmiiksi.",
      formattingAfterLabel: "✓ Älä koskaan sulje:",
      formattingAfterText: "Tänään siis puhumme uusista ominaisuuksista, joiden parissa olemme työstäneet. Uskon, että tulette todella pitämään niistä. Käyttäjät ovat pyytäneet niitä jo pitkään, ja vihdoin saimme ne valmiiksi.",
      comparisonSubtitle: "Tarkkuus",
      comparisonSectionTitle: "Vertailu",
      comparisonDes: "Katso, miten pärjäämme kilpailijoihin verrattuna",
      tableHeader1: "Ominaisuus",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Kuvaus",
      tableHeader5: "Pastori",
      tableRow1Feature: "Tarkkuus (kirkas ääni)",
      tableRow1NeverCap: "96 %",
      tableRow1Otter: "95 %",
      tableRow1Descript: "94 %",
      tableRow1Rev: "94 %",
      tableRow2Feature: "Sanatason aikaleimat",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Kaiuttimen tunnistus",
      tableRow3NeverCap: "20 kaiutinta",
      tableRow3Otter: "16 kaiutinta",
      tableRow3Descript: "10 kaiutinta",
      tableRow3Rev: "✕",
      tableRow4Feature: "Käsittelee ylikuulumista",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Rajoitettu",
      tableRow4Descript: "Rajoitettu",
      tableRow4Rev: "✕",
      tableRow5Feature: "Älykäs muotoilu",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Perus",
      tableRow6Feature: "12 kieltä 96 %:n tarkkuudella",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "Kokemus 96 % tarkkuus",
      ctaSubtitle: "Lataa haastavin äänitiedostosi ja näe ero",
      finalCta: "Testaa tarkkuuttamme nyt →",
        languageSectionTitlePart2: "12 pääkielellä"
    }
  },
  Pricing: {
    Hero: {
      "title": "Yksinkertainen ja läpinäkyvä hinnoittelu",
      "highlighted_text": "Ei piilotettuja korkkeja",
      "description": "Valitse tarpeisiisi sopiva paketti. Voit päivittää tai alentaa pakettia milloin tahansa. Ei sopimuksia, ei yllätyksiä."
    },
    Cards: {
      "title": "Yksinkertainen, läpinäkyvä hinnoittelu.",
      "highlighted_text": "Ei piilotettuja korkkeja.",
      "description": "Valitse tarpeisiisi sopiva paketti. Voit päivittää tai alentaa pakettia milloin tahansa. Ei sopimuksia, ei yllätyksiä.",
      "plans": [
            {
              "name": "Ilmainen",
              "price": "0 dollaria",
              "period": "kuukausi",
              "discount": "Täydellinen paikka kokeilla palveluitamme",
              "limits": {
                "title": "Päivittäiset rajoitukset",
                "items": [
                  "3 tiedostoa/päivä (yhteensä ≈90 min/päivä)",
                  "Jopa 30 minuuttia tiedostoa kohden (≤250 Mt)",
                  "Lataa yksi tiedosto kerrallaan",
                  "Normaali prioriteettijono"
                ]
              },
              "features": {
                "title": "Ominaisuudet",
                "items": [
                  "Yli 100 kieltä",
                  "Kaiuttimien nimikkeet",
                  "Käännös",
                  "Kaikki vientimuodot"
                ]
              },
              "cta": {
                "text": "Aloita ilmaiseksi. Ei luottokorttia.",
                "button": "Aloita ilmaiseksi"
              }
            },
            {
              "name": "Pro Kuukausittain",
              "price": "17,99 dollaria",
              "period": "kuukausi",
              "discount": "9,99 dollaria ensimmäiseltä kuukaudelta",
              "limits": {
                "title": "Ei kuukausittaista ylärajaa",
                "items": [
                  "Rajoittamaton kokonaisminuuttimäärä",
                  "Jopa 10 tuntia / 5 Gt tiedostoa kohden",
                  "Lataa 50 tiedostoa kerralla",
                  "Prioriteettijono"
                ]
              },
              "features": {
                "title": "Kaikki ilmaiseksi, plus",
                "items": [
                  "Sanatason aikaleimat",
                  "Edistynyt puhujan tunnistus",
                  "Muotoillut kappaleet ja välimerkit",
                  "Prioriteettituki"
                ]
              },
              "cta": {
                "text": "Rajoittamaton määrä minuutteja. Ensisijainen nopeus. Erälataukset.",
                "button": "Siirry ammattilaiseksi"
              },
              "badge": "Suosituimmat"
            },
            {
              "name": "Pro Annual",
              "price": "8,99 dollaria",
              "period": "kuukausi",
              "discount": "Laskutetaan vuosittain 107,88 dollaria",
              "limits": {
                "title": "Sama kuin Pro Monthly",
                "items": [
                  "Rajoittamaton kokonaisminuuttimäärä",
                  "Jopa 10 tuntia / 5 Gt tiedostoa kohden",
                  "Lataa 50 tiedostoa kerralla",
                  "Prioriteettijono"
                ]
              },
              "features": {
                "title": "Kaikki ilmaiseksi, plus",
                "items": [
                  "Sanatason aikaleimat",
                  "Edistynyt puhujan tunnistus",
                  "Muotoillut kappaleet ja välimerkit",
                  "Prioriteettituki"
                ]
              },
              "cta": {
                "text": "Rajoittamaton määrä minuutteja. Ensisijainen nopeus. Erälataukset.",
                "button": "Siirry ammattilaiseksi"
              },
              "badge": "Paras hinta-laatusuhde - Säästä 50 %"
            }
          ],
      "disclaimer": '\"Rajaton\" tarkoittaa, ettei kuukausittaista ylärajaa ole eikä keinotekoista hidastusta ole. Kohtuullinen käyttö koskee väärinkäyttöä automatisoinnissa tai uudelleenjakelussa.'
    },
    ComparisonTable: {
      "header": {
        "title": "Vertaa",
        "highlighted_text": "Kaikki ominaisuudet",
        "subtitle": "Katso tarkalleen, mitä saat kullakin paketilla. Ei piilotettuja rajoituksia."
      },
      "plans": [
              "Ominaisuudet",
              "Ilmainen",
              "Pro Kuukausittain",
              "Pro Annual"
            ],
      "features": [
            {
              "name": "Hinta",
              "values": [
                "0 €/kk",
                {
                  "main": "17,99 $/kk",
                  "note": "9,99 dollaria ensimmäinen kuukausi"
                },
                {
                  "main": "8,99 $/kk",
                  "note": "Laskutus 107,88 dollaria/vuosi"
                }
              ]
            },
            {
              "name": "Kuukausittaiset minuutit",
              "values": ["~2 700 (90/päivä)", "Rajoittamaton", "Rajoittamaton"]
            },
            {
              "name": "Tiedoston enimmäiskesto",
              "values": ["30 minuuttia", "10 tuntia", "10 tuntia"]
            },
            {
              "name": "Tiedoston enimmäiskoko",
              "values": ["250 Mt", "5 Gt", "5 Gt"]
            },
            {
              "name": "Erälataukset",
              "values": ["1 tiedosto", "50 tiedostoa", "50 tiedostoa"]
            },
            {
              "name": "Käsittelynopeus",
              "values": ["Standardi", "Prioriteetti", "Prioriteetti"]
            },
            {
              "name": "Tuetut kielet",
              "values": ["Yli 100 kieltä", "Yli 100 kieltä", "Yli 100 kieltä"]
            },
            {
              "name": "Käännös",
              "values": ["totta", "totta", "totta"]
            },
            {
              "name": "Kaiuttimen tunnistus",
              "values": ["Perus", "Edistynyt (20 kaiutinta)", "Edistynyt (20 kaiutinta)"]
            },
            {
              "name": "Sanatason aikaleimat",
              "values": ["väärä", "totta", "totta"]
            },
            {
              "name": "Muotoillut kappaleet",
              "values": ["väärä", "totta", "totta"]
            },
            {
              "name": "Vientimuodot",
              "values": ["Kaikki muodot", "Kaikki muodot", "Kaikki muodot"]
            },
            {
              "name": "Tukea",
              "values": ["Sähköposti", "Tärkeä sähköposti", "Tärkeä sähköposti"]
            },
            {
              "name": "Tietojen säilytys",
              "values": ["30 päivää", "Ikuisesti", "Ikuisesti"]
            }
          ]
    },
    FAQ: {
      "title": "Usein kysytyt kysymykset",
      "titleHighligt": "Kysymykset",
      "items": [
            {
              "q": "rajoittamaton_käytäntö",
              "question": "Onko se todella rajaton?",
              "answer": "Kyllä! Pro-paketeissa ei ole kuukausittaisia minuuttirajoituksia. Ainoat rajoitukset ovat teknisiä: tiedostojen enimmäiskesto on 10 tuntia ja tiedostokoko 5 Gt. Voit käsitellä niin monta tiedostoa kuin tarvitset."
            },
            {
              "q": "suunnitelman_muutos",
              "question": "Voinko muuttaa suunnitelmia milloin tahansa?",
              "answer": "Ehdottomasti! Voit peruuttaa tilauksesi milloin tahansa hallintapaneelistasi. Voit päivittää tai alentaa tilausta milloin tahansa."
            },
            {
              "q": "maksutavat",
              "question": "Mitä maksutapoja hyväksytte?",
              "answer": "Hyväksymme kaikki yleisimmät luotto- ja pankkikortit sekä PayPalin turvallisia ja vaivattomia maksuja varten."
            },
            {
              "q": "ilmainen_kokeilu",
              "question": "Onko Prolle ilmaista kokeiluversiota?",
              "answer": "Kyllä! Kokeile Prota ilmaiseksi 7 päivää, luottokorttia ei tarvita. Saat myös ensimmäisen kuukauden 45 % alennuksella, kun tilaat."
            },
            {
              "q": "tiedostojen_säilytys",
              "question": "Kuinka kauan säilytätte tiedostojani?",
              "answer": "Ilmainen paketti: 30 päivää. Pro-paketit: Ikuisesti! Opintotodistuksesi ovat aina saatavilla tililläsi."
            },
            {
              "q": "tietoturva",
              "question": "Entä tietoturva?",
              "answer": "Olemme SOC 2 -sertifioituja ja käytämme 256-bittistä salausta. Emme koskaan käytä sisältöäsi malliemme kouluttamiseen. Tietosi ovat sinun."
            }
          ]
    },
    CTA: {
      "title": "Valmiina rajattomaan käyttöön?",
      "subtitle": "Liity yli 50 000 ammattilaisen joukkoon litteroimaan ilman rajoituksia",
      "button": "Kokeile NeverCapia ilmaiseksi →",
      "disclaimer": "Luottokorttia ei tarvita • Aloita litterointi sekunneissa"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "Rakennettu",
      heavyUsers: "Raskaat käyttäjät",
      whoActuallyNeed: "Kuka oikeasti tarvitsee rajattomasti",
      heroSubtitle: "Vuosien työjonojen omaavista podcast-juontajista satojen haastattelujen tehneisiin tutkijoihin. Katso, miten ammattilaiset käyttävät NeverCap-merkkiä päästäkseen eroon latausrajoituksista ja minuuttikatoista.",
      podcasters: {
        title: "Podcastien tekijät",
        pain: '"Lopeta valitsemasta, mitkä jaksot ansaitsevat transkription"',
        description: "Lataa koko podcast-arkistosi kerralla. Luo ohjelmamuistiinpanoja, paranna hakukoneoptimointia ja käytä sisältöä uudelleen laskematta minuutteja.",
        benefits: {
          benefit1: "Lataa kaikki jaksot, ei vain kolmea",
          benefit2: "Luo hakukoneoptimoituja muistiinpanoja",
          benefit3: "Luo haettavia arkistoja",
          benefit4: "Uudelleenkäyttö blogisisällössä"
        },
        stats: {
          stat1: {
            number: "yli 150",
            label: "Jaksot"
          },
          stat2: {
            number: "200 tuntia",
            label: "Tallennettu"
          },
          stat3: {
            number: "3 kertaa",
            label: "SEO-liikenne"
          }
        }
      },
      journalists: {
        title: "Toimittajat ja kirjoittajat",
        pain: '"Määräaikojen paine kohtaa lähetysrajoitukset"',
        description: "Lataa kaikki haastattelut kerralla ennen määräaikaa. Hae litterointeja välittömästi ja älä missaa yhtäkään tärkeää tarjousta.",
        benefits: {
          benefit1: "Erälataus ennen määräaikoja",
          benefit2: "Hae kaikki haastattelut kerralla",
          benefit3: "Tarkat tarjoukset aikaleimoilla",
          benefit4: "Aksenttien ja kielten käsittely"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Haastatteluja/kk"
          },
          stat2: {
            number: "96 %",
            label: "Tarkkuus"
          },
          stat3: {
            number: "5 minuuttia",
            label: "Tunnissa"
          }
        }
      },
      contentCreators: {
        title: "Sisällöntuottajat",
        pain: '"Saavutettavuuden ei pitäisi olla kallista"',
        description: "Tekstitä koko YouTube-kanavasi. Luo tekstitykset useilla kielillä ja paranna videoidesi hakukoneoptimointia välittömästi.",
        benefits: {
          benefit1: "Tekstitä kaikki videot kerralla",
          benefit2: "249 kielen käännöstä",
          benefit3: "YouTube-valmiit SRT-tiedostot",
          benefit4: "Paranna videoiden SEO-sijoitusta"
        },
        stats: {
          stat1: {
            number: "yli 100",
            label: "Videot"
          },
          stat2: {
            number: "yli 100",
            label: "Kielet"
          },
          stat3: {
            number: "249",
            label: "Käännökset"
          }
        }
      },
      researchers: {
        title: "Tutkijat ja akateemikot",
        pain: '"Laadullisen datan ei pitäisi odottaa jonossa"',
        description: "Käsittele kokonaisia tutkimuksia kerralla. Käsittele kohderyhmäkeskusteluja, haastatteluja ja paneelikeskusteluja täydellisen puhujatunnistuksen avulla.",
        benefits: {
          benefit1: "Käsittele kohderyhmiä kerralla",
          benefit2: "20 puhujan tunnistus",
          benefit3: "Vie analyysiohjelmistoon",
          benefit4: "GDPR-yhteensopiva tietoturva"
        },
        stats: {
          stat1: {
            number: "yli 100",
            label: "Tutkimus"
          },
          stat2: {
            number: "96 %",
            label: "Ryhmän tarkkuus"
          },
          stat3: {
            number: "GDPR",
            label: "Yhteensopiva"
          }
        }
      },
      businessTeams: {
        title: "Liiketoimintatiimit",
        pain: '"Kokousten tallentamisen pitäisi olla vaivatonta"',
        description: "Tallenna kokoukset suoraan tai lataa äänitiedostoja välitöntä litterointia varten. Luo haettavia arkistoja rajattomasta määrästä keskusteluja ja älä koskaan enää menetä tärkeitä keskusteluja.",
        benefits: {
          benefit1: "Suora äänitys ja transkriptio",
          benefit2: "Rajoittamaton määrä kokoustallenteita",
          benefit3: "Haettava kokousarkisto",
          benefit4: "Lataa äänitiedostoja välittömästi"
        },
        stats: {
          stat1: {
            number: "Elää",
            label: "Äänitys"
          },
          stat2: {
            number: "Välitön",
            label: "Lataa"
          },
          stat3: {
            number: "20+",
            label: "Kaiuttimet"
          }
        }
      },
      educators: {
        title: "Opettajat",
        pain: '"YouTube-videot tarvitsevat välittömän transkription"',
        description: "Liitä vain YouTube-linkkejä saadaksesi välittömät transkriptiot ja automaattisesti luodut tekstitykset. Muunna mikä tahansa opetusvideo saavutettavaksi ja haettavaksi sisällöksi.",
        benefits: {
          benefit1: "Suora YouTube-linkin transkriptio",
          benefit2: "Luo videotekstitykset automaattisesti",
          benefit3: "Koko kurssien litterointi",
          benefit4: "Haettavat luentoarkistot"
        },
        stats: {
          stat1: {
            number: "1-napsautus",
            label: "YouTube-liitä"
          },
          stat2: {
            number: "Auto",
            label: "Tekstitykset"
          },
          stat3: {
            number: "yli 100",
            label: "Kielet"
          }
        }
      },
      quotes: {
        title: "Todelliset käyttäjät,",
        titleHighlight: "Todellinen vapaus",
        subtitle: "Kuule ammattilaisilta, jotka irtautuivat keinotekoisista rajoituksista",
        testimonials: {
          mike: {
            textBefore: '"Minulla oli',
            highlight: "3 vuotta jaksoja",
            textAfter: 'istuu litteroimattomana. Saukko halusi minun valitsevan 3. KOLME. NeverCap anna minun ladata kaikki 150 jaksoa yhden viikonlopun aikana."',
            name: "Mike Rodriguez",
            role: "Podcast-juontaja"
          },
          jessica: {
            textBefore: `"Freelance-toimittajana minulla ei ole varaa Trint'siin"`,
            highlight: "100 dollaria/kuukausi",
            textAfter: ', mutta en myöskään pysty työskentelemään Otterin 10 tiedoston kuukausirajoituksen kanssa. NeverCap pelasti urani."',
            name: "Jessican puisto",
            role: "Freelance-toimittaja"
          },
          sarah: {
            textBefore: '"Tutkimusryhmällämme oli',
            highlight: "200 tuntia",
            textAfter: 'ryhmätallenteita. Käsittelimme kaiken viikonlopun aikana sen sijaan, että olisimme säännöstelleet minuutteja kuukausittain."',
            name: "Tohtori Sarah Chen",
            role: "Johtava tutkija"
          },
          carlos: {
            textBefore: '"Teen opetusmateriaalia espanjaksi. NeverCap litteroi täydellisesti ja',
            highlight: "kääntää englanniksi",
            textAfter: 'laajemmalle tavoittavuudelle. Ei rajoja, vain kasvua."',
            name: "Carlos Martinez",
            role: "YouTube-opettaja"
          }
        }
      },
      industries: {
        title: "Luotettu kaikkialla",
        titleHighlight: "Toimialat",
        subtitle: "Ammattilaiset kaikkialla siirtyvät todella rajoittamattomaan",
        list: {
          media: "Media ja julkaisutoiminta",
          education: "Koulutus",
          healthcare: "Terveydenhuolto",
          technology: "Teknologia",
          finance: "Rahoitus",
          legal: "Oikeudellinen"
        }
      },
      cta: {
        title: "Myös käyttötapauksesi tarvitsee rajattomasti",
        subtitle: "Liity yli 50 000 ammattilaisen joukkoon, jotka lopettivat minuuttien laskemisen ja alkoivat luoda",
        button: "Aloita rajaton matkasi →"
      }
    },
    Podcasters: {
      badge: "🎙️ Rakennettu podcastien tekijöille",
      heroTitle: "Litteroi oma",
      heroTitleHighlight: "Koko podcast-arkisto",
      heroSubtitle: "Lataa koko aiempi katalogisi. Luo muistiinpanoja jokaiselle jaksolle. Ei enää tarvitse valita, mitkä jaksot litteroidaan. Käsittele 50 jaksoa kerralla, rajattomasti kuukaudessa.",
      ctaPrimary: "Aloita litterointi ilmaiseksi",
      ctaSecondary: "Katso, miten se toimii",
      trustBadge1: "🎙️ Yli 10 000 podcast-tekijää",
      trustBadge2: "∞ Rajoittamaton määrä jaksoja",
      trustBadge3: "📝 SEO-valmiit transkriptiot",
      stats: {
        stat1: {
          number: "∞",
          label: "Jaksot/kuukausi"
        },
        stat2: {
          number: "50",
          label: "Erälataus"
        },
        stat3: {
          number: "10 tuntia",
          label: "Jakson enimmäispituus"
        },
        stat4: {
          number: "96 %",
          label: "Tarkkuus"
        }
      },
      problemTitle: "The",
      problemTitleHighlight: "Podcastin transkriptio-ongelma",
      problemSubtitle: 'Muissa palveluissa voit valita, mitkä jaksot ovat "arvoisia" litteroimaan',
      problems: {
        problem1: {
          title: "Lähetysrajoitukset Tappaa arkistot",
          description: "Otter antaa sinulle 3 elinikäistä tuontia ilmaiseksi, 10 kuukaudessa Prossa. Miten litteroit 3 vuoden jaksot?"
        },
        problem2: {
          title: "Menetetyt hakukoneoptimointimahdollisuudet",
          description: "Jokainen litteroimaton jakso on menetettyä hakukoneoptimointiliikennettä. Mutta Descript rajoittaa parhaimmillaankin 30 tuntiin kuukaudessa."
        },
        problem3: {
          title: "Kustannukset räjähtävät kasvun myötä",
          description: "Podcastisi kasvaessa transkriptiokustannukset nousevat pilviin. Kahden dollarin tuntikohtaiset ylitysmaksut tekevät skaalaamisesta mahdotonta."
        }
      },
      solutionTitle: "The",
      solutionTitleHighlight: "NeverCap Ratkaisu",
      solutionDescription: "Aidosti rajaton transkriptio. Lataa koko arkistosi. Transkriptoi jokainen uusi jakso. Luo ohjelmamuistiinpanoja skaalautuvasti. Ei ylärajoja, ei rajoituksia, vain kasvua.",
      workflowTitle: "Podcast-työnkulkusi,",
      workflowTitleHighlight: "Yksinkertaistettu",
      workflowSubtitle: "Tallennuksesta hakukoneoptimoituihin muistiinpanoihin minuuteissa",
      workflow: {
        step1: {
          title: "Lataa jaksoja",
          description: "Julkaise 50 jaksoa kerralla. MP3, MP4, WAV - me hoidamme ne kaikki."
        },
        step2: {
          title: "Tekoälyn transkriptiot",
          description: "96 %:n tarkkuus puhujan tunnistuksessa. Täydellinen haastatteluihin."
        },
        step3: {
          title: "Älykäs muotoilu",
          description: "Tekoäly lisää kappaleita, lauseita ja välimerkkejä automaattisesti."
        },
        step4: {
          title: "Julkaise ja sijoita",
          description: "Vie verkkosivustollesi. Katso, kuinka hakukoneoptimointiliikenteesi kasvaa."
        }
      },
      featuresTitle: "Ominaisuudet Podcast-ajurit",
      featuresTitleHighlight: "Oikeastaan tarvitsen",
      featuresSubtitle: "Podcastien luoma podcasteille",
      features: {
        feature1: {
          title: "Usean kaiuttimen tunnistus",
          description: "Tunnistaa ja nimeää automaattisesti jopa 20 puhujaa. Täydellinen paneelikeskusteluihin, haastatteluihin ja yhteisjuontajiin."
        },
        feature2: {
          title: "Aikaleiman luvut",
          description: "Luo klikattavia aikaleimoja YouTube-kuvauksiin. Anna kuuntelijoiden siirtyä suosikkisegmentteihinsä välittömästi."
        },
        feature3: {
          title: "Älykäs muotoilu",
          description: "Lisää automaattisesti kappaleet, lauseet ja välimerkit. Saat siistejä ja luettavia litterointeja. Säästä tunteja jälkituotannossa."
        },
        feature4: {
          title: "SEO-optimointi",
          description: "Hakukoneita varten muotoillut transkriptiot. Paranna podcastisi löydettävyyttä ja tavoita uusia yleisöjä."
        },
        feature5: {
          title: "Yli 100 kieltä",
          description: "Litteroi millä tahansa kielellä. Käännä yli 249 kielelle. Tavoita yleisö maailmanlaajuisesti vaivattomasti."
        },
        feature6: {
          title: "Eräkäsittely",
          description: "Lataa 50 jaksoa ennen nukkumaanmenoa. Herää saadaksesi transkriptiot valmiiksi. Käsittele koko arkistosi yön aikana."
        }
      },
      testimonialsTitle: "Podcastaajat, jotka tekivät",
      testimonialsTitleHighlight: "Kytkin",
      testimonialsSubtitle: "Oikeita tarinoita oikeilta podcasteilta",
      testimonials: {
        mike: {
          text: '"Olen tehnyt podcastia kolme vuotta ja litteroin kaiken manuaalisesti kuin idiootti. Latasin kuusi jaksoa kerralla ja se erotti minut ja juontajaparini täydellisesti toisistaan. Se kahvilajakso, jonka luulin pilalle menneen? Kristallinkirkas litterointi. En aio enää koskaan kirjoittaa näitä itse."',
          name: "Mike Rodriguez",
          role: '"The Daily Grind" -podcastin juontaja'
        },
        sarah: {
          text: '"Otter rajoitti tiedostojen tuontimääräni 10 kuukaudessa. Minulla on 150 jaksoa kesken. NeverCap Annoin minun ladata kaiken kolmessa erässä. Orgaaninen liikenteeni on kasvanut 300 % sen jälkeen, kun vanhoihin jaksoihin on lisätty transkriptioita. Tämä kirjaimellisesti maksaa itsensä takaisin."',
          name: "Sarah Chen",
          role: '"Tech Talks Today" -ohjelman luoja'
        }
      },
      comparisonTitle: "Miksi podcastien tekijät valitsevat",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Katso, miten pärjäämme kilpailijoihin verrattuna",
      comparison: {
        headers: {
          feature: "Ominaisuus",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Kuvauksen luoja"
        },
        rows: {
          monthlyLimit: {
            feature: "Kuukausittainen jaksorajoitus",
            nevercap: "Rajoittamaton",
            otter: "~13 jaksoa (1200 min)",
            descript: "~30 jaksoa (30 tuntia)"
          },
          uploadLimit: {
            feature: "Tiedoston lähetysraja",
            nevercap: "Rajoittamaton",
            otter: "10 kuukaudessa",
            descript: "1 kerrallaan"
          },
          batchProcessing: {
            feature: "Eräkäsittely",
            nevercap: "50 tiedostoa",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Jakson enimmäispituus",
            nevercap: "10 tuntia",
            otter: "90 minuuttia",
            descript: "Rajoittamaton"
          },
          speakerDetection: {
            feature: "Kaiuttimen tunnistus",
            nevercap: "20 kaiutinta",
            otter: "16 kaiutinta",
            descript: "10 kaiutinta"
          },
          smartFormatting: {
            feature: "Älykäs muotoilu",
            nevercap: "✓ Täydellinen",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Hinta",
            nevercap: "17,99 $/kk",
            otter: "16,99 $/kk",
            descript: "30 dollaria/kk"
          }
        }
      },
      ctaTitle: "Aloita jokaisen jakson litterointi",
      ctaSubtitle: "Liity yli 10 000 podcastin tekijän joukkoon, jotka eivät koskaan murehdi rajoituksista",
      ctaButton: "Lataa ensimmäiset 50 jaksoasi ilmaiseksi →",
      ctaDisclaimer: "Luottokorttia ei tarvita • Käsittele rajattomasti jaksoja • Peruuta milloin tahansa"
    },
    Journalists: {
      hero: {
        badge: "📰 Toimittajille ja kirjoittajille",
        title: "Litteroi jokainen haastattelu.",
        titleHighlight: "Älä koskaan missaa lainausta.",
        subtitle: "Lopeta haastattelujen litteroinnin arvoisten haastattelujen valitseminen. Lataa kaikki tallenteet kerralla, hae kaikkea välittömästi ja pidä kiinni määräajoistasi ilman lataamisen aiheuttamaa ahdistusta.",
        ctaPrimary: "Aloita rajattomat lataukset →",
        ctaSecondary: "Katso, miten se toimii",
        stats: {
          uploads: {
            number: "∞",
            label: "Tiedostojen lataukset"
          },
          accuracy: {
            number: "96 %",
            label: "Tarkkuus"
          },
          speed: {
            number: "5 minuuttia",
            label: "Tunnissa"
          }
        },
        dashboard: {
          title: "Haastattelujono",
          status: "• Kaikki käsittely",
          interviews: {
            cityCouncil: {
              title: "Kaupunginvaltuuston kokous",
              duration: "2 t 15 min • Ladataan...",
              action: "Käsittely"
            },
            expertInterview: {
              title: "Asiantuntijahaastattelu - Dr. Chen",
              duration: "45 min • Litterointi...",
              action: "96 % valmis"
            },
            pressConference: {
              title: "Lehdistötilaisuus",
              duration: "1 t 30 min • Valmis",
              action: "Näytä →"
            },
            phoneInterview: {
              title: "Puhelinhaastattelu - Lähde",
              duration: "35 min • Valmis",
              action: "Näytä →"
            }
          }
        }
      },
      problem: {
        title: "The",
        titleHighlight: "Toimittajan litterointiongelma",
        subtitle: 'Muissa palveluissa voit valita, mitkä haastattelut ovat "arvoisia" litteroida',
        problems: {
          uploadLimits: {
            title: "Lähetysrajoitukset tappavat tutkinnat",
            description: "Otter tarjoaa Prossa 10 tiedoston tuontia kuukaudessa. Miten litteroit kolmen viikon tutkivat haastattelut?"
          },
          missingQuotes: {
            title: "Puuttuvat tärkeät lainaukset",
            description: "Jokainen litteroimaton haastattelu voisi sisältää jutun keskeisen lainauksen. Mutta Trint rajoittaa työajan parhaimmillaankin 50 tuntiin kuukaudessa."
          },
          costExplosion: {
            title: "Kustannukset räjähtävät määräaikojen myötä",
            description: "Tutkimuksesi syventyessä transkriptiokustannukset nousevat pilviin. 100 dollarin kuukausittaiset ylitysmaksut tekevät uutisten lukemisen mahdottomaksi."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap Ratkaisu",
          description: "Aito ja rajaton litterointi. Lataa koko tutkimuksesi. Litteroi jokainen haastattelu. Hae kaikista lainauksista välittömästi. Ei isoja kirjaimia, ei rajoituksia, vain journalismia."
        }
      },
      solution: {
        title: "Lopuksi,",
        titleHighlight: "Todellinen vapaus",
        titleSuffix: "toimittajille",
        subtitle: "Lataa kaikki. Litteroi kaikki. Hae kaikkea.",
        solutions: {
          unlimitedUploads: {
            label: "Rajoittamattomat lataukset",
            title: "Lähetä koko tutkimuksesi eränä",
            description: "Ei enää tarvitse valita, mitkä haastattelut litteroidaan. Lataa 50 tiedostoa kerralla. Käsittele kuukausien tallenteet yön yli. Koko tutkintasi litteroituna.",
            points: {
              simultaneousUpload: "Lataa 50 tiedostoa samanaikaisesti",
              noLimits: "Ei kuukausittaisia latausrajoituksia",
              processWhileWrite: "Käsittele kirjoittamisen aikana",
              longRecordings: "10 tunnin tallennukset tuettuja"
            },
            visual: {
              number: "50",
              label: "Tiedostot kerralla"
            }
          },
          instantSearch: {
            label: "Pikahaku",
            title: "Löydä mikä tahansa tarjous sekunneissa",
            description: "Hae kaikista transkriptioistasi välittömästi. Löydä täydellinen lainaus kolmen kuukauden takaa. Älä enää koskaan kadota tärkeitä lauseita muistiinpanoistasi.",
            points: {
              searchAll: "Hae kaikista haastatteluista",
              wordTimestamps: "Sanatason aikaleimat",
              jumpToMoments: "Siirry tarkkoihin hetkiin",
              exportCitations: "Vie viittausten kanssa"
            },
            searchDemo: {
              placeholder: "ilmastopolitiikkaa koskeva lausunto",
              resultsText: "Löytyy neljästä haastattelusta:",
              results: {
                mayorInterview: '"...ilmastopolitiikkamme tulee muuttamaan..."',
                expertPanel: '"...politiikkalausunto osoittaa selvästi..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Ammattimainen tarkkuus",
            title: "96 %:n tarkkuus, jonka voit lainata",
            description: "Saat niin tarkkoja litterointeja, että voit lainata niitä suoraan. Selviää aksenteista, teknisistä termeistä ja nopeista keskusteluista. Täydellinen muotoilu, joka on todella luettava.",
            points: {
              accuracyGuarantee: "96 % tarkkuustakuu",
              handlesAccents: "Käsittelee aksentteja ja murteita",
              smartPunctuation: "Älykkäät välimerkit ja kappaleet",
              speakerIdentification: "Kaiuttimen tunnistus"
            },
            visual: {
              accuracy: "96 %",
              label: "Tarkkuusaste",
              transcript: {
                speaker1: '"Tutkinta paljasti merkittäviä ristiriitaisuuksia taloudellisissa raporteissa."',
                speaker2: '"Voisitko tarkentaa näitä erityisiä eroja?"'
              }
            }
          }
        }
      },
      features: {
        title: "Kaikki a",
        titleHighlight: "Toimittajien tarpeet",
        subtitle: "Ammattimaiset työkalut, jotka kunnioittavat työnkulkuasi",
        featuresList: {
          languages: {
            title: "Yli 100 kieltä",
            description: "Haastattele lähteitä maailmanlaajuisesti 12 pääkielellä 96 %:n tarkkuudella."
          },
          exportFormats: {
            title: "Vientimuodot",
            description: "Word, PDF, SRT, TXT. Yhteensopiva minkä tahansa työnkulun kanssa."
          },
          sourceProtection: {
            title: "Lähteen suojaus",
            description: "Pankkitason salaus. Lähteesi pysyvät luottamuksellisina."
          },
          timestamps: {
            title: "Aikaleimat",
            description: "Napsauta mitä tahansa lainausta siirtyäksesi tarkkaan äänikohtaan."
          },
          teamSharing: {
            title: "Tiimin jakaminen",
            description: "Tee yhteistyötä editorien kanssa. Jaa transkriptioita turvallisesti."
          },
          mobileReady: {
            title: "Mobiilivalmis",
            description: "Lataa puhelimesta. Tarkista transkriptiot missä tahansa."
          },
          smartFormatting: {
            title: "Älykäs muotoilu",
            description: "Automaattiset kappaleet ja välimerkit luettavia transkriptioita varten."
          },
          batchProcessing: {
            title: "Eräkäsittely",
            description: "Lataa 50 tiedostoa kerralla. Käsittele yön aikana nukkuessasi."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Kolmen vuoden työhaastattelut litteroimatta lähetysrajoitusten vuoksi. NeverCap Sain kaiken käsiteltyä yhdessä viikonlopussa. Peli muutti kaiken.",
          name: "Jessican puisto",
          role: "Freelance-toimittaja, entinen Otter-käyttäjä"
        }
      },
      cta: {
        title: "Aloita litterointi",
        titleHighlight: "Ilman rajoja",
        subtitle: "Liity tuhansien toimittajien joukkoon, jotka lopettivat latausten laskemisen ja alkoivat keskittyä itse juttuihin.",
        ctaPrimary: "Kokeile rajattomasti ilmaiseksi →",
        ctaSecondary: "Katso hinnoittelu"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 Sisällöntuottajille",
        title: "Kuvateksti",
        titleHighlight: "Koko kanava",
        titleSuffix: "Laskematta minuutteja",
        subtitle: "Lopeta tekstitysten valitseminen videoille. Käsittele koko YouTube-kirjastosi, luo tekstitykset yli sadalle kielelle ja hae videoita suoraan miltä tahansa alustalta. Ei kuukausirajoituksia, ei latausrajoituksia – vain puhdasta luovaa vapautta.",
        ctaPrimary: "Aloita rajaton tekstitys →",
        ctaSecondary: "Katso, miten se toimii",
        stats: {
          videos: {
            number: "∞",
            label: "Videoita/kuukausi"
          },
          languages: {
            number: "yli 100",
            label: "Kielet"
          },
          accuracy: {
            number: "96 %",
            label: "Tarkkuus"
          },
          platforms: {
            number: "10+",
            label: "Alustat"
          }
        }
      },
      platforms: {
        title: "Hae ja litteroi miltä tahansa alustalta",
        platformNames: {
          youtube: "YouTube",
          facebook: "Facebook",
          twitter: "X (Twitter)",
          dropbox: "Dropbox",
          googleDrive: "Google Drive",
          vimeo: "Vimeo",
          tiktok: "TikTok",
          instagram: "Instagramissa"
        }
      },
      features: {
        title: "Kaikki mitä tarvitset",
        titleHighlight: "Skaalaa sisältöä",
        subtitle: "Ammattimaiset työkalut ilman ammatillisia rajoja",
        oneClickImport: {
          label: "Tuo yhdellä napsautuksella",
          title: "Liitä linkki.",
          titleHighlight: "Hanki transkriptio.",
          description: "Ei enää lataamista ja uudelleenlataamista. Liitä vain YouTube-, TikTok- tai Instagram-linkkisi ja saat välittömät transkriptiot. Käsittele koko kanavasi ruuhka yhdessä viikonlopussa.",
          points: {
            directYoutube: "Suora YouTube-linkin transkriptio",
            multiplePlatforms: "Nouda yli 10 alustalta",
            batchPlaylists: "Koko soittolistojen eräkäsittely",
            autoSync: "Synkronoi automaattisesti kanaviesi kanssa"
          },
          demo: {
            instruction: "Liitä videosi URL-osoite:",
            url: "https://youtube.com/watch?v=...",
            status: "Noudetaan ja litteroidaan..."
          }
        },
        globalReach: {
          label: "Maailmanlaajuinen ulottuvuus",
          title: "Yli 100 kieltä.",
          titleHighlight: "Nolla rajaa.",
          description: "Tavoita maailmanlaajuinen yleisö automaattisella käännöksellä yli 100 kielelle. Luo tekstitykset useille kielille samanaikaisesti. Ei lisämaksuja, ei kuukausittaisia käännösten ylärajoja.",
          points: {
            highAccuracy: "96 %:n tarkkuus 12 pääkielellä",
            unlimitedTranslations: "Rajoittamaton määrä käännöksiä sisältyy hintaan",
            multicultural: "Täydellinen monikulttuuriselle sisällölle",
            autoDetect: "Lähdekielen automaattinen tunnistus"
          },
          visual: {
            number: "yli 100",
            title: "Tuetut kielet",
            subtitle: "Käännä kerran, tavoita kaikki"
          }
        },
        flexibleExport: {
          label: "Joustava vienti",
          title: "Jokainen muoto",
          titleHighlight: "Tarvitset",
          description: "Vie tiedostot työnkulkuusi sopivassa muodossa. SRT-tiedostoista YouTubelle, VTT-tiedostoihin web-soittimille tai muokattaviin dokumentteihin skripteille. Kaikki viennit ovat rajattomia, kaikki sisältyy jokaiseen pakettiin.",
          points: {
            videoFormats: "SRT ja VTT videoalustoille",
            editingFormats: "DOCX- ja PDF-tiedostot muokkausta varten",
            dataAnalysis: "CSV-tiedosto data-analyysiä varten",
            simpleScripts: "TXT yksinkertaisille skripteille"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "Tekstiviesti",
            docx: "DOCX-tiedosto",
            pdf: "PDF-tiedosto",
            csv: "CSV-tiedosto"
          }
        }
      },
      workflow: {
        title: "Lähetyksestä kohteeseen",
        titleHighlight: "Julkaistu",
        titleSuffix: "minuuteissa",
        subtitle: "Nopein tapa tekstittää koko sisältökirjastosi",
        steps: {
          pasteLinks: {
            title: "Liitä linkit",
            description: "Lisää YouTube-, TikTok- tai minkä tahansa videon linkki. Tai lataa tiedostoja suoraan."
          },
          autoTranscribe: {
            title: "Automaattinen transkriptio",
            description: "Tekoäly prosessoi 96 % tarkkuudella. Käsittelee aksentit ja useita puhujia."
          },
          editTranslate: {
            title: "Muokkaa ja käännä",
            description: "Täydelliset tekstityksesi. Käännä yli 100 kielelle välittömästi."
          },
          exportPublish: {
            title: "Vie ja julkaise",
            description: "Lataa missä tahansa muodossa. Lähetä alustallesi. Valmis!"
          }
        }
      },
      testimonials: {
        title: "Luojat ovat",
        titleHighlight: "Vaihtaminen päivittäin",
        subtitle: "Rajallisista suunnitelmista rajoittamattomaan vapauteen",
        carlos: {
          textBefore: "Teen opetusmateriaalia espanjaksi. NeverCap litteroi täydellisesti ja",
          textAfter: "laajemman tavoittavuuden saavuttamiseksi. Ei rajoja, vain kasvua. Kanavani katselukerrat kolminkertaistuivat monikielisten tekstitysten lisäämisen jälkeen.",
          highlight: "kääntää englanniksi",
          name: "Carlos Martinez",
          role: "YouTube Educator • 250 000 tilaajaa"
        },
        sarah: {
          textBefore: "Description halusi 30 dollaria/kk",
          textAfter: "Minulla on yli 500 videota käsiteltävinä. NeverCap Sain kaiken käsiteltyä yhdessä viikonlopussa. Tekstitysten tuoma hakukoneoptimoinnin tehostus maksoi itsensä takaisin ensimmäisen kuukauden aikana.",
          highlight: "30 tuntia",
          name: "Sarah Lee",
          role: "Elämäntyylivloggaaja • 180 000 tilaajaa"
        },
        jake: {
          textBefore: "The",
          textAfter: "ominaisuus on mullistava. En enää lataa mitään. Liitä, litteroi, valmis. Podcast-leikkeideni käsittely TikTokia varten ei ole koskaan ollut helpompaa.",
          highlight: "suora YouTube-haku",
          name: "Jake Wilson",
          role: "Podcast-juontaja • Top 1%:n tekijöistä"
        },
        yuki: {
          textBefore: "Luon sisältöä viidellä kielellä. Muut palvelut veloitetaan.",
          textAfter: ". NeverCap antaa minulle rajattomasti käännöksiä. Kansainvälinen yleisöni kasvoi 400 % siitä lähtien, kun aloin käyttää kunnollisia natiiveja tekstityksiä.",
          highlight: "käännöstä kohden",
          name: "Yuki Tanaka",
          role: "Pelisisällöntuottaja • 500 000 tilaajaa"
        }
      },
      cta: {
        title: "Koko kanavasi. Tekstitettynä. Tänään.",
        subtitle: "Liity yli 50 000 sisällöntuottajan joukkoon, jotka lopettivat minuuttien laskemisen ja alkoivat luoda",
        button: "Aloita rajaton tekstitys →"
      }
    },
    Researchers: {
      heroBadge: "Rakennettu akateemista huippuosaamista varten",
      heroTitle1: "Litteroi jokainen haastattelu.",
      heroTitle2: "Analysoi kaikki tietosi.",
      heroSubtitle: "Lopeta kohderyhmien litteroinnin valitseminen. Käsittele kaikki laadullinen datasi 96 %:n tarkkuudella ja virheettömällä puhujan tunnistuksella – jopa 20 osallistujan puhuessa toistensa päälle.",
      heroCtaPrimary: "Kokeile ilmaiseksi – ei luottokorttia",
      heroCtaSecondary: "Katso, miten se toimii",
      statsInterviewHours: "Haastattelutunnit",
      statsAccuracy: "Tarkkuus",
      statsSpeakersId: "Kaiuttimien tunnus",
      statsCompliant: "Yhteensopiva",
      problemTitle: "Tutkimuksen transkriptio-ongelma",
      problemSubtitle: 'Muissa palveluissa voit valita, mitkä tiedot ovat "kannattavia" litteroinnissa',
      problemCard1Title: "Lähetysrajoitukset tappavat tutkimukset",
      problemCard1Desc: "Otter antaa sinulle kolme elinikäistä tuontia. Miten litteroit 200 tuntia kohderyhmäkeskusteluja?",
      problemCard2Title: "Puuttuvat kriittiset tiedot",
      problemCard2Desc: "Jokainen litteroimaton haastattelu voi sisältää läpimurtoisia oivalluksia. Rev veloittaa kuitenkin vähintään 2 dollaria minuutilta.",
      problemCard3Title: "Avustusrahat katoavat",
      problemCard3Desc: "Datan kasvaessa transkriptiokustannukset räjähtävät. 500 dollaria kohderyhmää kohden tekee skaalaamisesta mahdotonta.",
      solutionTitle: "Ratkaisu NeverCap",
      solutionDesc: "Aito ja rajaton litterointi. Lataa koko tutkimuksesi. Litteroi jokainen haastattelu. Analysoi kaikki tietosi. Ei ylärajoja, ei rajoituksia, vain tutkimusta.",
      feature1Label: "Ei rajoja",
      feature1Title: "Käsittele koko opiskelusi yhdellä kertaa",
      feature1Desc: 'Lataa kaikki 200 tuntia haastatteluja tänä iltana. Herää lukemaan valmiita, haettavia litterointeja. Ei kuukausittaisia rajoituksia, ei tiedostokohtaisia rajoituksia, ei "kohtuullisen käytön" hölynpölyä.',
      feature1Point1: "Lähetä 50 tiedostoa kerralla eränä",
      feature1Point2: "Käsittele pitkittäistutkimukset kokonaan",
      feature1Point3: "Ei tallennusrajoituksia transkriptioille",
      feature1Point4: "Vienti NVivoon, MAXQDAan ja Atlas.ti:hin",
      feature1Visual1: "Rajoittamattomat tunnit",
      feature1Visual2: "Sama hinta riippumatta siitä, onko kyseessä 10 vai 10 000 tuntia",
      feature2Label: "Älykäs tekoäly",
      feature2Title: "Kynsien kohderyhmät joka kerta",
      feature2Desc: "Tekoälymme seuraa jopa 20 puhujaa, vaikka he puhuisivat päällekkäin, keskeyttäisivät toisensa tai kaikki soittaisivat samaan aikaan. Jokainen ääni tallennetaan ja nimetään oikein.",
      feature2Point1: "20 puhujan tunnistus",
      feature2Point2: "Käsittelee ylikuulumista ja keskeytyksiä",
      feature2Point3: "Kaiuttimien nimet, joita voit nimetä uudelleen",
      feature2Point4: "Aikaleima jokaiselle sanalle",
      conversationParticipant1: "Osallistuja 1",
      conversationText1: "Suurin este, jonka kohtaamme, on ehdottomasti hoidon hinta...",
      conversationParticipant2: "Osallistuja 2",
      conversationText2: "Ehdottomasti, mutta lisäisin, että käyttöoikeus on—",
      conversationParticipant3: "Osallistuja 3",
      conversationText3: "– Anteeksi keskeytys, mutta liikenne on myös valtava asia.",
      conversationText4: "Kyllä! Juuri sitä olin juuri sanomassa.",
      conversationParticipant4: "Osallistuja 4",
      conversationText5: "Maaseudulla kyse on kaikista kolmesta: kustannuksista, saavutettavuudesta JA liikenteestä.",
      feature3Label: "Tarkkuus",
      feature3Title: "96 %:n tarkkuus, joka pitää pintansa",
      feature3Desc: "Käsittelee teknistä ammattikieltä, paksuja aksentteja ja alakohtaista terminologiaa kuin ammattilainen. Riittävän tarkka julkaistavaksi, vertaisarvioitavaksi ja väitöskirjakomitean käyttöön.",
      feature3Point1: "Lääketieteellinen ja tieteellinen terminologia",
      feature3Point2: "Yli 100 kieltä ja murretta",
      feature3Point3: "Sanatarkka ja siisti lukutila",
      feature3Point4: "Muokkaa ja vie missä tahansa muodossa",
      feature3Visual1: "Tutkimustason tarkkuus",
      feature3Visual2: "Yli 50 000 tutkijan luottama",
      feature4Label: "Turvallisuus",
      feature4Title: "IRB-valmis suojaus",
      feature4Desc: "Arkaluontoiset tutkimustietosi on suojattu yritystason tietoturvalla. GDPR-yhteensopiva, HIPAA-valmiit vaihtoehdot ja täydelliset auditointilokit IRB-vaatimusten mukaisesti.",
      feature4Point1: "Päästä päähän -salaus",
      feature4Point2: "GDPR- ja CCPA-yhteensopiva",
      feature4Point3: "Automaattisen poiston käytännöt",
      feature4Point4: "Turvallinen tiimityöskentely",
      useCasesTitle: "Täydellinen jokaiselle tutkimusmenetelmälle",
      useCasesSubtitle: "Etnografiasta kliinisiin tutkimuksiin",
      useCase1Title: "Fokusryhmät",
      useCase1Desc: "Käsittele 8–20 osallistujaa, joilla on päällekkäisiä puheita. Täydellinen puhujan tunnistus jopa kiivaissa keskusteluissa. Vie suoraan laadulliseen analyysiohjelmistoon.",
      useCase2Title: "Syvälliset haastattelut",
      useCase2Desc: "Käsittele satoja henkilökohtaisia haastatteluja samanaikaisesti. Säilytä yhdenmukaisuus koko aineistossasi. Hae kaikista transkriptioista välittömästi.",
      useCase3Title: "Kliininen tutkimus",
      useCase3Desc: "HIPAA-yhteensopivat vaihtoehdot potilashaastatteluihin. Tarkka lääketieteellisen terminologian transkriptio. Arkaluonteisten terveystietojen turvallinen käsittely.",
      useCase4Title: "Etnografiset tutkimukset",
      useCase4Desc: "Kenttääänitykset luonnollisissa olosuhteissa. Käsittelee taustamelua ja useita puhujia. Tuki yli 100 kielelle ja murteelle.",
      useCase5Title: "Suullisen historian projektit",
      useCase5Desc: "Säilytä kokonaisia arkistoja rajoituksetta. Luo haettavia historiallisia tietoja. Täydellinen pitkittäis- ja sukupolvitutkimuksiin.",
      useCase6Title: "Väitöskirjatutkimus",
      useCase6Desc: "Opiskelijaystävällinen hinnoittelu ja kaikki ominaisuudet. Käsittele koko tietojoukkosi edullisesti. Noudata tiukkoja aikatauluja eräkäsittelyn avulla.",
      testimonialTitle: "Johtavien tutkijoiden luottama",
      testimonialText: "Tutkimustiimillämme oli 200 tuntia ryhmäkeskustelujen tallenteita yhteisöterveystutkimuksestamme. Muut palvelut halusivat meidän valitsevan itse, mitkä istunnot litteroidaan kustannusten vuoksi. NeverCap antoi meidän käsitellä kaiken viikonlopun aikana. 20 puhujan tunnistus itse asiassa toimi – jopa sotkuisimpien keskustelujemme aikana, joissa kaikki puhuivat yhtä aikaa. Tämä työkalu on muuttanut täysin tapamme käsitellä laadullista dataa.",
      testimonialAuthorName: "Tohtori Sarah Chen",
      testimonialAuthorRole: "Johtava tutkija, Kansanterveyslaitos",
      ctaTitle: "Lopeta analysoitavien tietojen valitseminen",
      ctaSubtitle: "Liity yli 50 000 tutkijan joukkoon, jotka litteroivat kaiken",
      ctaButton: "Kokeile NeverCap ilmaiseksi"
    },
    BusinessTeams: {
      heroBadge: "Liiketoimintatiimeille",
      heroTitle1: "Kokouksen tallenne tehty",
      heroTitle2: "Vaivaton",
      heroSubtitle: "Tallenna kokoukset suoraan selaimeesi tai lataa äänitiedostoja välittömästi. Luo haettavia arkistoja rajattomasta määrästä keskusteluja. Älä koskaan enää menetä tärkeitä keskusteluja todella rajattoman transkription avulla.",
      heroCtaPrimary: "Aloita tallennus nyt →",
      heroCtaSecondary: "Katso, miten se toimii",
      recordingStatus: "Tallennetaan...",
      statsMeetingMinutes: "Kokouksen pöytäkirja",
      statsLiveRecording: "Live-tallennus",
      statsSpeakerID: "Kaiuttimen tunnus",
      statsInstantUpload: "Pikalataus ja -käsittely",
      featuresTitle: "Kaikki mitä tiimit tarvitsevat tiedon keräämiseen",
      featuresSubtitle: "Live-tallennuksesta välittömiin latauksiin, olemme poistaneet kaikki kitkakohdat",
      feature1Title: "Tallenna suoraan selaimeesi",
      feature1Desc: "Ei latauksia, ei lisäosia. Aloita tallennus välittömästi yhdellä napsautuksella. Täydellinen äänenlaatu, automaattinen puhujan tunnistus ja reaaliaikainen litterointi puhuessasi.",
      feature1Benefit1: "Yhden napsautuksen tallennus aloitetaan",
      feature1Benefit2: "Ei ohjelmistoasennusta",
      feature1Benefit3: "Toimii millä tahansa laitteella",
      feature1Benefit4: "Reaaliaikainen transkriptio",
      feature1Visual1: "Klikkaa ja tallenna",
      feature1Visual2: "Ei asennusta vaadita",
      feature2Title: "Lataa mikä tahansa äänitiedosto välittömästi",
      feature2Desc: "Onko sinulla tallenteita Zoomista, Teamsista tai puhelimestasi? Lataa ne välittömästi. Tuki kaikille tärkeimmille ääni- ja videomuodoille. Käsittele useita tiedostoja samanaikaisesti ilman odottelua.",
      feature2Benefit1: "Tukee: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Erälatausmahdollisuus",
      feature2Benefit3: "10 tunnin tiedostot tuettuja",
      feature2Benefit4: "Prosessi työskentelyn aikana",
      feature2Visual1: "Vedä ja pudota tiedostoja",
      feature3Title: "Rakennettu tiimityöskentelyyn",
      feature3Desc: "Jaa litteroinnit tiimisi kanssa välittömästi. Kuuntele tallenteita yhdessä, vie litteroinnit useissa eri muodoissa ja varmista, että kaikki pysyvät ajan tasalla haettavien kokousarkistojen avulla.",
      feature3Benefit1: "Jaa transkriptioita kenen tahansa kanssa",
      feature3Benefit2: "Kuuntele alkuperäisiä äänitteitä",
      feature3Benefit3: "Vie transkriptioita useissa eri muodoissa",
      feature3Benefit4: "Koko tiimin haettavat arkistot",
      feature3Visual1: "Tiimin jäsenet",
      feature3Visual2: "Rajatonta yhteistyötä",
      feature4Title: "Löydä mikä tahansa keskustelu välittömästi",
      feature4Desc: "Hae kaikista kokouksistasi kerralla. Löydä ratkaiseva päätös viime neljännekseltä tai asiakkaan vaatimus kuukausien takaa. Tekoälypohjainen haku ymmärtää kontekstia, ei vain avainsanoja.",
      feature4Benefit1: "Hae kaikista kokouksista kerralla",
      feature4Benefit2: "Tekoäly ymmärtää kontekstia",
      feature4Benefit3: "Suodata puhujan tai päivämäärän mukaan",
      feature4SearchPlaceholder: "🔍 Hae: 'neljännen neljänneksen liikevaihtotavoitteet'",
      feature4SearchResults: "Löytyy kolmesta tapaamisesta:",
      feature4Meeting1: "Myyntisuunnittelu - 15. lokakuuta",
      feature4Meeting1Text: '"...tavoitteet neljännelle neljännekselle asetettu 2 miljoonaan dollariin..."',
      feature4Meeting2: "Hallituksen kokous - 20. lokakuuta",
      feature4Meeting2Text: '"...neljännen neljännen neljänneksen liikevaihtoennusteet..."',
      workflowTitle: "Tallentamisesta käytännön hyödyksi",
      workflowSubtitle: "Saumaton työnkulku, joka tallentaa jokaisen tärkeän hetken",
      workflowStep1Title: "Tallenna tai lataa",
      workflowStep1Desc: "Aloita live-äänitys tai lataa olemassa olevia äänitiedostoja",
      workflowStep2Title: "Automaattinen transkriptio",
      workflowStep2Desc: "Tekoäly litteroi 96 %:n tarkkuudella minuuteissa",
      workflowStep3Title: "Tee yhteistyötä",
      workflowStep3Desc: "Jaa, kommentoi ja poimi toimintokohteita",
      workflowStep4Title: "Hae ja analysoi",
      workflowStep4Desc: "Löydä tietoa kaikista kokouksistasi",
      testimonialsTitle: "Joukkueiden rakkaus NeverCap",
      testimonialsSubtitle: "Katso, miten yritykset muuttavat kokouskulttuuriaan",
      testimonial1Text: '"Siirryimme tärkeiden yksityiskohtien puuttumisesta siihen, että meillä oli jokaisesta keskustelusta haettava arkisto. Suora tallennustoiminto tarkoittaa, että emme koskaan unohda tallentaa tärkeitä keskusteluja."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Tuotepäällikkö, TechCorp",
      testimonial2Text: '"Otter rajoitti tiedostojen lataukset kymmeneen kuukaudessa. Nyt lataamme kaikki asiakaspuhelumme välittömästi. Se on mullistava asia myyntitiimimme seurannassa."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Myyntijohtaja, ConsultPro",
      testimonial3Text: '"Mahdollisuus hakea kuukausien kokousten joukosta pelasti meidät tarkastuksemme aikana. Löysimme jokaisen päätöksen ja hyväksynnän sekunneissa."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "Toimitusjohtaja, FinanceHub",
      ctaTitle: "Lopeta tärkeiden keskustelujen menettäminen",
      ctaSubtitle: "Liity tuhansiin tiimeihin, jotka tallentavat jokaisen kokouksen rajoittamattomalla transkriptiolla",
      ctaButton: "Aloita tallennus ilmaiseksi →"
    },
    Educators: {
      heroBadge: "Opettajille ja opettajille",
      heroTitle1: "Muunna mikä tahansa opetusvideo",
      heroTitle2: "Esteetön sisältö",
      heroSubtitle: "Liitä vain YouTube-linkkejä saadaksesi välittömiä transkriptioita automaattisesti luoduilla tekstityksillä. Muunna luennot, tutoriaalit ja koulutusvideot haettavaksi ja saavutettavaksi sisällöksi, josta jokainen opiskelija voi oppia.",
      heroCtaPrimary: "Kokeile ilmaiseksi – ei luottokorttia",
      heroCtaSecondary: "Katso demo",
      stats1Number: "1-napsautus",
      stats1Label: "YouTube-transkriptio",
      stats2Number: "yli 100",
      stats2Label: "Tuetut kielet",
      stats3Number: "∞",
      stats3Label: "Rajoittamaton määrä videoita",
      stats4Number: "96 %",
      stats4Label: "Tarkkuusaste",
      featuresTitle: "Kaikki mitä opettajat tarvitsevat videoiden litterointiin",
      featuresSubtitle: "Tee kaikesta sisällöstäsi saavutettavaa YouTube-luennoista tallennettuihin oppitunteihin",
      feature1Title: "Pikalinkit YouTubeen ja alustoille",
      feature1Desc: "Liitä vain mikä tahansa videolinkki ja saat välittömät transkriptiot. Toimii YouTuben, Vimeon, Facebookin, X:n (Twitterin), TikTokin, Instagramin, Dropboxin, Google Driven ja muiden kanssa. Ei lataamista, ei odottelua.",
      feature1Point1: "Suora linkki transkriptioon - ei latauksia tarvita",
      feature1Point2: "Tuki kaikille tärkeimmille alustoille",
      feature1Point3: "Käsittele kokonaisia soittolistoja kerralla",
      feature1Point4: "Toimii yksityisten videoiden kanssa (luvalla)",
      feature2Title: "Luo automaattisesti tekstitykset ja tekstitykset",
      feature2Desc: "Luo välittömästi tarkat tekstitykset kaikkiin opetusvideoihisi. Tee sisällöstä helppokäyttöistä kuulovammaisille oppilaille, muille kuin äidinkielisille puhujille tai niille, jotka mieluummin lukevat mukana.",
      feature2Point1: "SRT-, VTT- ja TXT-vientimuodot",
      feature2Point2: "Sanatason aikaleimat täydelliseen synkronointiin",
      feature2Point3: "Muokkaa ja mukauta kuvatekstejä helposti",
      feature2Point4: "Lataa suoraan takaisin YouTubeen",
      feature2Visual1: "Kielten käännökset",
      feature2Visual2: "Tee sisällöstäsi maailmanlaajuisesti saatavilla",
      feature3Title: "Järjestä kurssien ja luokkien mukaan",
      feature3Desc: "Luo kansioita järjestääksesi opintosuoritusotteesi kurssin, aiheen tai lukukauden mukaan. Pidä kaikki oppimateriaalisi siististi luokiteltuna ja helposti haettavissa. Rakenna kattava kirjasto esteettömiä kurssimateriaaleja.",
      feature3Point1: "Luo rajattomasti kansioita ja alikansioita",
      feature3Point2: "Tagi videoita aiheen tai vaikeustason mukaan",
      feature3Point3: "Useiden transkriptioiden joukkojärjestely",
      feature3Point4: "Hae kaikesta sisällöstäsi välittömästi",
      feature3VisualTitle: "Kurssikirjastosi",
      feature3Folder1: "Matematiikan perusteet",
      feature3Folder2: "Fysiikan luennot",
      feature3Folder3: "Biologian laboratoriovideot",
      feature3Folder4: "Historiadokumentit",
      feature3Folder5: "Kielten oppiminen",
      feature4Title: "Vie missä tahansa tarvitsemassasi muodossa",
      feature4Desc: "Lataa opintosuoritusotteet TXT-, DOCX- tai PDF-muodossa. Täydellinen opiskeluoppaiden, luentomuistiinpanojen tai helppokäyttöisten kurssimateriaalien luomiseen. Jaa opiskelijoiden kanssa tai integroi oppimisjärjestelmääsi.",
      feature4Point1: "TXT yksinkertaista tekstinmuokkausta varten",
      feature4Point2: "DOCX muotoilluille dokumenteille",
      feature4Point3: "PDF-tiedosto helppoon jakamiseen ja tulostamiseen",
      feature4Point4: "Useiden tiedostojen joukkovienti kerralla",
      workflowTitle: "Miten se toimii",
      workflowSubtitle: "Videolinkistä saavutettavaan litterointiin muutamassa minuutissa",
      workflowStep1Title: "Liitä linkki",
      workflowStep1Desc: "Kopioi minkä tahansa koulutusvideon URL-osoite ja liitä se",
      workflowStep2Title: "Automaattinen transkriptio",
      workflowStep2Desc: "Tekoäly litteroi 96 % tarkkuudella",
      workflowStep3Title: "Luo tekstitykset",
      workflowStep3Desc: "Luo automaattisesti täydellisesti synkronoidut tekstitykset",
      workflowStep4Title: "Jaa ja vie",
      workflowStep4Desc: "Lataa tai jaa oppilaiden kanssa",
      useCasesTitle: "Täydellinen jokaiseen koulutustarpeeseen",
      useCasesSubtitle: "Katso, miten kouluttajat käyttävät NeverCap-merkkiä oppimisen tehostamiseen",
      useCase1Title: "Tallennetut luennot",
      useCase1Text: "Litteroi kokonaisia lukukausien tallennettuja luentoja. Opiskelijat voivat hakea tiettyjä aiheita, kerrata keskeisiä käsitteitä ja koskaan jäädä paitsi tärkeistä tiedoista.",
      useCase2Title: "Verkkokurssit",
      useCase2Text: "Tee verkkokursseistasi kansainvälisten opiskelijoiden saavutettavia yli 100 kielelle käännetyillä kursseilla. Lisää ilmoittautumisprosenttia ja tyytyväisyyttä.",
      useCase3Title: "Opiskelumateriaalit",
      useCase3Text: "Muunna video-opetusohjelmat luettaviksi opiskeluoppaiksi. Täydellinen opiskelijoille, jotka haluavat lukea tai joiden on tarkasteltava sisältöä nopeasti.",
      useCase4Title: "Saavutettavuusvaatimustenmukaisuus",
      useCase4Text: "Täytä saavutettavuusvaatimukset tarjoamalla tekstitykset ja transkriptiot kaikelle videosisällölle. Varmista kaikkien opiskelijoiden yhtäläinen pääsy sisältöön.",
      useCase5Title: "Käänteinen luokkahuone",
      useCase5Text: "Jaa videoluentoja transkriptioineen ennen tuntia. Opiskelijat voivat kertaa luentoja omaan tahtiinsa ja tulla valmistautuneina keskusteluihin.",
      useCase6Title: "Tutkimus ja viittaukset",
      useCase6Text: "Auta oppilaita siteeraamaan videolähteitä tarkasti aikaleimojen avulla. Täydellinen tutkimusprojekteihin ja akateemisiin papereihin.",
      testimonialTitle: "Yli 50 000 kouluttajan luottama",
      testimonialSubtitle: "Katso, miksi opettajat ympäri maailmaa valitsevat NeverCap",
      testimonialText: '"Olen käyttänyt NeverCap-palvelua koko YouTube-kanavani matematiikan tutoriaalien litterointiin. Se, mikä ennen kesti viikkoja muissa palveluissa, vie nyt tunteja. Mahdollisuus liittää linkkejä suoraan ja saada välittömät litteroinnit on mullistanut tapani luoda saavutettavaa sisältöä. Kansainväliset opiskelijani rakastavat erityisesti monikielisiä tekstityksiä!"',
      testimonialAuthorName: "Professori Karen Mitchell",
      testimonialAuthorRole: "Matematiikan professori, verkko-opettaja",
      ctaTitle: "Tee kaikesta oppimateriaalistasi saavutettavaa",
      ctaSubtitle: "Liity tuhansien kouluttajien joukkoon, jotka käyttävät todella rajattomasti transkriptiota",
      ctaButton: "Kokeile NeverCap ilmaiseksi"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "Lataa YouTube-videoita MP4-muodossa",
        "placeholder": "Hae tai liitä Youtube-linkkisi tähän",
        "clear_icon": "Tyhjennä syöte",
        "Download": "Lataa",
        "loading_text": "Latauslinkkiä käsitellään. Pysy sivulla.",
        "howToDownload": "Miten ladata?",
        "tutorial": "Katso tutoriaali"
      },
      part2: {
        "title": "Näin muutat YouTube-videon ladattavaksi MP4-tiedostoksi kolmessa helpossa vaiheessa",
        "steps": [
                {
                  title: "Kopioi URL-osoite",
                  content: "Avaa haluamasi YouTube-video ja kopioi linkki selaimesi osoiteriviltä."
                },
                {
                  title: "Liitä linkki",
                  content: "Siirry videoiden lataustyökaluusi ja liitä URL-osoite sen syöttökenttään."
                },
                {
                  title: "Lataa MP4-tiedosto",
                  content: "Kun tiedosto on käsitelty, tallenna se painamalla latauspainiketta."
                }
              ]
      },
      part3: {
        content: [
                "Oletko koskaan huomannut, että sinun täytyy katsoa YouTube-videoita offline-tilassa?",
                "Olitpa sitten menossa metrolla, lentämässä lentokoneella, opiskelemassa tärkeää tutoriaalia, syventymässä taitoja kehittävään sisältöön tai arkistoimassa tärkeää videomateriaalia, luotettavan offline-yhteyden saaminen on yleinen turhauttava ongelma. Tässä latausohjelmamme loistaa.",
                "Latausohjelman avulla voit muuntaa YouTube-videoita nopeasti ja helposti MP4-muotoon ladattavaksi. Tallenna ne laitteellesi ja katso niitä milloin tahansa.",
                "Prosessi on nopea, yksinkertainen ja vaivaton. Kun olet ladannut videon, voit nauttia suosikkivideoistasi milloin ja missä tahansa – internetiä ei tarvita."
              ]
      },
      part4: {
        content: ["Tässä ovat viisi tärkeintä lataamisen etua", "YouTube-videot MP4-tiedostoina"],
        list: [
                {
                  title: "Säästä datakuluissa:",
                  content: "YouTube-videoiden katselu kuluttaa yleensä huomattavasti mobiilidataa. Lataamalla videon offline-katselua varten voit välttää nämä tarpeettomat kustannukset."
                },
                {
                  title: "Katso missä ja milloin tahansa:",
                  content: "Nauti videoistasi saumattomasti, jopa katkonaisella internetyhteydellä. Ei enää puskurointihuolia."
                },
                {
                  title: "Helppo arkistointi ja säilytys:",
                  content: "Videoiden tallentaminen MP4-muotoon helpottaa oman kokoelman rakentamista, erityisesti sisällölle, jota pidät todella arvokkaana tai tärkeänä."
                },
                {
                  title: "Yksinkertaisempi jakaminen:",
                  content: "MP4-tiedoston jakaminen on paljon kätevämpää kuin linkin lähettäminen. Voit lähettää videotiedoston suoraan sovellusten, kuten WhatsAppin tai Instagramin, kautta, jolloin YouTuben avaamisen ei tarvitse ylimääräistä vaihetta."
                },
                {
                  title: "Välitön katselu, jaetut hetket:",
                  content: "Haluatko innolla näyttää suosikkivideosi lähellä oleville ystäville tai perheenjäsenille? Ladatun MP4-tiedoston avulla voitte kaikki katsoa sen sujuvasti yhdessä heti, ilman kiusallisia taukoja latautumista odotellessa."
                }
              ]
      },
      part5: {
        title: "Miksi latausohjelmamme erottuu joukosta",
        cards: [
                {
                  title: "Yhden napsautuksen helppous",
                  content: "Vaivaton asennus ja intuitiivinen käyttö."
                },
                {
                  title: "Salamannopea – rajaton",
                  content: "Muunna ja lataa huippunopeudella – ei ylärajoja, ei rajoituksia."
                },
                {
                  title: "Muunna lennossa",
                  content: "Käsittele tiedostosi välittömästi, ei odottelua."
                },
                {
                  title: "Ei mainoksia, ei häiriötekijöitä",
                  content: "Nauti selkeästä käyttöliittymästä ilman ponnahdusikkunoita, bannereita tai keskeytyksiä – vain saumatonta videoiden muuntamista."
                },
                {
                  icon: "5",
                  color: "#DEE5FF",
                  title: "Alkuperäinen laatu taattu",
                  content: "Latauksesi säilyttävät lähdevideon täyden resoluution pikselintarkkaa toistoa varten joka kerta."
                },
                {
                  icon: "6",
                  color: "#DEF6EE",
                  title: "Toimii missä tahansa",
                  content: "Täysin yhteensopiva minkä tahansa selaimen kanssa, millä tahansa laitteella."
                }
              ]
      },
      part6: {
        title: ["Maksimoi YouTube-videoiden latausmääräsi", "Lataajan kanssa"],
        content: [
                "Vaivaton YouTube-muunnos MP4-muotoon: nopea, yksinkertainen ja ilmainen.",
                "Siinä me olemme erinomaisia. Käyttäjäystävällinen käyttöliittymämme on suunniteltu kaikille – teknisiä taitoja ei tarvita. Kokemustasostasi riippumatta voit muuntaa videoita välittömästi. Rekisteröitymistä ei vaadita: Saat juuri sen, mitä tarvitset, heti.",
                "Voit olla varma – lataamasi MP4-tiedostot säilyttävät alkuperäisen videolaadun ja -selkeyden, täsmälleen sellaisena kuin katsoit ne YouTubessa.",
                "Toimii kaikkialla, missä sinäkin. Täysin yhteensopiva kaikkien tärkeimpien alustojen ja laitteiden kanssa. Käytitpä sitten Windowsia, macOS:ää, Linuxia, Androidia tai iOS:ää – älypuhelinta, tablettia tai pöytätietokonetta – voit ladata videoita saumattomasti."
              ]
      },
      part7: {
        title: "Keskeisiä kysymyksiä YouTube-videoiden lataamisesta",
        list: [
                {
                  question: "Voinko ladata YouTube-videon, jos se on tekijänoikeuksin suojattu?",
                  answer: "Tekijänoikeuksilla suojattujen YouTube-videoiden lataaminen ilman tekijänoikeuden omistajan lupaa on laitonta."
                },
                {
                  question: "Onko tämä lataustyökalu turvallinen?",
                  answer: "Kyllä, se on turvallinen ja luotettava. Emme vaadi käyttäjiltä mitään henkilökohtaisia tietoja ja ryhdymme tehokkaisiin toimiin viruksia vastaan. Muistutamme sinua aina olemaan varovainen ladatessasi tiedostoja internetistä: vältä napsauttamasta epäilyttäviä linkkejä tai lataamasta kyseenalaisia tiedostoja."
                },
                {
                  question: "Mitä kieliä YouTube MP4-tiedostoiksi lataaminen tukee?",
                  answer: "Palvelumme tukee YouTube-videoiden lataamista kaikilla suosituilla kielillä."
                },
                {
                  question: "Mitkä tekijät vaikuttavat YouTube-videon lataamiseen kuluvaan aikaan?",
                  answer: "Vaikka varmistammekin nopeimman mahdollisen latauskokemuksen, latausaikaan vaikuttavat myös tekijät, kuten videon pituus ja internetyhteytesi nopeus."
                },
                {
                  question: "Kun lataan MP4-videon älypuhelimellani, minne se tallennetaan?"
                },
                {
                  question: "Heikentääkö YouTube-videon lataaminen MP4-muodossa videon laatua?",
                  answer: "Ei. YouTube-videoiden lataaminen MP4-muodossa työkalumme avulla säilyttää alkuperäisen videon laadun. Muunnosprosessi säilyttää lähteen laadun, mikä varmistaa, että katselukokemuksesi on sama kuin YouTubessa."
                }
              ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Alan johtavaa tekoälyteknologiaa",
      "title": "Noin",
      "highlighted_text": "NeverCap",
      "description": "Missiomme on tarjota tarkimpia ääni- ja videotranskriptiopalveluita. Hyödyntämällä alan johtavaa tekoälyteknologiaa saavutamme yli 96 %:n transkriptiotarkkuuden. Joillakin tärkeimmillä kielillä voimme teknisen optimoinnin avulla saavuttaa jopa 99 %:n tarkkuuden."
    },
    Stats: {
      "title": "Meidän",
      "highlighted_text": "Vaikutus",
      "subtitle": "Huippuluokan tekoälyteknologian avulla tehostetaan globaalia viestintää",
      "metrics": [
            {
              "value": "96%+",
              "label": "Tarkkuusaste",
              "description": "Alan johtavaa transkriptiotarkkuutta edistyneen tekoälyn avulla"
            },
            {
              "value": "yli 100",
              "label": "Tuetut kielet",
              "description": "Puhutun sanan tunnistus globaalille sisällölle"
            },
            {
              "value": "249+",
              "label": "Käännöskielet",
              "description": "Käännä litteroitu teksti käytännössä mille tahansa kielelle"
            }
          ]
    },
    Mission: {
      "title": "Miksi valita",
      "highlighted_text": "NeverCap",
      "subtitle": "Uskomme kielimuurien murtamiseen ja sisällön saavutettavuuden varmistamiseen kaikille",
      "features": [
            {
              "icon": "🎯",
              "title": "Vertaansa vailla oleva tarkkuus",
              "description": "Tekoälymallejamme parannetaan jatkuvasti, jotta ne tuottaisivat yli 96 %:n transkriptiotarkkuuden. Jotkin tärkeimmät kielet saavuttavat jopa 99 %:n tarkkuuden edistyneen optimoinnin avulla."
            },
            {
              "icon": "🌍",
              "title": "Globaali kielituki",
              "description": "Tuki yli 100 kielelle puhutun sanan tunnistuksessa ja käännösominaisuudet yli 249 kielelle, mikä tekee sisällöstäsi todella globaalia."
            },
            {
              "icon": "⚡",
              "title": "Salamannopea käsittely",
              "description": "Käsittele tuntikausia ääni- ja videosisältöä minuuteissa, ei tunneissa. Optimoitu tekoälyprosessimme varmistaa, että saat transkriptiosi nopeasti laadusta tinkimättä."
            },
            {
              "icon": "🔒",
              "title": "Yritystason tietoturva",
              "description": "Tietoturvasi on meille ensisijaisen tärkeää. Käytämme alan standardien mukaista salausta ja noudatamme maailmanlaajuisia tietosuojamääräyksiä pitääksemme sisältösi turvassa ja luottamuksellisena."
            }
          ]
    },
    Company: {
      "title": "Yritys",
      "highlighted_text": "Tiedot",
      "subtitle": "Ota meihin yhteyttä, jos sinulla on kysyttävää tai tarvitset tukea",
      "details": [
            {
              "label": "Yrityksen nimi",
              "value": "SCRIBIFY AI INC"
            },
            {
              "label": "Pääkonttori",
              "value": ["30 N Gould St, Ste R", "Sheridan, WY 82801", "Yhdysvallat"]
            },
            {
              "label": "Ota yhteyttä",
              "value": ["sähköposti", "Tuki saatavilla 24/7"]
            }
          ]
    },
    CTA: {
      "title": "Oletko valmis kokemaan eron?",
      "subtitle": "Liity tuhansien ammattilaisten joukkoon, jotka luottavat NeverCap-puhelimeen transkriptiotarpeissaan.",
      "button": "Kokeile NeverCap ilmaiseksi →",
      "disclaimer": "Luottokorttia ei tarvita • Aloita litterointi sekunneissa"
    }
  },
  Privacy: {
    title: "Tietosuoja",
    titleGradient: "Käytäntö",
    subtitle: "Lue, miten keräämme, käytämme ja suojaamme henkilötietojasi",
    "lastUpdated": "Viimeksi päivitetty: {päivämäärä}",
    "lastUpdatedDate": "21. heinäkuuta 2025",
    "privacyPolicyTitle": "Tietosuojakäytäntö",
    "policyDescription": 'Tässä tietosuojakäytännössä kuvataan, kuinka NeverCap (jäljempänä \"NeverCap\", \"me\", \"meitä\") kerää, käyttää ja luovuttaa henkilötietojasi, kun käytät palveluitamme, verkkosivustojamme (https://www.nevercap.ai/) ja ohjelmistojamme (yhdessä \"Palvelut\").',
    "policyAgreement": "Lue tämä tietosuojakäytäntö huolellisesti ja varmista, että ymmärrät sen. Käyttämällä mitä tahansa Palveluitamme hyväksyt tämän tietosuojakäytännön. Jos et hyväksy henkilötietojesi käyttöä tämän tietosuojakäytännön mukaisesti, sinun on lopetettava Palveluidemme käyttö välittömästi.",
    "policyOverview": "Tässä tietosuojakäytännössä kerromme, mitä tietoja keräämme ja miksi; miten tietojasi käsitellään; ja mitkä ovat oikeutesi tietoihisi liittyen. Emme myy tietojasi.",
    "scopeTitle": "1. Tietosuojakäytännön soveltamisala",
    "scopeDescription": "Tämä tietosuojakäytäntö koskee vain Palveluiden käyttäjiä koskevien tietojen keräämistä ja käsittelyä. Tämä tietosuojakäytäntö ei koske kolmansien osapuolten ylläpitämiä palveluita, verkkosivustoja tai ohjelmistoja, jotka ovat linkitettyjä meihin (riippumatta siitä, tarjoammeko me nämä linkit vai jakavatko muut käyttäjät niitä), eikä se koske kolmansien osapuolten sisältöä, tietoja, sovelluksia tai materiaaleja. Suosittelemme, että tarkistat minkä tahansa kolmannen osapuolen verkkosivuston tai ohjelmiston tietosuojakäytännöt ennen kuin annat niille tietoja.",
    "collectionTitle": "2. Mitä keräämme ja miksi",
    "collectionPrinciple": "Ohjaavana periaatteenamme on kerätä vain se, mitä tarvitsemme. Käytännössä se tarkoittaa seuraavaa:",
    "identityTitle": "2.1 Henkilöllisyys ja käyttöoikeudet",
    "identityDescription": "Kun rekisteröidyt johonkin tuotteistamme, pyydämme sinulta tunnistettavia tietoja, kuten nimesi ja sähköpostiosoitteesi. Tämä on tarpeen tuotteen olennaisten toimintojen tarjoamiseksi ja jotta voimme lähettää sinulle tuotepäivityksiä ja muita tärkeitä tietoja.",
    "billingTitle": "2.2 Laskutustiedot",
    "billingDescription": "Jos rekisteröidyt maksulliseen tuotteeseen, sinua pyydetään antamaan maksutietosi ja laskutusosoitteesi. Maksutiedot lähetetään suoraan maksupalvelullemme, eivätkä ne päädy palvelimillemme.",
    "productInteractionsTitle": "2.3 Tuotteiden yhteisvaikutukset",
    "productInteractionsDescription": "Tallennamme palvelimillemme sisältöä, jonka lataat, vastaanotat tai ylläpidät tuotetileilläsi. Ellet poista tätä sisältöä, voimme säilyttää sitä niin kauan kuin tilisi on aktiivinen.",
    "websiteInteractionsTitle": "2.4 Verkkosivuston vuorovaikutus",
    "websiteInteractionsDescription": "Keräämme tietoja selaustoiminnastasi analytiikka- ja tilastotarkoituksiin, kuten konversioastetestaukseen ja uusien tuotemallien kokeilemiseen. Näitä tietoja ovat esimerkiksi selaimesi ja käyttöjärjestelmäsi versiot, IP-osoitteesi, vierailemasi verkkosivut ja niiden latausaika sekä verkkosivusto, joka ohjasi sinut meille. Jos sinulla on tili ja olet kirjautuneena sisään, nämä verkkoanalytiikkatiedot yhdistetään IP-osoitteeseesi ja käyttäjätiliisi, kunnes tilisi ei ole enää aktiivinen.",
    "cookiesTitle": "2.5 Evästeet",
    "cookiesDescription1": "Käytämme myös pysyviä ensimmäisen osapuolen evästeitä ja joitakin kolmannen osapuolen evästeitä tiettyjen asetusten tallentamiseen, sovellustemme käytön helpottamiseen, A/B-testauksen suorittamiseen sekä analytiikan tukemiseen.",
    "cookiesDescription2": "Eväste on selaimesi tallentama tekstitiedosto. Se voi auttaa muistamaan kirjautumistiedot ja sivuston asetukset. Se voi myös kerätä tietoja, kuten selaimesi tyyppi, käyttöjärjestelmä, vieraillut verkkosivut, vierailun kesto, katsottu sisältö ja muita klikkaustietoja. Voit muuttaa evästeiden säilytysasetuksia ja hyväksyä tai estää yksittäisiä evästeitä selaimesi asetuksissa, vaikka sovelluksemme eivät toimi ja muut palvelumme osat eivät välttämättä toimi oikein, jos poistat evästeet käytöstä.",
    "correspondenceTitle": "2.6 Vapaaehtoinen kirjeenvaihto",
    "correspondenceDescription": "Kun lähetät meille sähköpostia kysymyksen tai pyydät apua, säilytämme kyseisen viestinnän, mukaan lukien sähköpostiosoitteesi, jotta meillä on historia aiemmasta viestinnästä, josta voimme tarkistaa, jos otat meihin yhteyttä tulevaisuudessa.",
    "accessTitle": "3. Milloin käytämme tai jaamme tietojasi",
    "accessDescription1": "Tarjotaksemme pyytämiäsi tuotteita tai palveluita. Käytämme joitakin kolmannen osapuolen alihankkijoita sovellustemme suorittamiseen ja Palveluiden tarjoamiseen sinulle. Näihin kuuluvat pilvi- ja analytiikkapalveluntarjoajat.",
    "accessDescription2": "Väärinkäytösten tutkimiseksi, estämiseksi tai niihin liittyvien toimien toteuttamiseksi. Asiakkaan tilin käyttö mahdollista väärinkäyttöä tutkittaessa on viimeinen keino. Haluamme suojella sekä asiakkaidemme että meille ongelmista ilmoittavien henkilöiden yksityisyyttä ja turvallisuutta, ja teemme parhaamme tasapainottaaksemme nämä vastuut koko prosessin ajan. Jos havaitsemme, että käytät tuotteitamme rajoitettuun tarkoitukseen, ryhdymme tarvittaviin toimiin, mukaan lukien tarvittaessa asianmukaisten viranomaisten ilmoittaminen.",
    "accessDescription3": "Kun sovellettava laki niin vaatii.",
    "dataRequests": "Käyttäjätietojen pyynnöt. Käytäntömme on olla vastaamatta viranomaisten käyttäjätietoja koskeviin pyyntöihin, ellei laillinen prosessi tai rajoitetut olosuhteet vaadi meitä jakamaan tietoja, meidän on noudatettava niitä, jos Yhdysvaltain lainvalvontaviranomaisilla on kuitenkin tarvittava määräys, rikosoikeudellinen haaste tai tuomioistuimen määräys, joka edellyttää meitä jakamaan tietoja, meidän on noudatettava niitä. Vastaamme myös Yhdysvaltojen ulkopuolisten viranomaisten pyyntöihin vain, jos Yhdysvaltain hallitus velvoittaa meitä siihen keskinäisen oikeusapusopimuksen tai -sopimuksen mukaisesti. Käytäntömme on ilmoittaa asianomaisille käyttäjille ennen tietojen jakamista, ellei meitä ole lain mukaan kielletty tekemästä niin, lukuun ottamatta joitakin hätätilanteita.",
    "preservationRequests": "Säilytyspyynnöt. Vastaavasti käytäntömme on noudattaa tietojen säilyttämistä koskevia pyyntöjä vain, jos Yhdysvaltain liittovaltion tallennettua viestintää koskeva laki, 18 USC:n pykälä 2703(f) tai asianmukaisesti tiedoksi annettu Yhdysvaltain haaste siviilioikeudellisissa asioissa sitä edellyttää. Emme jaa säilytettyjä tietoja, ellei laki sitä vaadi tai tuomioistuimen määräys sitä vaadi, josta emme päätä valittaa. Lisäksi, ellemme saa asianmukaista määräystä, oikeuden määräystä tai haastetta ennen vaaditun säilytysajan päättymistä, tuhoamme kaikki säilytetyt kopiot asiakastiedoista säilytysajan päättyessä.",
    "taxAudits": "Jos veroviranomainen tarkastaa meidät, meidän on ehkä jaettava laskutukseen liittyviä tietoja. Tässä tapauksessa jaamme vain välttämättömät tiedot, kuten laskutusosoitteet ja verovapautustiedot.",
    "securityTitle": "4. Kuinka suojaamme tietosi",
    "securityDescription": "Kaikki tiedot salataan SSL/TLS-salauksella, kun ne lähetetään palvelimiltamme selaimeesi.",
    "deletionTitle": "5. Mitä tapahtuu, kun poistat sisältösi",
    "deletionDescription": "Jos poistat sisältöä, se muuttuu välittömästi käyttökelvottomaksi.",
    "locationTitle": "6. Sivuston ja datan sijainti",
    "locationDescription": "Tuotteitamme ja muita verkkosivustojamme hoidetaan Yhdysvalloissa. Jos olet Euroopan unionissa, Isossa-Britanniassa tai muualla Yhdysvaltojen ulkopuolella, huomaathan, että kaikki meille antamasi tiedot siirretään ja tallennetaan Yhdysvaltoihin. Käyttämällä verkkosivustojamme tai palveluitamme ja/tai antamalla meille henkilötietojasi suostut tähän siirtoon.",
    "childrenTitle": "7. Lasten yksityisyys",
    "childrenDescription": "Palvelut eivät ole suunnattu lapsille, emmekä tietoisesti kerää alle 13-vuotiaiden lasten henkilötietoja. Jos olet alle 13-vuotias, älä lähetä mitään henkilötietoja Palveluiden kautta. Jos uskot, että lapsi on antanut meille henkilötietoja tämän Käytännön vastaisesti, ota meihin yhteyttä alla kuvatulla tavalla.",
    "updatesTitle": "8. Tämän tietosuojakäytännön päivitykset",
    "updatesDescription": "Saatamme päivittää tätä käytäntöä tarvittaessa asiaankuuluvien määräysten noudattamiseksi ja uusien käytäntöjen huomioon ottamiseksi. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme päivämäärän tämän sivun yläreunassa.",
    "contactTitle": "9. Ota yhteyttä",
    "contactDescription": "Jos sinulla on kysyttävää, kommentteja tai valituksia tietosuojakäytännöstämme, ota meihin yhteyttä, niin pyrimme käsittelemään valituksesi mahdollisimman pian.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Ehdot",
    titleGradient: "Palvelu",
    subtitle: "Luethan nämä ehdot huolellisesti ennen palvelujemme käyttöä",
    "lastUpdated": "Viimeksi päivitetty: {päivämäärä}",
    "lastUpdatedDate": "21. heinäkuuta 2025",
    "termsOfServiceTitle": "Palveluehdot",
    "thankYou": "Kiitos, että käytät tuotteitamme!",
    "companyDefinition": 'Kun sanomme tässä asiakirjassa \"Yritys\", \"me\", \"meidän\" tai \"meitä\", viittaamme merkkijonoon NeverCap.',
    "servicesDefinition": 'Kun sanomme \"Palvelut\", tarkoitamme mitä tahansa NeverCap:n luomaa ja ylläpitämää tuotetta, riippumatta siitä, toimitetaanko se verkkoselaimessa, työpöytäsovelluksessa, mobiilisovelluksessa tai muussa muodossa.',
    "termsUpdate": "Saatamme päivittää näitä käyttöehtoja tulevaisuudessa. Tyypillisesti nämä muutokset ovat olleet joidenkin ehtojen selventämistä linkittämällä laajennettuun asiaankuuluvaan käytäntöön. Aina kun teemme merkittäviä muutoksia käytäntöihimme, päivitämme tämän sivun yläreunassa olevan päivämäärän ja ryhdymme muihin asianmukaisiin toimiin ilmoittaaksemme siitä tilinhaltijoille.",
    "acceptanceTitle": "1. Sopimuksen hyväksyminen",
    "acceptanceDescription1": "Käyttämällä Palveluitamme ilmoitat hyväksyväsi tämän Sopimuksen, josta tulee sitova sopimus sinun ja NeverCap:n välillä. Vakuutat, että olet laillisesti kykenevä hyväksymään nämä Ehdot ja vahvistat, että olet täysi-ikäinen solmimaan sitovan sopimuksen. NeverCap:n hyväksyntä on nimenomaisesti ehdollinen sille, että hyväksyt kaikki tämän Sopimuksen ehdot.",
    "eligibilityRequirement": "Palveluita ei ole tarkoitettu alle 18-vuotiaille, eikä heidän tule käyttää niitä. Käyttämällä Palveluita vakuutat ja takaat, että täytät edellä mainitut kelpoisuusvaatimukset.",
    "userResponsibility": 'Termit "sinä", "sinun", "itse" sisältävät myös työntekijäsi, edustajasi, yritysedustajasi ja kaikki muut henkilöt, joille annat pääsyn Palveluihin Tilisi kautta (kuten alla on määritelty). Olet vastuussa siitä, että kaikki Palveluita tilisi kautta käyttävät henkilöt ovat tietoisia näistä Ehdoista ja noudattavat niitä.',
    "termsRevision": "NeverCap pidättää oikeuden tarkistaa ja päivittää näitä ehtoja aika ajoin oman harkintansa mukaan. Kaikki muutokset tulevat voimaan välittömästi niiden julkaisemisen jälkeen. Jatkamalla Palveluiden käyttöä tarkistettujen ehtojen julkaisemisen jälkeen hyväksyt muutokset. Sinun odotetaan tarkistavan tämä sivu aika ajoin, jotta olet tietoinen mahdollisista muutoksista, sillä ne sitovat sinua.",
    "servicesTitle": "2. NeverCap:n palvelut",
    "servicesDescription1": "Palvelumme mahdollistavat käyttäjien muuntaa äänikeskusteluja litteroiduksi tekstiksi, jota voidaan hakea, kääntää ja jakaa muiden kanssa.",
    "servicesOptions": 'Voit valita, käytätkö Palveluiden ilmaisversiota ("Ilmaiset palvelut") vai Palveluiden tilauspohjaista maksullista versiota, josta saatat joutua maksamaan maksuja ("Maksulliset palvelut").',
    "servicesAccess": "Tarjoamme Palvelut käyttöösi. Olet vastuussa kaikkien tarvittavien järjestelyjen tekemisestä Palveluiden käyttöä varten.",
    "accountTermsTitle": "3. Tilin ehdot",
    "accountSecurity": "Olet vastuussa tilisi turvallisuuden ylläpitämisestä. Yhtiö ei ole eikä tule olemaan vastuussa mistään menetyksistä tai vahingoista, jotka johtuvat tämän turvallisuusvelvoitteen noudattamatta jättämisestä.",
    "lawfulUse": "Et saa käyttää Palveluita mihinkään laittomaan, epäeettiseen tai moraalittomaan tarkoitukseen.",
    "contentResponsibility": "Olet vastuussa kaikesta tililläsi julkaistusta sisällöstä ja toiminnasta. Tämä sisältää sisällön, jonka ovat julkaisseet muut, joilla joko: (a) on pääsy kirjautumistietoihisi; tai (b) on omat kirjautumistunnuksensa tilillesi.",
    "humanRequirement": "Sinun on oltava ihminen. Bottien tai muiden automatisoitujen menetelmien avulla rekisteröidyt tilit eivät ole sallittuja.",
    "paymentTitle": "4. Maksaminen, hyvitykset ja sopimusmuutokset",
    "freeTrial": "Maksullisten Palveluiden, jotka tarjoavat ilmaisen kokeilujakson, kokeilujakson kesto selitetään rekisteröitymisen yhteydessä. Kokeilujakson jälkeen sinun on maksettava etukäteen voidaksesi jatkaa Palvelun käyttöä. Jos et maksa, nämä palvelut päättyvät.",
    "upgradePolicy": "Jos päivität ilmaisesta tilauksesta maksulliseen tilaukseen, veloitamme korttiasi välittömästi ja laskutusjaksosi alkaa päivityspäivänä.",
    "taxes": "Kaikki maksut eivät sisällä veroviranomaisten määräämiä veroja, maksuja tai tulleja. Tarvittaessa keräämme kyseiset verot veroviranomaisen puolesta ja tilitämme ne veroviranomaisille. Muussa tapauksessa olet vastuussa kaikkien verojen, maksujen tai tullien maksamisesta.",
    "refunds": "Kaikki ostokset ovat hyvittämättömiä. Voit peruuttaa minkä tahansa maksullisen palvelun milloin tahansa kirjautumalla tilillesi. Maksullisten tilausten peruutus tulee voimaan nykyisen maksetun kauden lopussa, ellei toisin mainita.",
    "cancellationTitle": "5. Peruutus ja irtisanominen",
    "cancellationPolicy": "Jos peruutat Palvelun ennen maksetun ajan päättymistä, peruutuksesi tulee voimaan välittömästi, eikä sinulta veloiteta enää mitään. Emme automaattisesti suhteuta käyttämätöntä aikaa viimeisimmällä laskutusjaksolla.",
    "terminationRights": "Meillä on oikeus keskeyttää tai lopettaa tilisi ja evätä kaikki nykyinen tai tuleva Palveluidemme käyttö mistä tahansa syystä milloin tahansa. Tilin keskeyttäminen tarkoittaa, että et voi käyttää tiliäsi tai sen sisältöä. Tilin lopettaminen johtaa lisäksi tilisi tai tilillesi pääsyn poistamiseen sekä kaiken tililläsi olevan sisällön menettämiseen ja luovuttamiseen. Pidätämme myös oikeuden evätä Palveluiden käytön keneltä tahansa mistä tahansa syystä milloin tahansa. Meillä on tämä lauseke, koska tilastollisesti katsottuna sadoista tuhansista Palveluidemme tileistä ainakin yksi tekee jotain rikollista.",
    "abusePolicy": "Yhtiön työntekijään tai toimihenkilöön kohdistuva suullinen, fyysinen, kirjallinen tai muu väärinkäyttö (mukaan lukien väärinkäytön tai koston uhkaaminen) voi johtaa tilin välittömään sulkemiseen.",
    "submissionsTitle": "6. Lähetykset",
    "submissionsDescription": 'Hyväksyt ja hyväksyt, että kaikki meille toimittamasi kysymykset, kommentit, ehdotukset, ideat, palautteet tai muut Sivustoa koskevat tiedot ("Lähetykset") ovat ei-luottamuksellisia ja niistä tulee yksinomaista omaisuuttamme. Meillä on yksinoikeudet, mukaan lukien kaikki immateriaalioikeudet, ja meillä on oikeus käyttää ja levittää näitä Lähetyksiä rajoituksetta mihin tahansa lailliseen tarkoitukseen, kaupalliseen tai muuhun, ilman sinulle annettavaa tunnustusta tai korvausta. Luovut täten kaikista moraalisista oikeuksista tällaisiin Lähetyksiin ja takaat täten, että kaikki tällaiset Lähetykset ovat alkuperäisiä sinulle tai että sinulla on oikeus lähettää tällaisia Lähetyksiä. Hyväksyt, ettei meitä vastaan voi nostaa kannetta mistään väitetystä tai todellisesta Lähetystesi omistusoikeuden loukkauksesta tai väärinkäytöstä.',
    "uptimeTitle": "7. Käyttöaika ja turvallisuus",
    "serviceAvailability": 'Palveluiden käyttö on yksinomaan omalla vastuullasi. Tarjoamme näitä Palveluita "sellaisenaan" ja "saatavuuden mukaan". Emme tarjoa palvelutasosopimuksia useimmille Palveluillemme, mutta otamme sovellustemme käyttöajan vakavasti.',
    "throttlingPolicy": "Pidätämme oikeuden tilapäisesti rajoittaa tilin käyttöoikeuksia harvinaisissa tapauksissa, joissa käyttäjän toiminnan todellisuudessa havaitaan vaikuttavan negatiivisesti palvelun vakauteen ja suorituskykyyn muiden käyttäjien kannalta. Kaikissa muissa paitsi kriittisimmissä tapauksissa otamme sinuun yhteyttä ratkaisun löytämiseksi ennen toimenpiteisiin ryhtymistä.",
    "dataSecurity": "Toteutamme monia toimenpiteitä tietojesi suojaamiseksi ja turvaamiseksi varmuuskopioiden, redundanssien ja salauksen avulla. Käytämme salausta tiedonsiirrossa julkisessa internetissä.",
    "thirdPartyVendors": "Käytämme kolmannen osapuolen toimittajia ja hosting-kumppaneita tarjotaksemme Palveluiden suorittamiseen tarvittavat laitteistot, ohjelmistot, verkot, tallennustilan ja niihin liittyvän teknologian.",
    "siteManagementTitle": "8. Sivuston hallinta",
    "siteManagementDescription": "Pidätämme oikeuden, mutta emme velvollisuutta, seuraavaa: (1) valvoa Sivustoa näiden Käyttöehtojen rikkomusten varalta; (2) ryhtyä asianmukaisiin oikeustoimiin ketä tahansa vastaan, joka oman harkintamme mukaan rikkoo lakia tai näitä Käyttöehtoja, mukaan lukien rajoituksetta tällaisen käyttäjän ilmoittaminen lainvalvontaviranomaisille; (3) oman harkintamme mukaan ja rajoituksetta evätä, rajoittaa pääsyä, rajoittaa saatavuutta tai poistaa käytöstä (siinä määrin kuin se on teknisesti mahdollista) minkä tahansa Muodoksesi tai minkä tahansa sen osan; (4) oman harkintamme mukaan ja rajoituksetta, ilman erillistä ilmoitusta tai vastuuta poistaa Sivustolta tai muuten poistaa käytöstä kaikki tiedostot ja sisällöt, jotka ovat kooltaan liian suuria tai jotka millään tavalla rasittavat järjestelmiämme; ja (5) muutoin hallita Sivustoa tavalla, joka on suunniteltu suojaamaan oikeuksiamme ja omaisuuttamme ja helpottamaan Sivuston asianmukaista toimintaa.",
    "copyrightTitle": "9. Tekijänoikeudet ja sisällön omistajuus",
    "copyrightCompliance": "Kaiken Palveluihin lähetetyn sisällön on oltava Yhdysvaltain tekijänoikeuslain mukaista.",
    "ipRights": "Emme vaadi immateriaalioikeuksia Palveluihin toimittamaanne materiaaliin. Kaikki ladatut materiaalit pysyvät sinun omaisuutenasi.",
    "contentModeration": "Emme esitarkista sisältöä, mutta pidätämme oikeuden (mutta emme velvollisuutta) oman harkintamme mukaan kieltäytyä tai poistaa mitä tahansa Palvelun kautta saatavilla olevaa sisältöä.",
    "trademarkProtection": "Palveluiden nimet, ulkoasu ja käyttökokemus ovat Yhtiön tekijänoikeuksin suojattuja. Kaikki oikeudet pidätetään. Et saa kopioida, kopioida tai käyttää uudelleen mitään osaa HTML-, CSS-, JavaScript- tai visuaalisista suunnitteluelementeistä ilman Yhtiön nimenomaista kirjallista lupaa. Sinun on pyydettävä lupaa käyttää Yhtiön logoa tai Palvelun logoja mainostarkoituksiin. Lähetä meille sähköpostia, jos haluat käyttää logoja. Pidätämme oikeuden peruuttaa tämän luvan, jos rikot näitä Käyttöehtoja.",
    "prohibitedExploitation": "Sitoudut olemaan kopioimatta, jäljentämättä, myymättä, jälleenmyymättä tai hyödyntämättä mitään osaa Palveluista, Palveluiden käytöstä tai Palveluihin pääsystä ilman Yhtiön nimenomaista kirjallista lupaa.",
    "impersonationProhibition": "Et saa muokata toista verkkosivustoa siten, että se antaa virheellisen kuvan siitä, että se liittyy Palveluihin tai Yhtiöön.",
    "dmcaPolicy": "Kunnioitamme muiden immateriaalioikeuksia. Jos uskot, että Sivustolla tai sen kautta saatavilla oleva materiaali loukkaa omistamiasi tai hallinnoimiasi tekijänoikeuksia, ota meihin välittömästi yhteyttä. Ilmoituksestasi lähetetään kopio henkilölle, joka on julkaissut tai tallentanut Ilmoituksessa mainitun materiaalin. Huomaa, että sovellettavan lain nojalla sinut voidaan pitää vahingonkorvausvastuussa, jos annat Ilmoituksessa olennaisesti vääriä tietoja. Jos et siis ole varma, loukkaako Sivustolla oleva tai sen kautta linkitetty materiaali tekijänoikeuksiasi, sinun kannattaa ensin ottaa yhteyttä asianajajaan.",
    "prohibitedActivitiesTitle": "10. Kielletyt toiminnot",
    "generalProhibition": "Et saa käyttää Sivustoa mihinkään muuhun tarkoitukseen kuin siihen, johon Sivusto on käytettävissä. Sivustoa ei saa käyttää mihinkään kaupalliseen toimintaan, paitsi jos se on nimenomaisesti hyväksyttyä tai hyväksyttyä.",
    "userObligations": "Sivuston käyttäjänä sitoudut olemaan:",
    "dataScraping": "Hae systemaattisesti tietoja tai muuta sisältöä sivustolta luodaksesi tai kootaksesi, suoraan tai epäsuorasti, kokoelman, koosteen, tietokannan tai hakemiston ilman kirjallista lupaamme.",
    "fraud": "Huijata, petostaa tai johtaa harhaan meitä ja muita käyttäjiä, erityisesti yrittämällä saada selville arkaluonteisia tilitietoja, kuten käyttäjien salasanoja.",
    "securityInterference": "Kiertää, poistaa käytöstä tai muulla tavoin häiritä Sivuston turvallisuuteen liittyviä ominaisuuksia, mukaan lukien ominaisuuksia, jotka estävät tai rajoittavat Sisällön käyttöä tai kopiointia tai asettavat rajoituksia Sivuston ja/tai sen sisältämän Sisällön käytölle.",
    "defamation": "Halventaa, tahrata tai muuten vahingoittaa mielestämme meitä ja/tai Sivustoa.",
    "harassment": "Käyttää Sivustolta saatuja tietoja toisen henkilön häirintään, hyväksikäyttöön tai vahingoittamiseen.",
    "supportAbuse": "Käytä tukipalveluitamme väärin tai lähetä vääriä ilmoituksia väärinkäytöksistä tai väärinkäytöksistä.",
    "legalCompliance": "Käytä Sivustoa tavalla, joka on ristiriidassa sovellettavien lakien tai määräysten kanssa.",
    "framingProhibition": "Osallistu sivuston luvattomaan kehystämiseen tai linkittämiseen.",
    "malware": "Lataa tai lähetä (tai yritä ladata tai lähettää) viruksia, troijalaisia tai muuta materiaalia, mukaan lukien liiallinen isojen kirjainten käyttö ja roskapostitus (jatkuva toistuvan tekstin lähettäminen), joka häiritsee kenen tahansa osapuolen keskeytymätöntä Sivuston käyttöä ja nautintoa tai muokkaa, heikentää, keskeyttää, muuttaa tai häiritsee Sivuston käyttöä, ominaisuuksia, toimintoja, toimintaa tai ylläpitoa.",
    "automation": "Käytä järjestelmää millään tavalla automaattisesti, kuten käytä komentosarjoja kommenttien tai viestien lähettämiseen tai käytä tiedonlouhintaa, robotteja tai vastaavia tiedonkeruu- ja poimintatyökaluja.",
    "copyrightRemoval": "Poista tekijänoikeus- tai muut omistusoikeusilmoitukset mistä tahansa sisällöstä.",
    "impersonation": "Yritä esiintyä toisena käyttäjänä tai henkilönä tai käyttää toisen käyttäjän käyttäjätunnusta.",
    "spyware": 'Lataa tai lähetä (tai yritä ladata tai lähettää) mitään materiaalia, joka toimii passiivisena tai aktiivisena tiedonkeruu- tai -lähetysmekanismina, mukaan lukien rajoituksetta selkeät grafiikanvaihtomuodot (\"gif\"), 1×1-pikselit, verkkovirheet, evästeet tai muut vastaavat laitteet (joita joskus kutsutaan \"vakoiluohjelmiksi\" tai \"passiivisiksi keräysmekanismeiksi\" tai \"pcms\").',
    "disruption": "Häiritä, keskeytä tai kuormittaa kohtuuttomasti Sivustoa tai Sivustoon yhdistettyjä verkkoja tai palveluita.",
    "employeeHarassment": "Häiritä, ärsyttää, pelotella tai uhkailla työntekijöitämme tai edustajiamme, jotka osallistuvat Sivuston minkä tahansa osan tarjoamiseen sinulle.",
    "accessCircumvention": "Yritä ohittaa kaikki Sivuston toimenpiteet, joiden tarkoituksena on estää tai rajoittaa pääsyä Sivustolle tai millekään sen osalle.",
    "codeCopying": "Sivuston ohjelmiston, mukaan lukien, mutta ei rajoittuen, Flashin, PHP:n, HTML:n, JavaScriptin tai muun koodin, kopioiminen tai muokkaaminen.",
    "reverseEngineering": "Ellei sovellettava laki sitä salli, tulkita, purkaa, hajottaa tai takaisinmallintaa mitään Sivustoon kuuluvaa tai sitä millään tavalla muodostavaa ohjelmistoa.",
    "bots": "Ellei se ole seurausta tavanomaisen hakukoneen tai internetselaimen käytöstä, käytä, käynnistä, kehitä tai jaa mitään automatisoitua järjestelmää, mukaan lukien rajoituksetta kaikki hämähäkit, robotit, huijausohjelmat, kaavintaohjelmat tai offline-lukijat, jotka käyttävät Sivustoa, tai käytä tai käynnistä luvattomia komentosarjoja tai muita ohjelmistoja.",
    "buyingAgents": "Käytä ostoagenttia tai ostoedustajaa tehdäksesi ostoksia Sivustolla.",
    "unauthorizedUse": "Käytä Sivustoa luvattomasti, mukaan lukien käyttäjien käyttäjätunnusten ja/tai sähköpostiosoitteiden kerääminen sähköisesti tai muilla keinoin ei-toivottujen sähköpostien lähettämiseksi tai käyttäjätilien luominen automaattisesti tai väärien perusteiden avulla.",
    "competition": "Käyttää Sivustoa osana mitään pyrkimystä kilpailla kanssamme tai muutoin käyttää Sivustoa ja/tai Sisältöä mihinkään tuloja tuottavaan tarkoitukseen tai kaupalliseen toimintaan.",
    "advertising": "Käytä Sivustoa mainostaaksesi tai tarjotaksesi myytäväksi tavaroita ja palveluita.",
    "profileTransfer": "Myy tai muulla tavoin siirrä profiilisi.",
    "featuresTitle": "11. Ominaisuudet ja virheet",
    "featuresDescription": "Suunnittelemme Palvelumme huolella omien kokemustemme ja asiakkaidemme kokemusten pohjalta, jotka jakavat aikaansa ja palautettaan. Ei kuitenkaan ole olemassa sellaista asiaa kuin palvelu, joka miellyttäisi kaikkia. Emme takaa, että Palvelumme täyttävät erityisvaatimuksesi tai odotuksesi.",
    "bugsDescription": "Testaamme myös kaikki ominaisuutemme ennen niiden julkaisemista. Kuten minkä tahansa ohjelmiston kanssa, Palveluissamme on väistämättä joitakin virheitä. Seuraamme meille ilmoitettuja virheitä ja työskentelemme niiden parissa, erityisesti turvallisuuteen tai yksityisyyteen liittyvien virheiden osalta. Kaikkia ilmoitettuja virheitä ei korjata, emmekä takaa täysin virheettömiä Palveluita.",
    "correctionsTitle": "12. Korjaukset",
    "informationAccuracy": "Sivustolla saattaa olla tietoja, jotka sisältävät typografisia virheitä, epätarkkuuksia tai puutteita, mukaan lukien kuvaukset, hinnat, saatavuus ja monia muita tietoja. Pidätämme oikeuden korjata virheitä, epätarkkuuksia tai puutteita sekä muuttaa tai päivittää Sivuston tietoja milloin tahansa ilman ennakkoilmoitusta.",
    "siteAvailability": "Emme voi taata, että Sivusto on käytettävissä kaikkina aikoina. Saatamme kohdata laitteisto-, ohjelmisto- tai muita ongelmia tai joutua suorittamaan Sivustoon liittyviä huoltotoimenpiteitä, jotka johtavat keskeytyksiin, viivästyksiin tai virheisiin. Pidätämme oikeuden muuttaa, tarkistaa, päivittää, keskeyttää, lopettaa tai muuten muokata Sivustoa milloin tahansa ja mistä tahansa syystä ilman erillistä ilmoitusta sinulle. Hyväksyt, ettemme ole millään tavalla vastuussa mistään menetyksestä, vahingosta tai haitasta, joka aiheutuu siitä, että et voi käyttää Sivustoa sen käyttökatkoksen tai lopettamisen aikana. Mitään näissä Käyttöehdoissa ei voida tulkita siten, että se velvoittaisi meitä ylläpitämään ja tukemaan Sivustoa tai toimittamaan siihen liittyviä korjauksia, päivityksiä tai julkaisuja.",
    "userDataTitle": "13. Käyttäjätiedot",
    "userDataDescription": "Säilytämme tiettyjä tietoja, jotka lähetät Sivustolle, Sivuston suorituskyvyn hallintaa varten, sekä tietoja, jotka liittyvät Sivuston käyttöön. Vaikka teemme säännöllisiä varmuuskopioita tiedoista, olet yksin vastuussa kaikista lähettämistäsi tiedoista tai tiedoista, jotka liittyvät mihin tahansa Sivuston avulla suorittamaasi toimintaan. Hyväksyt, ettemme ole vastuussa sinulle tällaisten tietojen katoamisesta tai vioittumisesta, ja luovut täten oikeudesta nostaa meitä vastaan ​​kanne, joka johtuu tällaisten tietojen katoamisesta tai vioittumisesta.",
    "privacyPolicyTitle": "14. Tietosuojakäytäntö",
    "privacyPolicyDescription": "Tietosuoja ja -turvallisuus ovat meille tärkeitä. Tutustuthan tietosuojakäytäntöömme. Käyttämällä sivustoa hyväksyt tietosuojakäytäntömme, joka on sisällytetty näihin käyttöehtoihin. Huomaathan, että sivustoa isännöidään Yhdysvalloissa. Jos käytät sivustoa mistä tahansa muualta maailmasta, jonka lait tai muut vaatimukset henkilötietojen keräämisestä, käytöstä tai luovuttamisesta poikkeavat Yhdysvaltojen sovellettavista laeista, jatkamalla sivuston käyttöä siirrät tietosi Yhdysvaltoihin ja suostut tietojesi siirtämiseen ja käsittelyyn Yhdysvalloissa.",
    "liabilityTitle": "15. Vastuu",
    "liabilityIntroduction": "Mainitsemme vastuun kaikissa näissä ehdoissa, mutta yhteen osioon kootaksemme kaiken:",
    "liabilityWaiver": "Ymmärrät ja hyväksyt nimenomaisesti, että Yhtiö ei ole lain tai oikeudenmukaisuuden nojalla vastuussa sinulle tai kolmannelle osapuolelle mistään suorista, epäsuorista, satunnaisista, menetetyistä voitoista, erityisistä, seuraamuksellisista, rankaisevista tai esimerkinomaisista vahingoista, mukaan lukien, mutta ei rajoittuen, vahingot voittojen, liikearvon, käytön, tietojen tai muiden aineettomien tappioiden menetyksestä (vaikka Yhtiölle olisi ilmoitettu tällaisten vahinkojen mahdollisuudesta), jotka johtuvat: (1) Palveluiden käytöstä tai käytön estymisestä; (2) sisällön ja materiaalien virheistä, erehdyksistä tai epätarkkuuksista; (3) minkä tahansa luonteen omaisuusvahingoista tai henkilövahingoista, jotka johtuvat sivuston käytöstä; (4) korvaavien tavaroiden ja palveluiden hankintakustannuksista, jotka johtuvat Palveluiden kautta ostetuista tai hankituista tavaroista, tiedoista, tiedoista tai palveluista tai vastaanotetuista viesteistä tai tehdyistä tapahtumista; (5) luvattomasta pääsystä suojattuihin palvelimiimme tai niiden ja/tai kaikkien niillä tallennettujen henkilötietojen ja/tai taloudellisten tietojen käytöstä; (6) sivustolle tai sivustolta tapahtuvan tiedonsiirron keskeytymisestä tai lopettamisesta; (7) kaikki virheet, virukset, troijalaiset tai vastaavat, joita kolmas osapuoli voi lähettää sivustolle tai sen kautta, ja/tai; (8) kaikki virheet tai puutteet sisällössä ja materiaaleissa tai minkäänlaiset menetykset tai vahingot, jotka johtuvat sivuston kautta julkaistun, lähetetyn tai muuten saatavilla olevan sisällön käytöstä; (9) kolmannen osapuolen lausunnot tai toiminta palvelussa; (10) tai mikä tahansa muu näihin käyttöehtoihin tai palveluihin liittyvä asia, olipa se sitten sopimusrikkomus, oikeudenloukkaus (mukaan lukien aktiivinen tai passiivinen huolimattomuus) tai mikä tahansa muu vastuun peruste.",
    "miscellaneousTitle": "16. Sekalaiset",
    "miscellaneousDescription": "Nämä käyttöehdot ja kaikki Sivustolle tai Sivustoon julkaisemamme käytännöt tai toimintasäännöt muodostavat koko sopimuksen ja yhteisymmärryksen sinun ja meidän välillämme. Se, että emme käytä tai pane täytäntöön mitään näiden käyttöehtojen oikeutta tai määräystä, ei tarkoita kyseisen oikeuden tai määräyksen luopumista. Näitä käyttöehtoja sovelletaan lain sallimassa laajuudessa. Voimme siirtää osan tai kaikki oikeutemme ja velvollisuutemme muille milloin tahansa. Emme ole vastuussa mistään menetyksestä, vahingosta, viivästyksestä tai toiminnan laiminlyönnistä, joka johtuu kohtuullisen hallintamme ulkopuolella olevasta syystä. Jos jokin näiden käyttöehtojen määräys tai sen osa katsotaan laittomaksi, mitättömäksi tai täytäntöönpanokelvottomaksi, kyseinen määräys tai sen osa katsotaan erotettavaksi näistä käyttöehdoista, eikä se vaikuta jäljellä olevien määräysten pätevyyteen ja täytäntöönpanokelpoisuuteen. Sinun ja meidän välillemme ei synny yhteisyritystä, kumppanuutta, työsuhdetta tai edustussuhdetta näiden käyttöehtojen tai Sivuston käytön seurauksena. Hyväksyt, että näitä käyttöehtoja ei tulkita meitä vastaan sillä perusteella, että olemme laatineet ne. Luovut täten kaikista puolustuksista, jotka sinulla saattavat perustua näiden käyttöehtojen sähköiseen muotoon ja siihen, että osapuolet eivät ole allekirjoittaneet näitä käyttöehtoja.",
    "contactTitle": "17. Ota yhteyttä",
    "contactDescription": "Jos sinulla on kysyttävää jostakin käyttöehdoista, ota meihin yhteyttä.",
    "neverCap": "NeverCap",
    "site": "Sivusto",
    "services": "Palvelut"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
