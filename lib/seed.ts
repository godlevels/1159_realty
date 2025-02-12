import { ID } from "react-native-appwrite";
import { databases, config } from "./appwrite";
import {
    staffImages,
    galleryImages,
    propertiesImages,
    reviewImages,
} from "./data";

const COLLECTIONS = {
    STAFF: config.agentsCollectionId,
    REVIEWS: config.reviewsCollectionId,
    GALLERY: config.galleriesCollectionId,
    PROPERTY: config.propertiesCollectionId,
};

const propertyTypes = [
    "Lands",
    "Hostels",
    "Duplexes",
    "Studios",
    "Apartments",
    "Others",
];

const facilities = [
    "Laundry",
    "Parking",
    "Cooking Basics",
    "Sports Center",
    "Air Conditioning",
    "Gym",
    "Swimming pool",
    "Water Heater",
    "Wifi",
    "TV"
];

function getRandomSubset<T>(
    array: T[],
    minItems: number,
    maxItems: number
): T[] {
    if (minItems > maxItems) {
        throw new Error("minItems cannot be greater than maxItems");
    }
    if (minItems < 0 || maxItems > array.length) {
        throw new Error(
            "minItems or maxItems are out of valid range for the array"
        );
    }


    const subsetSize =
        Math.floor(Math.random() * (maxItems - minItems + 1)) + minItems;


    const arrayCopy = [...array];


    for (let i = arrayCopy.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[randomIndex]] = [
            arrayCopy[randomIndex],
            arrayCopy[i],
        ];
    }


    return arrayCopy.slice(0, subsetSize);
}

async function seed() {
    try {

        for (const key in COLLECTIONS) {
            const collectionId = COLLECTIONS[key as keyof typeof COLLECTIONS];
            const documents = await databases.listDocuments(
                config.databaseId!,
                collectionId!
            );
            for (const doc of documents.documents) {
                await databases.deleteDocument(
                    config.databaseId!,
                    collectionId!,
                    doc.$id
                );
            }
        }

        console.log("Cleared all existing data.");

        const staffs = [];
        for (let i = 1; i <= 5; i++) {
            const staff = await databases.createDocument(
                config.databaseId!,
                COLLECTIONS.STAFF!,
                ID.unique(),
                {
                    name: `Staff ${i}`,
                    email: `staff${i}@example.com`,
                    avatar: staffImages[Math.floor(Math.random() * staffImages.length)],
                }
            );
            staffs.push(staff);
        }
        console.log(`Seeded ${staffs.length} staffs.`);

        const reviews = [];
        for (let i = 1; i <= 20; i++) {
            const review = await databases.createDocument(
                config.databaseId!,
                COLLECTIONS.REVIEWS!,
                ID.unique(),
                {
                    name: `Reviewer ${i}`,
                    avatar: reviewImages[Math.floor(Math.random() * reviewImages.length)],
                    review: `This is a review by Reviewer ${i}.`,
                    rating: Math.floor(Math.random() * 5) + 1,
                }
            );
            reviews.push(review);
        }
        console.log(`Seeded ${reviews.length} reviews.`);


        const galleries = [];
        for (const image of galleryImages) {
            const gallery = await databases.createDocument(
                config.databaseId!,
                COLLECTIONS.GALLERY!,
                ID.unique(),
                { image }
            );
            galleries.push(gallery);
        }

        console.log(`Seeded ${galleries.length} galleries.`);


        for (let i = 1; i <= 20; i++) {
            const assignedAgent = staffs[Math.floor(Math.random() * staffs.length)];

            const assignedReviews = getRandomSubset(reviews, 5, 7);
            const assignedGalleries = getRandomSubset(galleries, 3, 8);

            const selectedFacilities = facilities
                .sort(() => 0.5 - Math.random())
                .slice(0, Math.floor(Math.random() * facilities.length) + 1);

            const image =
                propertiesImages.length - 1 >= i
                    ? propertiesImages[i]
                    : propertiesImages[
                    Math.floor(Math.random() * propertiesImages.length)
                    ];

            const property = await databases.createDocument(
                config.databaseId!,
                COLLECTIONS.PROPERTY!,
                ID.unique(),
                {
                    name: `Property ${i}`,
                    type: propertyTypes[Math.floor(Math.random() * propertyTypes.length)],
                    description: `This is the description for Property ${i}.`,
                    address: `123 Property Street, City ${i}`,
                    geolocation: `192.168.1.${i}, 192.168.1.${i}`,
                    price: Math.floor(Math.random() * 9000) + 1000,
                    area: Math.floor(Math.random() * 3000) + 500,
                    bedrooms: Math.floor(Math.random() * 5) + 1,
                    bathrooms: Math.floor(Math.random() * 5) + 1,
                    rating: Math.floor(Math.random() * 5) + 1,
                    facilities: selectedFacilities,
                    image: image,
                    staff: assignedAgent.$id,
                    reviews: assignedReviews.map((review) => review.$id),
                    gallery: assignedGalleries.map((gallery) => gallery.$id),
                }
            );

            console.log(`Seeded property: ${property.name}`);
        }

        console.log("Data seeding completed.");
    } catch (error) {
        console.error("Error seeding data:", error);
    }
}

export default seed;