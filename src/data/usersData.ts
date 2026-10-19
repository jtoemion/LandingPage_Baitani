export interface PortalUser {
  id: string;
  no_whatsapp: string;
  pin_hash: string;
  nama: string;
  role: 'Gembala' | 'Sekretariat' | 'Guru' | 'Jemaat';
  kelas_asuhan: string;
  is_active: boolean;
  last_login: string;
}

export const USERS_MASTER: PortalUser[] = [
  {
    "id": "USR-0001",
    "no_whatsapp": "081285343823",
    "pin_hash": "14b7ebf2d9924e620847ffb5ec9e46a1e0d28b248e2f95e44c5df76e7450e3af",
    "nama": "Agri Aldiaz Tarigan (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0002",
    "no_whatsapp": "087760533736",
    "pin_hash": "8ad4a0e09135a4cb37b9cff3dd9137e820c4f91af94785fd5f910c2c0b5b1e02",
    "nama": "Aurora Katlyn Kuncoro (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0003",
    "no_whatsapp": "08953350145438",
    "pin_hash": "fee6a62cf5e79e142ddc166092e2bcfb50156cb42f82b617071bc7d50701cceb",
    "nama": "Latisha Charis Silaban (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0004",
    "no_whatsapp": "081320989723",
    "pin_hash": "216d8c7d867aad67f3797c20d16636d6bd5a2a015f2f0364d8bf4be744ea4e7c",
    "nama": "Shine Chrystalene Tirta (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0005",
    "no_whatsapp": "089663203922",
    "pin_hash": "ce2f4676914dc82ef95dfd99e41bd20e22fcf0fc3bb6fc78118aa4ee07b7020e",
    "nama": "Pricilia Putri Yolandi",
    "role": "Guru",
    "kelas_asuhan": "Asuhan (0-3 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0006",
    "no_whatsapp": "083818211898",
    "pin_hash": "5455cad9f9c8437c796f503a7f87bbee4b60670b68b35d58e8f68147af659845",
    "nama": "Ibu Merla Saputra",
    "role": "Guru",
    "kelas_asuhan": "Asuhan (0-3 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0007",
    "no_whatsapp": "082310626968",
    "pin_hash": "f78a6101be9ab1957f018308909460ba8de780bafa68aed5f0539d1f5b7afb62",
    "nama": "Yessy Susanto",
    "role": "Sekretariat",
    "kelas_asuhan": "Asuhan (0-3 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0008",
    "no_whatsapp": "081214582962",
    "pin_hash": "649d4f78dd5c905a797dacf49f30927dbd7466deea784e0e63bdbc2e5d389493",
    "nama": "Axel Danilla Susilo (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0009",
    "no_whatsapp": "0895383003550",
    "pin_hash": "694271be0380ea03161629a9c50df357c6925328b884625db706c89a63575c7b",
    "nama": "Benneth Evander Samuel (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0010",
    "no_whatsapp": "081286865343",
    "pin_hash": "e2a573f2180b50f5051a0ef45544cc6e488279425d966a7beb20e6f1d5f96b65",
    "nama": "Clarissa Elvira Liu (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0011",
    "no_whatsapp": "085861626295",
    "pin_hash": "d008453a2144a247e5f9bdec9f49db742a5d0d5ab1762cba4aabde961ac0d334",
    "nama": "Doretta Serenity Xaviera (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0012",
    "no_whatsapp": "085793000093",
    "pin_hash": "2a9b2a4c4b91630c2db3610cc3b12d5ed6be91f1effc9bc5ce6e45fd003ca293",
    "nama": "Josie Eleanor Kristiawan (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0013",
    "no_whatsapp": "089682777255",
    "pin_hash": "12508f05d6d766d9028610b059a5f86b9d19e76cc52a46a0f053ffe353b9d183",
    "nama": "Luke Manuel Firmansyah (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0014",
    "no_whatsapp": "08111118328",
    "pin_hash": "d570e1e80daabf3cc64fd17b827beb21d4b5e93d296e02a8576b9a57fc1779b8",
    "nama": "Wilhelmina Rylie Areyta (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0015",
    "no_whatsapp": "082210154946",
    "pin_hash": "6a8b4f104cac08b63a03406a27b915cd9ca059e2d22d57333cd4363fea8cfcf4",
    "nama": "Cheren Masria Kristiana",
    "role": "Guru",
    "kelas_asuhan": "Indria (4-6 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0016",
    "no_whatsapp": "08967080739",
    "pin_hash": "c9f8c42f23f0aae6fd31b254df26ac640d3b8bfeb8b4092e5a6f33ae38c03bbe",
    "nama": "Ibu Sandrawati",
    "role": "Guru",
    "kelas_asuhan": "Indria (4-6 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0017",
    "no_whatsapp": "085762177399",
    "pin_hash": "54b51346abe222f90d6fcf1e903f6ef07c390233f139304758d721cf7f56bc78",
    "nama": "Ibu Theresia Avillia Lisan",
    "role": "Guru",
    "kelas_asuhan": "Indria (4-6 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0018",
    "no_whatsapp": "089530008811",
    "pin_hash": "54b51346abe222f90d6fcf1e903f6ef07c390233f139304758d721cf7f56bc78",
    "nama": "Bp. Natanael Trihari P",
    "role": "Guru",
    "kelas_asuhan": "Indria (4-6 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0019",
    "no_whatsapp": "0881024954099",
    "pin_hash": "4aab8fdbecda5509780bebde243f4c5b4b08a7d096a9c858321674ff2dc2bd14",
    "nama": "Clarissa Syfra Aloi Barutu (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0020",
    "no_whatsapp": "08111179719",
    "pin_hash": "f196204b537fd3cabe14e16fd4454c92411bf34952215221e5fad41e20b522ca",
    "nama": "Emelyn Gianna Poenjoel (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0021",
    "no_whatsapp": "081212417385",
    "pin_hash": "e68316fe7e06f104589c745ebafa2d5747b22992df059190a171987447ad82f5",
    "nama": "Hosea Obaja (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0022",
    "no_whatsapp": "08987818666",
    "pin_hash": "83449127c9715b8aff185dfec5a0b244660b9d164c66210a52f2f73cec0a7e3f",
    "nama": "Joseph Daniel Kusuma (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0023",
    "no_whatsapp": "085863775494",
    "pin_hash": "c869cec20b9c4e50884cbc692368bd6d6954fc683785f3b42e1a921dbe91a177",
    "nama": "Leonal Calvin Nenobais (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0024",
    "no_whatsapp": "085280464642",
    "pin_hash": "4c83cc4b48fe97436ac86aeee4c74f87ad3d2d7399fd37a9eb69f6e1711bfe4a",
    "nama": "Leonard Louis Christian (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0025",
    "no_whatsapp": "085800010387",
    "pin_hash": "1a7e2a772bdce6e444d273b3ec669e1ab58c66cfa6230955efa7db1a3bde5d9d",
    "nama": "Markis Leniran Seo (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0026",
    "no_whatsapp": "089657525058",
    "pin_hash": "60df3b8733f99d63ea7b991a196fa60f41be5bfe18245fae1dc1ba388f3a692e",
    "nama": "Laudia Siwalette (Lily)",
    "role": "Guru",
    "kelas_asuhan": "Gabungan Pratama (7-9 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0027",
    "no_whatsapp": "085860341158",
    "pin_hash": "1e087afa72cf5a7c92f7c14e7192cae482316e379a55e87c65fc946fbc764ff5",
    "nama": "Ibu Susi Mulyani Suganda",
    "role": "Guru",
    "kelas_asuhan": "Gabungan Pratama (7-9 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0028",
    "no_whatsapp": "085793469874",
    "pin_hash": "cfacc51d1dc6908cd611b5713a64707c06f2ed589ea4fe00e1035612505483a8",
    "nama": "Audrey Nathania Anielri (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0029",
    "no_whatsapp": "085217782372",
    "pin_hash": "651d888b0e91d4f776e9575dd4ee70da85fb134a074611d76240f3b39491a5f7",
    "nama": "Feodora Lois Latupeirissa (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0030",
    "no_whatsapp": "085798252950",
    "pin_hash": "9d6c6c7e3dbab713c23589894bb6b6df2d926a9b0c7648b360dcf12ba778e0d7",
    "nama": "Kaira Emanuela Sahusilawane (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0031",
    "no_whatsapp": "085794695810",
    "pin_hash": "ce67967c23c1b5475e933698468566ea31d375d2428eac9e144768885c230250",
    "nama": "Sofa Murani (Keluarga)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0032",
    "no_whatsapp": "08111179708",
    "pin_hash": "66d144dfc3c84d7d31192e2fcdf85aa7540dfadf5dabb3615011f25ab436869f",
    "nama": "Mexy Juliana Tambunan",
    "role": "Guru",
    "kelas_asuhan": "Madya (10-12 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0033",
    "no_whatsapp": "081805880580",
    "pin_hash": "d6a4071ad848ecaffd5f4a4721d5051503cfb7aa0ce61dcb5c0337f5b7d45ac6",
    "nama": "Anzhela Beatrice Maxiana",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0034",
    "no_whatsapp": "0858072123822",
    "pin_hash": "3a1494fb7832f9cfe8b7b8b968f23bb7860fc3015dafe1cdf2012da29d4e82b8",
    "nama": "Abbygail Ericka Sugandi",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0035",
    "no_whatsapp": "082320005152",
    "pin_hash": "c26430b473c3607e6c4b3bada365a5079932ecd00edb30f4e21feb5ebd12ca98",
    "nama": "Dylan Alvaro NG",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0036",
    "no_whatsapp": "085793910157",
    "pin_hash": "675cba1c1f31fcf7d7b73335ea25e60d3f6257bdbd69364af7359a77700ecdd9",
    "nama": "Ethan Erick Sugandi",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0037",
    "no_whatsapp": "081399928749",
    "pin_hash": "a5f0c8de06443b8a21587f9ee4ceadcc9a1de16c98357f06a1560f5e534a6124",
    "nama": "Farel Boniran Simbolon",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0038",
    "no_whatsapp": "089652530052",
    "pin_hash": "194a1231fd94480276ee66a1f105921768de1ac8549f758462268ad1b0c9f41d",
    "nama": "Felice Virginia Sonic",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0039",
    "no_whatsapp": "0858469346722",
    "pin_hash": "3e189b122ea336e2ada3bc28de52cd07758942b5bf927cf3346db15624181e4a",
    "nama": "Kevin Marcelianes Taufik",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0040",
    "no_whatsapp": "085126358264",
    "pin_hash": "0fbe18a1b8b9308a5a092dc18ac7252208e88b409014fdcba0132b063d19d740",
    "nama": "Khatleen Angela Angela Gabriela Tan",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0041",
    "no_whatsapp": "088976654008",
    "pin_hash": "1ccfdfcb2fd11dfa12c1dd22f06ded25b196f95a640846fd1acd72e150236458",
    "nama": "Nathalia Destiana Nenobais",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0042",
    "no_whatsapp": "085156126184",
    "pin_hash": "f2964d9bf8b83796c610585649da66bca95d7c75f163125cc2894fabf3eedea6",
    "nama": "Seina Alicia audrey",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0043",
    "no_whatsapp": "085311470571",
    "pin_hash": "bfa3bb39bb52935d5496e955c9244d01f3d2cb169f4c22162c9f97791e3e21d1",
    "nama": "Theona Louisa Christina",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0044",
    "no_whatsapp": "085624102712",
    "pin_hash": "18d327d53c3b062b025ed5453613533f39ecf83fe3c602652f68badf6ea06701",
    "nama": "Tristan Imanuel Sahusilawane",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0045",
    "no_whatsapp": "089655256057",
    "pin_hash": "8257c132326a17166a86268fb0c7a0f5080c5b509493afcbc644a5a406fdf225",
    "nama": "Ibu Fung jie",
    "role": "Guru",
    "kelas_asuhan": "Tunas Muda (13-15 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0046",
    "no_whatsapp": "08978881642",
    "pin_hash": "f85dc73dc97c2840998e792bc8a427e50e420ee28549bb45a94d6f819d6fc9a4",
    "nama": "Albert Nathanael Wijaya",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0047",
    "no_whatsapp": "089679380013",
    "pin_hash": "aaaa2725e3412b82ae1406915e046af20f3063f92961b90307ec9f462a1cbf22",
    "nama": "Alvario Tanu Santoso (Rio)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0048",
    "no_whatsapp": "081374734471",
    "pin_hash": "14b88a1153fddcad56a3433d578978537a3e07da0626147338044e1880e0efa1",
    "nama": "Christan Renaldy",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0049",
    "no_whatsapp": "082187508318",
    "pin_hash": "8c2a1fad623caaa33065598ac005a6e4ef4e325bbd24d5d949491cd195a5e3a8",
    "nama": "Darlene Lim",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0050",
    "no_whatsapp": "089509738100",
    "pin_hash": "5c6d43bd0bc02ae1c1ef05bbf38f7f72e0c5a3a7a467fac09fb8688b2e5d8a04",
    "nama": "Delvin Julio Tanu",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0051",
    "no_whatsapp": "089518996431",
    "pin_hash": "1aed828a72c216dc98b843b1c71cc1bdf16a5943ffb0f9171a785df6ff1b6aae",
    "nama": "Owen Daniel Darmawan",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0052",
    "no_whatsapp": "0895405722112",
    "pin_hash": "fd917d983522f5f22e6ea448173f99ca6f188508ca752ed8c279b362b11b4940",
    "nama": "Regie Marchela Ponto",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0053",
    "no_whatsapp": "085783811254",
    "pin_hash": "62abb5c330bc679f0cb6c5b23bad43291000c40b6546bc33aff01cb86935fea0",
    "nama": "Yessica Naftali Susanto",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0054",
    "no_whatsapp": "081321169174",
    "pin_hash": "759360565034a1c8bb3f6dac342c81f93c371ef8a8d5f777214529f37144a9f5",
    "nama": "Ibu Febiola Sara Ardi",
    "role": "Guru",
    "kelas_asuhan": "Remaja (16-19 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0055",
    "no_whatsapp": "085723245546",
    "pin_hash": "326d8abdc55aa9b95d3ad7acabc76708e90883cba556d78975b3c788ca0e3355",
    "nama": "Amala Valencia",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0056",
    "no_whatsapp": "081346676842",
    "pin_hash": "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92",
    "nama": "Daniel Mendrofa",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0057",
    "no_whatsapp": "089501259540",
    "pin_hash": "7d2bf8ed9cadeb8354d192285cd969e092a2ec2e52d17d63014faa791e0a56f9",
    "nama": "Jason David Prasetiyanto",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0058",
    "no_whatsapp": "081318505595",
    "pin_hash": "21e0b9b3eab204fad336e61dbb4061f1ff5491e490a3f33aee802161f74364ef",
    "nama": "Luis Linus",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0059",
    "no_whatsapp": "085123675124",
    "pin_hash": "97fed852ef9b3571a039c64306842ff37a2c75b55b73567e33a646f7aa1c9026",
    "nama": "Neneng Thessa Anggun Savitri",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0060",
    "no_whatsapp": "+250783645368",
    "pin_hash": "bb1a82e6f4f755c38c378c0851a67044d4a857a7ee4143b3533b56513a2ddfb2",
    "nama": "Ngabo Tresor",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0061",
    "no_whatsapp": "085846131627",
    "pin_hash": "90769fc49ed1f14074b7a832a3fa595fa0b0a645644680380086fa09e4bccaff",
    "nama": "Raymond Owen Wijaya",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0062",
    "no_whatsapp": "085720710647",
    "pin_hash": "85d021f0a213a17bc87012aab2e28ee1e577b43ed1edc5ab1442d1b8b5d94990",
    "nama": "Reginald Alvadi",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0063",
    "no_whatsapp": "08572485299",
    "pin_hash": "8f25fd9da9fab4da714f6b752862c6601b8db001958b59e8a4a5f12a60d1e4f2",
    "nama": "Yanes Philipus Husen",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0064",
    "no_whatsapp": "081563199316",
    "pin_hash": "baf03ed7581f812a711254786c8c02a1444d336eaa43ea3bdc28a0317e2f7c34",
    "nama": "Bp. Daniel Dean Darmawan",
    "role": "Guru",
    "kelas_asuhan": "Pemuda (20-29 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0065",
    "no_whatsapp": "089512002700",
    "pin_hash": "ac8d893d031e86a19ee39aa36bb820b379f00fbf45990e3cd9ce728523bbe897",
    "nama": "Mery Christina Lapudooh",
    "role": "Guru",
    "kelas_asuhan": "Pemuda (20-29 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0066",
    "no_whatsapp": "085863081777",
    "pin_hash": "a5f22ede0ca7dd739759adb94d2698a5c01aa3dbcb29c5ac381f43ff7ff8a6d9",
    "nama": "Bp. Buntoro Wijaya",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0067",
    "no_whatsapp": "087880004076",
    "pin_hash": "b24a81ec562f5c94f62d73d3074e57d8ab82048b60c1be80c1c809413aa39843",
    "nama": "Bp. Nirwan Sitorus",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0068",
    "no_whatsapp": "0815793910183",
    "pin_hash": "5a79e1817a6fca9818e7d94f41cadf9b148d201629a490ccd2c9979e0c9aebab",
    "nama": "Bp. Supijati (dr. Erick)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0069",
    "no_whatsapp": "085724646100",
    "pin_hash": "145edb4c42c47d8038621a97ca0b8db6966021de46f7b2b3d48f2b683d4a7313",
    "nama": "Ibu Christina Natalia Yoti Sinaga",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0070",
    "no_whatsapp": "085659197234",
    "pin_hash": "4548ac004ee85431ff96c33a306660e9032d0231b918603357b36ae17863d75b",
    "nama": "Ibu Dede sumiati",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0071",
    "no_whatsapp": "085316136600",
    "pin_hash": "7028e7cd9c588782212e95d06242c599a53a8991e4dff7acc166d95c56eb8d15",
    "nama": "Ibu Evi Susanti",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0072",
    "no_whatsapp": "089630426307",
    "pin_hash": "8b96587a457a4903f67257b5eab8ca057a96a294abde2d4fadb1c70bd2ac2d96",
    "nama": "Ibu Intan Permatasari",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0073",
    "no_whatsapp": "085756368074",
    "pin_hash": "c9154a537d8dcc737b79d2a0b2a3a40e92c0ef23cc8dab8de135b61ab6a42eed",
    "nama": "Ibu Lievi Heryawati",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0074",
    "no_whatsapp": "0816225716",
    "pin_hash": "d45153b50fcf57a2f993e6856b67b863a5ba060aec3fa5078c93917ef168d9b7",
    "nama": "Ibu Megawati",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0075",
    "no_whatsapp": "081911779488",
    "pin_hash": "84ddfefce6a852ea3548db6f8a8b4dcf22c302267707fdb8a694338854ace9e4",
    "nama": "Bp. Eddy Mulyadi (OL)",
    "role": "Guru",
    "kelas_asuhan": "Dewasa (30-55 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0076",
    "no_whatsapp": "081283164343",
    "pin_hash": "e992af10281ed76101affc7d726e14cc314b5f99d2b795a6614ad81fa6b96580",
    "nama": "Pdt. Kristianto",
    "role": "Gembala",
    "kelas_asuhan": "Dewasa (30-55 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0077",
    "no_whatsapp": "085723930041",
    "pin_hash": "cd5e2195a628f5b184120733f3e2d08aa432ce6a29a89fc47ffde58b5d554f15",
    "nama": "Pdt. Salim Bastaman (OL)",
    "role": "Gembala",
    "kelas_asuhan": "Dewasa (30-55 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0078",
    "no_whatsapp": "081380188188",
    "pin_hash": "eaa40c3a9c289111caa3061b384c24ec9b0281210e5d2daca71a4c4a7e303e81",
    "nama": "Bp. Ronny",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0079",
    "no_whatsapp": "085871158958",
    "pin_hash": "dd8484055bcfaf10153bf3626a09d484977c95485407accf683d7294c9987fc9",
    "nama": "Ibu Tenny (Tjoa So Lie)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0080",
    "no_whatsapp": "085813828222",
    "pin_hash": "5e02c32fc4a974ce4d38177637cce7159c01ecdcf56edcf2ecfab17c3ea47134",
    "nama": "Ibu Wella Welania",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0081",
    "no_whatsapp": "081380191222",
    "pin_hash": "5310ced81e66ccdba29fe956691479c4278f1042a1aa9f4aa7eeaa0ad6972e7c",
    "nama": "Kezia Cornelisa Melania Ng",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0082",
    "no_whatsapp": "085321481077",
    "pin_hash": "ddfe4769734a23aa12460ad4c2f4a7c9d36857e395ceadd710b83a6370ada541",
    "nama": "Bp. Meky Santosa",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0083",
    "no_whatsapp": "085863889002",
    "pin_hash": "bf089750b63762e4eb96bf6d35f6844367b0ca4c6f99b4c6df64537e21d4543a",
    "nama": "Bp.Abas Sumarna (Bp. Acung)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0084",
    "no_whatsapp": "081216351651",
    "pin_hash": "19aff2647bed3a73493214bf4f64e6b6e739a45b27d0c75a8cca1df2ba2420e5",
    "nama": "Bp.Rachmatius",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0085",
    "no_whatsapp": "082113761155",
    "pin_hash": "61c98db9bcd489be9b95b7fff0d59f0541c260a85c15f04f9bf31065990ea36d",
    "nama": "Bp.Rikardo Christianto",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0086",
    "no_whatsapp": "08977524840",
    "pin_hash": "57f136ada621cf619e315292f466cf815fa7918bfedc255343ecb34e4e4fcda0",
    "nama": "Ibu Erna Sugandi",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0087",
    "no_whatsapp": "085871259688",
    "pin_hash": "b1994dbe4f388cab1bd4abf6fb8b33d4b0338b0a23352877a6372a69e0673715",
    "nama": "Ibu Kim wha (Tjung Kim Hua)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0088",
    "no_whatsapp": "08997523270",
    "pin_hash": "6f61c6daafea48e36fbd9681ce171f4a2c80c75729b8a6b9f85377f8c21d36ad",
    "nama": "Ibu Lenny (Ibu Lena Teddy)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0089",
    "no_whatsapp": "085797158099",
    "pin_hash": "0c31a89591b997880c9c84d123aa997c0b5aa795a6235608fd2e80b7ca7147c0",
    "nama": "Ibu Tan Siu Ing (Ing Ing)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0090",
    "no_whatsapp": "081919651110",
    "pin_hash": "d600fc24ec0080df398f3bb24b26bb50fc221741b942060cad111234f9bfbab7",
    "nama": "Ibu Terry Gunawan",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0091",
    "no_whatsapp": "087720904736",
    "pin_hash": "79b02be25c3fe63c3b9f09c1f20b1b2f3da8807e27a75b36c54c3fd8e4c3678e",
    "nama": "Ibu Tjung Shin Hwa",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0092",
    "no_whatsapp": "081314606915",
    "pin_hash": "cd9d9ee8e43bf90b8ec97e1a085d1b7fcbd3779786711a6c7979d3101b6a8cb9",
    "nama": "Ibu Wawan Andrian",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0093",
    "no_whatsapp": "0896633776001",
    "pin_hash": "ad4fdf40ed1ca2eb6e72e4d6bae351630549b98ce64dd3e561df8a5971a165da",
    "nama": "Ibu Yuniati",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0094",
    "no_whatsapp": "08176035813",
    "pin_hash": "a8c25dc21735a6b336b052e900c1a4d91c200afe2d91411a30ab45fb15e28a5a",
    "nama": "Kwo Tiong Ing (Nathan)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0095",
    "no_whatsapp": "081282026389",
    "pin_hash": "1a79561c7bc7a3ff660e49d5c920f31b7810635a50da3f7fcc5e9eab65bbb679",
    "nama": "Ibu Susan  Sudarma",
    "role": "Guru",
    "kelas_asuhan": "Senior 1 (56-67 Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0096",
    "no_whatsapp": "089646366341",
    "pin_hash": "e665247f458918d10642be286da6086855a7931664067d7c93dcd9dd375ffe75",
    "nama": "Bp. Anyuh Suhandi",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0097",
    "no_whatsapp": "085862328259",
    "pin_hash": "04a9ed6ee49d5befaf02381bbebfc11c8e630bbdae7097ee2ebd1e1809a01a49",
    "nama": "Bp. Dedi Natawijaya",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0098",
    "no_whatsapp": "085723300118",
    "pin_hash": "f18e44bfd955ef0a87b927603ca753059f5bf7db982e1e74d310b0337ad5f8ad",
    "nama": "Bp. Jhony Wowor",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0099",
    "no_whatsapp": "081563618852",
    "pin_hash": "ef21db0ead88dbaeb7148a3dfdafd2a0e50d6214228945d685092a414b909825",
    "nama": "Bp. Luky Susanto (Bp. Ayung)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0100",
    "no_whatsapp": "0895405694007",
    "pin_hash": "ef37a2c7f6b832a8c9ce0235e19fb6060eaf7a8df070c2d8859ef59afcc3488f",
    "nama": "Bp. Robert Ponto",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0101",
    "no_whatsapp": "089627882137",
    "pin_hash": "a380cd432c48c19d3aa5ce915499f4c759904cfb6459b7592c284a3ba634708f",
    "nama": "Bp. Sim Kim The ( Bp.Tedy)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0102",
    "no_whatsapp": "085659304002",
    "pin_hash": "d94d4d5af45996f09b02d4fa20dc3d9521cfe47e658e9ddd412b69db9e65c1ca",
    "nama": "Bp. Susanto (Spay)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0103",
    "no_whatsapp": "08981585969",
    "pin_hash": "e1b26bdbc591dfbaed9b6ac509225c7bbb6e27bb0dc05b9366e9828656c5e9bc",
    "nama": "Bp. Thio Jan Fung (koordinator)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0104",
    "no_whatsapp": "085863237772",
    "pin_hash": "a8c75be0fbec30d0b7a9cdbac0f11cbff900b5f65ebf8ed19b00806b3c33ca95",
    "nama": "Bp. Tirta Miharja",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0105",
    "no_whatsapp": "08568964918",
    "pin_hash": "98194573d2edc42eb330ff5d7a07d55f512e58fb85fc822bee3ec8e8c5876194",
    "nama": "Bp. Yanto Yohanes  **",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0106",
    "no_whatsapp": "081383375955",
    "pin_hash": "0a7be5ef0e0ec5f8cbd748dd4901b8fed5ca0d7cb6a1756bfebe1c82d089c79f",
    "nama": "Bp. Yusuf Rojana",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0107",
    "no_whatsapp": "081932657468",
    "pin_hash": "82a34fd72772662e457c952264235a67c4a3f08a9c60c99d79c67083f60a2482",
    "nama": "Ibu Herklots Greta",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0108",
    "no_whatsapp": "083804042822",
    "pin_hash": "7f2a09f75f35707955c63955601a07523e9e3a2ee741bff159157a6d521c5635",
    "nama": "Ibu Hian Nio (Ibu Icis)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0109",
    "no_whatsapp": "085724192853",
    "pin_hash": "4754149c44898650f67cca36c6e1be4050d7eeedd32271d713397550a7b49cbb",
    "nama": "Ibu Iriswati (issye)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0110",
    "no_whatsapp": "081809811308",
    "pin_hash": "c1d1d790e4e41ece0e4e6247ab02480f2c4dbe99496d4f0b34edc1a3d4c3f32d",
    "nama": "Ibu Kerzia",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0111",
    "no_whatsapp": "085720202007",
    "pin_hash": "6a0dbdfa8c27342b84867bff82fc3c9f374020990ba42327d62bdd4baffd0b8f",
    "nama": "Ibu Khouw Kiok Hua (Ibu Lidia Yusuf)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0112",
    "no_whatsapp": "08159083833",
    "pin_hash": "0ace58ac5225c9f26f05cb2ac012fbc9914869ae4b47015b707dbe760c1e5763",
    "nama": "Ibu Lay Lie Hua",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0113",
    "no_whatsapp": "081911702064",
    "pin_hash": "ac9af6d6dad96f8fb1cc84f34a34164e39b3f2b095adb683b4d8210510e3032a",
    "nama": "Ibu Lidya Mimery",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0114",
    "no_whatsapp": "089521532621",
    "pin_hash": "0070684d237ac2f9de8af649f58bc3b14127a0bfa27b6e822a7fe7d82f2020a3",
    "nama": "Ibu Lina Samaria (Ayen)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0115",
    "no_whatsapp": "08154632111",
    "pin_hash": "ac4011c267b93c600fad8ba3738f5cfe05ab98086239b3757e60156efbde4c6f",
    "nama": "Ibu Lioe Kit Lan Alias Hanny Supiati (Cilan) **",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0116",
    "no_whatsapp": "0818977595",
    "pin_hash": "835afde51eb9f006dcfef47266afd008a3748fbc4882da47d2190148a499754a",
    "nama": "Ibu Lioe Yuliawati (tjie yun)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0117",
    "no_whatsapp": "089682475691",
    "pin_hash": "b2563d8db7b42a9644647905cdf730f351feda53737edf8df9124d476b26c0da",
    "nama": "Ibu Liong Lien Tjen (Acen)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0118",
    "no_whatsapp": "081804983660",
    "pin_hash": "4b6c677814fab31b1bb3d4272e5599fdbc733c096cbfee286e9c1b856ca4b0fd",
    "nama": "Ibu Neni Herawati",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0119",
    "no_whatsapp": "089688590899",
    "pin_hash": "4754149c44898650f67cca36c6e1be4050d7eeedd32271d713397550a7b49cbb",
    "nama": "Ibu Sim Sin Mey",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0120",
    "no_whatsapp": "08817249267",
    "pin_hash": "ec759b638db0d918d650ecc385ec331de1064cc5f3ef71545d5d025b9376e2e0",
    "nama": "Ibu Sumyati Benjamin",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0121",
    "no_whatsapp": "087775699155",
    "pin_hash": "001cedd5a4b50a08d62642511ce9546283b666dd6a51d8494d05e55279349a4b",
    "nama": "Ibu Susilawati  (Tan Tjay Hua)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0122",
    "no_whatsapp": "0266228596",
    "pin_hash": "2e1d1f43ae0eaea4a38d4fd68670bd8d5517761c2cdaa0030947c81fac9808b0",
    "nama": "Ibu Tan Bok Nio Alias Herlina (Boknio)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0123",
    "no_whatsapp": "085719142166",
    "pin_hash": "247b6bb89c797443bbc85fd70451f03d74a28575d2b1307430fa9a1cbc227a9b",
    "nama": "Ibu Tjhin Tet Fa (Ibu Citwa)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0124",
    "no_whatsapp": "08161103688",
    "pin_hash": "b8c8465f9a50ed6167e1790a4a0158ef6344c024199306e5b9bade4bb4530c08",
    "nama": "Ibu Vonny Lunanta (Ibu Cifang)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0125",
    "no_whatsapp": "087737791531",
    "pin_hash": "a376174e30239ff42f5f940a0916f0114c88ddf614218671242dd724b4533abb",
    "nama": "Ibu Yulianti (Ibu Lia)",
    "role": "Jemaat",
    "kelas_asuhan": "",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0126",
    "no_whatsapp": "081573200888",
    "pin_hash": "628db657280ece4439cfbb991c6454e348ce44ce14dc3b1c7c94f9f04e832f8e",
    "nama": "Pdt. Hendi Tjiptamustika",
    "role": "Gembala",
    "kelas_asuhan": "Senior 2 (68+ Tahun)",
    "is_active": true,
    "last_login": ""
  },
  {
    "id": "USR-0127",
    "no_whatsapp": "08987520893",
    "pin_hash": "b9cbc998361f0909b256a1a0fb56d15eb43ee007b2699a189c38210f13ea712a",
    "nama": "Ibu Wiesye Mirnawati",
    "role": "Guru",
    "kelas_asuhan": "Senior 2 (68+ Tahun)",
    "is_active": true,
    "last_login": ""
  }
];
