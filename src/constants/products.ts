export interface Product {
    title: string;
    slug: string;
    description?: string;
    color: string;
    items: Item[]
}
export interface Item {
    id: string
    title: string;
    description?: string;
    image?: string
}
const cell: Product = {
    title: "Cell analysis",
    slug: "cell-analysis",
    description: "The cell analysis platform consist of two focus areas: Flow cytometric and Imaging based cell analysis. Applications are aimed at imaging intracellular structures and intercellular interactions, cell characterization through flow cytometry, and single cell sorting.",
    color: "",
    items: [{
        "id": "facsaria-iiiu-cellsorter",
        "title": "FacsAria IIIu cellsorter",
        "description": "4 lasers, 17 colors, 19 parameters",
        "image": "/images/cell-analysis/facsaria-iiiu-cellsorter.png"

    },
    {
        "id": "facsaria-iii-cellsorter",
        "title": "FacsAria III cellsorter",
        "description": "4 lasers, 16 colors, 16 parameters",
        "image": "/images/cell-analysis/facsaria-iiiu-cellsorter.png"

    },
    {
        "id": "bd-discover-s8-spectral-sorter",
        "title": "BD discover S8 spectral sorter with cell view",
        "description": "5 lasers, 45 colors, 5 parameters",
        "image": "/images/cell-analysis/bd-discover-s8-spectral-sorter.png"

    },
    {
        "id": "lsr-sorp-ii-hts",
        "title": "LSR SORP II + HTS",
        "description": "5 lasers, 18 colors, 20 parameters",
        "image": "/images/cell-analysis/lsr-sorp-ii-hts.png"

    },
    {
        "id": "bd-facs-lyric",
        "title": "BD FACS Lyric",
        "description": "3 lasers, 12 colors, 14 parameters",
        "image": "/images/cell-analysis/bd-facs-lyric.png"

    },
    {
        "id": "bd-facs-canto-hts-1",
        "title": "BD FACS Canto + HTS (1)",
        "description": "3 lasers, 8 colors, 10 parameters",
        "image": "/images/cell-analysis/bd-facs-canto-hts-1.png"

    },
    {
        "id": "bd-facs-canto-hts-2",
        "title": "BD FACS Canto + HTS (2)",
        "description": "3 lasers, 8 colors, 10 parameters",
        "image": "/images/cell-analysis/bd-facs-canto-hts-2.png"

    },
    {
        "id": "bd-facs-canto-loader",
        "title": "BD FACS Canto + Loader",
        "description": "3 lasers, 8 colors, 10 parameters",
        "image": "/images/cell-analysis/bd-facs-canto-hts-2.png"

    },
    {
        "id": "bd-fortessa-sorp",
        "title": "BD Fortessa SORP",
        "description": "5 lasers, 20 colors, 22 parameters",
        "image": "/images/cell-analysis/bd-fortessa-sorp.png"

    },
    {
        "id": "bd-symphony-a5",
        "title": "BD Symphony A5",
        "description": "5 lasers, 30 colors, 32 parameters",
        "image": "/images/cell-analysis/bd-symphony-a5.png"

    },
    {
        "id": "sony-id7000-spectral",
        "title": "Sony ID7000 spectral",
        "description": "5 lasers, 20 colors",
        "image": "/images/cell-analysis/sony-id7000-spectral.png"

    },
    {
        "id": "imagestream-mark-ii",
        "title": "ImageStream Mark II",
        "description": "5 lasers, 10 colors, 12 parameters",
        "image": "/images/cell-analysis/imagestream-mark-ii.png"

    }]
}
const cryobiology: Product = {
    "title": "Cryobiology",
    "slug": "cryobiology",
    "color": "#23438B",
    "description": "This facility facilitates cryopreservation of mammalian (blood)cells/cell lines in cryogenic storage vessels. The material is stored in the vapor phase of liquid nitrogen at a temperature of <-150°C.  The support is designed for ongoing and archived research projects, with campus-wide accessibility.",
    items: [
        {
            "id": "sample-storage-liquid-nitrogen",
            "title": "Sample storage in liquid nitrogen",
            "image": "/images/cryobiology/sample-storage-liquid-nitrogen.png"
        },
        {
            "id": "campus-storage-services",
            "title": "Campus storage services",
            "image": "/images/cryobiology/campus-storage-services.png"
        }
    ]
}
const imagingInstruments: Product = {
    title: "Imaging instruments",
    slug: "imaging-instruments",
    color: "#50C0AE",
    items: [
        {
            "id": "zeiss-980-array-scan-confocal-1",
            "title": "Zeiss 980 Array scan confocal",
            "description": "6 lasers Live cell image module",
            "image": "/images/imaging-instruments/zeiss-980-array-scan-confocal-1.png"
        },
        {
            "id": "leica-sp8-confocal",
            "title": "Leica SP8 Confocal",
            "description": "8 lasers Live cell image module",
            "image": "/images/imaging-instruments/leica-sp8-confocal.png"
        },
        {
            "id": "wide-field-zeiss-axiovert-200",
            "title": "Wide field Zeiss Axiovert 200",
            "description": "Fluorescentie and DIC/phase-contrast with live cell image module",
            "image": "/images/imaging-instruments/wide-field-zeiss-axiovert-200.png"
        },
        {
            "id": "upright-wide-field-zeiss-examiner-z1",
            "title": "Upright Wide field Zeiss Examiner Z1",
            "description": "Fluorescence and DIC/phase-contrast",
            "image": "/images/imaging-instruments/upright-wide-field-zeiss-examiner-z1.png"
        },
        {
            "id": "wide-field-zeiss-observer-z1",
            "title": "Wide field Zeiss Observer Z1",
            "description": "Fluorescence  and DIC/phase-contrast /Dual camera for FRET with live cell image module",
            "image": "/images/imaging-instruments/wide-field-zeiss-observer-z1.png"
        }
    ]
}

const massSpectrometry: Product = {
    title: "Mass spectrometry",
    slug: "mass-spectromtery",
    description: "This mass spectrometry facility is equipped with high-end instrumentation and  specializes in proteomic analyses. Applications include proteome profiling of (primary) cellular material and plasma, and characterization of protein-protein interactions using co-immunoprecipitation or proximity labeling.",
    color: "#EB338D",
    items: [
        {
            "id": "assaymap-bravo",
            "title": "AssayMAP BRAVO",
            "description": "Liquid handler",
            "image": "/images/mass-spectrometry/assaymap-bravo.png"
        },
        {
            "id": "evosep-one",
            "title": "Evosep One",
            "description": "Liquid chromatography for LC-MS/MS",
            "image": "/images/mass-spectrometry/evosep-one.png"
        },
        {
            "id": "liquid-chromatography-lc-ms-ms",
            "title": "Liquid chromatography for LC-MS/MS",
            "image": "/images/mass-spectrometry/liquid-chromatography-lc-ms-ms.png"
        }
    ]
}
const massSpectrometers: Product = {
    title: "Mass spectrometers",
    slug: "mass-spectrometers",
    description: "",
    color: "#FFE608",
    items: [
        {
            "id": "zeiss-980-array-scan-confocal",
            "title": "Zeiss 980 Array scan confocal",
            "description": "6 lasers Live cell image module",
            "image": "/images/mass-spectrometers/zeiss-980-array-scan-confocal.png"
        },
        {
            "id": "leica-sp8-confocal",
            "title": "Leica SP8 Confocal",
            "description": "8 lasers Live cell image module",
            "image": "/images/mass-spectrometers/leica-sp8-confocal.png"
        },
        {
            "id": "bruker-timstof-ht",
            "title": "Bruker timsTOF HT",
            "image": "/images/mass-spectrometers/bruker-timstof-ht.png"
        }
    ]
}
const allProducts = [
    cell,
    cryobiology,
    imagingInstruments,
    massSpectrometry,
    massSpectrometers
]
export default allProducts
export function findProductAndItem(
    categorySlug: string,
    itemId: string
): Item | undefined {
    const product = allProducts.find((p) => p.slug === categorySlug);
    if (!product) return undefined;

    const item = product.items.find((i) => i.id === itemId);
    if (!item) return undefined;

    return item;
}
