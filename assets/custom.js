var hello = function() {
    var my = this;
    this.translations = [
        { lang: "English", hello: "Hello" },
        { lang: "French", hello: "Salut" },
        { lang: "German", hello: "Guten Tag"},
        { lang: "Japanese", hello: "こんにちは"},
        { lang: "Afrikaans", hello: "Hallo" },
        { lang: "Albanian", hello: "Përshëndetje" },
        { lang: "Arabic", hello: "مرحبا"},
        { lang: "Armenian", hello: "Բարեւ Ձեզ"},
        { lang: "Azerbaijani", hello: "Salam"},
        { lang: "Basque", hello: "Kaixo"},
        { lang: "Belarusian", hello: "прывітанне"},
        { lang: "Bengali", hello: "হ্যালো" },
        { lang: "Bosnian", hello: "Halo" },
        { lang: "Bulgarian", hello: "Здравейте" },
        { lang: "Catalan", hello: "Hola" },
        { lang: "Cebuano", hello: "Hello" },
        { lang: "Chinese", hello: "你好" },
        { lang: "Croatian", hello: "Zdravo" },
        { lang: "Czech", hello: "Ahoj" },
        { lang: "Danish", hello: "Hej" },
        { lang: "Dutch", hello: "Hallo" },
        { lang: "Esperanto", hello: "Saluton"},
        { lang: "Estonian", hello: "Tere" },
        { lang: "Filipino", hello: "Kumusta" },
        { lang: "Finnish", hello: "Hei" },
        { lang: "Galician", hello: "Ola" },
        { lang: "Georgian", hello: "კომენტარი პირველმა"},
        { lang: "Greek", hello: "Γεια σας" },
        { lang: "Gujurati", hello: "હેલ્લો"},
        { lang: "Haitian Creole", hello: "Alo"},
        { lang: "Hebrew", hello: "שלום"},
        { lang: "Hindi", hello: "नमस्ते"},
        { lang: "Hmong", hello: "Nyob zoo"},
        { lang: "Hungarian", hello: "Szia"},
        { lang: "Icelandic", hello: "Halló"},
        { lang: "Indonesian", hello: "Halo"},
        { lang: "Irish", hello: "Dia duit"},
        { lang: "Italian", hello: "Ciao"},
        { lang: "Javanese", hello: "Hello"},
        { lang: "Kannada", hello: "ಹಲೋ"},
        { lang: "Khmer", hello: "ជំរាបសួរ"},
        { lang: "Korean", hello: "안녕하세요"},
        { lang: "Lao", hello: "ສະບາຍດີ"},
        { lang: "Latin", hello: "Salve"},
        { lang: "Latvian", hello: "Sveiki"},
        { lang: "Lithuanian", hello: "Sveiki"},
        { lang: "Macedonian", hello: "Здраво"},
        { lang: "Malay", hello: "Hello"},
        { lang: "Maltese", hello: "Bonjour"},
        { lang: "Marathi", hello: "हॅलो"},
        { lang: "Norweigan", hello: "Hallo"},
        { lang: "Persian", hello: "سلام"},
        { lang: "Polish", hello: "Cześć"},
        { lang: "Portuguese", hello: "Olá"},
        { lang: "Romanian", hello: "Alo"},
        { lang: "Russian", hello: "привет"},
        { lang: "Serbian", hello: "здраво"},
        { lang: "Slovak", hello: "Ahoj"},
        { lang: "Slovenian", hello: "Pozdravi"},
        { lang: "Spanish", hello: "Hola"},
        { lang: "Swahili", hello: "Hujambo"},
        { lang: "Swedish", hello: "Hallå"},
        { lang: "Tamil", hello: "ஹலோ"},
        { lang: "Telugu", hello: "దూరంగా ఉండేవారిని పిలుచుటకు వాడే ఓ శబ్ధ విశేషము"},
        { lang: "Thai", hello: "สวัสดี"},
        { lang: "Turkish", hello: "Merhaba"},
        { lang: "Ukranian", hello: "привіт"},
        { lang: "Urdu", hello: "خوش"},
        { lang: "Vietnamese", hello: "chào"},
        { lang: "Welsh", hello: "Hello"},
        { lang: "Yiddish", hello: "העלא"}


    ];

    this.current = 0;

    this.doHello = function () {
        do {
            var lang = Math.floor(Math.random() * my.translations.length);
        } while(lang == my.current);
        $("#hero").html(my.translations[lang].hello + "!");
        $("#language").html(my.translations[lang].lang);
        my.current = lang;
    };
};

$( function () {
    var t = new hello();
    t.doHello();
    $("#another").click(t.doHello);

});