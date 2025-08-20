// 土耳其语
let message = {
  // Ana Sayfa
  HomePage: {
    home: "Ana Sayfa",
    times: "Günde {times} ücretsiz transkripsiyon, bugün {left} kaldı.",
    tips: "Sınırsız transkripsiyon için Pro'ya yükseltin.",
    update: "Hemen Yükselt",
    rename: "Yeniden Adlandır",
    delete: "Sil",
    cancel: "İptal",
    confirm: "Oluştur",
    dialogLabel: "Klasör Adı",
    recently: "Son Dosyalar",
    loading: "Yükleniyor",
    tour: {
      step0: {
        title: "{name}'e Hoş Geldiniz",
        tip: "Burada şunları yapabilirsiniz:",
        content:
          "Tek seferlik konuşmaları, toplantıları, dersleri vb. yazıya dökebilirsiniz",
        next: "Kullanmaya Başla"
      },
      step1: {
        title: "Dosyaları Yazıya Dök",
        content:
          "Üç yazıya dökme yöntemini destekler: Yerel dosyalar, bağlantılar ve kayıtlar."
      },
      step2: {
        title: "Klasör Oluştur",
        content:
          'Klasör oluşturmak ve dosyalarınızı düzenlemek için "+" simgesine tıklayın.'
      },
      step3: {
        title: "Yazıya Dökme Detaylarını Görüntüle ve Düzenle",
        content:
          "Yazıya dökme detaylarını görüntülemek ve düzenlemek için öğeye tıklayın, ayrıca çevirebilirsiniz."
      },
      next: "Sonraki",
      finish: "Anladım"
    },
    export: {
      export: "Dışa Aktar",
      title: "Dışa aktarma dosyanızı oluşturuyoruz",
      title2: "Dosyanız hazır",
      singleLoadingContent: "1 dosya sıkıştırılıyor.",
      singleSuccessContent: "1 dosya sıkıştırıldı.",
      loadingContent: "{num} dosya sıkıştırılıyor.",
      successContent: "{num} dosya sıkıştırıldı.",
      cancel: "Dışa Aktarmayı İptal Et",
      error: "Dışa Aktarma Hatası",
      dialog: {
        title: "Uyarı",
        content: "Dışa aktarmayı iptal et?",
        cancel: "Dışa Aktarmayı İptal Et",
        continue: "Dışa Aktarmaya Devam Et"
      }
    },
    welcome: {
      title: "Scribify'a Hoş Geldiniz!",
      description: "Burada yapabilecekleriniz:",
      transcribe:
        "Scribify ile zahmetsizce transkripsiyonu yapın—sesli konuşmaları net, aranabilir ve paylaşılabilir metne anında dönüştürün.",
      precision:
        "Konuşmacı tanıma ve zaman damgalarıyla kesin transkripsiyon alın.",
      translate:
        "Dil engellerini aşın: transkripsiyonları 200'den fazla dile kolayca çevirin.",
      edit: "Transkripsiyon metinlerinizi ihtiyaçlarınıza uygun formatlarda düzenleyin, geliştirin ve dışa aktarın.",
      collaborate:
        "Transkripsiyon metinlerinizi başkalarıyla paylaşarak işbirliği yapın.",
      button: "Başlayın",
      tip: "Sesi transkripsiyon metnine dönüştürmeye hazır mısınız? Şimdi keşfetmeye başlayın!",
      tip2: "Şimdi keşfetmeye başlayın!",
      tip1: "Sesi transkript metne dönüştürmeye hazır mısınız? "
    },
    subscriptionModal: {
      left: {
        title: "Daha fazlası için Pro Planı edinin",
        c1: "Sınırsız Transkripsiyon",
        c2: "10 Saatlik Yüklemeler",
        c3: "En Yüksek Öncelik",
        c4: "%99 transkripsiyon doğruluğu",
        c5: "100+ desteklenen dil",
        c6: "Konuşmacı tanıma",
        c7: "Transkripsiyon çevirisi",
        t1: "Bir kişi için sınırsız transkripsiyon.",
        t2: "Her dosya 10 saate / 5 GB'a kadar olabilir. Aynı anda 50 dosya yükleyin.",
        t3: "Dosyalarınızı her zaman en yüksek öncelikle mümkün olan en kısa sürede transkripsiyon yapacağız."
      },
      right: {
        title: "Pro Planı Edinin",
        yearly: "Yıllık",
        monthly: "Aylık",
        save: "Tasarruf",
        preMonth: "aylık",
        preYear: "yıllık",
        firstMonth: "ilk ay",
        afterwards: "sonrasında"
      },
      subscribe: "Abone Ol"
    }
  },
  // Klasör Sayfası
  FolderPage: {
    table: {
      failed: "Başarısız",
      selected: "Seçildi",
      success: "Başarılı",
      fileList: "Dosya Listesi"
    },
    dialog: {
      move: {
        title: "Taşı",
        label: "Klasör Seç",
        placeholder: "Klasör Seç",
        confirm: "Taşı",
        cancel: "İptal"
      },
      rename: {
        title: "Yeniden Adlandır",
        label: "Dosya Adı",
        confirm: "Yeniden Adlandır",
        cancel: "İptal"
      },
      delete: {
        title: "Sil",
        file: "Dosya",
        files: "Dosyalar",
        label: "Silmeyi onaylıyor musunuz? Bu işlem geri alınamaz.",
        confirm: "Sil",
        cancel: "İptal"
      },
      share: {
        title: "Paylaş",
        label:
          "Aşağıdaki güvenli bağlantıya sahip olan herkes bu yazıya dökülmüş metni ve ilgili medya dosyalarını görüntüleyebilir.",
        confirm: "Bağlantıyı Kopyala",
        success: "Kopyalama Başarılı"
      },
      export: {
        title: "Dışa Aktar",
        select: "İhtiyacınız olan formatı seçin",
        settings: "Ayarlar",
        speaker: "Konuşmacı Dahil Et",
        timecodes: "Zaman Kodlarını Dahil Et",
        confirm: "Dışa Aktar",
        cancel: "İptal",
        selectErr: "Lütfen bir veya daha fazla format seçin"
      }
    },
    search: {
      placeholder: "Ara"
    },
    recently: "Son",
    record: "Kayıt",
    transcribe: "Yazıya Dök",
    unclassified: "Sınıflandırılmamış Klasör",
    buttons: {
      transcribe: "Dosyayı Yazıya Dök",
      url: "Bağlantıyı Yazıya Dök",
      record: "Kaydet ve Yazıya Dök",
      recording: "Kaydediliyor..."
    },
    delSuccess: "Silme Başarılı",
    create: "Oluştur",
    endRecord: {
      title: "Uyarı",
      content:
        "Ses kaydı yapıyorsunuz. Bu işlem ses kaydını sonlandıracak. Ses kaydını sonlandırmak istiyor musunuz?",
      confirm: "Ses Kaydına Devam Et",
      cancel: "Ses Kaydını Sonlandır"
    }
  },
  // Dosya Yükleme ve Kayıt
  FileUploadAndRecording: {
    record: {
      record: "Kaydet",
      pause: "Duraklat",
      resume: "Devam Et",
      stop: "Durdur",
      endRecord: "Kaydı sonlandır",
      delete: "Sil",
      transcribe: "Yazıya Dök",
      permissionDenied: "Mikrofon izni reddedildi veya cihaz mevcut değil",
      dialog: {
        delete: {
          title: "Uyarı",
          label: "Bu kaydı silmek istediğinizden emin misiniz?",
          confirm: "Sil",
          cancel: "İptal"
        },
        complete: {
          title: "Kayıt Tamamlandı",
          label:
            "Kayıt 10 saate ulaştı ve otomatik olarak durdu. Lütfen yazıya dökmeye devam edin.",
          confirm: "Anladım"
        },
        speaker: {
          content:
            "Konuşmacı tanımlama için dosyalar 3 saat ile sınırlıdır. Lütfen '{text}' seçeneğinin işaretini kaldırın."
        }
      }
    },
    upload: {
      link: {
        dialogTitle: "Çevrimiçi Medyayı Yazıya Dök",
        title: "Bağlantı Yapıştır",
        label:
          "YouTube, Facebook, X, Dropbox, Google Drive, Vimeo, TikTok, Instagram ve daha fazla platformdan video veya ses bağlantınızı yapıştırın...",
        confirm: "Ekle",
        cancel: "İptal",
        errorTitle:
          "Girdiğiniz bağlantı adresi doğru değil. Lütfen kontrol edip tekrar deneyin.",
        linkName: "Bağlantı"
      },
      file: {
        orTitle: "Çevrimiçi Medyayı Yazıya Dök",
        dialogTitle: "Dosyayı Yazıya Dök",
        tip1: "Dosyaları buraya sürükleyin veya göz atmak için tıklayın",
        tip2: "Göz atmak için tıklayın",
        or: "veya",
        supported: "Desteklenen formatlar"
      },
      del: {
        title: "Uyarı",
        content:
          "Tüm ilerleme kaybedilecek. Yazıya dökmeyi iptal etmeyi onaylıyor musunuz?",
        cancel: "İptali Onayla",
        confirm: "Yazıya Dökmeye Devam Et"
      },
      files: "Dosyalar",
      resultDialogTitle: "Dosyaları Yazıya Dök",
      resultDialogTitle2: "Dosyayı transkribe et",
      cancel: "İptal",
      confirm: "Yazıya Dök",
      return: "Geri Dön",
      addMore: "Daha Fazla Ekle",
      language: "Medya dili",
      failed: "Başarısız",
      tooLarge: "Dosya sınırı aşıyor (5G).",
      linkUpload: "Yükleniyor",
      fileFormat: "Dosya formatına izin verilmiyor",
      localFiles: "Yerel Dosyalar",
      pasteLink: "Çevrimiçi bağlantı",
      uploadErr: "Yükleme Hatası",
      hashErr: "Hash Hatası",
      table: {
        status: "Durum",
        file: "Dosya",
        size: "Boyut",
        noData: "Veri Yok"
      },
      maxFileNum: "Dosya sayısı {num} adedi geçemez.",
      speaker: "Konuşmacıları Tanımla",
      speakerLabel: "Kimin konuştuğunu otomatik olarak algıla",
      guest: {
        transcribe: "Uyarlamak",
        file: "Dosya",
        audio: "Ses / Video Dosyası",
        Uploading: "Yükleniyor..."
      }
    }
  },
  // Yazıya Dökme Detay Sayfası
  TranscriptionPage: {
    langChooseV1: {
      recently: "Son",
      popular: "Popüler",
      other: "Diğer",
      searchLanguage: "Dil Ara",
      noMatch: "Eşleşen dil bulunamadı",
      English: "İngilizce",
      "English(US)": "İngilizce (ABD)",
      "English(UK)": "İngilizce (Birleşik Krallık)",
      Spanish: "İspanyolca",
      Portuguese: "Portekizce",
      French: "Fransızca",
      Italian: "İtalyanca",
      German: "Almanca",
      Dutch: "Hollandaca",
      Polish: "Lehçe",
      Danish: "Danca",
      Japanese: "Japonca",
      Korean: "Korece",
      Hungarian: "Macarca",
      Czech: "Çekçe",
      Chinese: "Çince",
      Hebrew: "İbranice",
      Arabic: "Arapça",
      Azerbaijani: "Azerice",
      Estonian: "Estonca",
      Belarusian: "Belarusça",
      Bulgarian: "Bulgarca",
      Icelandic: "İzlandaca",
      Bosnian: "Boşnakça",
      Persian: "Farsça",
      Russian: "Rusça",
      "Chinese(Traditional)": "Çince (Geleneksel)",
      Finnish: "Fince",
      Kazakh: "Kazakça",
      Galician: "Galiçyaca",
      Catalan: "Katalanca",
      "Chinese(Simplified)": "Çince (Basitleştirilmiş)",
      Kannada: "Kannada",
      Croatian: "Hırvatça",
      Latvian: "Letonca",
      Lithuanian: "Litvanca",
      Romanian: "Rumence",
      Marathi: "Marathi",
      Malay: "Malayca",
      Macedonian: "Makedonca",
      Maori: "Maori",
      Afrikaans: "Afrikaanca",
      Nepali: "Nepalce",
      Norwegian: "Norveççe",
      Swedish: "İsveççe",
      Serbian: "Sırpça",
      Slovak: "Slovakça",
      Slovenian: "Slovence",
      Swahili: "Svahili",
      Tagalog: "Tagalog",
      Tamil: "Tamilce",
      Thai: "Tayca",
      Turkish: "Türkçe",
      Welsh: "Galce",
      Urdu: "Urduca",
      Ukrainian: "Ukraynaca",
      Greek: "Yunanca",
      Armenian: "Ermenice",
      Hindi: "Hintçe",
      Indonesian: "Endonezce",
      Vietnamese: "Vietnamca",
      Albanian: "Arnavutça",
      Amharic: "Amharca",
      Assamese: "Assamca",
      Occitan: "Oksitanca",
      Bashkir: "Başkurtça",
      Basque: "Baskça",
      Breton: "Bretonca",
      Tibetan: "Tibetçe",
      Faroese: "Faroe Dili",
      Sanskrit: "Sanskritçe",
      Khmer: "Kmerce",
      Georgian: "Gürcüce",
      Gujarati: "Gujarati",
      "Haitian Creole": "Haiti Kreolcesi",
      Hausa: "Hausa",
      Latin: "Latince",
      Lao: "Laoca",
      Lingala: "Lingala",
      Luxembourgish: "Lüksemburgca",
      Malagasy: "Malgaşça",
      Maltese: "Maltaca",
      Malayalam: "Malayalam",
      Mongolian: "Moğolca",
      Bengali: "Bengalce",
      Burmese: "Birmanca",
      Punjabi: "Pencapça",
      Pashto: "Peştuca",
      Sinhala: "Seylanca",
      Shona: "Shona",
      Somali: "Somalice",
      Tajik: "Tacikçe",
      Tatar: "Tatarca",
      Telugu: "Telugu",
      Turkmen: "Türkmence",
      Uzbek: "Özbekçe",
      Hawaiian: "Hawaii Dili",
      "Norwegian Nynorsk": "Norveççe (Nynorsk)",
      Sindhi: "Sintçe",
      Sundanese: "Sundaca",
      Yiddish: "Yidiş",
      Yoruba: "Yoruba",
      Javanese: "Cava Dili",
      Cantonese: "Kantonca",
      Abkhaz: "Abhazca",
      Afar: "Afar",
      alz: "Alur",
      ach: "Acoli",
      awa: "Awadhi",
      Avaric: "Avarca",
      Ewe: "Ewe",
      Aymara: "Aymara",
      Irish: "İrlandaca",
      Oriya: "Oriya",
      Oromo: "Oromo",
      Ossetian: "Osetçe",
      tpi: "Tok Pisin",
      bew: "Betawi",
      ban: "Bali Dili",
      btx: "Batak Karo",
      bbc: "Batak Toba",
      bts: "Batak Simalungun",
      bci: "Baule",
      Bambara: "Bambara",
      pag: "Pangasinan",
      pam: "Pampanga",
      nso: "Kuzey Sotho",
      bem: "Bemba",
      bik: "Bikol",
      bal: "Beluçi",
      bho: "Bhojpuri",
      bua: "Buryatça",
      chm: "Mari",
      Chamorro: "Çamorro",
      Chechen: "Çeçence",
      chk: "Chuukese",
      Chuvash: "Çuvaşça",
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
      "South Ndebele": "Güney Ndebele",
      dov: "Dombe",
      "bm-Nkoo": "Nko",
      "French(Canada)": "Fransızca (Kanada)",
      Fijian: "Fiji Dili",
      fon: "Fon",
      "Western Frisian": "Batı Frizce",
      fur: "Friulian",
      Fulah: "Fulah",
      Kongo: "Kongo",
      Kalaallisut: "Grönlandca",
      gom: "Goa Konkanice",
      Guarani: "Guarani",
      cnh: "Hakha Çin",
      hrx: "Hunsrik",
      Kyrgyz: "Kırgızca",
      ktu: "Kituba",
      gaa: "Ga",
      kac: "Kaçin",
      Kanuri: "Kanuri",
      kha: "Khasi",
      kek: "Kekchi",
      Komi: "Komi",
      Xhosa: "Xhosa",
      Corsican: "Korsikaca",
      "crh-Latn": "Kırım Tatarcası (Latin)",
      crh: "Kırım Tatarcası (Kiril)",
      Quechua: "Keçuva",
      Kurdish: "Kürtçe (Kurmanci)",
      ckb: "Kürtçe (Sorani)",
      trp: "Kok Borok",
      ltg: "Latgalian",
      lij: "Ligurca",
      Limburgish: "Limburgca",
      Kirundi: "Kirundi",
      luo: "Luo",
      Luganda: "Luganda",
      Kinyarwanda: "Kinyarwanda",
      lmo: "Lombardca",
      rom: "Romanca",
      mad: "Madura",
      Manx: "Manks",
      mwr: "Marwari",
      "ms-Arab": "Malayca (Jawi)",
      Marshallese: "Marşal Dili",
      mam: "Mam",
      mai: "Maithili",
      mfe: "Mauritius Kreolcesi",
      "mni-Mtei": "Meetei",
      min: "Minangkabau",
      lus: "Mizo",
      hmn: "Hmong",
      nhe: "Nahuatl (Doğu)",
      "Southern Sotho": "Güney Sotho",
      new: "Newari",
      nus: "Nuer",
      pap: "Papiamento",
      "pa-Arab": "Pencapça (Shahmukhi)",
      "pt-PT": "Portekizce (Portekiz)",
      Chichewa: "Chichewa",
      cgg: "Chiga",
      lua: "Luba-Lulua",
      Akan: "Akan",
      zap: "Zapotek",
      "Northern Sami": "Kuzey Sami",
      Samoan: "Samoaca",
      kri: "Sierra Leone Kreolcesi",
      crs: "Seyşel Kreolcesi",
      Sango: "Sango",
      "sat-Latn": "Santali (Latin)",
      sat: "Santali (Ol Chiki)",
      Esperanto: "Esperanto",
      Swati: "Swati",
      "Scottish Gaelic": "İskoç Gaelcesi",
      sus: "Susu",
      ceb: "Cebuano",
      ber: "Berberice (Tifinagh)",
      "ber-Latn": "Berberice (Latin)",
      Tahitian: "Tahiti Dili",
      Tonga: "Tonga",
      Tigrinya: "Tigrinya",
      tcy: "Tulu",
      tum: "Tumbuka",
      tyv: "Tuva",
      war: "Waray",
      mak: "Makasar",
      vec: "Venedikçe",
      Uyghur: "Uygurca",
      Venda: "Venda",
      Wolof: "Wolof",
      udm: "Udmurtça",
      szl: "Silezyaca",
      scn: "Sicilyaca",
      hil: "Hiligaynon",
      jam: "Jamaika Patois",
      sah: "Yakutça",
      ace: "Acehnese",
      iba: "İban",
      Igbo: "İgbo",
      ilo: "İlokano",
      "iu-Latn": "İnuktitut (Latin)",
      Inuktitut: "İnuktitut",
      yua: "Yucatec Maya",
      Dzongkha: "Dzongkha",
      Zulu: "Zuluca"
    }
  },
  // Giriş, Kayıt, Şifre Değiştirme
  IdentityInfoManage: {
    or: "veya",
    LoginBtn: "E-posta ile giriş yap",
    LoginGoogle: "Google ile giriş yap",
    SignupBtn: "E-posta ile kaydol",
    SignupGoogle: "Google ile kaydol",
    SignupDes: "Bugün kaydolun ve sihri ücretsiz yaşayın.",
    SignupTitle: "Doğru ve sınırsız transkripsiyon",
    signup: "Kayıt Ol",
    sign_up: "Kayıt Ol",
    loginByGoogle: "Google ile Giriş Yap",
    emailAddress: "Lütfen e-posta adresinizi girin",
    createAccount: "Hesap Oluştur",
    accountExists: "Zaten bir hesabınız var mı? ",
    agreeTerm: {
      agree: "Devam ederek {terms} ve {policy} kabul etmiş olursunuz.",
      terms: "Şartlar",
      policy: "Gizlilik Politikası"
    },
    setPassword: "Şifre Belirle",
    code: "Doğrulama Kodu",
    resend: "Yeniden Gönder",
    enterPassword: "Şifre: En az 6 karakter.",
    passwordLeval: "Şifre Gücü",
    Weak: "Zayıf",
    Medium: "Orta",
    Strong: "Güçlü",
    confirmPassword: "Şifreyi Onayla",
    invalidEmail: "Geçersiz e-posta adresi",
    logInDirectly: "Hesap zaten mevcut, lütfen doğrudan giriş yapın.",
    codeErrorTryAgain: "Doğrulama kodu hatalı, lütfen tekrar deneyin.",
    atLeastSix: "Şifre en az 6 karakter olmalıdır.",
    passwordNotMatch: "Şifreler eşleşmiyor, lütfen tekrar deneyin.",
    login: "Giriş Yap",
    log_in: "Giriş Yap",
    log_In: "Giriş Yap",
    password: "Şifre",
    forgotPassword: "Şifremi Unuttum?",
    noAccount: "Hesabınız yok mu?",
    accountNotExists: "Hesap mevcut değil.",
    passwordError: "Şifre hatası",
    sendCode: "Doğrulama Kodu Gönder",
    resetPassword: "Şifreyi Sıfırla",
    resetYourPassword: "Şifrenizi Sıfırlayın",
    newOldCantSame: "Yeni şifre eskisiyle aynı olamaz.",
    passwordResetOk: "Şifre başarıyla sıfırlandı!",
    signupToSaveProgress: "Kaydınızı tamamlayarak ilerlemenizi kaydedin",
    tip: "İpucu",
    tipContentEmail: "Hesap giriş şifrenizi e-postanıza yeni gönderdik.",
    tipContentPassword:
      "Lütfen gelen kutunuzu kontrol edin ve e-posta adresinizle şifrenizi kullanarak giriş yapın.",
    codeToEmail:
      "Doğrulama kodunu e-posta adresinize gönderdik. Lütfen gelen kutunuzu kontrol edin ve doğrulama kodunu yukarıya yapıştırın."
  },
  // Paylaşım Detay Sayfası
  Sharepage: {},
  // Başlangıç Sayfası
  InitPage: {},
  // Hesap Ayarları
  AccountSettingsPage: {
    subscription: "Abonelik planı",
    freeversion: "Ücretsiz",
    transcribeTimesDay: "Günde 3 Transkripsiyon",
    uploadMinutes: "30 Dakikalık Yükleme",
    lowerPriority: "Düşük Öncelik",
    currentPlan: "Mevcut plan",
    professionalEdition: "profesyonel sürüm",
    unlimitedTranscription: "Sınırsız transkripsiyon",
    unlimitedNumberOfTimes: "Sınırsız transkripsiyon sıklığı ve süresi.",
    filesUploadedAtOnce:
      "Her dosya en fazla 10 saat / 5 GB olabilir. Aynı anda 50 dosya yükleyin.",
    highestPriority: "en yüksek öncelik",
    weWillGiveTheHighest:
      "Dosyalarınızı en yüksek öncelikle mümkün olan en kısa sürede transkribe edeceğiz.",
    theFirstMonth: "İlk ay",
    subscribeTo: "abone ol",
    basicVersionFree: "Temel sürüm (ücretsiz)",
    return: "Geri dön",
    annualize: "yıllık",
    monthly: "aylık",
    everyYear: "her yıl",
    saved: "kaydedildi",
    byTheMonth: "aylık olarak",
    firstMonth: "ilk ay",
    afterwardsEveryMonth: "Sonrasında, her ay",
    manageSubscription: "Aboneliği Yönet",
    professionalYearbook: "Profesyonel Yıllık",
    professionalMonthly: "Profesyonel Aylık",
    subscriptionWillCancelledOn: "Aboneliğiniz iptal edilecek",
    displayLanguage: "Görüntüleme dili",
    update: "Şimdi Yükselt",
    basicversion: "Temel sürüm (Ücretsiz)",
    daily: "{start} / {end} günlük transkripsiyon kullanıldı",
    upgradetoPro: "Pro'ya Yükselt",
    accountSetting: "Hesap Ayarları",
    logOut: "Oturumu kapat",
    account: "Hesap",
    email: "E-posta",
    id: "ID",
    password: "Şifre",
    resetPassword: "Şifreyi Sıfırla",
    logIn: "Oturum aç",
    tryForFree: "Ücretsiz Dene",
    notFund: "Bulunamadı",
    couldntFind: "Aradığınız şeyi bulamadık.",
    proAnnual: "Pro Yıllık",
    proMonthly: "Pro Aylık",
    perMonth: "aylık",
    afterwards: "sonrasında",
    accuracy: "transkripsiyon doğruluğu",
    supported: "desteklenen diller",
    identification: "Konuşmacı tanımlama",
    transcriptSranslation: "Transkript çevirisi",
    perYear: "yıllık",
    getProPlan: "Pro Planı Edinin",
    changeToAnnual: "Yıllığa Geç",
    automaticRenewalon: "Otomatik yenileme tarihi",
    eachMonth: "Her ayın {time}. günü otomatik yenileme.",
    automaticRenewal:
      "Otomatik yenileme başarısız oldu, lütfen ödeme yöntemini kontrol edin.",
    eachYear: "Her yıl {time} otomatik yenileme.",
    returnAccountSetting: "Geri",
    needsToWaitLonger:
      "Dosyalarınız transkript edilmeden önce daha uzun süre bekleyin.",
    freeThreeTimesDay: "Her gün 3 dosyayı ücretsiz olarak transkript edin.",
    oneFileUploaded:
      "Her dosya en fazla 30 dakika uzunluğunda olabilir. Bir seferde 1 dosya yükleyin.",
    uploadWithinHours: "10 Saatlik Yüklemeler",
    yourSubscription: "Aboneliğiniz {time} tarihinde iptal edilecek.",
    save: "Tasarruf etmek"
  },
  // Dil Eşleştirme
  LanguageMap: {
    sysLanguagesMap: {
      "Chinese(Simplified)": "Çince (Basitleştirilmiş)",
      "Chinese(Traditional)": "Çince (Geleneksel)",
      Japanese: "Japonca",
      Danish: "Danca",
      German: "Almanca",
      English: "İngilizce",
      Spanish: "İspanyolca",
      French: "Fransızca",
      Italian: "İtalyanca",
      Hungarian: "Macarca",
      Dutch: "Hollandaca",
      Norwegian: "Norveççe",
      Polish: "Lehçe",
      Portuguese: "Portekizce",
      Finnish: "Fince",
      Swedish: "İsveççe",
      Turkish: "Türkçe",
      Greek: "Yunanca",
      Russian: "Rusça",
      Ukrainian: "Ukraynaca",
      Hebrew: "İbranice",
      Arabic: "Arapça",
      Korean: "Korece"
    }
  },
  demo: {
    title: "NuxtPro",
    description:
      "Açık kaynak Nuxt3 SaaS şablonu, küresel ödeme ağ geçitleri (Stripe/Cream), Google OAuth, i18n yönlendirme ve SEO optimizasyon araçları ile önceden entegre edilmiştir. Çok dilli web uygulamaları geliştiren geliştiriciler için özel olarak tasarlanmış, SSR/SSG desteği ve üretim düzeyinde güvenlik sağlar.",
    startLink: "Ücretsiz denemeye başlayın~",
    thirdPartyLink: "Github →",
    waitlist: {
      cardTitle:
        "En son NuxtPro haberlerini ve indirimlerini ilk alan olmak için bekleme listesine katılın!",
      placeholder: "E-posta adresinizi girin",
      button: "Bekleme Listesine Katıl",
      joinCountMessage:
        "🔥 Erken kullanıcı #{count} az önce bekleme listesine katıldı!"
    },
    seo: {
      title: "Açık Kaynak Nuxt SaaS Şablonu | NuxtPro",
      description:
        "Ürününüzü hızlı bir şekilde müşterilere sunmanız için ihtiyacınız olan her şeyi içeren NuxtJS şablonu. Fikirden üretime sadece 5 dakikada."
    },
    api: {
      title: "Bu bir demo",
      corpInfo: "Şirket Bilgileri"
    }
  },
  videoLang: {
    ERROR_TYPES: {
      network: {
        code: 1,
        msg: "Video indirme hatası"
      },
      mse: {
        code: 2,
        msg: "Akış ekleme hatası"
      },
      parse: {
        code: 3,
        msg: "Ayrıştırma hatası"
      },
      format: {
        code: 4,
        msg: "Format hatası"
      },
      decoder: {
        code: 5,
        msg: "Kod çözme hatası"
      },
      runtime: {
        code: 6,
        msg: "Sözdizimi hatası"
      },
      timeout: {
        code: 7,
        msg: "Oynatma zaman aşımı"
      },
      other: {
        code: 8,
        msg: "Diğer hata"
      }
    },
    HAVE_NOTHING: "Ses/video hazırlığı hakkında bilgi yok",
    HAVE_METADATA: "Ses/video meta verileri hazır",
    HAVE_CURRENT_DATA:
      "Mevcut oynatma konumu hakkındaki veriler kullanılabilir, ancak sonraki kare/milisaniyeyi oynatmak için yeterli veri yok",
    HAVE_FUTURE_DATA: "Mevcut ve en az bir sonraki kare için veriler mevcut",
    HAVE_ENOUGH_DATA: "Oynatmaya başlamak için yeterli veri mevcut",
    NETWORK_EMPTY: "Ses/video henüz başlatılmadı",
    NETWORK_IDLE: "Ses/video etkin ve kaynak seçildi, ancak ağ kullanılmıyor",
    NETWORK_LOADING: "Tarayıcı veri indiriyor",
    NETWORK_NO_SOURCE: "Ses/video kaynağı bulunamadı",
    MEDIA_ERR_ABORTED: "Alma işlemi kullanıcı tarafından iptal edildi",
    MEDIA_ERR_NETWORK: "Ağ hatası",
    MEDIA_ERR_DECODE: "Kod çözme hatası",
    MEDIA_ERR_SRC_NOT_SUPPORTED: "Desteklenmeyen ses/video formatı",
    REPLAY: "Tekrar Oynat",
    ERROR: "Ağ bağlantısında bir sorun var gibi görünüyor",
    PLAY_TIPS: "Oynat",
    PAUSE_TIPS: "Duraklat",
    PLAYNEXT_TIPS: "Sonraki Bölüm",
    DOWNLOAD_TIPS: "İndir",
    ROTATE_TIPS: "Döndür",
    RELOAD_TIPS: "Yeniden Yükle",
    FULLSCREEN_TIPS: "Tam Ekran",
    EXITFULLSCREEN_TIPS: "Tam Ekrandan Çık",
    CSSFULLSCREEN_TIPS: "CSS Tam Ekran",
    EXITCSSFULLSCREEN_TIPS: "CSS Tam Ekrandan Çık",
    TEXTTRACK: "Altyazı",
    PIP: "Resim İçinde Resim",
    SCREENSHOT: "Ekran Görüntüsü",
    LIVE: "Canlı Yayın",
    OFF: "Kapalı",
    OPEN: "Açık",
    MINI_DRAG: "Videoyu sürüklemek için tıklayıp basılı tutun",
    MINISCREEN: "Küçük Ekran",
    REFRESH_TIPS: "Deneyin",
    REFRESH: "Yenile",
    FORWARD: "İleri Sarma",
    LIVE_TIP: "Canlı",
    TM_SUBTITLE_SHOW_TIPS: "Altyazıları Aç",
    TM_SUBTITLE_HIDE_TIPS: "Altyazıları Kapat",
    TM_MINIMIZE_TIPS: "Videoyu Gizle"
  },
  privacyPolicy: {
    privacyPolicyTitle: "Gizlilik Politikası",
    lastUpdated: "Son güncelleme: 25 Ağustos 2025",
    policyDescription:
      `Bu Politika, Scribify'ın (bundan böyle "Scribify", "bizim", "biz", "bize" olarak anılacaktır) hizmetlerimizi, web sitelerimizi kullandığınızda kişisel bilgilerinizi nasıl topladığını, kullandığını ve ifşa ettiğini açıklar.`,
    websiteLink: "(https://www.scribify.ai/)",
    servicesDefinition: 've yazılım (toplu olarak "Hizmetler").',
    policyAgreement:
      "Lütfen bu Gizlilik Politikasını dikkatlice okuyun ve anladığınızdan emin olun. Hizmetlerimizden herhangi birini kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Kişisel verilerinizin bu Politikaya uygun olarak kullanılmasını kabul etmiyorsanız, Hizmetlerimizi kullanmayı derhal bırakmalısınız.",
    policyOverview:
      "Bu politikada, hangi verileri neden topladığımızı, verilerinizin nasıl işlendiğini ve verilerinizle ilgili haklarınızı açıklıyoruz. Verilerinizi satmıyoruz.",
    scopeTitle: "1. Bu Gizlilik Politikasının Kapsamı",
    whatWeCollectTitle: "2. Neleri topluyoruz ve neden?",
    accessShareTitle:
      "3. Bilgilerinize eriştiğimizde veya bunları paylaştığımızda",
    secureDataTitle: "4. Verilerinizi nasıl güvence altına alıyoruz?",
    deleteContentTitle: "5. İçeriğinizi sildiğinizde ne olur?",
    locationTitle: "6. Sitenin ve verilerin konumu",
    childrenPrivacyTitle: "7. Çocukların Gizliliği",
    updatesTitle: "8. Bu Gizlilik Politikasındaki Güncellemeler",
    contactUsTitle: "9. Bizimle İletişime Geçin",
    identityAccessTitle: "2.1 Kimlik ve erişim",
    billingInfoTitle: "2.2 Fatura bilgileri",
    productInteractionsTitle: "2.3 Ürün etkileşimleri",
    websiteInteractionsTitle: "2.4 Web sitesi etkileşimleri",
    cookiesTitle: "2.5 Çerezler",
    voluntaryCorrespondenceTitle: "2.6 Gönüllü yazışmalar",
    scopeContent:
      "Bu Gizlilik Politikası, yalnızca Hizmetlerin kullanıcıları hakkındaki bilgilerin toplanması ve işlenmesi için geçerlidir. Bu Gizlilik Politikası, bize bağlantı veren üçüncü taraflarca işletilen hiçbir hizmet, web sitesi veya yazılım için geçerli değildir (bu bağlantıları biz sağlasak da, diğer kullanıcılar paylaşsa da) ve üçüncü taraflara ait içerik, veri, uygulama veya materyaller için de geçerli değildir. Herhangi bir üçüncü taraf web sitesi veya yazılımına herhangi bir bilgi vermeden önce gizlilik politikalarını kontrol etmenizi tavsiye ederiz.",
    collectPrinciple:
      "Rehber ilkemiz, yalnızca ihtiyacımız olanı toplamaktır. Bunun pratikteki anlamı şudur:",
    identityAccessContent:
      "Ürünlerimizden birine kaydolduğunuzda, adınız, e-posta adresiniz gibi kimlik bilgilerinizi isteriz. Bu, ürünün temel işlevlerini sağlamak ve size ürün güncellemeleri ve diğer önemli bilgileri gönderebilmemiz içindir.",
    billingInfoContent:
      "Ücretli bir ürüne kaydolursanız, ödeme bilgilerinizi ve fatura adresinizi vermeniz istenecektir. Ödeme bilgileriniz doğrudan ödeme işlemcimize gönderilir ve sunucularımıza aktarılmaz.",
    productInteractionsContent:
      "Ürün hesaplarınıza yüklediğiniz, aldığınız veya muhafaza ettiğiniz içerikleri sunucularımızda saklıyoruz. Bu içeriği silmediğiniz sürece, hesabınız aktif olduğu sürece bu içeriği saklayabiliriz.",
    websiteInteractionsContent:
      "Dönüşüm oranı testleri ve yeni ürün tasarımları denemeleri gibi analiz ve istatistiksel amaçlarla tarama etkinliğiniz hakkında bilgi topluyoruz. Bu bilgiler arasında tarayıcınızın ve işletim sisteminizin sürümleri, IP adresiniz, ziyaret ettiğiniz web sayfaları ve bunların yüklenme süresi ve sizi bize yönlendiren web sitesi gibi bilgiler yer alır. Bir hesabınız varsa ve oturum açtıysanız, bu web analizi verileri, hesabınız aktif olmayana kadar IP adresiniz ve kullanıcı hesabınızla ilişkilendirilir.",
    cookiesContent1:
      "Ayrıca, belirli tercihleri saklamak, uygulamalarımızı kullanmanızı kolaylaştırmak, A/B testleri gerçekleştirmek ve bazı analizleri desteklemek için kalıcı birinci taraf çerezleri ve bazı üçüncü taraf çerezleri kullanıyoruz.",
    cookiesContent2:
      "Çerez, tarayıcınız tarafından depolanan bir metin parçasıdır. Oturum açma bilgilerinizi ve site tercihlerinizi hatırlamanıza yardımcı olabilir. Ayrıca tarayıcınızın türü, işletim sistemi, ziyaret edilen web sayfaları, ziyaret süresi, görüntülenen içerik ve diğer tıklama akışı verileri gibi bilgileri de toplayabilir. Çerez saklama ayarlarını düzenleyebilir ve tarayıcı ayarlarınızdan tek tek çerezleri kabul edebilir veya engelleyebilirsiniz. Ancak çerezleri kapatırsanız uygulamalarımız ve hizmetimizin diğer özellikleri düzgün çalışmayabilir.",
    voluntaryCorrespondenceContent:
      "Bize bir soru sormak veya yardım istemek için e-posta gönderdiğinizde, e-posta adresiniz de dahil olmak üzere bu yazışmaları saklarız; böylece gelecekte bize ulaşmanız durumunda referans alabileceğimiz geçmiş yazışmaların bir geçmişine sahip oluruz.",
    accessShareContent1:
      "Talep ettiğiniz ürün veya hizmetleri sağlamak için. Uygulamalarımızı çalıştırmamıza ve Hizmetleri size sunmamıza yardımcı olmak için bazı üçüncü taraf alt işlemcilerden yararlanıyoruz. Bunlara bulut ve analiz sağlayıcıları da dahildir.",
    accessShareContent2:
      "Kötüye kullanımı araştırmak, önlemek veya bu konuda işlem yapmak. Olası bir kötüye kullanımı araştırırken bir müşterinin hesabına erişmek son çaredir. Hem müşterilerimizin hem de bize sorun bildiren kişilerin gizliliğini ve güvenliğini korumak istiyoruz ve süreç boyunca bu sorumlulukları dengelemek için elimizden gelenin en iyisini yapıyoruz. Ürünlerimizi kısıtlı bir amaçla kullandığınızı tespit edersek, gerekli durumlarda ilgili makamlara bildirimde bulunmak da dahil olmak üzere gerekli işlemleri yapacağız.",
    accessShareContent3: "Uygulanabilir yasa gereği gerekli olduğunda.",
    userDataRequests:
      "- Kullanıcı verilerine ilişkin talepler. Politikamız, yasal bir süreç gerektirmediği veya acil bir talep durumunda sınırlı koşullar olmadığı sürece, resmi makamların kullanıcı verilerine ilişkin taleplerine yanıt vermemektir. Ancak, ABD kolluk kuvvetlerinin veri paylaşmamızı gerektiren gerekli emri, cezai celbi veya mahkeme emri varsa, bu emre uymak zorundayız. Benzer şekilde, ABD dışındaki resmi makamlardan gelen taleplere, yalnızca ABD hükümeti tarafından karşılıklı hukuki yardım anlaşması veya sözleşmesinde belirtilen prosedürler uyarınca zorunlu kılınması halinde yanıt vereceğiz. Yasal olarak yasaklanmadığımız ve bazı acil durumlar haricinde, veri paylaşmadan önce etkilenen kullanıcıları bilgilendirmek politikamızdır.",
    preservationRequests:
      "- Saklama talepleri. Benzer şekilde, politikamız, yalnızca ABD Federal Saklı İletişim Yasası, 18 USC Bölüm 2703(f) veya hukuk davaları için usulüne uygun olarak tebliğ edilmiş bir ABD mahkeme celbi uyarınca zorunlu kılınması halinde veri saklama taleplerine uymaktır. Yasalarca zorunlu kılınmadıkça veya itiraz etmemeyi tercih ettiğimiz bir mahkeme kararıyla zorunlu kılınmadıkça, saklanan verileri paylaşmayız. Ayrıca, gerekli saklama süresi dolmadan önce uygun bir arama emri, mahkeme kararı veya mahkeme celbi almadığımız takdirde, saklama süresinin sonunda müşteri verilerinin saklanan tüm kopyalarını imha edeceğiz.",
    taxAudit:
      "- Bir vergi dairesi tarafından denetlenmemiz durumunda, faturalandırmayla ilgili bilgileri paylaşmamız gerekebilir. Bu durumda, fatura adresleri ve vergi muafiyet bilgileri gibi yalnızca gerekli olan asgari bilgileri paylaşırız.",
    secureDataContent1: "Tüm veriler şifrelenir",
    sslTlsLink: "SSL/TLS",
    secureDataContent2: "sunucularımızdan tarayıcınıza iletildiğinde.",
    deleteContentContent:
      "Herhangi bir içeriği silerseniz, anında erişilemez hale gelecektir.",
    locationContent:
      "Ürünlerimiz ve diğer web sitelerimiz Amerika Birleşik Devletleri'nde işletilmektedir. Avrupa Birliği, Birleşik Krallık veya Amerika Birleşik Devletleri dışında bir yerde bulunuyorsanız, bize sağladığınız tüm bilgilerin Amerika Birleşik Devletleri'ne aktarılacağını ve orada saklanacağını lütfen unutmayın. Web sitelerimizi veya Hizmetlerimizi kullanarak ve/veya bize kişisel bilgilerinizi vererek, bu aktarıma onay vermiş olursunuz.",
    childrenPrivacyContent:
      "Hizmetler çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek Kişisel Bilgi toplamıyoruz. 13 yaşın altındaysanız, lütfen Hizmetler aracılığıyla herhangi bir kişisel bilgi göndermeyin. Bir çocuğun bu Politikayı ihlal ederek bize Kişisel Bilgi sağladığına inanıyorsanız, lütfen aşağıda belirtildiği şekilde bizimle iletişime geçin.",
    updatesContent:
      "İlgili düzenlemelere uyum sağlamak ve yeni uygulamaları yansıtmak için bu politikayı gerektiği gibi güncelleyebiliriz. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyeceğiz.",
    contactUsContent1:
      "Gizlilik Politikamızla ilgili herhangi bir sorunuz, yorumunuz veya şikayetiniz varsa lütfen",
    contactUs: "bize Ulaşın",
    contactUsContent2:
      "ve şikayetinizle en kısa sürede ilgilenmeye çalışacağız."
  },
  termsOfService: {
    termsOfServiceTitle: "Hizmet Şartları",
    lastUpdated: "Son güncelleme: 21 Eylül 2022",
    thankYouMessage: "Ürünlerimizi kullandığınız için teşekkür ederiz!",
    companyReference:
      `Bu belgede "Şirket", "biz", "bizim" veya "bize" dediğimizde Scribify'ı kastediyoruz.`,
    servicesDefinition:
      '"Hizmetler" dediğimizde, ister bir web tarayıcısı, masaüstü uygulaması, mobil uygulama veya başka bir formatta sunulsun, Scribify tarafından oluşturulan ve yönetilen herhangi bir ürünü kastediyoruz.',
    termsUpdateNotice:
      "Bu Hizmet Şartları'nı gelecekte güncelleyebiliriz. Bu değişiklikler genellikle, genişletilmiş ilgili bir politikaya bağlantı vererek bu şartlardan bazılarını açıklığa kavuşturmak amacıyla yapılmıştır. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyecek ve hesap sahiplerini bilgilendirmek için diğer uygun adımları atacağız.",
    acceptanceOfAgreementTitle: "1. Sözleşmenin Kabulü",
    scribifyServicesTitle: "2. Scribify'ın Hizmetleri",
    accountTermsTitle: "3. Hesap Şartları",
    paymentRefundsTitle: "4. Ödeme, Geri Ödemeler ve Plan Değişiklikleri",
    cancellationTerminationTitle: "5. İptal ve Fesih",
    submissionsTitle: "6. Gönderimler",
    uptimeSecurityTitle: "7. Çalışma Süresi ve Güvenlik",
    siteManagementTitle: "8. Site Yönetimi",
    copyrightContentTitle: "9. Telif Hakkı ve İçerik Sahipliği",
    prohibitedActivitiesTitle: "10. Yasaklanmış Faaliyetler",
    featuresBugsTitle: "11. Özellikler ve Hatalar",
    correctionsTitle: "12. DÜZELTMELER",
    userDataTitle: "13. Kullanıcı Verileri",
    privacyPolicyTitle: "14. Gizlilik Politikası",
    liabilityTitle: "15. Sorumluluk",
    miscellaneousTitle: "16. Çeşitli",
    contactUsTitle: "17. Bizimle İletişime Geçin",
    acceptanceContent1:
      "Hizmetlerimizi kullanarak, bu Sözleşme'yi kabul ettiğinizi beyan etmiş olursunuz; bu Sözleşme, sizinle Scribify arasında bağlayıcı bir sözleşme haline gelir. Bu Şartları yasal olarak kabul etme yetkisine sahip olduğunuzu beyan eder ve bağlayıcı bir sözleşme yapmak için yasal yaşta olduğunuzu onaylarsınız. Scribify'ın kabulü, bu Sözleşme'nin tüm hüküm ve koşullarını kabul etmenize açıkça bağlıdır.",
    acceptanceContent2:
      "Hizmetler, 18 yaşın altındaki kişiler için tasarlanmamıştır ve bu kişiler tarafından kullanılmamalıdır. Hizmetleri kullanarak, yukarıda belirtilen uygunluk şartlarını karşıladığınızı beyan ve garanti edersiniz.",
    acceptanceContent3:
      `"Siz", "sizin", "kendiniz" terimleri, çalışanlarınızı, temsilcilerinizi, iş temsilcilerinizi ve Hesabınız (aşağıda tanımlandığı şekilde) aracılığıyla Hizmetlere erişim sağladığınız diğer kişileri de kapsar. Hesabınız aracılığıyla Hizmetlere erişen tüm kişilerin bu Şartlar'dan haberdar olmasını ve bunlara uymasını sağlamak sizin sorumluluğunuzdadır.`,
    acceptanceContent4:
      "Scribify, bu Şartları kendi takdirine bağlı olarak zaman zaman revize etme ve güncelleme hakkını saklı tutar. Tüm değişiklikler yayınlandığı anda yürürlüğe girer. Revize edilen Şartların yayınlanmasının ardından Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz ve onayladığınız anlamına gelir. Değişiklikler sizin için bağlayıcı olduğundan, değişikliklerden haberdar olmak için bu sayfayı zaman zaman kontrol etmeniz beklenmektedir.",
    servicesContent1:
      "Hizmetlerimiz, kullanıcıların sesli görüşmeleri aranabilen, çevrilebilen ve başkalarıyla paylaşılabilen yazıya dökülmüş metne dönüştürmesini sağlar.",
    servicesContent2:
      'Hizmetlerin ücretsiz sürümünü ("Ücretsiz Hizmetler") veya ücret ödemeniz gerekebilecek abonelik tabanlı ücretli Hizmetlerin sürümünü ("Ücretli Hizmetler") kullanmayı seçebilirsiniz.',
    servicesContent3:
      "Hizmetleri size sunacağız. Hizmetlere erişiminiz için gerekli tüm düzenlemeleri yapmaktan siz sorumlusunuz.",
    accountTerms1:
      "- Hesabınızın güvenliğini sağlamak sizin sorumluluğunuzdadır. Şirket, bu güvenlik yükümlülüğüne uymamanızdan kaynaklanan herhangi bir kayıp veya zarardan sorumlu tutulamaz ve tutulmayacaktır.",
    accountTerms2:
      "- Hizmetleri herhangi bir hukuka aykırı, etik olmayan veya ahlaka aykırı amaç için kullanamazsınız.",
    accountTerms3:
      "- Hesabınız altında yayınlanan tüm içeriklerden ve gerçekleşen tüm etkinliklerden siz sorumlusunuz. Bu, (a) oturum açma bilgilerinize erişimi olan veya (b) hesabınız altında kendi oturum açma bilgilerine sahip olan başkaları tarafından yayınlanan içerikleri de içerir.",
    accountTerms4:
      '- İnsan olmanız gerekmektedir. "Bot" veya diğer otomatik yöntemlerle oluşturulan hesaplara izin verilmemektedir.',
    paymentContent1:
      "- Ücretsiz deneme sunan ücretli Hizmetler için, kaydolduğunuzda deneme süresinin uzunluğunu açıklıyoruz. Deneme süresinden sonra, Hizmeti kullanmaya devam etmek için önceden ödeme yapmanız gerekmektedir. Ödeme yapmazsanız, bu hizmetler sona erecektir.",
    paymentContent2:
      "- Ücretsiz bir plandan ücretli bir plana yükseltme yapıyorsanız, kartınızdan hemen ücret tahsil edilir ve faturalandırma döngünüz yükseltme gününde başlar.",
    paymentContent3:
      "- Tüm ücretlere, vergi makamları tarafından uygulanan tüm vergiler, harçlar veya vergiler dahil değildir. Gerektiğinde, bu vergileri vergi makamları adına tahsil edip vergi makamlarına ileteceğiz. Aksi takdirde, tüm vergi, harç veya vergilerin ödenmesinden siz sorumlusunuz.",
    paymentContent4:
      "- Satın alımlar iade edilemez. Hesabınıza giriş yaparak ücretli hizmetleri istediğiniz zaman iptal edebilirsiniz. Ücretli aboneliklerde, aksi belirtilmedikçe iptaliniz mevcut ücretli dönemin sonunda geçerli olacaktır.",
    cancellationContent1:
      "- Ücretli bir sürenin bitiminden önce Hizmeti iptal ederseniz, iptaliniz derhal geçerli olacak ve sizden tekrar ücret alınmayacaktır. Son fatura döneminde kullanılmayan süreyi otomatik olarak oransal olarak bölmüyoruz.",
    cancellationContent2:
      "- Hesabınızı askıya alma veya sonlandırma ve Hizmetlerimizin mevcut veya gelecekteki tüm kullanımlarını herhangi bir zamanda, herhangi bir nedenle reddetme hakkımız saklıdır. Askıya alma, hesaba veya hesaptaki herhangi bir içeriğe erişemeyeceğiniz anlamına gelir. Sonlandırma ayrıca hesabınızın veya hesabınıza erişiminizin silinmesi ve hesabınızdaki tüm içeriğin kaybedilmesi ve vazgeçilmesiyle sonuçlanacaktır. Ayrıca, herhangi bir zamanda, herhangi bir nedenle herhangi bir kişinin Hizmetleri kullanmasını reddetme hakkımızı saklı tutuyoruz. Bu maddeyi kullanmamızın nedeni, istatistiksel olarak, Hizmetlerimizdeki yüz binlerce hesaptan en az birinin kötü niyetli bir şey yapıyor olmasıdır.",
    cancellationContent3:
      "- Şirket çalışanına veya yöneticisine yönelik sözlü, fiziksel, yazılı veya başka türlü taciz (taciz veya misilleme tehditleri dahil) hesabın derhal feshedilmesine yol açabilir.",
    submissionsContent:
      'Tarafınızca Site ile ilgili olarak bize sağlanan her türlü soru, yorum, öneri, fikir, geri bildirim veya diğer bilgilerin ("Gönderimler") gizli olmadığını ve münhasır mülkiyetimiz haline geleceğini kabul ve beyan edersiniz. Tüm fikri mülkiyet hakları da dahil olmak üzere münhasır haklara sahip olacağız ve bu Gönderimleri, size herhangi bir bildirimde bulunmaksızın veya tazminat ödemeden, ticari veya başka türlü herhangi bir yasal amaç için sınırsız olarak kullanma ve yayma hakkına sahip olacağız. Bu tür Gönderimler üzerindeki tüm manevi haklardan feragat ediyor ve bu tür Gönderimlerin size ait olduğunu veya bu tür Gönderimleri gönderme hakkına sahip olduğunuzu garanti ediyorsunuz. Gönderimleriniz üzerindeki herhangi bir mülkiyet hakkının iddia edilen veya fiili ihlali veya kötüye kullanımı nedeniyle bize karşı hiçbir başvuru yolu olmayacağını kabul edersiniz.',
    uptimeContent1:
      '- Hizmetleri kullanımınızın tüm riski size aittir. Bu Hizmetleri "olduğu gibi" ve "mevcut olduğu şekilde" sunuyoruz. Hizmetlerimizin çoğu için hizmet seviyesi sözleşmeleri sunmuyoruz, ancak uygulamalarımızın çalışma süresini ciddiye alıyoruz.',
    uptimeContent2:
      "- Kullanımınızın, Hizmetlerin diğer müşterilerinin tipik kullanımlarını önemli ölçüde aşması durumunda hesabınızı geçici olarak devre dışı bırakma hakkımızı saklı tutarız. Kullanım düzeyinin diğer müşteriler için Hizmet performansını olumsuz etkileyebileceği nadir durumlar haricinde, herhangi bir işlem yapmadan önce sizinle iletişime geçeceğiz.",
    uptimeContent3:
      "- Verilerinizi yedekleme, yedekleme ve şifreleme yoluyla korumak ve güvence altına almak için birçok önlem alıyoruz. Genel internet üzerinden veri iletimi için şifreleme uyguluyoruz.",
    uptimeContent4:
      "- Hizmetleri çalıştırmak için gereken donanım, yazılım, ağ, depolama ve ilgili teknolojiyi sağlamak amacıyla üçüncü taraf satıcıları ve barındırma ortaklarını kullanıyoruz.",
    siteManagementContent:
      "(1) Site'yi bu Hizmet Şartları'nın ihlalleri açısından izlemek; (2) kendi takdirimize bağlı olarak kanunu veya bu Hizmet Şartları'nı ihlal eden herkese karşı uygun yasal işlemleri başlatmak, bu tür kullanıcıları kolluk kuvvetlerine bildirmek dahil ancak bunlarla sınırlı olmamak üzere; (3) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Katkılarınızdan herhangi birini veya herhangi bir kısmını reddetmek, erişimini kısıtlamak, kullanılabilirliğini sınırlamak veya devre dışı bırakmak (teknolojik olarak mümkün olduğu ölçüde); (4) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Site'den aşırı boyutta olan veya sistemlerimiz için herhangi bir şekilde külfetli olan tüm dosyaları ve içeriği kaldırmak veya başka şekilde devre dışı bırakmak; ve (5) Site'yi haklarımızı ve mülkiyetimizi korumak ve Site'nin düzgün çalışmasını kolaylaştırmak için tasarlanmış bir şekilde yönetmek.",
    copyrightContent1:
      "- Hizmetlerde yayınlanan tüm içerikler ABD telif hakkı yasasına uygun olmalıdır.",
    copyrightContent2:
      "- Hizmetlere sağladığınız materyaller üzerinde hiçbir fikri mülkiyet hakkı iddia etmiyoruz. Yüklenen tüm materyaller size ait olmaya devam edecektir.",
    copyrightContent3:
      "- İçeriği önceden kontrol etmiyoruz, ancak Hizmet aracılığıyla sunulan herhangi bir içeriği kendi takdirimize bağlı olarak reddetme veya kaldırma hakkını saklı tutuyoruz (ancak bu bir yükümlülük değil).",
    copyrightContent4:
      "- Hizmetlerin adları, görünümü ve hissiyatı Şirket'e aittir. Tüm hakları saklıdır. Şirket'in açık yazılı izni olmadan HTML, CSS, JavaScript veya görsel tasarım öğelerinin hiçbir bölümünü çoğaltamaz, kopyalayamaz veya yeniden kullanamazsınız. Şirket logosunu veya herhangi bir Hizmet logosunu tanıtım amaçlı kullanmak için izin almalısınız. Lütfen",
    emailUs: "bize e-posta gönderin",
    copyrightContent5:
      "Logo kullanma talepleri. Bu Hizmet Şartları'nı ihlal etmeniz halinde bu izni iptal etme hakkımızı saklı tutarız.",
    copyrightContent6:
      "- Şirket'in açık yazılı izni olmaksızın Hizmetlerin herhangi bir bölümünü, Hizmetlerin kullanımını veya Hizmetlere erişimi çoğaltmamayı, kopyalamamayı, satmamayı, yeniden satmamayı veya istismar etmemeyi kabul edersiniz.",
    copyrightContent7:
      "- Başka bir web sitesini, Hizmetler veya Şirket ile ilişkili olduğu yönünde yanlış bir imada bulunacak şekilde değiştirmemelisiniz.",
    copyrightContent8:
      "- Başkalarının fikri mülkiyet haklarına saygı duyuyoruz. Sitede veya Site aracılığıyla erişilebilen herhangi bir materyalin, sahip olduğunuz veya kontrol ettiğiniz herhangi bir telif hakkını ihlal ettiğine inanıyorsanız, lütfen derhal bizimle iletişime geçin.",
    contactUs: "bize Ulaşın",
    copyrightContent9:
      "Bildiriminizin bir kopyası, Bildirimde belirtilen materyali yayınlayan veya depolayan kişiye gönderilecektir. Lütfen, yürürlükteki yasalar uyarınca, bir Bildirimde önemli yanlış beyanlarda bulunmanız durumunda tazminat ödemek zorunda kalabileceğinizi unutmayın. Bu nedenle, Sitede bulunan veya Site tarafından bağlantısı verilen materyalin telif hakkınızı ihlal ettiğinden emin değilseniz, öncelikle bir avukata başvurmayı düşünmelisiniz.",
    prohibitedActivitiesIntro:
      "Site'ye, tarafımızca kullanıma sunulma amacı dışında herhangi bir amaçla erişemez veya kullanamazsınız. Site, tarafımızca özel olarak onaylanan veya desteklenenler dışında herhangi bir ticari girişimle bağlantılı olarak kullanılamaz.",
    prohibitedActivitiesUserAgreement:
      "Sitenin bir kullanıcısı olarak şunları yapmamayı kabul edersiniz:",
    prohibitedActivity1:
      "- Bizden yazılı izin almadan, doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak veya derlemek amacıyla Siteden sistematik olarak veri veya diğer içerikleri almak.",
    prohibitedActivity2:
      "- Özellikle kullanıcı şifreleri gibi hassas hesap bilgilerini öğrenmeye yönelik herhangi bir girişimde bulunarak bizi ve diğer kullanıcıları kandırmak, dolandırmak veya yanıltmak.",
    prohibitedActivity3:
      "- Sitenin güvenlikle ilgili özelliklerini, İçeriğin kullanımını veya kopyalanmasını engelleyen veya kısıtlayan veya Sitenin ve/veya Sitede bulunan İçeriğin kullanımına ilişkin sınırlamalar getiren özellikler dahil olmak üzere, devre dışı bırakmak veya başka şekillerde engellemek.",
    prohibitedActivity4:
      "- Bizim görüşümüze göre bizi ve/veya Siteyi küçük düşürmek, karalamak veya başka bir şekilde zarar vermek.",
    prohibitedActivity5:
      "- Siteden elde edilen herhangi bir bilgiyi başka bir kişiyi taciz etmek, istismar etmek veya zarar vermek amacıyla kullanmak.",
    prohibitedActivity6:
      "- Destek hizmetlerimizi uygunsuz şekilde kullanmayın veya kötüye kullanım veya uygunsuz davranışa ilişkin asılsız bildirimlerde bulunmayın.",
    prohibitedActivity7:
      "- Siteyi yürürlükteki herhangi bir yasa veya yönetmeliğe aykırı bir şekilde kullanmak.",
    prohibitedActivity8:
      "- Sitenin izinsiz olarak çerçevelenmesi veya Siteye bağlantı verilmesi.",
    prohibitedActivity9:
      "- Sitenin herhangi bir tarafça kesintisiz kullanımını ve keyfini engelleyen veya Sitenin kullanımını, özelliklerini, işlevlerini, işletimini veya bakımını değiştiren, bozan, kesintiye uğratan, değiştiren veya bunlara müdahale eden virüsleri, Truva atlarını veya büyük harflerin aşırı kullanımı ve spam (tekrarlayan metinlerin sürekli olarak gönderilmesi) gibi diğer materyalleri yüklemek veya iletmek (veya yüklemeye veya iletmeye çalışmak).",
    prohibitedActivity10:
      "- Yorum veya mesaj göndermek için komut dosyaları kullanmak veya veri madenciliği, robotlar veya benzeri veri toplama ve çıkarma araçlarını kullanmak gibi sistemin herhangi bir otomatik kullanımına girişmek.",
    prohibitedActivity11:
      "- Herhangi bir İçerikten telif hakkı veya diğer mülkiyet hakları bildirimini silin.",
    prohibitedActivity12:
      "- Başka bir kullanıcıyı veya kişiyi taklit etmeye çalışmak veya başka bir kullanıcının kullanıcı adını kullanmak.",
    prohibitedActivity13:
      `- Pasif veya aktif bilgi toplama veya iletim mekanizması olarak işlev gören herhangi bir materyali yüklemek veya iletmek (veya yüklemeyi veya iletmeyi denemek) (bunlarla sınırlı olmamak üzere, net grafik değişim biçimleri ("gif'ler"), 1x1 piksel, web böcekleri, çerezler veya diğer benzer aygıtlar (bazen "casus yazılım" veya "pasif toplama mekanizmaları" veya "pcm'ler" olarak anılır).`,
    prohibitedActivity14:
      "- Siteye veya Siteye bağlı ağlara veya hizmetlere müdahale etmek, bunları bozmak veya bunlar üzerinde gereksiz bir yük oluşturmak.",
    prohibitedActivity15:
      "- Sitenin herhangi bir bölümünü size sağlamakla görevli çalışanlarımızı veya temsilcilerimizi taciz etmek, rahatsız etmek, korkutmak veya tehdit etmek.",
    prohibitedActivity16:
      "- Siteye veya Sitenin herhangi bir bölümüne erişimi engellemek veya kısıtlamak amacıyla tasarlanmış Sitenin herhangi bir önlemini aşmaya çalışmak.",
    prohibitedActivity17:
      "- Flash, PHP, HTML, JavaScript veya diğer kodlar dahil ancak bunlarla sınırlı olmamak üzere Sitenin yazılımını kopyalamak veya uyarlamak.",
    prohibitedActivity18:
      "- Uygulanabilir kanunların izin verdiği durumlar haricinde, Sitenin bir parçasını oluşturan veya herhangi bir şekilde oluşturan yazılımların hiçbirini deşifre etmek, derlemesini açmak, parçalarına ayırmak veya tersine mühendislik uygulamak.",
    prohibitedActivity19:
      "- Standart arama motoru veya İnternet tarayıcısı kullanımının sonucu olabilecek durumlar haricinde, Siteye erişen herhangi bir örümcek, robot, hile aracı, kazıyıcı veya çevrimdışı okuyucu dahil ancak bunlarla sınırlı olmamak üzere herhangi bir otomatik sistemi kullanmak, başlatmak, geliştirmek veya dağıtmak veya yetkisiz herhangi bir betik veya başka bir yazılımı kullanmak veya başlatmak.",
    prohibitedActivity20:
      "- Site üzerinden alışveriş yapmak için bir satın alma temsilcisi veya satın alma acentesi kullanın.",
    prohibitedActivity21:
      "- Kullanıcıların kullanıcı adlarını ve/veya e-posta adreslerini elektronik veya başka yollarla istenmeyen e-posta göndermek amacıyla toplamak veya otomatik yollarla veya sahte beyanlarla kullanıcı hesapları oluşturmak da dahil olmak üzere Sitenin yetkisiz kullanımını gerçekleştirmek.",
    prohibitedActivity22:
      "- Siteyi bizimle rekabet etme çabasının bir parçası olarak kullanmak veya Siteyi ve/veya İçeriği herhangi bir gelir getirici çaba veya ticari girişim için kullanmak.",
    prohibitedActivity23:
      "- Siteyi mal ve hizmetlerin reklamını yapmak veya satışını teklif etmek için kullanmak.",
    prohibitedActivity24:
      "- Profilinizi satamaz veya başka bir şekilde devredemezsiniz.",
    featuresContent1:
      "Hizmetlerimizi, kendi deneyimlerimize ve zamanlarını ve geri bildirimlerini paylaşan müşterilerimizin deneyimlerine dayanarak özenle tasarlıyoruz. Ancak, herkesi memnun edecek bir hizmet diye bir şey yoktur. Hizmetlerimizin özel ihtiyaçlarınızı veya beklentilerinizi karşılayacağının garantisini vermiyoruz.",
    featuresContent2:
      "Ayrıca, tüm özelliklerimizi göndermeden önce test ediyoruz. Her yazılımda olduğu gibi, Hizmetlerimizde de kaçınılmaz olarak bazı hatalar bulunur. Bize bildirilen hataları takip ediyor ve özellikle güvenlik veya gizlilikle ilgili olanları çözüyoruz. Bildirilen tüm hatalar düzeltilmeyecek ve Hizmetlerin tamamen hatasız olacağını garanti etmiyoruz.",
    correctionsContent1:
      "Sitede, açıklamalar, fiyatlandırma, bulunabilirlik ve diğer çeşitli bilgiler dahil olmak üzere tipografik hatalar, yanlışlıklar veya eksiklikler içeren bilgiler bulunabilir. Herhangi bir hatayı, yanlışlığı veya eksikliği düzeltme ve Sitedeki bilgileri önceden haber vermeksizin herhangi bir zamanda değiştirme veya güncelleme hakkımızı saklı tutarız.",
    correctionsContent2:
      "Sitenin her zaman erişilebilir olacağını garanti edemeyiz. Site ile ilgili donanım, yazılım veya başka sorunlar yaşayabilir veya bakım yapmamız gerekebilir; bu da kesintilere, gecikmelere veya hatalara neden olabilir. Siteyi herhangi bir zamanda ve herhangi bir nedenle size bildirimde bulunmaksızın değiştirme, revize etme, güncelleme, askıya alma, durdurma veya başka şekilde değiştirme hakkını saklı tutarız. Sitenin herhangi bir kesintisi veya durdurulması sırasında Siteye erişememeniz veya Siteyi kullanamamanız nedeniyle oluşabilecek herhangi bir kayıp, hasar veya rahatsızlıktan hiçbir şekilde sorumlu olmadığımızı kabul edersiniz. Bu Hizmet Şartları'ndaki hiçbir hüküm, Siteyi sürdürme ve destekleme veya bununla bağlantılı herhangi bir düzeltme, güncelleme veya sürüm sağlama yükümlülüğümüz olduğu şeklinde yorumlanmayacaktır.",
    userDataContent:
      "Site'nin performansını yönetmek amacıyla Site'ye ilettiğiniz belirli verileri ve Site kullanımınızla ilgili verileri saklayacağız. Düzenli olarak rutin veri yedeklemeleri yapıyor olsak da, ilettiğiniz veya Site'yi kullanarak gerçekleştirdiğiniz herhangi bir faaliyetle ilgili tüm verilerden yalnızca siz sorumlusunuz. Bu tür verilerin kaybolması veya bozulması durumunda size karşı hiçbir sorumluluğumuz olmayacağını kabul ediyor ve bu tür verilerin kaybolması veya bozulmasından kaynaklanan her türlü dava hakkından feragat ediyorsunuz.",
    privacyPolicyContent1:
      "Veri gizliliği ve güvenliğine önem veriyoruz. Lütfen inceleyin.",
    privacyPolicy: "Gizlilik Politikası",
    privacyPolicyContent2:
      "Siteyi kullanarak, bu Hizmet Şartları'na dahil edilen Gizlilik Politikamıza bağlı kalmayı kabul etmiş olursunuz. Sitenin Amerika Birleşik Devletleri'nde barındırıldığını lütfen unutmayın. Siteye, kişisel verilerin toplanması, kullanımı veya ifşasına ilişkin yasaların veya diğer gerekliliklerin Amerika Birleşik Devletleri'ndeki geçerli yasalardan farklı olduğu dünyanın başka bir bölgesinden erişirseniz, Siteyi kullanmaya devam etmeniz durumunda verilerinizi Amerika Birleşik Devletleri'ne aktarmış olursunuz ve verilerinizin Amerika Birleşik Devletleri'ne aktarılmasını ve orada işlenmesini kabul etmiş olursunuz.",
    liabilityIntro:
      "Bu Şartlar boyunca sorumluluktan bahsediyoruz ancak hepsini tek bir bölümde toplamak gerekirse:",
    liabilityContent:
      "Şirket'in, size veya herhangi bir üçüncü tarafa, kar, itibar, kullanım, veri veya diğer maddi olmayan kayıplar dahil ancak bunlarla sınırlı olmamak üzere, doğrudan, dolaylı, tesadüfi, kar kaybı, özel, sonuçsal, cezalandırıcı veya emsal teşkil eden zararlar için, kanunen veya hakkaniyete göre, sorumlu olmayacağını açıkça anlıyor ve kabul ediyorsunuz (Şirket'e bu tür zararların olasılığı bildirilmiş olsa bile), aşağıdakilerden kaynaklananlar: (1) Hizmetlerin kullanımı veya kullanılamaması; (2) içerik ve materyallerdeki hatalar, yanlışlıklar veya yanlışlıklar; (3) siteye erişiminiz ve siteyi kullanımınızdan kaynaklanan herhangi bir nitelikteki kişisel yaralanma veya mal hasarı; (4) Hizmetler aracılığıyla veya Hizmetlerden satın alınan veya elde edilen herhangi bir mal, veri, bilgi veya hizmetten veya alınan mesajlardan veya girilen işlemlerden kaynaklanan ikame mal ve hizmetlerin tedarik maliyeti; (5) güvenli sunucularımıza ve/veya bunlarda saklanan tüm kişisel bilgilere ve/veya finansal bilgilere yetkisiz erişim veya bunların kullanımı; (6) siteye veya siteden yapılan iletimde herhangi bir kesinti veya durma; (7) herhangi bir üçüncü tarafça siteye veya site aracılığıyla iletilebilecek herhangi bir hata, virüs, truva atı veya benzeri ve/veya; (8) herhangi bir içerik ve materyaldeki herhangi bir hata veya eksiklik veya site aracılığıyla gönderilen, iletilen veya başka bir şekilde kullanıma sunulan herhangi bir içeriğin kullanımı sonucu ortaya çıkan herhangi bir kayıp veya hasar; (9) hizmetteki herhangi bir üçüncü tarafın beyanları veya davranışları; (10) veya bu Hizmet Şartları veya Hizmetlerle ilgili herhangi bir başka husus, sözleşme ihlali, haksız fiil (aktif veya pasif ihmal dahil) veya herhangi bir başka sorumluluk teorisi olsun.",
    miscellaneousContent:
      "Bu Hizmet Şartları ve Site'de veya Site ile ilgili olarak tarafımızca yayınlanan tüm politikalar veya işletme kuralları, sizinle aramızdaki tüm sözleşmeyi ve anlayışı oluşturur. Bu Hizmet Şartları'nın herhangi bir hakkını veya hükmünü kullanmamamız veya uygulamamamız, söz konusu hak veya hükümden feragat ettiğimiz anlamına gelmez. Bu Hizmet Şartları, kanunen izin verilen en geniş kapsamda geçerlidir. Hak ve yükümlülüklerimizin bir kısmını veya tamamını herhangi bir zamanda başkalarına devredebiliriz. Makul kontrolümüz dışındaki herhangi bir nedenden kaynaklanan herhangi bir kayıp, hasar, gecikme veya eylemsizlikten sorumlu veya yükümlü olmayacağız. Bu Hizmet Şartları'nın herhangi bir hükmünün veya hükmünün bir kısmının hukuka aykırı, geçersiz veya uygulanamaz olduğu tespit edilirse, söz konusu hüküm veya hükmün bir kısmı bu Hizmet Şartları'ndan ayrılabilir kabul edilir ve kalan hükümlerin geçerliliğini ve uygulanabilirliğini etkilemez. Bu Hizmet Şartları veya Site'nin kullanımı sonucunda sizinle aramızda herhangi bir ortak girişim, ortaklık, istihdam veya temsilcilik ilişkisi oluşmaz. Bu Hizmet Şartları'nın, bunları hazırlamış olmamız nedeniyle aleyhimize yorumlanmayacağını kabul edersiniz. Bu Hizmet Şartları'nın elektronik biçimine ve tarafların bu Hizmet Şartları'nı yürürlüğe koymak için imzalamamış olmalarına dayalı olarak sahip olabileceğiniz tüm savunmalardan feragat ediyorsunuz.",
    contactUsContent1:
      "Hizmet Şartları'ndan herhangi biriyle ilgili bir sorunuz varsa lütfen",
    contactUsContent2: "."
  },
  HeadNavbar: {
    Features: "Özellikler",
    UnlimitedTranscription: "Sınırsız Transkripsiyon",
    BulkUpload: "Toplu Yükleme",
    Accuracy: "%96 Doğruluk",
    Pricing: "Fiyatlandırma",
    UseCases: "Kullanım Örnekleri",
    AllUseCases: "Tüm Kullanım Örnekleri",
    Podcasters: "Podcast yayıncıları",
    Journalists: "Gazeteciler",
    ContentCreators: "İçerik Oluşturucuları",
    Researchers: "Araştırmacılar",
    BusinessTeams: "İş Ekipleri",
    Educators: "Eğitimciler",
    Resources: "Kaynaklar",
    YouTubetoMP4: "YouTube'dan MP4'e",
    StartFreeTrial: "Ücretsiz Deneyin"
  },
  Footer: {
    des: "Dünyanın ilk gerçek anlamda sınırsız yapay zeka transkripsiyon hizmeti. Sınır yok, limit yok, sadece yaratma özgürlüğü.",
    Features: "Özellikler",
    UseCases: "Kullanım Örnekleri",
    Company: "Şirket",
    featureMenus: ["Sınırsız Transkripsiyon", "Toplu Yükleme", "%96 Doğruluk"],
    useCaseMenus: [
      "Tüm Kullanım Örnekleri",
      "Podcast yayıncıları",
      "Gazeteciler",
      "İçerik Oluşturucuları",
      "Araştırmacılar",
      "İş Ekipleri",
      "Eğitimciler"
    ],
    companyMenus: [
      "Hakkında",
      "Fiyatlandırma",
      "Mahremiyet",
      "Şartlar"
    ]
  },
  Index: {
    Hero: {
      badge: 'Artık "Küçülme Enflasyonu" Yok - Aslında Sınırsız',
      h1: "Limitler İçin Ödeme Yapmayı Bırakın:",
      gradient: "Gerçekten Sınırsız Yapay Zeka Transkripsiyonu",
      subtitle: "Tüm podcast arşivinizi yükleyin. Tüm röportajlarınızı metne dönüştürün. Tek seferde 50 dosyayı işleyin. Aylık sınır yok, yükleme limiti yok. Sonunda, gerçek ihtiyaçlarınıza göre ölçeklenen bir metne dönüştürme.",
      FreeTrial: "Ücretsiz Deneyin - Kredi Kartı Gerekmez",
      HowWorks: "Nasıl Çalıştığını Görün",
      Unlimited: "Sınırsız Dosya Yükleme",
      NoCap: "Aylık Dakika Sınırı Yok",
      Hour: "10 Saatlik Dosyalar Destekleniyor",
      ExploreUseCases: "Kullanım Örneklerini Keşfedin"
    },
    Stats: {
      monthlyMinutes: "Aylık Dakikalar",
      fileUploads: "Dosya Yüklemeleri",
      batchProcessing: "Toplu İşleme",
      maxFileLength: "Maksimum Dosya Uzunluğu"
    },
    FeaturesGrid: {
      try_now: "Şimdi Deneyin",
      no_signup: "Kayıt Gerekmez",
      experience_unltd: "Gerçekten sınırsız transkripsiyonu deneyimleyin",
      upload_50: "Aynı anda 50 dosyaya kadar yüklemeyi buradan yapın",
      no_limits: "Artık Gizli Sınır Yok",
      no_surprises: "Artık Sürpriz Yok",
      transparency: "Başkaları sessizce dakikalarınızı azaltırken veya küçük puntolarla üst sınırları gizlerken, biz radikal şeffaflığa inanıyoruz",
      feat_unltd: "Aslında Sınırsız",
      feat_unltd_desc: '"Adil kullanım politikası" hükümleri saklı değil. "Sınırsız" kisvesi altında depolama alanı sınırlaması yok. Tüm arşivinizi yükleyin, her şeyi yazıya dökün. Ciddiyiz.',
      feat_bulk: "Toplu Yükleme Özgürlüğü",
      feat_bulk_desc: '"3 ömür boyu içe aktarma" veya "ayda 10 dosya"dan bıktınız mı? Tek seferde 50 dosya yükleyin, istediğiniz kadar. Birikmiş işleri işlemek için mükemmel.',
      feat_batch: "Toplu İşleme",
      feat_batch_desc: "Podcast sezonunuzun tamamını bir gecede işleyin. Tek seferde 50 röportaj yükleyin. Yapay zekamız siz uyurken çalışsın. Tamamlanmış transkriptlerle uyanın.",
      feat_accuracy: "%96 Doğruluk",
      feat_accuracy_desc: "Akıllı noktalama, 20 konuşmacıya kadar konuşmacı günlüğü tutma ve aksanları, teknik terimleri kusursuz bir şekilde işleme gibi sektör lideri yapay zeka.",
      feat_langs: "100'den fazla dil",
      feat_langs_desc: "100'den fazla dilde yazıya dökün, 249'dan fazla dile çevirin. Farklı diller için ek ücret yok. Küresel içerik, tek bir fiyat.",
      feat_pro: "Profesyonel Özellikler",
      feat_pro_desc: "Hassas ses/görüntü konumlandırması için kelime düzeyinde zaman damgaları, hızlı konuşma geçişlerinde bile doğru konuşmacı tanımlaması ve kolay okuma için paragraflar, cümleler ve noktalama işaretleriyle mükemmel biçimde biçimlendirilmiş metin."
    },
    UseCases: {
      built_for: "İçin inşa edildi",
      "heavy_users": "Sizin Gibi Ağır Kullanıcılar",
      "join_users": `\"shrinkflation\" hizmetlerinden geçiş yapan YouTuber'lara, içerik oluşturucularına ve podcast yayıncılarına katılın`,
      "podcasters": {
        "title": "Podcast yayıncıları",
        "des": "Tüm eski programlarınızı yükleyin. Her bölüm için program notları oluşturun. Artık hangi bölümlerin transkripsiyonunu yapacağınızı seçmenize gerek yok."
      },
      "content_creators": {
        "title": "İçerik Oluşturucuları",
        "des": "Video arşivinizi aranabilir metne dönüştürün. Her şey için altyazı oluşturun. Dakikaları saymayın, sadece yaratın."
      },
      "journalists": {
        "title": "Gazeteciler",
        "des": 'Tüm röportajlarınızı tek seferde yükleyin. Teslim tarihi yaklaştığında "ayda 10 dosya" engeline son. Her şeyi işleyin.'
      },
      researchers: {
        title: "Araştırmacılar",
        des: "Saatlerce süren odak grup görüşmelerini ve röportajları kaydedin. Tüm çalışmanızı tek seferde yükleyin. Konuşmacıların doğru kimliğini öğrenin."
      },
      business_teams: {
        title: "İş Ekipleri",
        des: "Sınırlamalar konusunda endişelenmeden her aramayı kaydedin. Sadece birkaç görüşme değil, tüm görüşmeler hakkında yapay zeka içgörüleri edinin."
      },
      educators: {
        title: "Eğitimciler",
        des: "Ders serisinin tamamını metne dönüştürün. Tüm içeriği erişilebilir hale getirin. Dakika sınırlaması nedeniyle dersler arasında seçim yapmaya gerek yok."
      }
    },
    Testimonials: {
      title: "Sevilen",
      highlighted_users: "50.000+ Kullanıcı",
      subtitle: "Profesyonellerin neden sınırlı alternatifler yerine NeverCap'yi tercih ettiğini görün",
      Mike: {
        "text": "Vay canına, bu şey gerçekten işe yarıyor! 3 yıldır podcast yapıyorum ve her şeyi aptal gibi elle yazıya döküyordum. Aynı anda 6 bölüm yükledim ve sunucu arkadaşımla mükemmel bir şekilde ayrıldım. Mahvolduğunu düşündüğüm kahve dükkanı bölümü mü? Kristal berraklığında bir yazı. Bir daha asla bunları kendim yazmaya gitmeyeceğim.",
        "author": "Mike Rodriguez",
        "role": "Podcast Sunucusu"
      },
      Sarah: {
        "text": "Çevrimiçi ders veriyorum ve videolarım için altyazıya ihtiyacım vardı. Tuhaf sınırlamaları olan veya çok uzun süren 3 farklı araç denedim. Bu araç... işe yarıyor mu? İspanyolca dersimi yükledim ve 2 dakikada mükemmel altyazılar elde ettim. İşitme engelli öğrencilerim çok mutlu. Keşke bunu daha önce bulsaydım!",
        "author": "Sarah Chen",
        "role": "Çevrimiçi Öğretmen"
      },
      Jessica: {
        "text": "Bunu mülakatlarımda kullanıyorum ve ne kadar doğru olduğuna inanamıyorum. Bozuk İngilizce ve İspanyolca ile 2 saatlik bir mülakat yaptım ve her şeyi, hatta zaman damgalarını bile doğru yaptı. Stajyerime sadece yazıya dökmesi için ayda 200 dolar ödüyordum. Bu, bana her ay para kazandırıyor.",
        "author": "Jessica Parkı",
        "role": "Serbest Gazeteci"
      }
    },
    PricingPreview: {
      "title": "Şeffaf Fiyatlandırma",
      "highlighted_text": "Gizli Kapak Yok",
      "subtitle": "Planınızı seçin. Yıldız işareti yok, küçük yazılar yok, sürpriz yok"
    },
    FAQSection: {
      "title": "Sıkça Sorulan Sorular",
      "titleHighlight": "Sorular",
      "questions": [
        {
          "q": "sınırsız_politika",
          "question": "Gerçekten sınırsız mı? İşin püf noktası ne?",
          "answer": "Evet, gerçekten sınırsız! Aylık dakika sınırı yok, aşım ücreti yok. Tek sınırlama teknik: tek tek dosyalar en fazla 10 saat uzunluğunda veya 5 GB boyutunda olabilir ve aynı anda 50 dosya işleyebilirsiniz. Ancak, tüm ay boyunca istediğiniz kadar toplu yükleme yapabilirsiniz."
        },
        {
          "q": "kesinlik",
          "question": "Transkript ne kadar doğru?",
          "answer": "Net ses için %96 doğruluk garantisi veriyoruz. Yapay zekamız milyonlarca saatlik çeşitli içerikle eğitilmiştir ve aksanları, teknik terimleri ve birden fazla konuşmacıyı olağanüstü bir şekilde ele alır. Zorlu sesler için akıllı iyileştirme özelliklerimiz sonuçları iyileştirmeye yardımcı olur."
        },
        {
          "q": "diller",
          "question": "Hangi dilleri destekliyorsunuz?",
          "answer": "İngilizce, İspanyolca, Mandarin, Hintçe, Arapça, Fransızca ve daha fazlası dahil olmak üzere 100'den fazla dilde transkripsiyonu destekliyoruz. Ayrıca, transkriptlerinizi 249 farklı dile çevirebilirsiniz, bu da onu küresel içerikler için mükemmel kılar."
        },
        {
          "q": "hız",
          "question": "Transkript ne kadar hızlı?",
          "answer": "Yıldırım hızında! 1 saatlik bir ses dosyası genellikle 5 dakikadan kısa sürede işlenir. Toplu işlemeyle, 50 dosyayı aynı anda yükleyebilir ve paralel olarak işlenmelerini sağlayabilirsiniz. Çoğu kullanıcı uyandığında tüm kütüphanesinin bir gecede yazıya döküldüğünü görür."
        },
        {
          "q": "iptal",
          "question": "İstediğim zaman iptal edebilir miyim?",
          "answer": "Kesinlikle! Sözleşme yok, iptal ücreti yok. Aboneliğinizi panonuzdan istediğiniz zaman yükseltebilir, düşürebilir veya iptal edebilirsiniz. İptal ederseniz, fatura döneminizin sonuna kadar erişiminizi korursunuz."
        },
        {
          "q": "güvenlik",
          "question": "Verilerim güvende mi?",
          "answer": "Güvenliğiniz bizim önceliğimizdir. SOC 2 sertifikalıyız, tüm veriler için 256 bit şifreleme kullanıyoruz ve modellerimizi eğitmek için içeriğinizi asla kullanmıyoruz. Dosyalarınızı istediğiniz zaman silebilirsiniz ve biz de 30 gün sonra otomatik olarak temizliyoruz. GDPR ve CCPA uyumludur."
        },
        {
          "q": "dışa_aktarma_biçimleri",
          "question": "Hangi dışa aktarma biçimleri mevcuttur?",
          "answer": "Transkriptlerinizi ihtiyacınız olan herhangi bir formatta indirin: PDF, Word (DOCX), Excel, CSV, SRT altyazı, düz metin (TXT) ve VTT altyazı. Her türlü iş akışınız için mükemmel."
        },
        {
          "q": "dosya_biçimleri",
          "question": "Hangi ses ve video dosyalarını yükleyebilirim?",
          "answer": "Karşılaşabileceğiniz hemen hemen her ses ve video formatını destekliyoruz: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV ve daha fazlası. Eğer siz çalabiliyorsanız, biz de yazıya dökebiliriz."
        }
      ]
    },
    CTASection: {
      "title": "Sınırlardan Kurtulmaya Hazır Mısınız?",
      "subtitle": "Gerçekten sınırsız transkripsiyona geçiş yapan 50.000'den fazla profesyonele katılın",
      "button": "NeverCap Ücretsiz deneyin",
      "disclaimer": "Ücretsiz Plan için kredi kartı gerekmez • Sınırsız erişim için istediğiniz zaman yükseltin"
    }
  },
  Features: {
    UnlimitedTranscription: {
      heroBadgeIcon: "⚡",
      heroBadgeText: 'Artık "Küçülme Enflasyonu" Yok',
      heroTitleLine1: "Gerçekten Sınırsız",
      heroTitleLine2: "Yapay Zeka Transkripsiyonu",
      heroSubtitle: "Trint size aylık 50 saat, Otter ise 10 dosya sınırı koyarken, biz aslında söz verdiğimiz şeyi sunuyoruz: gizli sınırlamalar olmadan sınırsız transkripsiyon.",
      primaryCta: "Ücretsiz Deneyin - Kredi Kartı Gerekmez",
      secondaryCta: "Gerçeği Gör",
      comparisonBadLabel: "Başkaları Ne Yapar",
      comparisonBadTitle: "Her Yerde Gizli Sınırlar",
      comparisonBadItem1Icon: "✕",
      comparisonBadItem1Strong: "Trint:",
      comparisonBadItem1Text: '"Sınırsız" = 50 saat/ay sınırı',
      comparisonBadItem2Icon: "✕",
      comparisonBadItem2Strong: "Su samuru:",
      comparisonBadItem2Text: "3 ömür boyu ithalat (ücretsiz), 10/ay (Pro)",
      comparisonBadItem3Icon: "✕",
      comparisonBadItem3Strong: "Ateşböcekleri:",
      comparisonBadItem3Text: "800 dakikalık depolama sınırı",
      comparisonBadItem4Icon: "✕",
      comparisonBadItem4Strong: "Açıklama:",
      comparisonBadItem4Text: "Ayda en fazla 30 saat",
      comparisonBadItem5Icon: "✕",
      comparisonBadItem5Text: "Şartlar ve koşullar altında gizli",
      comparisonGoodLabel: "Ne Yapıyoruz",
      comparisonGoodTitle: "Aslında Sınırsız",
      comparisonGoodItem1Icon: "✓",
      comparisonGoodItem1Strong: "Aylık dakika sınırı yok",
      comparisonGoodItem1Text: "durmadan",
      comparisonGoodItem2Icon: "✓",
      comparisonGoodItem2Strong: "Sınırsız dosya yükleme",
      comparisonGoodItem2Text: "Her zaman",
      comparisonGoodItem3Icon: "✓",
      comparisonGoodItem3Strong: "Depolama sınırı yok",
      comparisonGoodItem3Text: "hiç",
      comparisonGoodItem4Icon: "✓",
      comparisonGoodItem4Strong: "50 dosya toplu yükleme",
      comparisonGoodItem4Text: "her zaman",
      comparisonGoodItem5Icon: "✓",
      comparisonGoodItem5Strong: "Şeffaf politika",
      comparisonGoodItem5Text: "önceden",
      feature1Label: "Sınır Yok",
      feature1TitlePart1: "1.000 Saati Yazıya Dökmek?",
      feature1TitlePart2: "Aynı Fiyat.",
      feature1Description: "Dakikaları saymayı bırakın. Sınırları izlemeyi bırakın. Ayda ister 10 saat ister 10.000 saat kayıt yapın, aynı sabit ücreti ödersiniz. Aşım ücreti yok. Sürpriz faturalar yok.",
      feature1Point1Icon: "✓",
      feature1Point1Text: '"Adil kullanım" politikası hileleri yok',
      feature1Point2Icon: "✓",
      feature1Point2Text: "X saatinden sonra kısıtlama yok",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Ay sonu kaygısı yok",
      feature1Stat1Number: "∞",
      feature1Stat1Label: "Aylık Saatler",
      feature1Stat2Number: "0 dolar",
      feature1Stat2Label: "Aşım Ücretleri",
      feature1Stat3Number: "7/24",
      feature1Stat3Label: "İstediğiniz Zaman Yükleyin",
      feature1Stat4Number: "%100",
      feature1Stat4Label: "Şeffaf",
      feature2Label: "Toplu Özgürlük",
      feature2TitlePart1: "Yükle",
      feature2TitlePart2: "Tüm Arşiv",
      feature2Description: "Otter size 3 ömür boyu ücretsiz içe aktarma hakkı, Pro'da ise aylık 10 içe aktarma hakkı sunuyor. Size sınırsız sunuyoruz. Podcast kayıtlarınızı, tüm röportajlarınızı ve yıllarca kaydettiğiniz kayıtları yükleyin. Hiçbir kısıtlama yok.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "Parti başına 50 dosya",
      feature2Point2Icon: "✓",
      feature2Point2Text: "10 saatlik dosyalar destekleniyor",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Uyurken işlem yapın",
      feature2TableRow1Label: "Su Samuru Ücretsiz",
      feature2TableRow1Value: "3 ömür boyu ithalat",
      feature2TableRow2Label: "Su Samuru Pro",
      feature2TableRow2Value: "10 dosya/ay",
      feature2TableRow3Label: "Trint",
      feature2TableRow3Value: "Aylık 50 saat sınırı",
      feature2TableRow4Label: "NeverCap",
      feature2TableRow4Value: "Gerçekten Sınırsız ✓",
      feature3Label: "Sosyal Kanıt",
      feature3TitlePart1: "Kullanıcılar",
      feature3TitlePart2: "Günlük Geçiş",
      feature3Description: '\"Otter için yılda 100 dolar ödüyorum ve ayda 10 dosya içe aktarımıyla sınırlıyorum. Sınırsız içe aktarım sağlayan bir alternatif çıktığı anda, ben de giderim!\" - Gerçek Reddit kullanıcısı',
      feature3Point1Icon: "✓",
      feature3Point1Text: "50.000'den fazla kullanıcı geçiş yaptı",
      feature3Point2Icon: "✓",
      feature3Point2Text: `Otter'ın "shrinkflation"ından`,
      feature3Point3Icon: "✓",
      feature3Point3Text: "Asla geri dönmeyeceğim",
      feature3Stat1Number: "50 binden fazla",
      feature3Stat1Label: "Mutlu Kullanıcılar",
      feature3Stat2Number: "1 milyondan fazla",
      feature3Stat2Label: "İşlenen Dosyalar",
      feature3Stat3Number: "%96",
      feature3Stat3Label: "Kesinlik",
      feature3Stat4Number: "∞",
      feature3Stat4Label: "Gizli Ücret Yok",
      trustBadge1Number: "∞",
      trustBadge1Label: "Dakika/Ay",
      trustBadge2Number: "100+",
      trustBadge2Label: "Diller",
      trustBadge3Number: "%96",
      trustBadge3Label: "Kesinlik",
      trustBadge4Number: "50",
      trustBadge4Label: "Toplu Yükleme",
      ctaTitle: "Sahte Sınırsız İçin Ödeme Yapmayı Bırakın",
      ctaSubtitle: "Gerçekten sınırsız transkripsiyona geçen binlerce kişiye katılın",
      finalCta: "NeverCap Ücretsiz deneyin"
    },
    BulkUpload: {
      heroBadgeIcon: "📁",
      heroBadgeText: "Toplu Yükleme Özgürlüğü",
      heroTitleLine1: "50 Dosya Yükle.",
      heroTitleHighlight: "Her şeyi işleyin.",
      heroSubtitle: "Otter size 3 ömür boyu içe aktarma hakkı sunuyor. ÜÇ. Ömür boyu. İhtiyacınız olduğunda, aynı anda 50 dosya olmak üzere sınırsız yükleme hakkı sunuyoruz.",
      primaryCta: "Toplu Yüklemeyi Başlat →",
      secondaryCta: "Sınırları Görün",
      redditQuote: '"Üç yıllık podcast bölümlerini yazıya dökmem gerekiyor. Otter bana 3 tane ömür boyu ithalat hakkım olduğunu söylüyor. ÜÇ. Bu çok aşağılayıcı."',
      redditAuthorIcon: "📍",
      redditAuthorText: "R/podcasting'den kaynaklanan gerçek hayal kırıklığı",
      comparisonSectionTitlePart1: "The",
      comparisonSectionTitleHighlight: "Saçma Sınırlar",
      comparisonSectionTitlePart2: "Onlar dayatıyor",
      comparisonSubtitle: "Rakipleriniz içeriği işleme yeteneğinizi nasıl kısıtlıyor?",
      limitCard1Service: "Su Samuru Ücretsiz",
      limitCard1Number: "3",
      limitCard1DescriptionLine1: "Ömür boyu ithalat",
      limitCard1DescriptionLine2: "(Evet, TÜM hayatın boyunca)",
      limitCard2Service: "Su Samuru Pro",
      limitCard2Number: "10",
      limitCard2DescriptionLine1: "Aylık dosya sayısı",
      limitCard2DescriptionLine2: "(100$/yıllık plan)",
      limitCard3Service: "Açıklama",
      limitCard3Number: "1",
      limitCard3DescriptionLine1: "Bir seferde dosya",
      limitCard3DescriptionLine2: "(Sıralı yükleme)",
      limitCard4Service: "NeverCap",
      limitCard4Number: "∞",
      limitCard4DescriptionLine1: "Sınırsız yükleme",
      limitCard4DescriptionLine2: "Parti başına 50 dosya",
      feature1Label: "Toplu Güç",
      feature1TitlePart1: "İşleminizi Gerçekleştirin",
      feature1TitleHighlight: "Tüm Arşiv",
      feature1TitlePart2: "Bir gecede",
      feature1Description: 'Yatmadan önce 50 dosya yükleyin. Uyandığınızda transkriptlerinizi eksiksiz olarak alın. Sıraya girmek yok, beklemek yok, "lütfen yükseltin" mesajları yok. Sadece parmaklarınızın ucunda saf işlem gücü.',
      feature1Point1Icon: "✓",
      feature1Point1Text: "50 eşzamanlı yükleme",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Paralel işleme",
      feature1Point3Icon: "✓",
      feature1Point3Text: "10 saatlik dosyalar destekleniyor",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Dosya başına maksimum 5 GB",
      uploadAnimationText1: "50 Dosya",
      uploadAnimationText2: "Bırak ve İşle",
      fileBadge1: "podcast_ep_001.mp3",
      fileBadge2: "röportaj_raw.mp4",
      fileBadge3: "toplantı_2024.wav",
      fileBadge4: "ders_tam.mov",
      fileBadge5: "+ 46 dosya daha...",
      feature2Label: "Hız",
      feature2TitlePart1: "Yüklemeden",
      feature2TitleHighlight: "Saatler İçinde Tamamlandı",
      feature2Description: "Paralel işlem altyapımız sayesinde 50 dosyanız sırada beklemiyor. Hepsi aynı anda yazıya dökülüyor. Eskiden haftalar süren işlemler artık saatler sürüyor.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "1 saatlik dosya: 5 dakika",
      feature2Point2Icon: "✓",
      feature2Point2Text: "50 dosya: paralel olarak işleniyor",
      feature2Point3Icon: "✓",
      feature2Point3Text: "İşiniz bittiğinde e-posta bildirimi gönderilecek",
      timelineStep1Icon: "1",
      timelineStep1Title: "Yüklemek",
      timelineStep1Time: "0 dk",
      timelineStep2Icon: "2",
      timelineStep2Title: "İşleme",
      timelineStep2Time: "5-30 dk",
      timelineStep3Icon: "3",
      timelineStep3Title: "Yapay Zeka Büyüsü",
      timelineStep3Time: "30-60 dk",
      timelineStep4Icon: "✓",
      timelineStep4Title: "Tamamlamak",
      timelineStep4Time: "< 2 saat",
      feature3Label: "Özgürlük",
      feature3TitlePart1: "Sıra Yok.",
      feature3TitleHighlight: "Bekleme Yok.",
      feature3TitlePart2: "Sınır Yok.",
      feature3Description: 'Başkaları sizi sanal kuyruklarda bekletirken veya "öncelikli işleme" yükseltmesi yaparken, biz her yüklemeyi aciliyetle ele alıyoruz. İçeriğiniz önemlidir ve beklememelidir.',
      feature3Point1Icon: "✓",
      feature3Point1Text: "Öncelik kademesi yok",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Herkes için aynı hız",
      feature3Point3Icon: "✓",
      feature3Point3Text: "İstediğiniz zaman, 7/24 yükleyin",
      feature3VisualNumber: "7/24",
      feature3VisualTitle: "Her Zaman Hazır",
      feature3VisualSubtext: "İlham geldiğinde yükleyin",
      useCasesTitlePart1: "İçin mükemmel",
      useCasesTitleHighlight: "Ağır Yükleyiciler",
      useCasesSubtitle: "Toplu yüklemenin günü kurtardığı gerçek senaryolar",
      useCase1Title: "Podcast Arşivleri",
      useCase1Description: "3 yıllık bölümleri tek seferde yükleyin. Tüm eski yayınlarınızın dökümlerini oluşturun. Her bölüm için SEO içeriği oluşturun.",
      useCase2Title: "Kurs Oluşturma",
      useCase2Description: "Tüm ders videolarınızı aynı anda işleyin. Öğrenciler için erişilebilir transkriptler oluşturun. Aranabilir ders materyalleri oluşturun.",
      useCase3Title: "Mülakat Beklentisi",
      useCase3Description: "Kaydedilmemiş röportaj dağlarını temizleyin. Haftalar süren araştırmaları saatler içinde tamamlayın. Paniğe kapılmadan teslim tarihinize yetişin.",
      useCase4Title: "YouTube Kütüphanesi",
      useCase4Description: "Kanalınızın tamamı için altyazılar oluşturun. Video içeriklerinden blog yazıları oluşturun. Tüm videolarda SEO'yu iyileştirin.",
      useCase5Title: "Toplantı Arşivleri",
      useCase5Description: "Aylarca kaydedilmiş toplantıları yükleyin. Aranabilir toplantı notları oluşturun. Önemli kararlarınızı bir daha asla kaybetmeyin.",
      useCase6Title: "Araştırma Verileri",
      useCase6Description: "Odak gruplarını toplu olarak işleyin. Tüm katılımcı görüşmelerini yazıya dökün. Nitel verileri verimli bir şekilde analiz edin.",
      ctaTitle: "Daha Fazla Yükleme İçin Yalvarmayı Bırakın",
      ctaSubtitle: "Gerçekten işe yarayan sınırsız toplu işleme sahip olun",
      finalCta: "Şimdi 50 Dosya Yükle →"
    },
    Accuracy: {
      heroBadgeIcon: "🎯",
      heroBadgeText: "Sektör Lideri Doğruluk",
      heroTitleLine1: "%96 Doğruluk.",
      heroTitleHighlight: "Her Kelime Önemlidir.",
      heroSubtitle: "12 ana dilde sektör lideri doğruluk. Mükemmel senkronizasyon için kelime düzeyinde zaman damgaları. Hızlı konuşmaları yöneten akıllı hoparlör tanımlama. Gerçekten okunabilir profesyonel biçimlendirme.",
      primaryCta: "Doğruluğumuzu Test Edin →",
      secondaryCta: "Dilleri Gör",
      statCard1Percentage: "%96",
      statCard1DescriptionLine1: "Doğruluk",
      statCard1DescriptionLine2: "12 Ana Dil",
      statCard2Percentage: "%95+",
      statCard2DescriptionLine1: "Doğruluk ile",
      statCard2DescriptionLine2: "Aksanlar ve Lehçeler",
      statCard3Percentage: "100 ms",
      statCard3DescriptionLine1: "Kelime Düzeyi",
      statCard3DescriptionLine2: "Zaman Damgası Hassasiyeti",
      languageSectionTitlePart1: "12 Ana Dilde %96 Doğruluk",
      languageSubtitle: "Küresel içerik için profesyonel düzeyde transkripsiyon",
      languageCard1Flag: "🇺🇸",
      languageCard1Name: "İngilizce",
      languageCard1Accuracy: "%96 Doğruluk",
      languageCard2Flag: "🇪🇸",
      languageCard2Name: "İspanyol",
      languageCard2Accuracy: "%96 Doğruluk",
      languageCard3Flag: "🇨🇳",
      languageCard3Name: "Mandarin",
      languageCard3Accuracy: "%96 Doğruluk",
      languageCard4Flag: "🇫🇷",
      languageCard4Name: "Fransızca",
      languageCard4Accuracy: "%96 Doğruluk",
      languageCard5Flag: "🇩🇪",
      languageCard5Name: "Almanca",
      languageCard5Accuracy: "%96 Doğruluk",
      languageCard6Flag: "🇯🇵",
      languageCard6Name: "Japonca",
      languageCard6Accuracy: "%96 Doğruluk",
      languageCard7Flag: "🇰🇷",
      languageCard7Name: "Korece",
      languageCard7Accuracy: "%96 Doğruluk",
      languageCard8Flag: "🇵🇹",
      languageCard8Name: "Portekizce",
      languageCard8Accuracy: "%96 Doğruluk",
      languageCard9Flag: "🇷🇺",
      languageCard9Name: "Rusça",
      languageCard9Accuracy: "%96 Doğruluk",
      languageCard10Flag: "🇮🇹",
      languageCard10Name: "İtalyan",
      languageCard10Accuracy: "%96 Doğruluk",
      languageCard11Flag: "🇳🇱",
      languageCard11Name: "Flemenkçe",
      languageCard11Accuracy: "%96 Doğruluk",
      languageCard12Flag: "🇸🇦",
      languageCard12Name: "Arapça",
      languageCard12Accuracy: "%96 Doğruluk",
      moreLanguagesText: "+ 95%'ten fazla doğrulukla desteklenen 88 dil daha",
      feature1Label: "Kesinlik",
      feature1TitlePart1: "Kelime Düzeyi",
      feature1TitleHighlight: "Zaman damgaları",
      feature1Description: "Her kelime, ses konumuyla mükemmel bir şekilde senkronize edilir. Tıklanabilir metinler oluşturun, hassas altyazılar oluşturun veya kayıtlarınızdaki belirli anlara atlayın. Profesyonellerin güvendiği 100 ms hassasiyet.",
      feature1Point1Icon: "✓",
      feature1Point1Text: "100 ms zaman damgası hassasiyeti",
      feature1Point2Icon: "✓",
      feature1Point2Text: "Video düzenleme için mükemmel",
      feature1Point3Icon: "✓",
      feature1Point3Text: "Tıklanabilir etkileşimli transkriptler",
      feature1Point4Icon: "✓",
      feature1Point4Text: "Kare hassasiyetinde altyazılar",
      transcriptLine1Timestamp: "00:12.450",
      transcriptLine1Speaker: "Konuşmacı 1",
      transcriptLine1Text: "Bugünkü podcast bölümümüze hoş geldiniz.",
      transcriptLine2Timestamp: "00:15.230",
      transcriptLine2Speaker: "Konuşmacı 2",
      transcriptLine2Text: "Beni programa davet ettiğiniz için teşekkürler!",
      transcriptLine3Timestamp: "00:17.890",
      transcriptLine3Speaker: "Konuşmacı 1",
      transcriptLine3Text: "Şimdi asıl konumuza geçelim...",
      transcriptLine4Timestamp: "00:20.120",
      transcriptLine4Speaker: "Konuşmacı 2",
      transcriptLine4Text: "Kesinlikle, bunu tartışmaktan heyecan duyuyorum.",
      feature2Label: "Akıllı Yapay Zeka",
      feature2TitlePart1: "Kollar",
      feature2TitleHighlight: "Hızlı Konuşmalar",
      feature2Description: "Yapay zekamız, üst üste konuşmalar, kesintiler ve hızlı ileri geri konuşmalar sırasında bile konuşmacıları doğru bir şekilde tespit eder. Konuşmacıların sık sık araya girdiği röportajlar, podcast'ler ve toplantılar için idealdir.",
      feature2Point1Icon: "✓",
      feature2Point1Text: "20'ye kadar konuşmacıyı tanımlar",
      feature2Point2Icon: "✓",
      feature2Point2Text: "Kesintileri mükemmel bir şekilde yönetir",
      feature2Point3Icon: "✓",
      feature2Point3Text: "Çakışan konuşmayla çalışır",
      feature2Point4Icon: "✓",
      feature2Point4Text: "Çapraz konuşmada doğruluğu korur",
      feature2VisualNumber: "20",
      feature2VisualTitle: "Konuşmacılar Belirlendi",
      feature2VisualSubtext: "Hızlı konuşmalarda bile",
      feature3Label: "Okunabilirlik",
      feature3TitlePart1: "Mükemmel bir şekilde",
      feature3TitleHighlight: "Biçimlendirilmiş Metin",
      feature3Description: "Artık metin duvarları yok. Yapay zekamız paragrafları, cümleleri ve noktalama işaretlerini tam olması gereken yere otomatik olarak ekliyor. Sonuç mu? Gerçekten okunması keyifli ve taranması kolay transkriptler.",
      feature3Point1Icon: "✓",
      feature3Point1Text: "Akıllı paragraf sonları",
      feature3Point2Icon: "✓",
      feature3Point2Text: "Doğru noktalama işaretleri",
      feature3Point3Icon: "✓",
      feature3Point3Text: "Uygun büyük harf kullanımı",
      feature3Point4Icon: "✓",
      feature3Point4Text: "Temiz, taranabilir çıktı",
      formattingTitle: "Önce ve Sonra",
      formattingBeforeLabel: "❌ Diğerleri:",
      formattingBeforeText: "Bugün üzerinde çalıştığımız yeni özellikler hakkında konuşacağız. Bunları gerçekten beğeneceğinizi düşünüyorum. Bunlar uzun zamandır kullanıcılar tarafından talep ediliyordu ve sonunda bunları tamamladık.",
      formattingAfterLabel: "✓ NeverCap:",
      formattingAfterText: "Bugün, üzerinde çalıştığımız yeni özelliklerden bahsedeceğiz. Bunları gerçekten beğeneceğinizi düşünüyorum. Uzun zamandır kullanıcılar tarafından talep ediliyordu ve sonunda tamamladık.",
      comparisonSubtitle: "Kesinlik",
      comparisonSectionTitle: "Karşılaştırmak",
      comparisonDes: "Rekabette nasıl bir performans sergilediğimizi görün",
      tableHeader1: "Özellik",
      tableHeader2: "NeverCap",
      tableHeader3: "Otter.ai",
      tableHeader4: "Açıklama",
      tableHeader5: "Rahip",
      tableRow1Feature: "Doğruluk (Net Ses)",
      tableRow1NeverCap: "%96",
      tableRow1Otter: "%95",
      tableRow1Descript: "%94",
      tableRow1Rev: "%94",
      tableRow2Feature: "Kelime Düzeyinde Zaman Damgaları",
      tableRow2NeverCap: "✓",
      tableRow2Otter: "✓",
      tableRow2Descript: "✓",
      tableRow2Rev: "✕",
      tableRow3Feature: "Konuşmacı Tanımlama",
      tableRow3NeverCap: "20 konuşmacı",
      tableRow3Otter: "16 hoparlör",
      tableRow3Descript: "10 hoparlör",
      tableRow3Rev: "✕",
      tableRow4Feature: "Çapraz Konuşmayı Yönetir",
      tableRow4NeverCap: "✓",
      tableRow4Otter: "Sınırlı",
      tableRow4Descript: "Sınırlı",
      tableRow4Rev: "✕",
      tableRow5Feature: "Akıllı Biçimlendirme",
      tableRow5NeverCap: "✓",
      tableRow5Otter: "✓",
      tableRow5Descript: "✓",
      tableRow5Rev: "Temel",
      tableRow6Feature: "12 Dil %96",
      tableRow6NeverCap: "✓",
      tableRow6Otter: "✕",
      tableRow6Descript: "✕",
      tableRow6Rev: "✕",
      ctaTitle: "%96 Doğruluk Deneyimi",
      ctaSubtitle: "En zorlu sesinizi yükleyin ve farkı görün",
      finalCta: "Doğruluğumuzu Şimdi Test Edin →"
    }
  },
  Pricing: {
    Hero: {
      "title": "Basit, Şeffaf Fiyatlandırma",
      "highlighted_text": "Gizli Kapak Yok",
      "description": "İhtiyaçlarınıza uygun planı seçin. İstediğiniz zaman yükseltin veya düşürün. Sözleşme yok, sürpriz yok."
    },
    Cards: {
      "title": "Basit, Şeffaf Fiyatlandırma.",
      "highlighted_text": "Gizli Kapak Yok.",
      "description": "İhtiyaçlarınıza uygun planı seçin. İstediğiniz zaman yükseltin veya düşürün. Sözleşme yok, sürpriz yok.",
      "plans": [
        {
          "name": "Özgür",
          "price": "0 dolar",
          "period": "ay",
          "discount": "Hizmetimizi denemek için mükemmel",
          "limits": {
            "title": "Günlük Limitler",
            "items": [
              "3 dosya/gün (toplam ≈90 dk/gün)",
              "Dosya başına 30 dakikaya kadar (≤250 MB)",
              "Bir seferde 1 dosya yükleyin",
              "Standart öncelikli kuyruk"
            ]
          },
          "features": {
            "title": "Özellikler",
            "items": [
              "100'den fazla dil",
              "Konuşmacı etiketleri",
              "Çeviri",
              "Tüm dışa aktarma biçimleri"
            ]
          },
          "cta": {
            "text": "Ücretsiz başlayın. Kredi kartı gerekmez.",
            "button": "Ücretsiz Başlayın"
          }
        },
        {
          "name": "Pro Aylık",
          "price": "17,99 dolar",
          "period": "ay",
          "discount": "İlk ay için 9,99 ABD doları",
          "limits": {
            "title": "Aylık Sınır Yok",
            "items": [
              "Sınırsız toplam dakika",
              "Dosya başına 10 saate kadar / 5 GB",
              "Aynı anda 50 dosya yükleyin",
              "Öncelikli sıra"
            ]
          },
          "features": {
            "title": "Ücretsiz olan her şey, artı",
            "items": [
              "Kelime düzeyinde zaman damgaları",
              "Gelişmiş konuşmacı tanımlama",
              "Biçimlendirilmiş paragraflar ve noktalama işaretleri",
              "Öncelikli destek"
            ]
          },
          "cta": {
            "text": "Sınırsız dakika. Öncelikli hız. Toplu yüklemeler.",
            "button": "Profesyonel Olun"
          },
          "badge": "En Popüler"
        },
        {
          "name": "Pro Yıllık",
          "price": "8,99 dolar",
          "period": "ay",
          "discount": "Yıllık 107,88 ABD doları faturalandırılır",
          "limits": {
            "title": "Pro Monthly ile aynı",
            "items": [
              "Sınırsız toplam dakika",
              "Dosya başına 10 saate kadar / 5 GB",
              "Aynı anda 50 dosya yükleyin",
              "Öncelikli sıra"
            ]
          },
          "features": {
            "title": "Ücretsiz olan her şey, artı",
            "items": [
              "Kelime düzeyinde zaman damgaları",
              "Gelişmiş konuşmacı tanımlama",
              "Biçimlendirilmiş paragraflar ve noktalama işaretleri",
              "Öncelikli destek"
            ]
          },
          "cta": {
            "text": "Sınırsız dakika. Öncelikli hız. Toplu yüklemeler.",
            "button": "Profesyonel Olun"
          },
          "badge": "En İyi Değer - %50 Tasarruf Edin"
        }
      ],
      "disclaimer": '"Sınırsız" ifadesi, aylık bir sınırlama veya yapay bir yavaşlatma olmadığı anlamına gelir. Adil kullanım, kötüye kullanılan otomasyon veya yeniden dağıtım için geçerlidir.'
    },
    ComparisonTable: {
      "header": {
        "title": "Tüm Özellikleri Karşılaştırın",
        "highlighted_text": "Tüm Özellikler",
        "subtitle": "Her planla tam olarak ne elde edeceğinizi görün. Gizli sınırlamalar yok."
      },
      "plans": [
        "Özellikler",
        "Özgür",
        "Pro Aylık",
        "Pro Yıllık"
      ],
      "features": [
        {
          "name": "Fiyat",
          "values": [
            "0$/ay",
            {
              "main": "17,99 ABD doları/ay",
              "note": "İlk ay 9,99 dolar"
            },
            {
              "main": "Aylık 8,99 ABD doları",
              "note": "Yılda 107,88 dolar faturalandırıldı"
            }
          ]
        },
        {
          "name": "Aylık dakikalar",
          "values": ["~2.700 (90/gün)", "Sınırsız", "Sınırsız"]
        },
        {
          "name": "Maksimum dosya süresi",
          "values": ["30 dakika", "10 saat", "10 saat"]
        },
        {
          "name": "Maksimum dosya boyutu",
          "values": ["250 MB", "5 GB", "5 GB"]
        },
        {
          "name": "Toplu yüklemeler",
          "values": ["1 dosya", "50 dosya", "50 dosya"]
        },
        {
          "name": "İşlem hızı",
          "values": ["Standart", "Öncelik", "Öncelik"]
        },
        {
          "name": "Desteklenen diller",
          "values": ["100'den fazla dil", "100'den fazla dil", "100'den fazla dil"]
        },
        {
          "name": "Çeviri",
          "values": ["doğru", "doğru", "doğru"]
        },
        {
          "name": "Konuşmacı tanımlama",
          "values": ["Temel", "Gelişmiş (20 hoparlör)", "Gelişmiş (20 hoparlör)"]
        },
        {
          "name": "Kelime düzeyinde zaman damgaları",
          "values": ["YANLIŞ", "doğru", "doğru"]
        },
        {
          "name": "Biçimlendirilmiş paragraflar",
          "values": ["YANLIŞ", "doğru", "doğru"]
        },
        {
          "name": "Dışa aktarma biçimleri",
          "values": ["Tüm formatlar", "Tüm formatlar", "Tüm formatlar"]
        },
        {
          "name": "Destek",
          "values": ["E-posta", "Öncelikli e-posta", "Öncelikli e-posta"]
        },
        {
          "name": "Veri saklama",
          "values": ["30 gün", "Sonsuza kadar", "Sonsuza kadar"]
        }
      ]
    },
    FAQ: {
      "title": "Sıkça Sorulan Sorular",
      "titleHighligt": "Sorular",
      "items": [
        {
          "q": "sınırsız_politika",
          "question": "Gerçekten sınırsız mı?",
          "answer": "Evet! Pro planlarında aylık dakika sınırı yoktur. Tek sınırlama tekniktir: maksimum 10 saatlik dosya süresi ve 5 GB dosya boyutu. İhtiyacınız olan kadar dosyayı işleyebilirsiniz."
        },
        {
          "q": "plan_değişimi",
          "question": "Planlarımı istediğim zaman değiştirebilir miyim?",
          "answer": "Kesinlikle! Aboneliğinizi istediğiniz zaman panonuzdan iptal edebilirsiniz. İhtiyacınız olduğunda yükseltme veya düşürme yapabilirsiniz."
        },
        {
          "q": "ödeme_yöntemleri",
          "question": "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
          "answer": "Güvenli ve sorunsuz ödemeler için tüm büyük kredi kartlarını, banka kartlarını ve PayPal'ı kabul ediyoruz."
        },
        {
          "q": "ücretsiz_deneme",
          "question": "Pro için ücretsiz deneme sürümü var mı?",
          "answer": "Evet! Pro'yu 7 gün boyunca ücretsiz deneyin, kredi kartı gerekmez. Ayrıca abone olduğunuzda ilk ay %45 indirimden yararlanın."
        },
        {
          "q": "dosya_saklama",
          "question": "Dosyalarımı ne kadar süreyle saklıyorsunuz?",
          "answer": "Ücretsiz plan: 30 gün. Pro planlar: Sonsuza kadar! Transkriptleriniz hesabınızda her zaman mevcuttur."
        },
        {
          "q": "veri_güvenliği",
          "question": "Peki ya veri güvenliği?",
          "answer": "SOC 2 sertifikalıyız ve 256 bit şifreleme kullanıyoruz. İçeriğinizi asla modellerimizi eğitmek için kullanmıyoruz. Verileriniz size aittir."
        }
      ]
    },
    CTA: {
      "title": "Sınırsızlığa Hazır Mısınız?",
      "subtitle": "Sınırsız transkripsiyon yapan 50.000'den fazla profesyonele katılın",
      "button": "NeverCap Ücretsiz Deneyin →",
      "disclaimer": "Kredi kartı gerekmez • Saniyeler içinde yazıya dökmeye başlayın"
    }
  },
  UseCases: {
    AllUseCases: {
      builtFor: "İçin inşa edildi",
      heavyUsers: "Ağır Kullanıcılar",
      whoActuallyNeed: "Sınırsıza Gerçekten Kimin İhtiyacı Var?",
      heroSubtitle: "Yıllardır podcast yayını yapanlardan yüzlerce röportaj yapmış araştırmacılara kadar. Profesyonellerin yükleme sınırlarından ve dakika sınırlamalarından kurtulmak için NeverCap'i nasıl kullandıklarını görün.",
      podcasters: {
        title: "Podcast yayıncıları",
        pain: '"Hangi bölümlerin transkriptlere layık olduğunu seçmeyi bırakın"',
        description: "Tüm podcast arşivinizi tek seferde yükleyin. Program notları oluşturun, SEO'nuzu iyileştirin ve dakikaları saymadan içeriği yeniden kullanın.",
        benefits: {
          benefit1: "Sadece 3 bölümü değil, tüm bölümleri yükleyin",
          benefit2: "SEO dostu gösteri notları oluşturun",
          benefit3: "Aranabilir arşivler oluşturun",
          benefit4: "Blog içeriğine dönüştürün"
        },
        stats: {
          stat1: {
            number: "150+",
            label: "Bölümler"
          },
          stat2: {
            number: "200 saat",
            label: "Kaydedildi"
          },
          stat3: {
            number: "3x",
            label: "SEO Trafiği"
          }
        }
      },
      journalists: {
        title: "Gazeteciler ve Yazarlar",
        pain: '"Son teslim tarihi baskısı yükleme kısıtlamalarıyla buluşuyor"',
        description: "Tüm röportajları son teslim tarihinden önce toplu olarak yükleyin. Transkriptler arasında anında arama yapın ve önemli bir alıntıyı asla kaçırmayın.",
        benefits: {
          benefit1: "Son teslim tarihlerinden önce toplu yükleme",
          benefit2: "Tüm röportajları aynı anda arayın",
          benefit3: "Zaman damgalı doğru alıntılar",
          benefit4: "Aksanları ve dilleri yönetin"
        },
        stats: {
          stat1: {
            number: "30+",
            label: "Röportajlar/ay"
          },
          stat2: {
            number: "%96",
            label: "Kesinlik"
          },
          stat3: {
            number: "5 dk",
            label: "Saat Başına"
          }
        }
      },
      contentCreators: {
        title: "İçerik Oluşturucuları",
        pain: '"Erişilebilirlik pahalı olmamalı"',
        description: "YouTube kanalınızın tamamına altyazı ekleyin. Birden fazla dilde altyazı oluşturun ve video SEO'nuzu anında iyileştirin.",
        benefits: {
          benefit1: "Tüm videolara aynı anda altyazı ekleyin",
          benefit2: "249 dil çevirisi",
          benefit3: "YouTube'a hazır SRT dosyaları",
          benefit4: "Video SEO sıralamasını artırın"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Videolar"
          },
          stat2: {
            number: "100+",
            label: "Diller"
          },
          stat3: {
            number: "249",
            label: "Çeviriler"
          }
        }
      },
      researchers: {
        title: "Araştırmacılar ve Akademisyenler",
        pain: '"Nitel veriler sırada beklememeli"',
        description: "Tüm araştırma çalışmalarını tek seferde işleyin. Odak grupları, görüşmeler ve panel tartışmalarını kusursuz konuşmacı belirleme özelliğiyle yönetin.",
        benefits: {
          benefit1: "Süreç odak gruplarını toplu olarak işleme",
          benefit2: "20 konuşmacı tanımlaması",
          benefit3: "Analiz yazılımına aktar",
          benefit4: "GDPR uyumlu güvenlik"
        },
        stats: {
          stat1: {
            number: "100+",
            label: "Çalışmak"
          },
          stat2: {
            number: "%96",
            label: "Grup Doğruluğu"
          },
          stat3: {
            number: "GDPR",
            label: "Uyumlu"
          }
        }
      },
      businessTeams: {
        title: "İş Ekipleri",
        pain: '"Toplantı kayıtları zahmetsiz olmalı"',
        description: "Toplantıları doğrudan kaydedin veya anında yazıya dökmek için ses dosyalarını yükleyin. Sınırsız sayıda konuşmadan aranabilir arşivler oluşturun ve önemli görüşmeleri bir daha asla kaybetmeyin.",
        benefits: {
          benefit1: "Doğrudan ses kaydı ve transkripsiyonu",
          benefit2: "Sınırsız toplantı kayıtları",
          benefit3: "Aranabilir toplantı arşivi",
          benefit4: "Ses dosyalarını anında yükleyin"
        },
        stats: {
          stat1: {
            number: "Canlı",
            label: "Kayıt"
          },
          stat2: {
            number: "Ani",
            label: "Yüklemek"
          },
          stat3: {
            number: "20+",
            label: "Konuşmacılar"
          }
        }
      },
      educators: {
        title: "Eğitimciler",
        pain: '"YouTube videolarının anında transkripsiyona ihtiyacı var"',
        description: "Anında transkript ve otomatik olarak oluşturulan altyazılar almak için YouTube bağlantılarını yapıştırmanız yeterli. Herhangi bir eğitim videosunu erişilebilir ve aranabilir içeriğe dönüştürün.",
        benefits: {
          benefit1: "Doğrudan YouTube bağlantısı transkripsiyonu",
          benefit2: "Otomatik video altyazıları oluştur",
          benefit3: "Tüm dersleri yazıya dökün",
          benefit4: "Aranabilir ders arşivleri"
        },
        stats: {
          stat1: {
            number: "1-Tıkla",
            label: "YouTube Yapıştır"
          },
          stat2: {
            number: "Otomatik",
            label: "Altyazılar"
          },
          stat3: {
            number: "100+",
            label: "Diller"
          }
        }
      },
      quotes: {
        title: "Gerçek Kullanıcılar,",
        titleHighlight: "Gerçek Özgürlük",
        subtitle: "Yapay sınırlardan kurtulan profesyonellerin hikayelerini dinleyin",
        testimonials: {
          mike: {
            textBefore: '"Benim vardı',
            highlight: "3 yıllık bölümler",
            textAfter: 'Transkripsiyonu yapılmamış halde duruyor. Otter 3 tane seçmemi istedi. ÜÇ. NeverCap 150 bölümün tamamını bir hafta sonu yüklememe izin ver."',
            name: "Mike Rodriguez",
            role: "Podcast Sunucusu"
          },
          jessica: {
            textBefore: `"Serbest gazeteci olarak Trint'in masraflarını karşılayamıyorum`,
            highlight: "100$/ay",
            textAfter: `, ama aynı zamanda Otter'ın ayda 10 dosya sınırıyla da çalışamıyorum. NeverCap kariyerimi kurtardı."`,
            name: "Jessica Parkı",
            role: "Serbest Gazeteci"
          },
          sarah: {
            textBefore: '"Araştırma ekibimiz',
            highlight: "200 saat",
            textAfter: 'Odak grup kayıtlarının. Aylık dakikaları sınırlamak yerine her şeyi bir hafta sonu boyunca işledik."',
            name: "Dr. Sarah Chen",
            role: "Baş Araştırmacı"
          },
          carlos: {
            textBefore: '"İspanyolca eğitim içeriği hazırlıyorum. NeverCap mükemmel bir şekilde yazıya döküyor ve',
            highlight: "İngilizceye çevrilir",
            textAfter: 'daha geniş bir erişim için. Sınır yok, sadece büyüme."',
            name: "Carlos Martinez",
            role: "YouTube Eğitimcisi"
          }
        }
      },
      industries: {
        title: "Her Yerde Güvenilir",
        titleHighlight: "Endüstriler",
        subtitle: "Her yerdeki profesyoneller gerçek anlamda sınırsız teknolojiye geçiyor",
        list: {
          media: "Medya ve Yayıncılık",
          education: "Eğitim",
          healthcare: "Sağlık hizmeti",
          technology: "Teknoloji",
          finance: "Finans",
          legal: "Yasal"
        }
      },
      cta: {
        title: "Kullanım Durumunuzun da Sınırsız Olması Gerekiyor",
        subtitle: "Dakikaları saymayı bırakıp yaratmaya başlayan 50.000'den fazla profesyonele katılın",
        button: "Sınırsız Yolculuğunuza Başlayın →"
      }
    },
    Podcasters: {
      badge: "🎙️ Podcast Yayıncıları İçin Tasarlandı",
      heroTitle: "Transkriptinizi yazın",
      heroTitleHighlight: "Tüm Podcast Arşivi",
      heroSubtitle: "Tüm eski programlarınızı yükleyin. Her bölüm için program notları oluşturun. Artık hangi bölümlerin transkripsiyonunu yapacağınızı seçmeye gerek yok. 50 bölümü aynı anda, ayda sınırsız kez işleyin.",
      ctaPrimary: "Ücretsiz Transkripsiyonu Başlatın",
      ctaSecondary: "Nasıl Çalıştığını Görün",
      trustBadge1: "🎙️ 10.000'den fazla Podcast yayıncısı",
      trustBadge2: "∞ Sınırsız Bölüm",
      trustBadge3: "📝 SEO'ya Hazır Transkriptler",
      stats: {
        stat1: {
          number: "∞",
          label: "Bölüm/Ay"
        },
        stat2: {
          number: "50",
          label: "Toplu Yükleme"
        },
        stat3: {
          number: "10 saat",
          label: "Maksimum Bölüm Uzunluğu"
        },
        stat4: {
          number: "%96",
          label: "Kesinlik"
        }
      },
      problemTitle: "The",
      problemTitleHighlight: "Podcast Transkripsiyon Sorunu",
      problemSubtitle: 'Diğer hizmetler, hangi bölümlerin yazıya dökülmeye "değer" olduğunu seçmenizi ister',
      problems: {
        problem1: {
          title: "Yükleme Sınırları Arşivleri Sonlandır",
          description: "Otter size 3 ömür boyu ücretsiz içe aktarma hakkı, Pro'da ise aylık 10 içe aktarma hakkı veriyor. 3 yıllık bölümleri nasıl yazıya dökersiniz?"
        },
        problem2: {
          title: "Kaçırılan SEO Fırsatları",
          description: "Transkripsiyonu yapılmayan her bölüm, SEO trafiğinin kaybı anlamına gelir. Ancak Descript, sizi ayda en fazla 30 saatle sınırlar."
        },
        problem3: {
          title: "Büyümeyle Maliyetler Patlıyor",
          description: "Podcast'iniz büyüdükçe transkripsiyon maliyetleri de fırlar. Saatlik 2 dolarlık aşım ücretleri ölçeklemeyi imkansız hale getirir."
        }
      },
      solutionTitle: "The",
      solutionTitleHighlight: "NeverCap Çözüm",
      solutionDescription: "Gerçek sınırsız transkripsiyon. Tüm arşivinizi yükleyin. Her yeni bölümü metne dönüştürün. Program notlarını ölçeklenebilir bir şekilde oluşturun. Sınır yok, limit yok, sadece büyüme.",
      workflowTitle: "Podcast İş Akışınız,",
      workflowTitleHighlight: "Basitleştirilmiş",
      workflowSubtitle: "Kayıttan dakikalar içinde SEO'ya uygun gösteri notlarına",
      workflow: {
        step1: {
          title: "Bölümleri Yükle",
          description: "50 bölümü aynı anda yayınlayın. MP3, MP4, WAV - hepsini biz hallediyoruz."
        },
        step2: {
          title: "AI Transkriptleri",
          description: "Konuşmacı tanımlamada %96 doğruluk. Mülakatlar için mükemmel."
        },
        step3: {
          title: "Akıllı Biçimlendirme",
          description: "Yapay zeka paragrafları, cümleleri ve noktalama işaretlerini otomatik olarak ekler."
        },
        step4: {
          title: "Yayınla ve Sırala",
          description: "Web sitenize aktarın. SEO trafiğinizin arttığını görün."
        }
      },
      featuresTitle: "Özellikler Podcast'çiler",
      featuresTitleHighlight: "Aslında İhtiyaç",
      featuresSubtitle: "Podcast yayıncıları tarafından podcast yayıncıları için oluşturuldu",
      features: {
        feature1: {
          title: "Çoklu Hoparlör Algılama",
          description: "20'ye kadar konuşmacıyı otomatik olarak tanımlar ve etiketler. Panel tartışmaları, röportajlar ve ortak sunulan programlar için idealdir."
        },
        feature2: {
          title: "Zaman Damgası Bölümleri",
          description: "YouTube açıklamaları için tıklanabilir zaman damgaları oluşturun. Dinleyicilerin en sevdikleri bölümlere anında ulaşmasını sağlayın."
        },
        feature3: {
          title: "Akıllı Biçimlendirme",
          description: "Paragrafları, cümleleri ve noktalama işaretlerini otomatik olarak ekler. Temiz ve okunabilir metinler elde edin. Post prodüksiyonda saatlerce zaman kazanın."
        },
        feature4: {
          title: "SEO Optimizasyonu",
          description: "Arama motorları için biçimlendirilmiş transkriptler. Podcast'inizin keşfedilebilirliğini artırın ve yeni kitlelere ulaşın."
        },
        feature5: {
          title: "100'den fazla dil",
          description: "İstediğiniz dilde metne dönüştürün. 249'dan fazla dile çevirin. Küresel kitlelere zahmetsizce ulaşın."
        },
        feature6: {
          title: "Toplu İşleme",
          description: "Yatmadan önce 50 bölüm yükleyin. Uyandığınızda transkriptleri tamamlayın. Tüm arşivinizi gece boyunca işleyin."
        }
      },
      testimonialsTitle: "Podcast Yapan Podcast'çiler",
      testimonialsTitleHighlight: "Anahtar",
      testimonialsSubtitle: "Gerçek podcaster'lardan gerçek hikayeler",
      testimonials: {
        mike: {
          text: '"3 yıldır podcast yapıyorum ve her şeyi aptal gibi elle yazıya döküyordum. Aynı anda 6 bölüm yükledim ve sunucu arkadaşımla mükemmel bir şekilde ayrıldım. Mahvolduğunu düşündüğüm kahve dükkanı bölümü mü? Kristal berraklığında bir yazı. Bir daha asla bunları kendim yazmaya çalışmayacağım."',
          name: "Mike Rodriguez",
          role: `"The Daily Grind" Podcast'inin sunucusu`
        },
        sarah: {
          text: '"Otter beni ayda 10 dosya aktarımıyla sınırlamıştı. 150 bölümüm birikmiş durumda. NeverCap Her şeyi 3 parti halinde yüklememe izin ver. Eski bölümlere metin eklediğimden beri organik trafiğim %300 arttı. Bu, kelimenin tam anlamıyla kendi masrafını çıkarıyor."',
          name: "Sarah Chen",
          role: '"Tech Talks Today"in yaratıcısı'
        }
      },
      comparisonTitle: "Podcast Yayıncıları Neden Tercih Ediyor?",
      comparisonTitleHighlight: "NeverCap",
      comparisonSubtitle: "Rekabette nasıl bir performans sergilediğimizi görün",
      comparison: {
        headers: {
          feature: "Özellik",
          nevercap: "NeverCap",
          otter: "Otter.ai Pro",
          descript: "Tanım Oluşturucu"
        },
        rows: {
          monthlyLimit: {
            feature: "Aylık Bölüm Sınırı",
            nevercap: "Sınırsız",
            otter: "~13 bölüm (1200 dk)",
            descript: "~30 bölüm (30 saat)"
          },
          uploadLimit: {
            feature: "Dosya Yükleme Sınırı",
            nevercap: "Sınırsız",
            otter: "Ayda 10",
            descript: "1 seferde"
          },
          batchProcessing: {
            feature: "Toplu İşleme",
            nevercap: "50 dosya",
            otter: "✕",
            descript: "✕"
          },
          maxLength: {
            feature: "Maksimum Bölüm Uzunluğu",
            nevercap: "10 saat",
            otter: "90 dakika",
            descript: "Sınırsız"
          },
          speakerDetection: {
            feature: "Hoparlör Algılama",
            nevercap: "20 konuşmacı",
            otter: "16 hoparlör",
            descript: "10 hoparlör"
          },
          smartFormatting: {
            feature: "Akıllı Biçimlendirme",
            nevercap: "✓ Mükemmel",
            otter: "✓",
            descript: "✓"
          },
          price: {
            feature: "Fiyat",
            nevercap: "17,99 ABD doları/ay",
            otter: "16,99 ABD doları/ay",
            descript: "30$/ay"
          }
        }
      },
      ctaTitle: "Her Bölümün Metne Dökülmesine Başlayın",
      ctaSubtitle: "Sınırlar konusunda asla endişelenmeyen 10.000'den fazla podcast yayıncısına katılın",
      ctaButton: "İlk 50 Bölümünüzü Ücretsiz Yükleyin →",
      ctaDisclaimer: "Kredi kartı gerekmez • Sınırsız bölüm işleyin • İstediğiniz zaman iptal edin"
    },
    Journalists: {
      hero: {
        badge: "📰 Gazeteciler ve Yazarlar İçin",
        title: "Her Röportajı Yazıya Dökün.",
        titleHighlight: "Hiçbir Teklifi Kaçırmayın.",
        subtitle: "Hangi röportajların transkripte edilmesi gerektiğini seçmeyi bırakın. Tüm kayıtları aynı anda yükleyin, her şeyde anında arama yapın ve yükleme kaygısı yaşamadan son tarihlerinize uyun.",
        ctaPrimary: "Sınırsız Yükleme Başlat →",
        ctaSecondary: "Nasıl Çalıştığını Görün",
        stats: {
          uploads: {
            number: "∞",
            label: "Dosya Yüklemeleri"
          },
          accuracy: {
            number: "%96",
            label: "Kesinlik"
          },
          speed: {
            number: "5 dk",
            label: "Saat Başına"
          }
        },
        dashboard: {
          title: "Röportaj Kuyruğu",
          status: "• Tüm İşlemeler",
          interviews: {
            cityCouncil: {
              title: "Şehir Meclisi Toplantısı",
              duration: "2s 15dk • Yükleniyor...",
              action: "İşleme"
            },
            expertInterview: {
              title: "Uzman Röportajı - Dr. Chen",
              duration: "45dk • Yazıya dökülüyor...",
              action: "%96 Tamamlandı"
            },
            pressConference: {
              title: "Basın toplantısı",
              duration: "1s 30dk • Hazır",
              action: "Görüntüle →"
            },
            phoneInterview: {
              title: "Telefon Görüşmesi - Kaynak",
              duration: "35dk • Hazır",
              action: "Görüntüle →"
            }
          }
        }
      },
      problem: {
        title: "The",
        titleHighlight: "Gazeteci Transkripsiyon Sorunu",
        subtitle: 'Diğer hizmetler, hangi röportajların yazıya dökülmeye "değer" olduğunu seçmenizi ister',
        problems: {
          uploadLimits: {
            title: "Yükleme Sınırları Soruşturmaları Sonlandırır",
            description: "Otter, Pro'da ayda 10 dosya içe aktarma olanağı sunuyor. 3 haftalık soruşturma görüşmelerini nasıl yazıya dökersiniz?"
          },
          missingQuotes: {
            title: "Önemli Alıntılar Eksik",
            description: "Transkript edilmemiş her röportaj, hikayenin anahtar alıntısını içerebilir. Ancak Trint, sizi ayda en fazla 50 saatle sınırlandırıyor."
          },
          costExplosion: {
            title: "Son Tarihlerle Maliyetler Patlıyor",
            description: "Soruşturmanız derinleştikçe, transkripsiyon maliyetleri de fırlıyor. Aylık 100 dolarlık aşım ücretleri, son dakika haberlerinin yayınlanmasını imkânsız hale getiriyor."
          }
        },
        solution: {
          title: "The",
          titleHighlight: "NeverCap Çözüm",
          description: "Gerçek, sınırsız transkripsiyon. Tüm araştırmanızı yükleyin. Her röportajı transkripte edin. Tüm alıntıları anında arayın. Büyük harf yok, sınır yok, sadece gazetecilik."
        }
      },
      solution: {
        title: "Nihayet,",
        titleHighlight: "Gerçek Özgürlük",
        titleSuffix: "Gazeteciler için",
        subtitle: "Her şeyi yükleyin. Her şeyi metne dönüştürün. Her şeyi arayın.",
        solutions: {
          unlimitedUploads: {
            label: "Sınırsız Yükleme",
            title: "Tüm Araştırmanızı Toplu Olarak Yükleyin",
            description: "Artık hangi röportajları yazıya dökeceğinizi seçmeye son. Tek seferde 50 dosya yükleyin. Aylarca süren kayıtları bir gecede işleyin. Tüm soruşturmanız yazıya dökülsün.",
            points: {
              simultaneousUpload: "50 dosyayı aynı anda yükleyin",
              noLimits: "Aylık yükleme sınırı yok",
              processWhileWrite: "Yazarken işlem yapın",
              longRecordings: "10 saatlik kayıtlar destekleniyor"
            },
            visual: {
              number: "50",
              label: "Dosyalar Aynı Anda"
            }
          },
          instantSearch: {
            label: "Anında Arama",
            title: "Herhangi Bir Teklifi Saniyeler İçinde Bulun",
            description: "Tüm transkriptlerinizde anında arama yapın. Üç ay önceki o mükemmel alıntıyı bulun. Notlarınızdaki önemli ifadeleri bir daha asla kaybetmeyin.",
            points: {
              searchAll: "Tüm röportajlarda ara",
              wordTimestamps: "Kelime düzeyinde zaman damgaları",
              jumpToMoments: "Tam anlara atla",
              exportCitations: "Alıntılarla dışa aktar"
            },
            searchDemo: {
              placeholder: "iklim politikası beyanı",
              resultsText: "4 röportajda bulundu:",
              results: {
                mayorInterview: '"...iklim politikamız dönüşecek..."',
                expertPanel: '"...politika beyanı açıkça gösteriyor ki..."'
              }
            }
          },
          professionalAccuracy: {
            label: "Profesyonel Doğruluk",
            title: "Alıntı Yapabileceğiniz %96 Doğruluk",
            description: "Doğrudan alıntı yapabileceğiniz kadar doğru metinler alın. Aksanları, teknik terimleri ve hızlı konuşmaları yönetin. Gerçekten okunabilir, mükemmel biçimlendirme.",
            points: {
              accuracyGuarantee: "%96 doğruluk garantisi",
              handlesAccents: "Aksanları ve lehçeleri işler",
              smartPunctuation: "Akıllı noktalama ve paragraflar",
              speakerIdentification: "Konuşmacı tanımlama"
            },
            visual: {
              accuracy: "%96",
              label: "Doğruluk Oranı",
              transcript: {
                speaker1: '"Soruşturmada mali raporlarda önemli tutarsızlıklar ortaya çıktı."',
                speaker2: '"Bu özel tutarsızlıkları biraz daha açabilir misiniz?"'
              }
            }
          }
        }
      },
      features: {
        title: "Her şey bir",
        titleHighlight: "Gazeteci İhtiyaçları",
        subtitle: "İş akışınıza saygı duyan profesyonel araçlar",
        featuresList: {
          languages: {
            title: "100'den fazla dil",
            description: "Dünya çapında 12 ana dilde %96 doğruluk oranıyla kaynaklarla röportaj yapıyoruz."
          },
          exportFormats: {
            title: "Dışa Aktarım Biçimleri",
            description: "Word, PDF, SRT, TXT. Her türlü iş akışına uyumludur."
          },
          sourceProtection: {
            title: "Kaynak Koruması",
            description: "Banka düzeyinde şifreleme. Kaynaklarınız gizli kalır."
          },
          timestamps: {
            title: "Zaman damgaları",
            description: "Herhangi bir alıntıya tıklayarak tam ses anına gidebilirsiniz."
          },
          teamSharing: {
            title: "Takım Paylaşımı",
            description: "Editörlerle iş birliği yapın. Transkriptleri güvenli bir şekilde paylaşın."
          },
          mobileReady: {
            title: "Mobil Uyumlu",
            description: "Telefonunuzdan yükleyin. Transkriptleri istediğiniz yerde inceleyin."
          },
          smartFormatting: {
            title: "Akıllı Biçimlendirme",
            description: "Okunabilir metinler için otomatik paragraflar ve noktalama işaretleri."
          },
          batchProcessing: {
            title: "Toplu İşleme",
            description: "Tek seferde 50 dosya yükleyin. Uyurken gece boyunca işleyin."
          }
        }
      },
      testimonials: {
        jessica: {
          quote: "Yükleme limitleri nedeniyle 3 yıldır yazıya dökülmemiş röportajlarım vardı. NeverCap Her şeyi bir hafta sonunda işlememe izin verin. Oyunun kurallarını değiştirecek.",
          name: "Jessica Parkı",
          role: "Serbest Gazeteci, Eski Otter Kullanıcısı"
        }
      },
      cta: {
        title: "Transkripsiyonu Başlat",
        titleHighlight: "Sınırsız",
        subtitle: "Yüklemeleri saymayı bırakıp hikayelere odaklanmaya başlayan binlerce gazeteciye katılın",
        ctaPrimary: "Sınırsız Ücretsiz Deneyin →",
        ctaSecondary: "Fiyatlandırmayı Görüntüle"
      }
    },
    ContentCreators: {
      hero: {
        badge: "📹 İçerik Oluşturucuları İçin",
        title: "Altyazınız",
        titleHighlight: "Tüm Kanal",
        titleSuffix: "Dakika Saymadan",
        subtitle: "Hangi videoların altyazıya layık olduğunu seçmeyi bırakın. Tüm YouTube arşivinizi işleyin, 100'den fazla dilde altyazı oluşturun ve videoları doğrudan herhangi bir platformdan indirin. Aylık sınır yok, yükleme kısıtlaması yok; sadece saf yaratıcılık özgürlüğü.",
        ctaPrimary: "Sınırsız Altyazı Başlat →",
        ctaSecondary: "Nasıl Çalıştığını Görün",
        stats: {
          videos: {
            number: "∞",
            label: "Video/Ay"
          },
          languages: {
            number: "100+",
            label: "Diller"
          },
          accuracy: {
            number: "%96",
            label: "Kesinlik"
          },
          platforms: {
            number: "10+",
            label: "Platformlar"
          }
        }
      },
      platforms: {
        title: "Herhangi Bir Platformdan Alın ve Yazdırın",
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
        title: "İhtiyacınız Olan Her Şey",
        titleHighlight: "Ölçek İçeriği",
        subtitle: "Profesyonel sınırlar olmadan profesyonel araçlar",
        oneClickImport: {
          label: "Tek Tıkla İçe Aktarma",
          title: "Bağlantıyı Yapıştır.",
          titleHighlight: "Transkripti al.",
          description: "Artık indirip tekrar yüklemenize gerek yok. YouTube, TikTok veya Instagram bağlantınızı yapıştırın ve anında transkript alın. Kanalınızın tüm birikmiş işlerini bir hafta sonu içinde halledin.",
          points: {
            directYoutube: "Doğrudan YouTube bağlantısı transkripsiyonu",
            multiplePlatforms: "10'dan fazla platformdan alın",
            batchPlaylists: "Tüm çalma listelerini toplu olarak işle",
            autoSync: "Kanallarınızla otomatik senkronizasyon"
          },
          demo: {
            instruction: "Video URL'nizi yapıştırın:",
            url: "https://youtube.com/watch?v=...",
            status: "Getiriliyor ve Yazılıyor..."
          }
        },
        globalReach: {
          label: "Küresel Erişim",
          title: "100+ Dil.",
          titleHighlight: "Sıfır Sınır.",
          description: "100'den fazla dile otomatik çeviri ile küresel kitlelere ulaşın. Birden fazla dilde aynı anda altyazı oluşturun. Ek ücret yok, çevirilerde aylık sınır yok.",
          points: {
            highAccuracy: "12 ana dilde %96 doğruluk",
            unlimitedTranslations: "Sınırsız çeviriler dahildir",
            multicultural: "Çok kültürlü içerik için mükemmel",
            autoDetect: "Kaynak dili otomatik olarak algıla"
          },
          visual: {
            number: "100+",
            title: "Desteklenen Diller",
            subtitle: "Bir kez çevirin, herkese ulaşın"
          }
        },
        flexibleExport: {
          label: "Esnek İhracat",
          title: "Her Format",
          titleHighlight: "İhtiyacınız olan",
          description: "İş akışınıza uygun formatta dışa aktarın. YouTube için SRT dosyalarından web oynatıcılar için VTT'ye veya betikler için düzenlenebilir belgelere kadar. Tüm dışa aktarımlar sınırsızdır ve her plana dahildir.",
          points: {
            videoFormats: "Video platformları için SRT ve VTT",
            editingFormats: "Düzenleme için DOCX ve PDF",
            dataAnalysis: "Veri analizi için CSV",
            simpleScripts: "Basit betikler için TXT"
          },
          formats: {
            srt: "SRT",
            vtt: "VTT",
            txt: "TXT",
            docx: "DOCX",
            pdf: "PDF",
            csv: "CSV"
          }
        }
      },
      workflow: {
        title: "Yüklemeden",
        titleHighlight: "Yayımlandı",
        titleSuffix: "Dakikalar İçinde",
        subtitle: "Tüm içerik kütüphanenize altyazı eklemenin en hızlı yolu",
        steps: {
          pasteLinks: {
            title: "Bağlantıları Yapıştır",
            description: "YouTube, TikTok veya herhangi bir videonun bağlantısını bırakın. Veya dosyaları doğrudan yükleyin."
          },
          autoTranscribe: {
            title: "Otomatik Transkript",
            description: "Yapay zeka %96 doğrulukla işlem yapar. Aksanları ve birden fazla konuşmacıyı yönetir."
          },
          editTranslate: {
            title: "Düzenle ve Çevir",
            description: "Altyazılarınızı mükemmelleştirin. Anında 100'den fazla dile çevirin."
          },
          exportPublish: {
            title: "Dışa Aktar ve Yayınla",
            description: "İstediğiniz formatta indirin. Platformunuza yükleyin. Tamamdır!"
          }
        }
      },
      testimonials: {
        title: "Yaratıcılar",
        titleHighlight: "Günlük Geçiş",
        subtitle: "Sınırlı planlardan sınırsız özgürlüğe",
        carlos: {
          textBefore: "İspanyolca eğitim içeriği üretiyorum. NeverCap mükemmel bir şekilde transkribe ediyor ve",
          textAfter: "Daha geniş bir kitleye ulaşmak için. Sınır yok, sadece büyüme. Çok dilli altyazılar ekledikten sonra kanalımın izlenme sayısı 3 kat arttı.",
          highlight: "İngilizceye çevrilir",
          name: "Carlos Martinez",
          role: "YouTube Eğitmeni • 250.000 Abone"
        },
        sarah: {
          textBefore: "Açıklama aylık 30$ istedi",
          textAfter: "500'den fazla videom birikti. NeverCap Her şeyi bir hafta sonunda halletmeme izin verin. Altyazıların sağladığı SEO desteği ilk ayda kendini amorti etti.",
          highlight: "30 saat",
          name: "Sarah Lee",
          role: "Yaşam Tarzı Vlogger'ı • 180 Bin Abone"
        },
        jake: {
          textBefore: "The",
          textAfter: "Bu özellik oyunun kurallarını değiştiriyor. Artık hiçbir şey indirmiyorum. Sadece yapıştır, yazıya dök, tamam. Podcast kliplerimi TikTok için işlemek hiç bu kadar kolay olmamıştı.",
          highlight: "doğrudan YouTube getirme",
          name: "Jake Wilson",
          role: "Podcast Sunucusu • En İyi %1 İçerik Üreticisi"
        },
        yuki: {
          textBefore: "5 dilde içerik oluşturuyorum. Diğer hizmetler ücretlidir.",
          textAfter: ". NeverCap bana sınırsız çeviri imkanı sunuyor. Uygun yerel altyazılar kullanmaya başladığımdan beri uluslararası izleyici kitlem %400 arttı.",
          highlight: "çeviri başına",
          name: "Yuki Tanaka",
          role: "Oyun Yaratıcısı • 500.000 Abone"
        }
      },
      cta: {
        title: "Tüm Kanalınız. Altyazılı. Bugün.",
        subtitle: "Dakikaları saymayı bırakıp yaratmaya başlayan 50.000'den fazla yaratıcıya katılın",
        button: "Sınırsız Altyazı Başlat →"
      }
    },
    Researchers: {
      heroBadge: "Akademik Mükemmellik İçin Oluşturuldu",
      heroTitle1: "Her Röportajı Yazıya Dökün.",
      heroTitle2: "Tüm Verilerinizi Analiz Edin.",
      heroSubtitle: "Hangi odak gruplarının yazıya döküleceğini seçmeyi bırakın. Tüm nitel verilerinizi %96 doğruluk ve kusursuz konuşmacı tanımlamasıyla işleyin; hatta 20 katılımcı birbirinin sözünü kesse bile.",
      heroCtaPrimary: "Ücretsiz Deneyin - Kredi Kartı Gerekmez",
      heroCtaSecondary: "Nasıl Çalıştığını Görün",
      statsInterviewHours: "Mülakat Saatleri",
      statsAccuracy: "Kesinlik",
      statsSpeakersId: "Konuşmacı Kimliği",
      statsCompliant: "Uyumlu",
      problemTitle: "Araştırma Transkripsiyon Problemi",
      problemSubtitle: 'Diğer hizmetler, hangi verilerin yazıya dökülmeye "değer" olduğunu seçmenizi ister',
      problemCard1Title: "Yükleme Sınırları Çalışmaları Öldürür",
      problemCard1Desc: "Otter size 3 ömür boyu içe aktarma hakkı veriyor. 200 saatlik odak gruplarını nasıl yazıya dökersiniz?",
      problemCard2Title: "Eksik Kritik Veriler",
      problemCard2Desc: "Yazıya dökülmemiş her röportaj çığır açıcı fikirler içerebilir. Ancak Rev, dakikası en az 2 dolar talep ediyor.",
      problemCard3Title: "Hibe Parası Kayboldu",
      problemCard3Desc: "Veri setiniz büyüdükçe transkripsiyon maliyetleri de artar. Odak grubu başına 500 dolar ölçeklemeyi imkansız hale getirir.",
      solutionTitle: "NeverCap Çözümü",
      solutionDesc: "Gerçek, sınırsız transkripsiyon. Tüm çalışmanızı yükleyin. Her görüşmeyi transkribe edin. Tüm verilerinizi analiz edin. Sınır yok, limit yok, sadece araştırma yapın.",
      feature1Label: "Sınır Yok",
      feature1Title: "Tüm Çalışmanızı Tek Seferde İşleyin",
      feature1Desc: 'Bu gece 200 saatlik röportajın tamamını yükleyin. Uyandığınızda eksiksiz, aranabilir transkriptlerle karşılaşacaksınız. Aylık sınır yok, dosya başına sınırlama yok, "adil kullanım" saçmalığı yok.',
      feature1Point1: "Aynı anda 50 dosyayı toplu olarak yükleyin",
      feature1Point2: "Süreç uzunlamasına çalışmaları tamamen",
      feature1Point3: "Transkriptlerde depolama sınırı yok",
      feature1Point4: "NVivo, MAXQDA, Atlas.ti'ye aktarın",
      feature1Visual1: "Sınırsız Saatler",
      feature1Visual2: "10 veya 10.000 saat fark etmez aynı fiyat",
      feature2Label: "Akıllı Yapay Zeka",
      feature2Title: "Her Zaman Çivi Odak Grupları",
      feature2Desc: "Yapay zekamız, birbirlerinin sözünü kesen, birbirlerinin sözünü kesen veya aynı anda söz alan 20 konuşmacıyı takip eder. Her ses doğru şekilde yakalanır ve etiketlenir.",
      feature2Point1: "20 konuşmacı tanımlaması",
      feature2Point2: "Çapraz konuşma ve kesintileri yönetir",
      feature2Point3: "Yeniden adlandırabileceğiniz hoparlör etiketleri",
      feature2Point4: "Her kelime için zaman damgası",
      conversationParticipant1: "Katılımcı 1",
      conversationText1: "Karşılaştığımız en büyük engel ise kesinlikle tedavi maliyeti...",
      conversationParticipant2: "Katılımcı 2",
      conversationText2: "Kesinlikle, ama şunu da eklemeliyim ki erişim—",
      conversationParticipant3: "Katılımcı 3",
      conversationText3: "—Sözünüzü kestiğim için özür dilerim ama ulaşım da çok önemli.",
      conversationText4: "Evet! Tam da bunu söyleyecektim.",
      conversationParticipant4: "Katılımcı 4",
      conversationText5: "Kırsal kesimlerde üçü de önemli: maliyet, erişim VE ulaşım.",
      feature3Label: "Kesinlik",
      feature3Title: "%96 Doğruluk Oranı Devam Ediyor",
      feature3Desc: "Teknik jargonu, kalın vurguları ve alana özgü terminolojiyi bir profesyonel gibi ele alır. Yayın, hakem değerlendirmesi ve tez komiteniz için yeterince doğrudur.",
      feature3Point1: "Tıbbi ve bilimsel terminoloji",
      feature3Point2: "100'den fazla dil ve lehçe",
      feature3Point3: "Kelimesi kelimesine ve temiz okuma modları",
      feature3Point4: "Herhangi bir formatta düzenleyin ve dışa aktarın",
      feature3Visual1: "Araştırma Düzeyinde Doğruluk",
      feature3Visual2: "50.000'den fazla araştırmacının güvendiği",
      feature4Label: "Güvenlik",
      feature4Title: "IRB'ye Hazır Güvenlik",
      feature4Desc: "Hassas araştırma verileriniz kurumsal düzeyde güvenlikle korunmaktadır. GDPR uyumlu, HIPAA'ya hazır seçenekler ve IRB gereklilikleri için eksiksiz denetim izleri.",
      feature4Point1: "Uçtan uca şifreleme",
      feature4Point2: "GDPR ve CCPA uyumlu",
      feature4Point3: "Otomatik silme politikaları",
      feature4Point4: "Güvenli ekip işbirliği",
      useCasesTitle: "Her Araştırma Yöntemi için Mükemmel",
      useCasesSubtitle: "Etnografyadan klinik deneylere",
      useCase1Title: "Odak Grupları",
      useCase1Desc: "Çakışan konuşmalara sahip 8-20 katılımcıyla çalışın. Hararetli tartışmalarda bile konuşmacıyı mükemmel bir şekilde tanımlayın. Doğrudan nitel analiz yazılımına aktarın.",
      useCase2Title: "Derinlemesine Görüşmeler",
      useCase2Desc: "Yüzlerce bire bir görüşmeyi aynı anda işleyin. Tüm veri setinizde tutarlılığı koruyun. Tüm transkriptlerde anında arama yapın.",
      useCase3Title: "Klinik Araştırma",
      useCase3Desc: "Hasta görüşmeleri için HIPAA uyumlu seçenekler. Doğru tıbbi terminoloji transkripsiyonu. Hassas sağlık verilerinin güvenli bir şekilde işlenmesi.",
      useCase4Title: "Etnografik Çalışmalar",
      useCase4Desc: "Doğal ortamlarda saha kayıtları. Arka plan gürültüsünü ve birden fazla konuşmacıyı yönetin. 100'den fazla dil ve lehçeyi destekleyin.",
      useCase5Title: "Sözlü Tarih Projeleri",
      useCase5Desc: "Tüm arşivleri sınırsız bir şekilde koruyun. Aranabilir tarihsel kayıtlar oluşturun. Boylamsal ve kuşaksal çalışmalar için mükemmel.",
      useCase6Title: "Tez Araştırması",
      useCase6Desc: "Tüm özelliklere sahip öğrenci dostu fiyatlandırma. Tüm veri setinizi uygun fiyatlarla işleyin. Toplu işlemle sıkı teslim tarihlerine uyun.",
      testimonialTitle: "Önde Gelen Araştırmacılar Tarafından Güvenilen",
      testimonialText: "Araştırma ekibimiz, toplum sağlığı çalışmamızdan 200 saatlik odak grup kaydına sahipti. Diğer hizmetler, maliyet nedeniyle hangi oturumların yazıya döküleceğini seçmemizi istedi. NeverCap her şeyi bir hafta sonu boyunca işlememize izin verdi. 20 konuşmacı tanımlaması, herkesin aynı anda konuştuğu en karmaşık tartışmalarımızda bile gerçekten işe yaradı. Bu araç, nitel verileri işleme şeklimizi tamamen değiştirdi.",
      testimonialAuthorName: "Dr. Sarah Chen",
      testimonialAuthorRole: "Baş Araştırmacı, Halk Sağlığı Enstitüsü",
      ctaTitle: "Hangi Verilerin Analiz Edileceğini Seçmeyi Bırakın",
      ctaSubtitle: "Her şeyi kaydeden 50.000'den fazla araştırmacıya katılın",
      ctaButton: "NeverCap Ücretsiz deneyin"
    },
    BusinessTeams: {
      heroBadge: "İş Ekipleri İçin",
      heroTitle1: "Toplantı Kaydı Yapıldı",
      heroTitle2: "Zahmetsiz",
      heroSubtitle: "Toplantıları doğrudan tarayıcınızda kaydedin veya ses dosyalarını anında yükleyin. Sınırsız konuşmalardan aranabilir arşivler oluşturun. Gerçekten sınırsız transkripsiyonla önemli görüşmeleri bir daha asla kaybetmeyin.",
      heroCtaPrimary: "Şimdi Kayda Başla →",
      heroCtaSecondary: "Nasıl Çalıştığını Görün",
      recordingStatus: "Kayıt...",
      statsMeetingMinutes: "Toplantı Tutanakları",
      statsLiveRecording: "Canlı Kayıt",
      statsSpeakerID: "Konuşmacı Kimliği",
      statsInstantUpload: "Anında Yükleme ve İşlem",
      featuresTitle: "Ekiplerin Bilgiyi Yakalamak İçin İhtiyaç Duyduğu Her Şey",
      featuresSubtitle: "Canlı kayıttan anında yüklemelere kadar her türlü sürtünme noktasını ortadan kaldırdık",
      feature1Title: "Doğrudan Tarayıcınızda Kaydedin",
      feature1Desc: "İndirme yok, eklenti yok. Tek tıklamayla anında kayda başlayın. Mükemmel ses kalitesi, otomatik konuşmacı algılama ve konuşurken gerçek zamanlı transkripsiyon.",
      feature1Benefit1: "Tek tıklamayla kayıt başlatma",
      feature1Benefit2: "Yazılım kurulumu yok",
      feature1Benefit3: "Herhangi bir cihazda çalışır",
      feature1Benefit4: "Gerçek zamanlı transkripsiyon",
      feature1Visual1: "Tıkla ve Kaydet",
      feature1Visual2: "Kurulum gerekmez",
      feature2Title: "Herhangi Bir Ses Dosyasını Anında Yükleyin",
      feature2Desc: "Zoom, Teams veya telefonunuzdan kayıtlarınız mı var? Anında yükleyin. Tüm önemli ses ve video formatlarını destekler. Birden fazla dosyayı beklemeden aynı anda işleyin.",
      feature2Benefit1: "Destekler: MP3, MP4, M4A, MOV, AAC, WAV, OGG, OPUS, MPEG, WMA, WMV, FLAC",
      feature2Benefit2: "Toplu yükleme yeteneği",
      feature2Benefit3: "10 saatlik dosyalar destekleniyor",
      feature2Benefit4: "Çalışırken işlem yapın",
      feature2Visual1: "Dosyaları Sürükle ve Bırak",
      feature3Title: "Ekip Çalışması İçin Tasarlandı",
      feature3Desc: "Transkriptleri anında ekibinizle paylaşın. Kayıtları birlikte dinleyin, transkriptleri birden fazla formatta dışa aktarın ve herkesin aranabilir toplantı arşivleriyle uyumlu kalmasını sağlayın.",
      feature3Benefit1: "Transkriptleri herkesle paylaşın",
      feature3Benefit2: "Orijinal kayıtları dinleyin",
      feature3Benefit3: "Transkriptleri birden fazla formatta dışa aktarın",
      feature3Benefit4: "Ekip çapında aranabilir arşivler",
      feature3Visual1: "Ekip Üyeleri",
      feature3Visual2: "Sınırsız işbirliği",
      feature4Title: "Herhangi Bir Konuşmayı Anında Bulun",
      feature4Desc: "Tüm toplantılarınızda aynı anda arama yapın. Geçtiğimiz çeyrekteki kritik kararı veya aylar önceki müşteri ihtiyacını bulun. Yapay zeka destekli arama, yalnızca anahtar kelimeleri değil, bağlamı da anlar.",
      feature4Benefit1: "Tüm toplantıları aynı anda arayın",
      feature4Benefit2: "Yapay zeka bağlamı anlıyor",
      feature4Benefit3: "Konuşmacıya veya tarihe göre filtrele",
      feature4SearchPlaceholder: "🔍 Ara: '4. çeyrek gelir hedefleri'",
      feature4SearchResults: "3 toplantıda bulundu:",
      feature4Meeting1: "Satış Planlaması - 15 Ekim",
      feature4Meeting1Text: '"...4. çeyrek hedefleri 2 milyon dolar olarak belirlendi..."',
      feature4Meeting2: "Yönetim Kurulu Toplantısı - 20 Ekim",
      feature4Meeting2Text: '"...4. çeyrek gelir projeksiyonları..."',
      workflowTitle: "Kayıttan Eyleme Dönüştürülebilir İçgörülere",
      workflowSubtitle: "Her önemli anı yakalayan kusursuz bir iş akışı",
      workflowStep1Title: "Kaydet veya Yükle",
      workflowStep1Desc: "Canlı kayıt yapmaya başlayın veya mevcut ses dosyalarını yükleyin",
      workflowStep2Title: "Otomatik Transkript",
      workflowStep2Desc: "Yapay zeka dakikalar içinde %96 doğrulukla yazıya döküyor",
      workflowStep3Title: "İşbirliği yapın",
      workflowStep3Desc: "Eylem öğelerini paylaşın, yorum yapın ve ayıklayın",
      workflowStep4Title: "Ara ve Analiz Et",
      workflowStep4Desc: "Tüm toplantılarınızda içgörüler bulun",
      testimonialsTitle: "Takımlar Aşk NeverCap",
      testimonialsSubtitle: "İşletmelerin toplantı kültürlerini nasıl dönüştürdüklerini görün",
      testimonial1Text: '"Önemli ayrıntıları kaçırmaktan, her konuşmanın aranabilir bir arşivine sahip olmaya geçtik. Doğrudan kayıt özelliği sayesinde önemli tartışmaları kaydetmeyi asla unutmuyoruz."',
      testimonial1AuthorName: "James Kim",
      testimonial1AuthorRole: "Ürün Yöneticisi, TechCorp",
      testimonial2Text: '"Otter, ayda 10 dosya yüklemeyle bizi sınırlamıştı. Artık tüm müşteri çağrılarımızı anında yüklüyoruz. Satış ekibimizin takip süreçlerinde çığır açan bir gelişme."',
      testimonial2AuthorName: "Sarah Rodriguez",
      testimonial2AuthorRole: "Satış Direktörü, ConsultPro",
      testimonial3Text: '"Aylar süren toplantılar arasında arama yapabilme özelliği, denetimimiz sırasında bizi kurtardı. Her kararı ve onayı saniyeler içinde bulduk."',
      testimonial3AuthorName: "Mark Liu",
      testimonial3AuthorRole: "COO, FinanceHub",
      ctaTitle: "Önemli Konuşmaları Kaybetmeyi Bırakın",
      ctaSubtitle: "Her toplantıyı sınırsız transkripsiyonla kaydeden binlerce ekibe katılın",
      ctaButton: "Ücretsiz Kayıt Yapmaya Başlayın →"
    },
    Educators: {
      heroBadge: "Eğitimciler ve Öğretmenler İçin",
      heroTitle1: "Herhangi Bir Eğitim Videosunu Şuna Dönüştürün",
      heroTitle2: "Erişilebilir İçerik",
      heroSubtitle: "Otomatik olarak oluşturulan altyazılarla anında transkript almak için YouTube bağlantılarını yapıştırmanız yeterli. Dersleri, öğretici videoları ve eğitim videolarını, her öğrencinin öğrenebileceği, aranabilir ve erişilebilir içeriklere dönüştürün.",
      heroCtaPrimary: "Ücretsiz Deneyin - Kredi Kartı Gerekmez",
      heroCtaSecondary: "Demoyu İzle",
      stats1Number: "1-Tıkla",
      stats1Label: "YouTube Transkripsiyonu",
      stats2Number: "100+",
      stats2Label: "Desteklenen Diller",
      stats3Number: "∞",
      stats3Label: "Sınırsız Videolar",
      stats4Number: "%96",
      stats4Label: "Doğruluk Oranı",
      featuresTitle: "Eğitimcilerin Video Transkripsiyonu İçin İhtiyaç Duyduğu Her Şey",
      featuresSubtitle: "YouTube derslerinden kayıtlı derslere kadar tüm içeriğinizi erişilebilir hale getirin",
      feature1Title: "Anında YouTube ve Platform Bağlantıları",
      feature1Desc: "Herhangi bir video bağlantısını yapıştırın ve anında transkript alın. YouTube, Vimeo, Facebook, X (Twitter), TikTok, Instagram, Dropbox, Google Drive ve daha fazlasıyla çalışır. İndirmeye gerek yok, beklemeye gerek yok.",
      feature1Point1: "Doğrudan bağlantı transkripsiyonu - indirmeye gerek yok",
      feature1Point2: "Tüm büyük platformlar için destek",
      feature1Point3: "Tüm çalma listelerini aynı anda işleyin",
      feature1Point4: "Özel videolarla çalışır (izinle)",
      feature2Title: "Otomatik Altyazı ve Altyazı Oluşturma",
      feature2Desc: "Tüm eğitim videolarınız için anında doğru altyazılar oluşturun. İçeriği, işitme engelli öğrenciler, ana dili İngilizce olmayanlar veya birlikte okumayı tercih edenler için erişilebilir hale getirin.",
      feature2Point1: "SRT, VTT ve TXT dışa aktarma biçimleri",
      feature2Point2: "Mükemmel senkronizasyon için kelime düzeyinde zaman damgaları",
      feature2Point3: "Altyazıları kolayca düzenleyin ve özelleştirin",
      feature2Point4: "Doğrudan YouTube'a geri yükleyin",
      feature2Visual1: "Dil Çevirileri",
      feature2Visual2: "İçeriğinizi küresel olarak erişilebilir hale getirin",
      feature3Title: "Kurslara ve Kategorilere Göre Düzenle",
      feature3Desc: "Transkriptlerinizi ders, konu veya döneme göre düzenlemek için klasörler oluşturun. Tüm eğitim içeriklerinizi düzenli bir şekilde kategorilere ayırın ve kolayca aranabilir hale getirin. Erişilebilir ders materyallerinden oluşan kapsamlı bir kütüphane oluşturun.",
      feature3Point1: "Sınırsız klasör ve alt klasör oluşturun",
      feature3Point2: "Videoları konuya veya zorluk seviyesine göre etiketleyin",
      feature3Point3: "Birden fazla transkripti toplu olarak düzenleyin",
      feature3Point4: "Tüm içeriklerinizde anında arama yapın",
      feature3VisualTitle: "Ders Kütüphaneniz",
      feature3Folder1: "Matematik 101",
      feature3Folder2: "Fizik Dersleri",
      feature3Folder3: "Biyoloji Laboratuvar Videoları",
      feature3Folder4: "Tarih Belgeselleri",
      feature3Folder5: "Dil Öğrenme",
      feature4Title: "İhtiyacınız Olan Herhangi Bir Formatta Dışa Aktarın",
      feature4Desc: "Transkriptleri TXT, DOCX veya PDF formatlarında indirin. Çalışma kılavuzları, ders notları veya erişilebilir ders materyalleri oluşturmak için mükemmeldir. Öğrencilerinizle paylaşın veya öğrenme yönetim sisteminize entegre edin.",
      feature4Point1: "Basit metin düzenleme için TXT",
      feature4Point2: "Biçimlendirilmiş belgeler için DOCX",
      feature4Point3: "Kolay paylaşım ve yazdırma için PDF",
      feature4Point4: "Birden fazla dosyayı aynı anda toplu olarak dışa aktarın",
      workflowTitle: "Nasıl Çalışır?",
      workflowSubtitle: "Dakikalar içinde video bağlantısından erişilebilir metne",
      workflowStep1Title: "Bağlantıyı Yapıştır",
      workflowStep1Desc: "Herhangi bir eğitim videosu URL'sini kopyalayıp yapıştırın",
      workflowStep2Title: "Otomatik Transkript",
      workflowStep2Desc: "Yapay zeka %96 doğrulukla yazıya döküyor",
      workflowStep3Title: "Altyazı Oluştur",
      workflowStep3Desc: "Mükemmel şekilde senkronize edilmiş altyazıları otomatik olarak oluşturun",
      workflowStep4Title: "Paylaş ve Dışa Aktar",
      workflowStep4Desc: "Öğrencilerle indirin veya paylaşın",
      useCasesTitle: "Her Eğitim İhtiyacı İçin Mükemmel",
      useCasesSubtitle: "Eğitimcilerin öğrenmeyi geliştirmek için NeverCap'i nasıl kullandıklarını görün",
      useCase1Title: "Kaydedilmiş Dersler",
      useCase1Text: "Kaydedilen derslerin tüm dönemlerini yazıya dökün. Öğrenciler belirli konuları arayabilir, temel kavramları gözden geçirebilir ve önemli bilgileri asla kaçırmayabilir.",
      useCase2Title: "Çevrimiçi Kurslar",
      useCase2Text: "Çevrimiçi kurslarınızı 100'den fazla dilde çevirilerle uluslararası öğrenciler için erişilebilir hale getirin. Kayıt ve memnuniyeti artırın.",
      useCase3Title: "Çalışma Materyalleri",
      useCase3Text: "Video eğitimlerini okunabilir çalışma kılavuzlarına dönüştürün. Okumayı tercih eden veya içeriği hızlıca gözden geçirmesi gereken öğrenciler için idealdir.",
      useCase4Title: "Erişilebilirlik Uyumluluğu",
      useCase4Text: "Tüm video içerikleri için altyazı ve transkript sağlayarak erişilebilirlik gerekliliklerini karşılayın. Tüm öğrenciler için eşit erişim sağlayın.",
      useCase5Title: "Tersine Çevrilmiş Sınıf",
      useCase5Text: "Ders öncesinde video derslerinizi transkriptleriyle birlikte paylaşın. Öğrenciler kendi hızlarında tekrar edebilir ve tartışmalara hazırlıklı gelebilirler.",
      useCase6Title: "Araştırma ve Atıflar",
      useCase6Text: "Öğrencilerin video kaynaklarını zaman damgalarıyla doğru bir şekilde alıntılamalarına yardımcı olun. Araştırma projeleri ve akademik makaleler için idealdir.",
      testimonialTitle: "50.000'den fazla eğitimci tarafından güveniliyor",
      testimonialSubtitle: "Dünya çapındaki öğretmenlerin neden NeverCap'i seçtiğini görün",
      testimonialText: '"Matematik derslerimden oluşan YouTube kanalımın tamamını metne dökmek için NeverCap kullanıyorum. Diğer hizmetlerle haftalar süren işlemler artık saatler sürüyor. Bağlantıları doğrudan yapıştırıp anında metinlere ulaşabilme özelliği, erişilebilir içerik oluşturma biçimimi değiştirdi. Özellikle uluslararası öğrencilerim çok dilli altyazıları çok seviyor!"',
      testimonialAuthorName: "Prof. Karen Mitchell",
      testimonialAuthorRole: "Matematik Profesörü, Çevrimiçi Eğitimci",
      ctaTitle: "Tüm Eğitim İçeriğinizi Erişilebilir Hale Getirin",
      ctaSubtitle: "Gerçekten sınırsız transkripsiyonu kullanan binlerce eğitimciye katılın",
      ctaButton: "NeverCap Ücretsiz deneyin"
    }
  },
  Resources: {
    YouTubeToMP4: {
      part1: {
        "title": "YouTube Videolarını MP4 Olarak İndirin",
        "placeholder": "Youtube bağlantınızı buraya arayın veya yapıştırın",
        "clear_icon": "Temiz giriş",
        "Download": "İndirmek",
        "loading_text": "İndirme bağlantısı işleniyor. Sayfada kalın.",
        "howToDownload": "Nasıl indirilir?",
        "tutorial": "Eğitimi izleyin"
      },
      part2: {
        "title": "İşte bir YouTube videosunu 3 kolay adımda indirilebilir bir MP4 dosyasına dönüştürmenin yolu",
        "steps": [
          {
            title: "URL'yi kopyalayın",
            content: "Hedef YouTube videonuzu açın, ardından tarayıcınızın adres çubuğundan bağlantıyı kopyalayın."
          },
          {
            title: "Bağlantıyı yapıştırın",
            content: "Video indirme aracınıza gidin ve URL'yi giriş alanına yapıştırın."
          },
          {
            title: "MP4'ü indirin",
            content: "İşlendikten sonra MP4 dosyanızı kaydetmek için indirme düğmesine basın."
          }
        ]
      },
      part3: {
        content: [
          "Hiç YouTube videolarını çevrimdışı izleme ihtiyacı hissettiniz mi?",
          "İster metroda işe gidip gelin, ister uçakta uçun, ister önemli bir eğitim videosu izleyin, ister beceri geliştirici içeriklere derinlemesine dalın veya önemli video materyallerini arşivleyin, güvenilir çevrimdışı erişim yaygın bir sorundur. İşte indiricimizin öne çıktığı nokta tam da burası.",
          "İndirici, YouTube videolarını hızlı ve kolay bir şekilde MP4 formatına dönüştürüp indirmenize olanak tanır. Bunları cihazınıza kaydedin ve istediğiniz zaman izleyin.",
          "İşlem hızlı, basit ve zahmetsizdir. İndirdikten sonra, en sevdiğiniz videoların keyfini istediğiniz zaman, istediğiniz yerde çıkarın; internet bağlantısına gerek yok."
        ]
      },
      part4: {
        content: ["İşte indirmenin 5 önemli faydası", "YouTube videoları MP4 dosyaları olarak"],
        list: [
          {
            title: "Veri Maliyetlerinden Tasarruf Edin:",
            content: "Normalde YouTube'da video izlemek önemli miktarda mobil veri tüketir. Çevrimdışı izlemek için indirerek bu gereksiz maliyetlerden kaçınabilirsiniz."
          },
          {
            title: "Her Yerde, Her Zaman İzleyin:",
            content: "İnternet bağlantınız zayıf olsa bile videolarınızın keyfini kesintisiz çıkarın. Artık ara belleğe alma endişesi yok."
          },
          {
            title: "Kolay Arşivleme ve Saklama:",
            content: "Videoları MP4 olarak kaydetmek, özellikle gerçekten değerli veya önemli bulduğunuz içerikler için kişisel koleksiyonunuzu oluşturmanızı kolaylaştırır."
          },
          {
            title: "Daha Basit Paylaşım:",
            content: "Bir MP4 dosyasını paylaşmak, bağlantı göndermekten çok daha kullanışlıdır. Video dosyasını doğrudan WhatsApp veya Instagram gibi uygulamalar aracılığıyla gönderebilir, YouTube'u açma gibi ekstra bir adıma gerek kalmadan paylaşabilirsiniz."
          },
          {
            title: "Anında Görüntüleme, Paylaşılan Anlar:",
            content: "Sevdiğiniz bir videoyu heyecanla yakınınızdaki arkadaşlarınıza veya ailenize mi göstermek istiyorsunuz? MP4 dosyasını indirdikten sonra, yüklenmesini beklerken garip duraklamalar yaşamadan, hep birlikte hemen izleyebilirsiniz."
          }
        ]
      },
      part5: {
        title: "İndiricimiz Neden Öne Çıkıyor?",
        cards: [
          {
            title: "Tek tıklamayla basitlik",
            content: "Zahmetsiz kurulum ve sezgisel kullanım."
          },
          {
            title: "Yıldırım hızında, sınırsız",
            content: "En yüksek hızda dönüştürün ve indirin; sınır yok, limit yok."
          },
          {
            title: "Anında dönüştürün",
            content: "Dosyalarınızı anında işleyin, beklemenize gerek yok."
          },
          {
            title: "Sıfır Reklam, Sıfır Dikkat Dağıtıcı",
            content: "Hiçbir açılır pencere, afiş veya kesinti olmadan temiz bir arayüzün keyfini çıkarın; yalnızca kusursuz video dönüştürme."
          },
          {
            icon: "5",
            color: "#DEE5FF",
            title: "Orijinal Kalite Garantili",
            content: "İndirdiğiniz videolar her seferinde piksel mükemmelliğinde oynatım için kaynak videonun tam çözünürlüğünü korur."
          },
          {
            icon: "6",
            color: "#DEF6EE",
            title: "Her yerde çalışır",
            content: "Herhangi bir tarayıcıyla, herhangi bir cihazla tam uyumludur."
          }
        ]
      },
      part6: {
        title: ["YouTube Video İndirmelerinizi Maksimize Edin", "İndirici ile"],
        content: [
          "Zahmetsiz YouTube'dan MP4'e Dönüştürme: Hızlı, Basit ve Ücretsiz.",
          "İşte tam da bu noktada öne çıkıyoruz. Kullanıcı dostu arayüzümüz herkes için tasarlanmıştır; teknik beceri gerektirmez. Deneyim seviyeniz ne olursa olsun, videoları anında dönüştürebilirsiniz. Kayıt olmanıza gerek yok: İhtiyacınız olan her şeye anında ulaşın.",
          "İçiniz rahat olsun; indirdiğiniz MP4'ler YouTube'da izlediğiniz orijinal video kalitesini ve netliğini koruyacaktır.",
          "Her Yerde Çalışır. Tüm büyük platform ve cihazlarla tamamen uyumludur. İster Windows, macOS, Linux, Android veya iOS kullanıyor olun, ister akıllı telefon, tablet veya masaüstü bilgisayar kullanın, videoları sorunsuz bir şekilde indirebilirsiniz."
        ]
      },
      part7: {
        title: "YouTube Videolarını İndirmeye İlişkin Temel Sorular",
        list: [
          {
            question: "Telif hakkı olan bir YouTube videosunu indirebilir miyim?",
            answer: "Telif hakkıyla korunan YouTube videolarını telif hakkı sahibinin izni olmadan indirmek yasadışıdır."
          },
          {
            question: "Bu indirme aracı güvenli mi?",
            answer: "Evet, güvenli ve güvenilirdir. Kullanıcılardan hiçbir kişisel bilgi talep etmiyoruz ve virüslere karşı sıkı önlemler alıyoruz. İnternetten dosya indirirken her zaman dikkatli olmanızı hatırlatırız: Şüpheli bağlantılara tıklamaktan veya şüpheli dosyalar indirmekten kaçının."
          },
          {
            question: "YouTube'dan MP4'e indirme hangi dilleri destekliyor?",
            answer: "Hizmetimiz tüm popüler dillerdeki YouTube videolarının indirilmesini destekler."
          },
          {
            question: "Bir YouTube videosunun indirilme süresini etkileyen faktörler nelerdir?",
            answer: "Mümkün olan en hızlı indirme deneyimini sağlarken, indirme süresi videonun uzunluğu ve internet bağlantı hızınız gibi faktörlerden de etkilenir."
          },
          {
            question: "Akıllı telefonumla bir MP4 video indirdiğimde nereye kaydediliyor?"
          },
          {
            question: "YouTube videosunu MP4 olarak indirmek video kalitesini düşürür mü?",
            answer: "Hayır. YouTube videolarını aracımızı kullanarak MP4 formatında indirdiğinizde orijinal video kalitesi korunur. Dönüştürme işlemi kaynak kalitesini koruyarak YouTube'dakiyle aynı izleme deneyimini yaşamanızı sağlar."
          }
        ]
      }
    }
  },
  About: {
    Hero: {
      "badge": "🚀 Sektör Lideri Yapay Zeka Teknolojisi",
      "title": "Hakkında",
      "highlighted_text": "NeverCap",
      "description": "Misyonumuz, en doğru ses ve video transkripsiyon hizmetlerini sunmaktır. Sektör lideri yapay zeka teknolojisinden yararlanarak %96'nın üzerinde transkripsiyon doğruluk oranlarına ulaşıyoruz. Bazı önemli dillerde, teknik optimizasyon sayesinde %99 doğruluk oranına bile ulaşabiliyoruz."
    },
    Stats: {
      "title": "Bizim",
      "highlighted_text": "Darbe",
      "subtitle": "Küresel iletişimi son teknoloji yapay zeka teknolojisiyle güçlendiriyoruz",
      "metrics": [
        {
          "value": "%96+",
          "label": "Doğruluk Oranı",
          "description": "Gelişmiş yapay zeka ile sektör lideri transkripsiyon doğruluğu"
        },
        {
          "value": "100+",
          "label": "Desteklenen Diller",
          "description": "Küresel içerik için konuşulan kelime tanıma"
        },
        {
          "value": "249+",
          "label": "Çeviri Dilleri",
          "description": "Yazılı metni hemen hemen her dile çevirin"
        }
      ]
    },
    Mission: {
      "title": "Neden Seçmelisiniz?",
      "highlighted_text": "NeverCap",
      "subtitle": "Dil engellerini ortadan kaldırmaya ve içeriği herkesin erişimine açık hale getirmeye inanıyoruz",
      "features": [
        {
          "icon": "🎯",
          "title": "Eşsiz Doğruluk",
          "description": "Yapay zeka modellerimiz, %96'yı aşan transkripsiyon doğruluk oranları sunmak için sürekli olarak iyileştiriliyor; bazı önemli diller, gelişmiş optimizasyon sayesinde %99'a varan doğruluk oranlarına ulaşıyor."
        },
        {
          "icon": "🌍",
          "title": "Küresel Dil Desteği",
          "description": "Konuşulan kelime tanımada 100'den fazla dili destekler ve 249'dan fazla dil için çeviri yetenekleriyle içeriğinizi gerçek anlamda küresel hale getirir."
        },
        {
          "icon": "⚡",
          "title": "Yıldırım Hızında İşlem",
          "description": "Saatlerce süren ses ve video içeriklerini saatler değil, dakikalar içinde işleyin. Optimize edilmiş yapay zeka hattımız, kaliteden ödün vermeden transkripsiyonlarınızı hızla almanızı sağlar."
        },
        {
          "icon": "🔒",
          "title": "Kurumsal Düzeyde Güvenlik",
          "description": "Verilerinizin güvenliği bizim önceliğimizdir. İçeriğinizi güvende ve gizli tutmak için endüstri standardı şifreleme kullanıyor ve küresel gizlilik düzenlemelerine uyuyoruz."
        }
      ]
    },
    Company: {
      "title": "Şirket",
      "highlighted_text": "Bilgi",
      "subtitle": "Herhangi bir soru veya destek için bizimle iletişime geçin",
      "details": [
        {
          "label": "Firma Adı",
          "value": "SCRIBIFY AI INC"
        },
        {
          "label": "Karargah",
          "value": ["30 N Gould St Ste R", "Sheridan, WY 82801", "Amerika Birleşik Devletleri"]
        },
        {
          "label": "Bize Ulaşın",
          "value": ["e-posta", "7/24 destek mevcuttur"]
        }
      ]
    },
    CTA: {
      "title": "Farkı Yaşamaya Hazır mısınız?",
      "subtitle": "Transkripsiyon ihtiyaçları için NeverCap'e güvenen binlerce profesyonele katılın",
      "button": "NeverCap Ücretsiz Deneyin →",
      "disclaimer": "Kredi kartı gerekmez • Saniyeler içinde yazıya dökmeye başlayın"
    }
  },
  Privacy: {
    title: "Mahremiyet",
    titleGradient: "Politika",
    subtitle: "Kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu öğrenin",
    "lastUpdated": "Son güncelleme: {date}",
    "lastUpdatedDate": "21 Temmuz 2025",
    "privacyPolicyTitle": "Gizlilik Politikası",
    "policyDescription": `Bu Politika, hizmetlerimizi, web sitelerimizi (https://www.nevercap.ai/) ve yazılımlarımızı (toplu olarak "Hizmetler") kullandığınızda NeverCap'in (bundan böyle "NeverCap\", "bizim", "bizi", "bize" olarak anılacaktır) kişisel bilgilerinizi nasıl topladığını, kullandığını ve ifşa ettiğini açıklar.`,
    "policyAgreement": "Lütfen bu Gizlilik Politikasını dikkatlice okuyun ve anladığınızdan emin olun. Hizmetlerimizden herhangi birini kullanarak, bu Gizlilik Politikasını kabul etmiş olursunuz. Kişisel verilerinizin bu Politikaya uygun olarak kullanılmasını kabul etmiyorsanız, Hizmetlerimizi kullanmayı derhal bırakmalısınız.",
    "policyOverview": "Bu politikada, hangi verileri neden topladığımızı, verilerinizin nasıl işlendiğini ve verilerinizle ilgili haklarınızı açıklıyoruz. Verilerinizi satmıyoruz.",
    "scopeTitle": "1. Bu Gizlilik Politikasının Kapsamı",
    "scopeDescription": "Bu Gizlilik Politikası, yalnızca Hizmetlerin kullanıcıları hakkındaki bilgilerin toplanması ve işlenmesi için geçerlidir. Bu Gizlilik Politikası, bize bağlantı veren üçüncü taraflarca işletilen hiçbir hizmet, web sitesi veya yazılım için geçerli değildir (bu bağlantıları biz sağlasak da, diğer kullanıcılar paylaşsa da) ve üçüncü taraflara ait içerik, veri, uygulama veya materyaller için de geçerli değildir. Herhangi bir üçüncü taraf web sitesi veya yazılımına herhangi bir bilgi vermeden önce gizlilik politikalarını kontrol etmenizi tavsiye ederiz.",
    "collectionTitle": "2. Neleri topluyoruz ve neden?",
    "collectionPrinciple": "Rehber ilkemiz, yalnızca ihtiyacımız olanı toplamaktır. Bunun pratikteki anlamı şudur:",
    "identityTitle": "2.1 Kimlik ve erişim",
    "identityDescription": "Ürünlerimizden birine kaydolduğunuzda, adınız, e-posta adresiniz gibi kimlik bilgilerinizi isteriz. Bu, ürünün temel işlevlerini sağlamak ve size ürün güncellemeleri ve diğer önemli bilgileri gönderebilmemiz içindir.",
    "billingTitle": "2.2 Fatura bilgileri",
    "billingDescription": "Ücretli bir ürüne kaydolursanız, ödeme bilgilerinizi ve fatura adresinizi vermeniz istenecektir. Ödeme bilgileriniz doğrudan ödeme işlemcimize gönderilir ve sunucularımıza aktarılmaz.",
    "productInteractionsTitle": "2.3 Ürün etkileşimleri",
    "productInteractionsDescription": "Ürün hesaplarınıza yüklediğiniz, aldığınız veya muhafaza ettiğiniz içerikleri sunucularımızda saklıyoruz. Bu içeriği silmediğiniz sürece, hesabınız aktif olduğu sürece bu içeriği saklayabiliriz.",
    "websiteInteractionsTitle": "2.4 Web sitesi etkileşimleri",
    "websiteInteractionsDescription": "Dönüşüm oranı testleri ve yeni ürün tasarımları denemeleri gibi analiz ve istatistiksel amaçlarla tarama etkinliğiniz hakkında bilgi topluyoruz. Bu bilgiler arasında tarayıcınızın ve işletim sisteminizin sürümleri, IP adresiniz, ziyaret ettiğiniz web sayfaları ve bunların yüklenme süresi ve sizi bize yönlendiren web sitesi gibi bilgiler yer alır. Bir hesabınız varsa ve oturum açtıysanız, bu web analizi verileri, hesabınız aktif olmayana kadar IP adresiniz ve kullanıcı hesabınızla ilişkilendirilir.",
    "cookiesTitle": "2.5 Çerezler",
    "cookiesDescription1": "Ayrıca, belirli tercihleri saklamak, uygulamalarımızı kullanmanızı kolaylaştırmak, A/B testleri gerçekleştirmek ve bazı analizleri desteklemek için kalıcı birinci taraf çerezleri ve bazı üçüncü taraf çerezleri kullanıyoruz.",
    "cookiesDescription2": "Çerez, tarayıcınız tarafından depolanan bir metin parçasıdır. Oturum açma bilgilerinizi ve site tercihlerinizi hatırlamanıza yardımcı olabilir. Ayrıca tarayıcınızın türü, işletim sistemi, ziyaret edilen web sayfaları, ziyaret süresi, görüntülenen içerik ve diğer tıklama akışı verileri gibi bilgileri de toplayabilir. Çerez saklama ayarlarını düzenleyebilir ve tarayıcı ayarlarınızdan tek tek çerezleri kabul edebilir veya engelleyebilirsiniz. Ancak çerezleri kapatırsanız uygulamalarımız ve hizmetimizin diğer özellikleri düzgün çalışmayabilir.",
    "correspondenceTitle": "2.6 Gönüllü yazışmalar",
    "correspondenceDescription": "Bize bir soru sormak veya yardım istemek için e-posta gönderdiğinizde, e-posta adresiniz de dahil olmak üzere bu yazışmaları saklarız; böylece gelecekte bize ulaşmanız durumunda referans alabileceğimiz geçmiş yazışmaların bir geçmişine sahip oluruz.",
    "accessTitle": "3. Bilgilerinize eriştiğimizde veya bunları paylaştığımızda",
    "accessDescription1": "Talep ettiğiniz ürün veya hizmetleri sağlamak için. Uygulamalarımızı çalıştırmamıza ve Hizmetleri size sunmamıza yardımcı olmak için bazı üçüncü taraf alt işlemcilerden yararlanıyoruz. Bunlara bulut ve analiz sağlayıcıları da dahildir.",
    "accessDescription2": "Kötüye kullanımı araştırmak, önlemek veya bu konuda işlem yapmak. Olası bir kötüye kullanımı araştırırken bir müşterinin hesabına erişmek son çaredir. Hem müşterilerimizin hem de bize sorun bildiren kişilerin gizliliğini ve güvenliğini korumak istiyoruz ve süreç boyunca bu sorumlulukları dengelemek için elimizden gelenin en iyisini yapıyoruz. Ürünlerimizi kısıtlı bir amaçla kullandığınızı tespit edersek, gerekli durumlarda ilgili makamlara bildirimde bulunmak da dahil olmak üzere gerekli işlemleri yapacağız.",
    "accessDescription3": "Uygulanabilir yasa gereği gerekli olduğunda.",
    "dataRequests": "Kullanıcı verilerine ilişkin talepler. Politikamız, yasal bir süreç gerektirmediği veya acil bir talep durumunda sınırlı koşullar söz konusu olmadığı sürece, resmi makamların kullanıcı verilerine ilişkin taleplerine yanıt vermemektir. Ancak, ABD kolluk kuvvetlerinin veri paylaşmamızı gerektiren gerekli emri, cezai celbi veya mahkeme emri varsa, bu emre uymak zorundayız. Benzer şekilde, ABD dışındaki resmi makamlardan gelen taleplere, yalnızca ABD hükümeti tarafından karşılıklı hukuki yardım anlaşması veya sözleşmesinde belirtilen prosedürler uyarınca zorunlu kılınması halinde yanıt vereceğiz. Yasal olarak yasaklanmadığımız ve bazı acil durumlar haricinde, veri paylaşmadan önce etkilenen kullanıcıları bilgilendirmek politikamızdır.",
    "preservationRequests": "Saklama talepleri. Benzer şekilde, politikamız, yalnızca ABD Federal Saklanan İletişimler Yasası, 18 USC Bölüm 2703(f) veya hukuk davaları için usulüne uygun olarak tebliğ edilmiş bir ABD mahkeme celbi uyarınca zorunlu kılınması halinde veri saklama taleplerine uymaktır. Yasalarca zorunlu kılınmadıkça veya itiraz etmemeyi tercih ettiğimiz bir mahkeme kararıyla zorunlu kılınmadıkça, saklanan verileri paylaşmayız. Ayrıca, gerekli saklama süresi dolmadan önce uygun bir arama emri, mahkeme kararı veya mahkeme celbi almadığımız takdirde, saklama süresinin sonunda müşteri verilerinin saklanan tüm kopyalarını imha edeceğiz.",
    "taxAudits": "Bir vergi dairesi tarafından denetlenmemiz durumunda, faturalandırmayla ilgili bilgileri paylaşmamız gerekebilir. Bu durumda, fatura adresleri ve vergi muafiyet bilgileri gibi yalnızca gerekli olan asgari bilgileri paylaşırız.",
    "securityTitle": "4. Verilerinizi nasıl güvence altına alıyoruz?",
    "securityDescription": "Sunucularımızdan tarayıcınıza iletilen tüm veriler SSL/TLS ile şifrelenmektedir.",
    "deletionTitle": "5. İçeriğinizi sildiğinizde ne olur?",
    "deletionDescription": "Herhangi bir içeriği silerseniz, anında erişilemez hale gelecektir.",
    "locationTitle": "6. Sitenin ve verilerin konumu",
    "locationDescription": "Ürünlerimiz ve diğer web sitelerimiz Amerika Birleşik Devletleri'nde işletilmektedir. Avrupa Birliği, Birleşik Krallık veya Amerika Birleşik Devletleri dışında bir yerde bulunuyorsanız, bize sağladığınız tüm bilgilerin Amerika Birleşik Devletleri'ne aktarılacağını ve orada saklanacağını lütfen unutmayın. Web sitelerimizi veya Hizmetlerimizi kullanarak ve/veya bize kişisel bilgilerinizi vererek, bu aktarıma onay vermiş olursunuz.",
    "childrenTitle": "7. Çocukların Gizliliği",
    "childrenDescription": "Hizmetler çocuklara yönelik değildir ve 13 yaşın altındaki çocuklardan bilerek Kişisel Bilgi toplamıyoruz. 13 yaşın altındaysanız, lütfen Hizmetler aracılığıyla herhangi bir kişisel bilgi göndermeyin. Bir çocuğun bu Politikayı ihlal ederek bize Kişisel Bilgi sağladığına inanıyorsanız, lütfen aşağıda belirtildiği şekilde bizimle iletişime geçin.",
    "updatesTitle": "8. Bu Gizlilik Politikasındaki Güncellemeler",
    "updatesDescription": "İlgili düzenlemelere uyum sağlamak ve yeni uygulamaları yansıtmak için bu politikayı gerektiği gibi güncelleyebiliriz. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyeceğiz.",
    "contactTitle": "9. Bizimle İletişime Geçin",
    "contactDescription": "Gizlilik Politikamızla ilgili herhangi bir sorunuz, yorumunuz veya şikayetiniz varsa lütfen bizimle iletişime geçin; şikayetinizle en kısa sürede ilgilenmeye çalışacağız.",
    "websiteUrl": "https://www.nevercap.ai/",
    "neverCap": "NeverCap"
  },
  TermsOfUse: {
    title: "Şartları",
    titleGradient: "Hizmet",
    subtitle: "Lütfen hizmetlerimizi kullanmadan önce bu şartları dikkatlice okuyun.",
    "lastUpdated": "Son güncelleme: {date}",
    "lastUpdatedDate": "21 Temmuz 2025",
    "termsOfServiceTitle": "Hizmet Şartları",
    "thankYou": "Ürünlerimizi kullandığınız için teşekkür ederiz!",
    "companyDefinition": 'Bu belgede \"Şirket\", \"biz\", \"bizim\" veya \"bize\" ifadelerini kullandığımızda NeverCap ifadesini kastediyoruz.',
    "servicesDefinition": '\"Hizmetler\" dediğimizde, ister bir web tarayıcısı, masaüstü uygulaması, mobil uygulama veya başka bir formatta sunulsun, NeverCap tarafından oluşturulan ve sürdürülen herhangi bir ürünü kastediyoruz.',
    "termsUpdate": "Bu Hizmet Şartları'nı gelecekte güncelleyebiliriz. Bu değişiklikler genellikle, genişletilmiş ilgili bir politikaya bağlantı vererek bu şartlardan bazılarını açıklığa kavuşturmak amacıyla yapılmıştır. Politikalarımızda önemli bir değişiklik yaptığımızda, bu sayfanın üst kısmındaki tarihi yenileyecek ve hesap sahiplerini bilgilendirmek için diğer uygun adımları atacağız.",
    "acceptanceTitle": "1. Sözleşmenin Kabulü",
    "acceptanceDescription1": "Hizmetlerimizi kullanarak, bu Sözleşme'yi kabul ettiğinizi beyan etmiş olursunuz ve bu Sözleşme, sizinle NeverCap arasında bağlayıcı bir sözleşme haline gelir. Bu Şartları yasal olarak kabul etme yetkisine sahip olduğunuzu beyan eder ve bağlayıcı bir sözleşme yapmak için yasal yaşta olduğunuzu onaylarsınız. NeverCap'in kabulü, bu Sözleşme'nin tüm hüküm ve koşullarını kabul etmenize açıkça bağlıdır.",
    "eligibilityRequirement": "Hizmetler, 18 yaşın altındaki kişiler için tasarlanmamıştır ve bu kişiler tarafından kullanılmamalıdır. Hizmetleri kullanarak, yukarıda belirtilen uygunluk şartlarını karşıladığınızı beyan ve garanti edersiniz.",
    "userResponsibility": `"Siz", "sizin", "kendiniz" terimleri, çalışanlarınızı, temsilcilerinizi, iş temsilcilerinizi ve Hesabınız (aşağıda tanımlandığı şekilde) aracılığıyla Hizmetlere erişim sağladığınız diğer kişileri de kapsar. Hesabınız aracılığıyla Hizmetlere erişen tüm kişilerin bu Şartlar'dan haberdar olmasını ve bunlara uymasını sağlamak sizin sorumluluğunuzdadır.`,
    "termsRevision": "NeverCap, bu Şartları kendi takdirine bağlı olarak zaman zaman revize etme ve güncelleme hakkını saklı tutar. Tüm değişiklikler yayınlandığı anda yürürlüğe girer. Revize edilen Şartların yayınlanmasının ardından Hizmetleri kullanmaya devam etmeniz, değişiklikleri kabul ettiğiniz ve onayladığınız anlamına gelir. Değişiklikler sizin için bağlayıcı olduğundan, değişikliklerden haberdar olmak için bu sayfayı zaman zaman kontrol etmeniz beklenmektedir.",
    "servicesTitle": "2. NeverCap'nin Hizmetleri",
    "servicesDescription1": "Hizmetlerimiz, kullanıcıların sesli görüşmeleri aranabilen, çevrilebilen ve başkalarıyla paylaşılabilen yazıya dökülmüş metne dönüştürmesini sağlar.",
    "servicesOptions": 'Hizmetlerin ücretsiz sürümünü ("Ücretsiz Hizmetler") veya ücret ödemeniz gerekebilecek abonelik tabanlı ücretli Hizmetlerin sürümünü ("Ücretli Hizmetler") kullanmayı seçebilirsiniz.',
    "servicesAccess": "Hizmetleri size sunacağız. Hizmetlere erişiminiz için gerekli tüm düzenlemeleri yapmaktan siz sorumlusunuz.",
    "accountTermsTitle": "3. Hesap Şartları",
    "accountSecurity": "Hesabınızın güvenliğini sağlamak sizin sorumluluğunuzdadır. Şirket, bu güvenlik yükümlülüğüne uymamanızdan kaynaklanan herhangi bir kayıp veya zarardan sorumlu tutulamaz ve tutulmayacaktır.",
    "lawfulUse": "Hizmetleri herhangi bir hukuka aykırı, etik olmayan veya ahlaka aykırı amaç için kullanamazsınız.",
    "contentResponsibility": "Hesabınız altında yayınlanan tüm içeriklerden ve gerçekleşen tüm etkinliklerden siz sorumlusunuz. Bu, (a) oturum açma bilgilerinize erişimi olan veya (b) hesabınız altında kendi oturum açma bilgilerine sahip olan başkaları tarafından yayınlanan içerikleri de kapsar.",
    "humanRequirement": 'İnsan olmanız gerekmektedir. "Botlar" veya diğer otomatik yöntemlerle hesap açılmasına izin verilmemektedir.',
    "paymentTitle": "4. Ödeme, Geri Ödemeler ve Plan Değişiklikleri",
    "freeTrial": "Ücretsiz deneme sunan ücretli Hizmetler için, kaydolduğunuzda deneme süresinin uzunluğunu açıklıyoruz. Deneme süresinden sonra, Hizmeti kullanmaya devam etmek için önceden ödeme yapmanız gerekmektedir. Ödeme yapmazsanız, bu hizmetler sona erecektir.",
    "upgradePolicy": "Ücretsiz bir plandan ücretli bir plana yükseltme yapıyorsanız, kartınızdan hemen ücret tahsil edilir ve faturalandırma döngünüz yükseltme gününde başlar.",
    "taxes": "Tüm ücretlere, vergi makamları tarafından uygulanan tüm vergi, harç veya harçlar dahil değildir. Gerektiğinde, bu vergileri vergi makamları adına tahsil edip ilgili vergi makamlarına ileteceğiz. Aksi takdirde, tüm vergi, harç veya harçların ödenmesinden siz sorumlusunuz.",
    "refunds": "Tüm satın alımlar iade edilemez. Hesabınıza giriş yaparak istediğiniz zaman ücretli hizmetleri iptal edebilirsiniz. Ücretli aboneliklerde, aksi belirtilmedikçe iptaliniz mevcut ücretli dönemin sonunda geçerli olacaktır.",
    "cancellationTitle": "5. İptal ve Fesih",
    "cancellationPolicy": "Ücretli bir sürenin bitiminden önce Hizmeti iptal ederseniz, iptaliniz derhal yürürlüğe girecek ve sizden tekrar ücret alınmayacaktır. Son fatura döneminde kullanılmayan süreyi otomatik olarak orantılı olarak bölmüyoruz.",
    "terminationRights": "Hesabınızı askıya alma veya sonlandırma ve Hizmetlerimizin mevcut veya gelecekteki tüm kullanımlarını herhangi bir zamanda, herhangi bir nedenle reddetme hakkımız saklıdır. Askıya alma, hesaba veya hesaptaki herhangi bir içeriğe erişemeyeceğiniz anlamına gelir. Sonlandırma ayrıca hesabınızın veya hesabınıza erişiminizin silinmesi ve hesabınızdaki tüm içeriğin kaybedilmesi ve vazgeçilmesiyle sonuçlanacaktır. Ayrıca, herhangi bir zamanda, herhangi bir nedenle herhangi bir kişinin Hizmetleri kullanmasını reddetme hakkımızı saklı tutuyoruz. Bu maddeyi kullanmamızın nedeni, istatistiksel olarak, Hizmetlerimizdeki yüz binlerce hesaptan en az birinin kötü niyetli bir şey yapıyor olmasıdır.",
    "abusePolicy": "Şirket çalışanına veya yöneticisine yönelik sözlü, fiziksel, yazılı veya başka türlü taciz (taciz veya misilleme tehditleri dahil) hesabın derhal feshedilmesine yol açabilir.",
    "submissionsTitle": "6. Gönderimler",
    "submissionsDescription": 'Tarafınızca Site ile ilgili olarak bize sağlanan tüm soru, yorum, öneri, fikir, geri bildirim veya diğer bilgilerin ("Gönderimler") gizli olmadığını ve münhasır mülkiyetimiz haline geleceğini kabul ve beyan edersiniz. Tüm fikri mülkiyet hakları da dahil olmak üzere münhasır haklara sahip olacağız ve bu Gönderimleri, size herhangi bir bildirimde bulunmaksızın veya tazminat ödemeden, ticari veya başka türlü herhangi bir yasal amaç için sınırsız olarak kullanma ve yayma hakkına sahip olacağız. Bu tür Gönderimler üzerindeki tüm manevi haklardan feragat ediyor ve bu tür Gönderimlerin size ait olduğunu veya bu tür Gönderimleri gönderme hakkına sahip olduğunuzu garanti ediyorsunuz. Gönderimleriniz üzerindeki herhangi bir mülkiyet hakkının iddia edilen veya fiili ihlali veya kötüye kullanımı nedeniyle bize karşı hiçbir başvuru yolu olmayacağını kabul edersiniz.',
    "uptimeTitle": "7. Çalışma Süresi ve Güvenlik",
    "serviceAvailability": 'Hizmetleri kullanımınızın tüm riski size aittir. Bu Hizmetleri "olduğu gibi" ve "mevcut olduğu şekilde" sunuyoruz. Hizmetlerimizin çoğu için hizmet seviyesi sözleşmeleri sunmuyoruz, ancak uygulamalarımızın çalışma süresini ciddiye alıyoruz.',
    "throttlingPolicy": "Bir kullanıcının etkinliğinin diğer kullanıcılar için Hizmetin istikrarını ve performansını olumsuz etkilediğinin doğrulandığı nadir durumlarda, hesap erişimini geçici olarak kısıtlama veya sınırlama hakkımızı saklı tutarız. En kritik durumlar haricinde, harekete geçmeden önce bir çözüm bulmak için sizinle iletişime geçeceğiz.",
    "dataSecurity": "Verilerinizi yedekleme, yedekleme ve şifreleme yoluyla korumak ve güvence altına almak için birçok önlem alıyoruz. Genel internet üzerinden veri iletimi için şifreleme uyguluyoruz.",
    "thirdPartyVendors": "Hizmetleri çalıştırmak için gereken donanım, yazılım, ağ, depolama ve ilgili teknolojiyi sağlamak amacıyla üçüncü taraf satıcıları ve barındırma ortaklarını kullanıyoruz.",
    "siteManagementTitle": "8. Site Yönetimi",
    "siteManagementDescription": "(1) Site'yi bu Hizmet Şartları'nın ihlalleri açısından izlemek; (2) kendi takdirimize bağlı olarak kanunu veya bu Hizmet Şartları'nı ihlal eden herkese karşı uygun yasal işlemleri başlatmak, bu tür kullanıcıları kolluk kuvvetlerine bildirmek dahil ancak bunlarla sınırlı olmamak üzere; (3) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Katkılarınızdan herhangi birini veya herhangi bir kısmını reddetmek, erişimini kısıtlamak, kullanılabilirliğini sınırlamak veya devre dışı bırakmak (teknolojik olarak mümkün olduğu ölçüde); (4) kendi takdirimize bağlı olarak ve herhangi bir sınırlama olmaksızın, Site'den aşırı boyutta olan veya sistemlerimiz için herhangi bir şekilde külfetli olan tüm dosyaları ve içeriği kaldırmak veya başka şekilde devre dışı bırakmak; ve (5) Site'yi haklarımızı ve mülkiyetimizi korumak ve Site'nin düzgün çalışmasını kolaylaştırmak için tasarlanmış bir şekilde yönetmek.",
    "copyrightTitle": "9. Telif Hakkı ve İçerik Sahipliği",
    "copyrightCompliance": "Hizmetlerde yayınlanan tüm içerikler ABD telif hakkı yasalarına uygun olmalıdır.",
    "ipRights": "Hizmetlere sağladığınız materyaller üzerinde hiçbir fikri mülkiyet hakkı iddia etmiyoruz. Yüklenen tüm materyaller size ait olmaya devam edecektir.",
    "contentModeration": "İçeriği önceden kontrol etmiyoruz, ancak Hizmet aracılığıyla sunulan herhangi bir içeriği kendi takdirimize bağlı olarak reddetme veya kaldırma hakkını saklı tutuyoruz (ancak bu bir yükümlülük değil).",
    "trademarkProtection": "Hizmetlerin adları, görünümü ve hissiyatı Şirket'e aittir. Tüm hakları saklıdır. Şirket'in açık yazılı izni olmadan HTML, CSS, JavaScript veya görsel tasarım öğelerinin hiçbir bölümünü çoğaltamaz, kopyalayamaz veya yeniden kullanamazsınız. Şirket logosunu veya herhangi bir Hizmet logosunu tanıtım amaçlı kullanmak için izin almalısınız. Logo kullanma taleplerinizi lütfen bize e-posta ile gönderin. Bu Hizmet Şartları'nı ihlal etmeniz halinde bu izni iptal etme hakkımızı saklı tutarız.",
    "prohibitedExploitation": "Şirket'in açık yazılı izni olmaksızın Hizmetlerin herhangi bir bölümünü, Hizmetlerin kullanımını veya Hizmetlere erişimi çoğaltmamayı, kopyalamamayı, satmamayı, yeniden satmamayı veya istismar etmemeyi kabul edersiniz.",
    "impersonationProhibition": "Başka bir web sitesini, Hizmetler veya Şirket ile ilişkili olduğu yönünde yanlış bir imada bulunacak şekilde değiştirmemelisiniz.",
    "dmcaPolicy": "Başkalarının fikri mülkiyet haklarına saygı duyuyoruz. Sitede veya Site aracılığıyla erişilebilen herhangi bir materyalin sahip olduğunuz veya kontrol ettiğiniz herhangi bir telif hakkını ihlal ettiğine inanıyorsanız, lütfen derhal bizimle iletişime geçin. Bildiriminizin bir kopyası, Bildirimde belirtilen materyali yayınlayan veya depolayan kişiye gönderilecektir. Bir Bildirimde önemli yanlış beyanlarda bulunmanız durumunda, yürürlükteki yasalar uyarınca tazminat ödemek zorunda kalabileceğinizi lütfen unutmayın. Bu nedenle, Sitede bulunan veya Site tarafından bağlantısı verilen materyalin telif hakkınızı ihlal ettiğinden emin değilseniz, öncelikle bir avukata başvurmayı düşünmelisiniz.",
    "prohibitedActivitiesTitle": "10. Yasaklanmış Faaliyetler",
    "generalProhibition": "Site'ye, tarafımızca kullanıma sunulma amacı dışında herhangi bir amaçla erişemez veya kullanamazsınız. Site, tarafımızca özel olarak onaylanan veya desteklenenler dışında herhangi bir ticari girişimle bağlantılı olarak kullanılamaz.",
    "userObligations": "Sitenin bir kullanıcısı olarak şunları yapmamayı kabul edersiniz:",
    "dataScraping": "Bizden yazılı izin almadan, doğrudan veya dolaylı olarak bir koleksiyon, derleme, veritabanı veya dizin oluşturmak veya derlemek amacıyla Siteden sistematik olarak veri veya diğer içerikleri almak.",
    "fraud": "Özellikle kullanıcı şifreleri gibi hassas hesap bilgilerini öğrenmeye yönelik herhangi bir girişimde bulunarak bizi ve diğer kullanıcıları kandırmayın, dolandırmayın veya yanıltmayın.",
    "securityInterference": "Sitenin güvenlikle ilgili özelliklerini, İçeriğin kullanımını veya kopyalanmasını engelleyen veya kısıtlayan veya Sitenin ve/veya Sitede bulunan İçeriğin kullanımına ilişkin sınırlamalar getiren özellikler dahil olmak üzere, devre dışı bırakmak veya başka şekillerde engellemek.",
    "defamation": "Bizim görüşümüze göre bizi ve/veya Siteyi küçük düşürmek, karalamak veya başka bir şekilde zarar vermek.",
    "harassment": "Siteden elde edilen herhangi bir bilgiyi başka bir kişiyi taciz etmek, istismar etmek veya zarar vermek amacıyla kullanmayın.",
    "supportAbuse": "Destek hizmetlerimizi uygunsuz şekilde kullanmayın veya kötüye kullanım veya uygunsuz davranışla ilgili asılsız bildirimlerde bulunmayın.",
    "legalCompliance": "Siteyi yürürlükteki herhangi bir yasa veya yönetmeliğe aykırı bir şekilde kullanmayın.",
    "framingProhibition": "Sitenin yetkisiz bir şekilde çerçevelenmesi veya Siteye bağlantı verilmesi.",
    "malware": "Sitenin herhangi bir tarafça kesintisiz kullanımını ve keyfini engelleyen veya Sitenin kullanımını, özelliklerini, işlevlerini, işletimini veya bakımını değiştiren, bozan, kesintiye uğratan, değiştiren veya bunlara müdahale eden virüsleri, Truva atlarını veya büyük harflerin aşırı kullanımı ve spam (tekrarlayan metinlerin sürekli olarak gönderilmesi) gibi diğer materyalleri yüklemek veya iletmek (veya yüklemeye veya iletmeye çalışmak).",
    "automation": "Yorum veya mesaj göndermek için komut dosyaları kullanmak veya veri madenciliği, robotlar veya benzeri veri toplama ve çıkarma araçlarını kullanmak gibi sistemin herhangi bir otomatik kullanımına girişmeyin.",
    "copyrightRemoval": "Herhangi bir İçerikten telif hakkı veya diğer mülkiyet hakları bildirimini silin.",
    "impersonation": "Başka bir kullanıcıyı veya kişiyi taklit etmeye veya başka bir kullanıcının kullanıcı adını kullanmaya çalışmak.",
    "spyware": 'Pasif veya aktif bilgi toplama veya iletim mekanizması olarak işlev gören herhangi bir materyali yüklemek veya iletmek (veya yüklemeyi veya iletmeyi denemek) yasaktır. Bunlara, net grafik değişim biçimleri ("gifler"), 1x1 pikseller, web böcekleri, çerezler veya diğer benzer aygıtlar (bazen "casus yazılım" veya "pasif toplama mekanizmaları" veya "pcms" olarak anılır) dahildir ancak bunlarla sınırlı değildir.',
    "disruption": "Siteye veya Siteye bağlı ağlara veya hizmetlere müdahale etmek, bunları bozmak veya bunlar üzerinde gereksiz bir yük oluşturmak.",
    "employeeHarassment": "Sitenin herhangi bir bölümünü size sağlamakla görevli çalışanlarımızı veya temsilcilerimizi taciz etmek, rahatsız etmek, korkutmak veya tehdit etmek.",
    "accessCircumvention": "Siteye veya Sitenin herhangi bir bölümüne erişimi engellemek veya kısıtlamak amacıyla tasarlanmış Sitenin herhangi bir önlemini aşmaya çalışmak.",
    "codeCopying": "Flash, PHP, HTML, JavaScript veya diğer kodlar dahil ancak bunlarla sınırlı olmamak üzere Sitenin yazılımını kopyalamak veya uyarlamak.",
    "reverseEngineering": "Uygulanabilir kanunların izin verdiği durumlar haricinde, Sitenin bir parçasını oluşturan veya herhangi bir şekilde oluşturan yazılımların hiçbirini deşifre etmek, derlemesini açmak, parçalarına ayırmak veya tersine mühendislik uygulamak yasaktır.",
    "bots": "Standart arama motoru veya İnternet tarayıcısı kullanımının sonucu olabilecek durumlar dışında, Siteye erişen herhangi bir örümcek, robot, hile aracı, kazıyıcı veya çevrimdışı okuyucu dahil ancak bunlarla sınırlı olmamak üzere herhangi bir otomatik sistemi kullanmak, başlatmak, geliştirmek veya dağıtmak veya yetkisiz herhangi bir betik veya başka bir yazılımı kullanmak veya başlatmak.",
    "buyingAgents": "Site üzerinden alışveriş yapmak için bir satın alma temsilcisi veya satın alma acentesi kullanın.",
    "unauthorizedUse": "İstenmeyen e-posta göndermek amacıyla elektronik veya başka yollarla kullanıcıların kullanıcı adlarını ve/veya e-posta adreslerini toplamak veya otomatik yollarla veya sahte beyanlarla kullanıcı hesapları oluşturmak dahil olmak üzere Sitenin yetkisiz kullanımını gerçekleştirmek.",
    "competition": "Siteyi bizimle rekabet etme çabasının bir parçası olarak kullanmayın veya Siteyi ve/veya İçeriği herhangi bir gelir getirici çaba veya ticari girişim için kullanmayın.",
    "advertising": "Siteyi mal ve hizmetlerin reklamını yapmak veya satışını teklif etmek için kullanın.",
    "profileTransfer": "Profilinizi satamaz veya başka bir şekilde devredemezsiniz.",
    "featuresTitle": "11. Özellikler ve Hatalar",
    "featuresDescription": "Hizmetlerimizi, kendi deneyimlerimize ve zamanlarını ve geri bildirimlerini paylaşan müşterilerimizin deneyimlerine dayanarak özenle tasarlıyoruz. Ancak, herkesi memnun edecek bir hizmet diye bir şey yoktur. Hizmetlerimizin özel ihtiyaçlarınızı veya beklentilerinizi karşılayacağının garantisini vermiyoruz.",
    "bugsDescription": "Ayrıca, tüm özelliklerimizi göndermeden önce test ediyoruz. Her yazılımda olduğu gibi, Hizmetlerimizde de kaçınılmaz olarak bazı hatalar bulunur. Bize bildirilen hataları takip ediyor ve özellikle güvenlik veya gizlilikle ilgili olanları çözüyoruz. Bildirilen tüm hatalar düzeltilmeyecek ve Hizmetlerin tamamen hatasız olacağını garanti etmiyoruz.",
    "correctionsTitle": "12. Düzeltmeler",
    "informationAccuracy": "Sitede, açıklamalar, fiyatlandırma, bulunabilirlik ve diğer çeşitli bilgiler dahil olmak üzere tipografik hatalar, yanlışlıklar veya eksiklikler içeren bilgiler bulunabilir. Herhangi bir hatayı, yanlışlığı veya eksikliği düzeltme ve Sitedeki bilgileri önceden haber vermeksizin herhangi bir zamanda değiştirme veya güncelleme hakkımızı saklı tutarız.",
    "siteAvailability": "Sitenin her zaman erişilebilir olacağını garanti edemeyiz. Site ile ilgili donanım, yazılım veya başka sorunlar yaşayabilir veya bakım yapmamız gerekebilir; bu da kesintilere, gecikmelere veya hatalara neden olabilir. Siteyi herhangi bir zamanda ve herhangi bir nedenle size bildirimde bulunmaksızın değiştirme, revize etme, güncelleme, askıya alma, durdurma veya başka şekilde değiştirme hakkını saklı tutarız. Sitenin herhangi bir kesintisi veya durdurulması sırasında Siteye erişememeniz veya Siteyi kullanamamanız nedeniyle oluşabilecek herhangi bir kayıp, hasar veya rahatsızlıktan hiçbir şekilde sorumlu olmadığımızı kabul edersiniz. Bu Hizmet Şartları'ndaki hiçbir hüküm, Siteyi sürdürme ve destekleme veya bununla bağlantılı herhangi bir düzeltme, güncelleme veya sürüm sağlama yükümlülüğümüz olduğu şeklinde yorumlanmayacaktır.",
    "userDataTitle": "13. Kullanıcı Verileri",
    "userDataDescription": "Site'nin performansını yönetmek amacıyla Site'ye ilettiğiniz belirli verileri ve Site kullanımınızla ilgili verileri saklayacağız. Düzenli olarak rutin veri yedeklemeleri yapıyor olsak da, ilettiğiniz veya Site'yi kullanarak gerçekleştirdiğiniz herhangi bir faaliyetle ilgili tüm verilerden yalnızca siz sorumlusunuz. Bu tür verilerin kaybolması veya bozulması durumunda size karşı hiçbir sorumluluğumuz olmayacağını kabul ediyor ve bu tür verilerin kaybolması veya bozulmasından kaynaklanan her türlü dava hakkından feragat ediyorsunuz.",
    "privacyPolicyTitle": "14. Gizlilik Politikası",
    "privacyPolicyDescription": "Veri gizliliği ve güvenliğine önem veriyoruz. Lütfen Gizlilik Politikamızı inceleyin. Siteyi kullanarak, bu Hizmet Şartları'na dahil edilen Gizlilik Politikamıza bağlı kalmayı kabul etmiş olursunuz. Sitenin Amerika Birleşik Devletleri'nde barındırıldığını lütfen unutmayın. Siteye, kişisel verilerin toplanması, kullanımı veya ifşasına ilişkin yasaların veya diğer gerekliliklerin Amerika Birleşik Devletleri'ndeki geçerli yasalardan farklı olduğu dünyanın başka bir bölgesinden erişirseniz, Siteyi kullanmaya devam etmeniz durumunda verilerinizi Amerika Birleşik Devletleri'ne aktarmış olursunuz ve verilerinizin Amerika Birleşik Devletleri'ne aktarılmasını ve orada işlenmesini kabul etmiş olursunuz.",
    "liabilityTitle": "15. Sorumluluk",
    "liabilityIntroduction": "Bu Şartlar boyunca sorumluluktan bahsediyoruz ancak hepsini tek bir bölümde toplamak gerekirse:",
    "liabilityWaiver": "Şirket'in, size veya herhangi bir üçüncü tarafa, kar, itibar, kullanım, veri veya diğer maddi olmayan kayıplar dahil ancak bunlarla sınırlı olmamak üzere, doğrudan, dolaylı, tesadüfi, kar kaybı, özel, sonuçsal, cezalandırıcı veya emsal teşkil eden zararlar için, kanunen veya hakkaniyete göre, sorumlu olmayacağını açıkça anlıyor ve kabul ediyorsunuz (Şirket'e bu tür zararların olasılığı bildirilmiş olsa bile), aşağıdakilerden kaynaklananlar: (1) Hizmetlerin kullanımı veya kullanılamaması; (2) içerik ve materyallerdeki hatalar, yanlışlıklar veya yanlışlıklar; (3) siteye erişiminiz ve siteyi kullanımınızdan kaynaklanan herhangi bir nitelikteki kişisel yaralanma veya mal hasarı; (4) Hizmetler aracılığıyla veya Hizmetlerden satın alınan veya elde edilen herhangi bir mal, veri, bilgi veya hizmetten veya alınan mesajlardan veya girilen işlemlerden kaynaklanan ikame mal ve hizmetlerin tedarik maliyeti; (5) güvenli sunucularımıza ve/veya bunlarda saklanan tüm kişisel bilgilere ve/veya finansal bilgilere yetkisiz erişim veya bunların kullanımı; (6) siteye veya siteden yapılan iletimde herhangi bir kesinti veya durma; (7) herhangi bir üçüncü tarafça siteye veya site aracılığıyla iletilebilecek herhangi bir hata, virüs, truva atı veya benzeri ve/veya; (8) herhangi bir içerik ve materyaldeki herhangi bir hata veya eksiklik veya site aracılığıyla gönderilen, iletilen veya başka bir şekilde kullanıma sunulan herhangi bir içeriğin kullanımı sonucu ortaya çıkan herhangi bir kayıp veya hasar; (9) hizmetteki herhangi bir üçüncü tarafın beyanları veya davranışları; (10) veya bu Hizmet Şartları veya Hizmetlerle ilgili herhangi bir başka husus, sözleşme ihlali, haksız fiil (aktif veya pasif ihmal dahil) veya herhangi bir başka sorumluluk teorisi olsun.",
    "miscellaneousTitle": "16. Çeşitli",
    "miscellaneousDescription": "Bu Hizmet Şartları ve Site'de veya Site ile ilgili olarak tarafımızca yayınlanan tüm politikalar veya işletme kuralları, sizinle aramızdaki tüm sözleşmeyi ve anlayışı oluşturur. Bu Hizmet Şartları'nın herhangi bir hakkını veya hükmünü kullanmamamız veya uygulamamamız, söz konusu hak veya hükümden feragat ettiğimiz anlamına gelmez. Bu Hizmet Şartları, kanunen izin verilen en geniş kapsamda geçerlidir. Hak ve yükümlülüklerimizin bir kısmını veya tamamını herhangi bir zamanda başkalarına devredebiliriz. Makul kontrolümüz dışındaki herhangi bir nedenden kaynaklanan herhangi bir kayıp, hasar, gecikme veya eylemsizlikten sorumlu veya yükümlü olmayacağız. Bu Hizmet Şartları'nın herhangi bir hükmünün veya hükmünün bir kısmının hukuka aykırı, geçersiz veya uygulanamaz olduğu tespit edilirse, söz konusu hüküm veya hükmün bir kısmı bu Hizmet Şartları'ndan ayrılabilir kabul edilir ve kalan hükümlerin geçerliliğini ve uygulanabilirliğini etkilemez. Bu Hizmet Şartları veya Site'nin kullanımı sonucunda sizinle aramızda herhangi bir ortak girişim, ortaklık, istihdam veya temsilcilik ilişkisi oluşmaz. Bu Hizmet Şartları'nın, bunları hazırlamış olmamız nedeniyle aleyhimize yorumlanmayacağını kabul edersiniz. Bu Hizmet Şartları'nın elektronik biçimine ve tarafların bu Hizmet Şartları'nı yürürlüğe koymak için imzalamamış olmalarına dayalı olarak sahip olabileceğiniz tüm savunmalardan feragat ediyorsunuz.",
    "contactTitle": "17. Bizimle İletişime Geçin",
    "contactDescription": "Hizmet Şartları'ndan herhangi biriyle ilgili bir sorunuz varsa lütfen bizimle iletişime geçin.",
    "neverCap": "NeverCap",
    "site": "Alan",
    "services": "Hizmetler"
  }
};

export default defineI18nLocale(async (locale) => {
  return message;
});

export { message };
