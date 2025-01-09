// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Şehir verilerini tanımlayalım
const cityData = {
    'TR67': { name: 'Zonguldak', region: 'Karadeniz',
        dishes: ['Zonguldak Pidesi', 'Karadeniz Hamsisi', 'Devrek Bastonu', 'Çaycuma Manda Yoğurdu'],
        districts: ['Merkez', 'Kozlu', 'Kilimli', 'Çaycuma', 'Devrek', 'Gökçebey', 'Karadeniz Ereğli'],
        places: ['Gökgöl Mağarası', 'Cehennemağzı Mağaraları', 'Karadeniz Ereğli Plajları', 'Devrek Bastoncular Çarşısı']
    },
    'TR10': { name: 'Balıkesir', region: 'Marmara',
        dishes: ['Höşmerim', 'Susurluk Tostu', 'Balıkesir Kaymaklısı', 'Peynirli Pide'],
        districts: ['Altıeylül', 'Ayvalık', 'Bandırma', 'Bigadiç', 'Burhaniye', 'Edremit', 'Gönen'],
        places: ['Cunda Adası', 'Şeytan Sofrası', 'Kuş Cenneti', 'Kaz Dağları']
    },
    'TR35': { name: 'İzmir', region: 'Ege',
        dishes: ['İzmir Köfte', 'Boyoz', 'Kumru', 'Şambali', 'İzmir Lokması', 'Midye Dolma'],
        districts: ['Konak', 'Karşıyaka', 'Bornova', 'Çeşme', 'Foça', 'Bergama', 'Selçuk', 'Urla', 'Alsancak'],
        places: ['Saat Kulesi', 'Kemeraltı Çarşısı', 'Efes Antik Kenti', 'Asansör', 'Kordon', 'Kızlarağası Hanı', 'Agora']
    },
    'TR09': { name: 'Aydın', region: 'Ege',
        dishes: ['İncir', 'Pide', 'Keşkek', 'Çöp Şiş', 'Aydın Köftesi'],
        districts: ['Efeler', 'Kuşadası', 'Didim', 'Söke', 'Nazilli', 'Germencik'],
        places: ['Kuşadası Limanı', 'Dilek Yarımadası', 'Afrodisias Antik Kenti', 'Zeus Mağarası']
    },
    'TR48': { name: 'Muğla', region: 'Ege',
        dishes: ['Muğla Köftesi', 'Çökertme Kebabı', 'Börek', 'Keşkek', 'Muğla Saraylısı'],
        districts: ['Bodrum', 'Marmaris', 'Fethiye', 'Datça', 'Köyceğiz', 'Milas', 'Dalaman'],
        places: ['Bodrum Kalesi', 'Ölüdeniz', 'Kelebekler Vadisi', 'Saklıkent Kanyonu', 'Dalyan Kaya Mezarları']
    },
    'TR07': { name: 'Antalya', region: 'Akdeniz',
        dishes: ['Piyaz', 'Serpme Börek', 'Şiş Köfte', 'Hibeş', 'Tahinli Piyaz'],
        districts: ['Muratpaşa', 'Konyaaltı', 'Kepez', 'Alanya', 'Manavgat', 'Side', 'Kaş', 'Kalkan'],
        places: ['Kaleiçi', 'Düden Şelalesi', 'Aspendos', 'Olympos', 'Phaselis Antik Kenti']
    },
    'TR33': { name: 'Mersin', region: 'Akdeniz',
        dishes: ['Tantuni', 'Cezerye', 'Kerebiç', 'Batırık', 'Künefe'],
        districts: ['Akdeniz', 'Mezitli', 'Yenişehir', 'Tarsus', 'Silifke', 'Erdemli'],
        places: ['Kızkalesi', 'Cennet-Cehennem Mağaraları', 'Tarsus Antik Kenti', 'Narlıkuyu']
    },
    'TR01': { name: 'Adana', region: 'Akdeniz',
        dishes: ['Adana Kebap', 'Şırdan', 'Analı Kızlı', 'Bici Bici', 'Şalgam'],
        districts: ['Seyhan', 'Çukurova', 'Yüreğir', 'Sarıçam', 'Karaisalı', 'Ceyhan'],
        places: ['Taşköprü', 'Sabancı Merkez Camii', 'Varda Köprüsü', 'Kapıkaya Kanyonu']
    },
    'TR14': { name: 'Bolu', region: 'Karadeniz',
        dishes: ['Bolu Mengen Pilavı', 'Kızılcık Tarhanası', 'Patatesli Köy Ekmeği', 'Bolu Kızılcık Şerbeti'],
        districts: ['Merkez', 'Gerede', 'Mengen', 'Göynük', 'Mudurnu', 'Seben'],
        places: ['Abant Gölü', 'Yedigöller Milli Parkı', 'Gölcük Tabiat Parkı', 'Kartalkaya Kayak Merkezi']
    },
    'TR06': { name: 'Ankara', region: 'İç Anadolu',
        dishes: ['Ankara Tava', 'Kızılcık Tarhanası', 'Beypazarı Kurusu', 'İçli Köfte'],
        districts: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan'],
        places: ['Anıtkabir', 'Kocatepe Camii', 'Ankara Kalesi', 'TBMM']
    },
    'TR11': { name: 'Bilecik', region: 'Marmara',
        dishes: ['Pazaryeri Helvası', 'Bozüyük Baklavası', 'Osmanlı Şerbeti', 'Met Helvası'],
        districts: ['Merkez', 'Bozüyük', 'Osmaneli', 'Pazaryeri', 'Söğüt', 'Gölpazarı'],
        places: ['Şeyh Edebali Türbesi', 'Ertuğrul Gazi Türbesi', 'Osmanlı Padişahları Müzesi', 'Harmankaya Kanyonu']
    },
    'TR26': { name: 'Eskişehir', region: 'İç Anadolu',
        dishes: ['Çibörek', 'Met Helvası', 'Balaban Kebab', 'Haşhaşlı Çörek'],
        districts: ['Tepebaşı', 'Odunpazarı', 'Sivrihisar', 'Çifteler', 'Mahmudiye'],
        places: ['Porsuk Çayı', 'Odunpazarı Evleri', 'Sazova Parkı', 'Kurşunlu Camii ve Külliyesi']
    },
    'TR18': { name: 'Çankırı', region: 'İç Anadolu',
        dishes: ['Çankırı Sarması', 'Yumurta Tatlısı', 'Kesme Çorba', 'Tutmaç'],
        districts: ['Merkez', 'Ilgaz', 'Kurşunlu', 'Çerkeş', 'Yapraklı', 'Orta'],
        places: ['Ilgaz Dağı Milli Parkı', 'Tuz Mağarası', 'Taş Mescit', 'Çankırı Kalesi']
    },
    'TR78': { name: 'Karabük', region: 'Karadeniz',
        dishes: ['Etli Ekmek', 'Haluşka', 'Banduma', 'Karabük Böreği'],
        districts: ['Merkez', 'Safranbolu', 'Yenice', 'Eskipazar', 'Eflani', 'Ovacık'],
        places: ['Safranbolu Evleri', 'Kristal Teras', 'Yenice Ormanları', 'Hadrianoupolis Antik Kenti']
    },
    'TR60': { name: 'Tokat', region: 'Karadeniz',
        dishes: ['Tokat Kebabı', 'Bat', 'Tokat Yaprağı', 'Keşkek', 'Madımak'],
        districts: ['Merkez', 'Erbaa', 'Niksar', 'Turhal', 'Zile', 'Reşadiye'],
        places: ['Ballıca Mağarası', 'Tokat Kalesi', 'Saat Kulesi', 'Ali Paşa Camii']
    },
    'TR58': { name: 'Sivas', region: 'İç Anadolu',
        dishes: ['Sivas Köftesi', 'Peskütan Çorbası', 'Madımak', 'Hingel'],
        districts: ['Merkez', 'Şarkışla', 'Yıldızeli', 'Suşehri', 'Zara', 'Divriği'],
        places: ['Divriği Ulu Camii', 'Gök Medrese', 'Çifte Minareli Medrese', 'Kangal Balıklı Çermik']
    },
    'TR19': { name: 'Çorum', region: 'Karadeniz',
        dishes: ['Çorum Leblebisi', 'İskilip Dolması', 'Kara Çuval Helvası', 'Madımak'],
        districts: ['Merkez', 'İskilip', 'Sungurlu', 'Osmancık', 'Alaca', 'Bayat'],
        places: ['Hattuşaş Antik Kenti', 'Alacahöyük', 'İskilip Kaya Mezarları', 'Osmancık Kalesi']
    },
    'TR05': { name: 'Amasya', region: 'Karadeniz',
        dishes: ['Amasya Çöreği', 'Keşkek', 'Bakla Dolması', 'Amasya Elması'],
        districts: ['Merkez', 'Merzifon', 'Suluova', 'Taşova', 'Gümüşhacıköy'],
        places: ['Kral Kaya Mezarları', 'Yalıboyu Evleri', 'Amasya Kalesi', 'Ferhat ile Şirin']
    },
    'TR43': { name: 'Kütahya', region: 'Ege',
        dishes: ['Kütahya Çinisi', 'Kütahya Köftesi', 'Cimcik Çorbası', 'Göbete'],
        districts: ['Merkez', 'Tavşanlı', 'Simav', 'Gediz', 'Emet', 'Altıntaş'],
        places: ['Aizanoi Antik Kenti', 'Kütahya Kalesi', 'Çini Müzesi', 'Frig Vadisi']
    },
    'TR42': { name: 'Konya', region: 'İç Anadolu',
        dishes: ['Etli Ekmek', 'Mevlana Böreği', 'Fırın Kebabı', 'Bamya Çorbası'],
        districts: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
        places: ['Mevlana Müzesi', 'Alaeddin Tepesi', 'Çatalhöyük', 'Sille']
    },
    'TR70': { name: 'Karaman', region: 'İç Anadolu',
        dishes: ['Karaman Güveci', 'Batırık', 'Arabaşı', 'Zerde'],
        districts: ['Merkez', 'Ermenek', 'Sarıveliler', 'Ayrancı', 'Kazımkarabekir'],
        places: ['Karaman Kalesi', 'Hatuniye Medresesi', 'Taşkale', 'Manazan Mağaraları']
    }
};

// Harita etkileşimlerini yönetelim
document.addEventListener('DOMContentLoaded', function() {
    const map = document.getElementById('turkey-map');
    const tooltip = document.getElementById('city-tooltip');

    map.addEventListener('load', function() {
        const svgDoc = map.contentDocument;
        const paths = svgDoc.getElementsByTagName('path');
        const circles = svgDoc.getElementsByTagName('circle');

        // Tüm şehir isimlerini düzelt
        for (let cityId in cityData) {
            const path = svgDoc.querySelector(`path[id="${cityId}"]`);
            const circle = svgDoc.querySelector(`circle[id="${cityId}"]`);
            
            if (path) {
                path.setAttribute('name', cityData[cityId].name);
            }
            if (circle) {
                circle.setAttribute('class', cityData[cityId].name);
            }
        }

        // Path elementleri için event listener'ları ekle
        for (let path of paths) {
            const cityId = path.getAttribute('id');
            const cityInfo = cityData[cityId];

            if (cityInfo) {
                path.addEventListener('mouseover', function(e) {
                    showTooltip(e, cityInfo.name);
                });

                path.addEventListener('mouseout', function() {
                    hideTooltip();
                });

                path.addEventListener('click', function() {
                    showCityInfo(cityInfo);
                });
            }
        }

        // Circle elementleri için event listener'ları ekle
        for (let circle of circles) {
            const cityId = circle.getAttribute('id');
            const cityInfo = cityData[cityId];

            if (cityInfo) {
                circle.addEventListener('mouseover', function(e) {
                    showTooltip(e, cityInfo.name);
                });

                circle.addEventListener('mouseout', function() {
                    hideTooltip();
                });

                circle.addEventListener('click', function() {
                    showCityInfo(cityInfo);
                });
            }
        }
    });
});

// Tooltip fonksiyonları
function showTooltip(event, cityName) {
    const tooltip = document.getElementById('city-tooltip');
    tooltip.textContent = cityName;
    tooltip.style.display = 'block';
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY + 10 + 'px';
}

function hideTooltip() {
    const tooltip = document.getElementById('city-tooltip');
    tooltip.style.display = 'none';
}

// Şehir bilgilerini gösterme fonksiyonu
function showCityInfo(cityInfo) {
    if (!cityInfo) return;

    try {
        // Şehir adını güncelle
        document.querySelectorAll('.selected-city-name').forEach(el => {
            el.textContent = cityInfo.name || 'Bilinmeyen Şehir';
        });

        // Yemekleri göster
        const dishes = Array.isArray(cityInfo.dishes) ? cityInfo.dishes : ['Veri girilecek'];
        document.getElementById('cityDishes').innerHTML = dishes.map(dish => 
            `<div class="info-item">${dish}</div>`
        ).join('');
        
        // İlçeleri göster
        const districts = Array.isArray(cityInfo.districts) ? cityInfo.districts : ['Veri girilecek'];
        document.getElementById('cityDistricts').innerHTML = districts.map(district => 
            `<div class="info-item">${district}</div>`
        ).join('');
        
        // Gezilecek yerleri göster
        const places = Array.isArray(cityInfo.places) ? cityInfo.places : ['Veri girilecek'];
        document.getElementById('cityPlaces').innerHTML = places.map(place => 
            `<div class="info-item">${place}</div>`
        ).join('');

        // Modalı göster
        const visitModal = new bootstrap.Modal(document.getElementById('visitModal'));
        visitModal.show();
    } catch (error) {
        console.error('Şehir bilgileri gösterilirken bir hata oluştu:', error);
    }
}
