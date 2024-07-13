import Container from "./Container";

const images = [
  {
    src: "https://img.freepik.com/free-photo/bouquet-flowers-with-white-background_1232-1088.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-2",
    rows: "row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/view-green-palm-tree-species-with-beautiful-foliage_23-2151486635.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-1",
    rows: "row-span-1",
  },
  {
    src: "https://img.freepik.com/free-photo/monstera-deliciosa-plant-pot_53876-133119.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-1",
    rows: "row-span-1",
  },
  {
    src: "https://img.freepik.com/free-photo/hanging-pothos-plant-gray_53876-146607.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-2",
    rows: "row-span-1",
  },
  {
    src: "https://img.freepik.com/free-photo/colour-flowers-white-pot-isolated-white_231208-2933.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-1",
    rows: "row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/white-flower-petals-with-water-drops-pollen_181624-27665.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-2",
    rows: "row-span-1",
  },
  {
    src: "https://img.freepik.com/free-photo/terry-yellow-tulips-flowerbed-concept-flowers-spring_169016-4726.jpg?ga=GA1.1.1193045225.1720843923&semt=sph",
    cols: "col-span-1",
    rows: "row-span-2",
  },
  {
    src: "https://img.freepik.com/free-photo/view-green-palm-tree-species-with-beautiful-foliage_23-2151486635.jpg?t=st=1720864349~exp=1720867949~hmac=1656724f6d1b1ed79b5d3b7711cfe07161574e48689ceabe2493375638e82e11&w=740",
    cols: "col-span-2",
    rows: "row-span-2",
  },
  // Add more image URLs and specify the grid spans here
];

const ImageGallery = () => {
  return (
    <Container>
      <div className="container mx-auto p-4 h-screen mb-60">
        <h2 className="text-center text-5xl font-bold my-20 text-gray-600">
          Image Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden ${image.cols} ${image.rows}`}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ImageGallery;
