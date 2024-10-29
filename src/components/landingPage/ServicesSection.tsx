import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1440 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1440, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 1024, min: 640 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const servicesArr = [
    {
      id: 1,
      title: "Web Design & Development",
      des: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image:
        "https://s3-alpha-sig.figma.com/img/a793/c3c4/11dc378b97732dc27557ac5763b938b0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgTWS50nTnCqjADj7~Xzab0U7CeG5UvfBTB2Zpv4rC8vx26b93vWQ8YUZsQFSUGqdcWhdWypvhDOvxAHFTA8yzNedDX1opJn12YcNcpLsmSOeqgaatPWPYxOC-F-BIOetOcFMBPnqn~Gui7Msmq~l0XIptgZvNVWXpVbLCRnn3x~Dd9MH9PeaMdjRBy9P4-RF3ifuR2zjbYB7YkAauFi2zivVebuM9JtMh6rTKrAaJJ-4qjXowZ3beqPaJrGErtpgFdRs3wdjexNZ539VACamMQTDK9WeTKfbJznYHSRGuDG1QtrEbIbwPZsLBztSX08p2vWNSTe62It9I0ZkGxJSQ__",
    },
    {
      id: 3,
      title: "Devops",
      des: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image:
        "https://s3-alpha-sig.figma.com/img/e876/e353/3c53223e78aa079526a49dfeb2fb09d5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGwSHtRIF29CUCqCwxeujZlNrqYc1urTLz39JNMO2~f0MNXzcM~EgoACKy9lUswgOLoiKvxU2rGqaZm5WfA5ONmHo-lFZVy2WwXjeUytUUUgV6n3Y24QU6XfYLnlaEYWJNRjuTLLrNCS8MDBO9s5UwRYxmgYnvuIYmZ7e8VcBUjaIUt1w5J0PjSnafXtM2Y2jsXNNml7eOvcYwNtSYXdCuRjn5itsbud320fBzm8cfHoAEW0UvMj4EllnicR0CssGcD8ZiBYvB7ztDLhg9l7wdVBLkH11In4p47H77L0y-yUqbVst1ME8v1wvJYz4s7h4Omv3LvEwAag5qANU1kTwQ__",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
  ];

  return (
    <React.Fragment>
      <div className="mx-auto">
        <div className="text-center font-bold text-[#9A00FF] text-[35px] mb-20 mt-14">
          <h2>Services we offer </h2>
        </div>
        <Carousel
          swipeable={false}
          centerMode={true}
          draggable={false}
          showDots={true}
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {servicesArr.map((item, index) => (
            <div key={item.id} className="h-auto w-[333px] mb-14">
              <ServiceCard
                title={item.title}
                description={item.des}
                icon={item.image}
                style={false}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default ServicesSection;
