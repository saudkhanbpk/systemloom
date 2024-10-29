import Link from 'next/link';
import ServiceCard from '../constant/ServiceCard';



interface Service {
  id: number;
  title: string;
  des: string;
  image: string;
}

const ServicesSec = () => {
  const servicesArr = [
    {
      id: 1,
      title: "Web Design & Development",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 2,
      title: "Mobile App Development",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/a793/c3c4/11dc378b97732dc27557ac5763b938b0?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jgTWS50nTnCqjADj7~Xzab0U7CeG5UvfBTB2Zpv4rC8vx26b93vWQ8YUZsQFSUGqdcWhdWypvhDOvxAHFTA8yzNedDX1opJn12YcNcpLsmSOeqgaatPWPYxOC-F-BIOetOcFMBPnqn~Gui7Msmq~l0XIptgZvNVWXpVbLCRnn3x~Dd9MH9PeaMdjRBy9P4-RF3ifuR2zjbYB7YkAauFi2zivVebuM9JtMh6rTKrAaJJ-4qjXowZ3beqPaJrGErtpgFdRs3wdjexNZ539VACamMQTDK9WeTKfbJznYHSRGuDG1QtrEbIbwPZsLBztSX08p2vWNSTe62It9I0ZkGxJSQ__",
    },
    {
      id: 3,
      title: "Devops",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/e876/e353/3c53223e78aa079526a49dfeb2fb09d5?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OGwSHtRIF29CUCqCwxeujZlNrqYc1urTLz39JNMO2~f0MNXzcM~EgoACKy9lUswgOLoiKvxU2rGqaZm5WfA5ONmHo-lFZVy2WwXjeUytUUUgV6n3Y24QU6XfYLnlaEYWJNRjuTLLrNCS8MDBO9s5UwRYxmgYnvuIYmZ7e8VcBUjaIUt1w5J0PjSnafXtM2Y2jsXNNml7eOvcYwNtSYXdCuRjn5itsbud320fBzm8cfHoAEW0UvMj4EllnicR0CssGcD8ZiBYvB7ztDLhg9l7wdVBLkH11In4p47H77L0y-yUqbVst1ME8v1wvJYz4s7h4Omv3LvEwAag5qANU1kTwQ__",
    },
    {
      id: 4,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 5,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 6,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 7,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 8,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
    {
      id: 9,
      title: "Software Testing Service",
      des: "TechCreator provides top-notch web development services to create modern and functional websites that meet our clients' needs.",
      image:
        "https://s3-alpha-sig.figma.com/img/ca35/a5e7/56d645cde5236656271eec20763b5aec?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JDgxDhW6HJEMLSdARYUu7zSBZroIiYLfTYTpJt4mv4MzLM2f-QSt6aMqO6C~JZx51lwkIsmdbvexNchwwwBmnDq82NtcmvCv7QnM~Bq-r4JwQHY3t2qCSpB59KinyNwzMmJ8vsCaaoLDJNFoxV4uic6GMW0xKAq3rycgFzwTKHVqzQeui0Zr36HLtgfQZSklESA7EKtH-F-eHZswp8TxFkqvbEWqefJwt61EKQGW4ms61PqauZQncXMKeFzIeA5GvcxsJtnZGrDKOG~irJbOGqW7O~jf~TPI06e7JUPVTaL8rn2HQ-iW56ThfZ9nznmWwLs0qR0LYMt5Wh12rdP3Kg__",
    },
  ];

  return (
    <div>
      <div>
        <div className="relative bg-gray-900 text-white">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src="https://s3-alpha-sig.figma.com/img/930f/4355/0bcba6ef8b56768f41a9178e764cc5ea?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q4w5Emi2brMKFJnvLACHgfmSX9DdtK35psqsEokLlmBJ0UIzgM5qfFf8jvuVrQtgXnsAx3pi7wYWH0Dm9hN1uD9X6u1zW5ZFRDcOCvyg8cmu1IvtI-GUkoKPnL0tI6YzbP16Bc7n~tQ2cCtmnn5o6opZabVHzTFeOO-WcVmojwec~nIWWtGNWgOyvTUIhv2QZ1cdzbprg24ynfRUgk~OSTIqEQqihNwVvPCTChx2BlPa1wS8935BrmlvaKiYNHVfHlwcmpNmLqwDu20RYqGJsEklaD9-6K7KqkLm~ZvQMz2lnd8xyrFUX9e6a3pGW9U3bUV2yC3yLMEBgekqEVNQbQ__"
              alt="Background"
              className="w-full h-[871px] "
            />
          </div>
          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center mt-10">
              <h1 className="font-semibold text-[40px] md:text-[57px] leading-[50px] md:leading-[65px] mb-6">
                Our Services
              </h1>
              <p className="font-normal text-[16px] md:text-[18px] max-w-3xl mx-auto leading-6 md:leading-9">
                TechCreator offers top-notch web and mobile app development services to help businesses bring their ideas to life. Our experienced team of developers creates custom apps that are tailored to meet our clients' specific needs. We use the latest technologies and industry best practices to ensure that our apps are scalable, secure, and easy to use. Whether you need a simple mobile app or a complex web application, TechCreator has the expertise to deliver high-quality solutions that exceed your expectations. Contact us today to learn more about our web and mobile app development services.
              </p>
            </div>
          </div>

        </div>
      </div>
      <div className=" mb-10 mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full px-4 sm:px-6 md:px-10 py-10">
        {
          servicesArr?.map((item) => (
            <Link href="/services/services-Detail" key={item.id}>
              <ServiceCard
                description={item.des}
                title={item.title}
                icon={item.image}
                style={true}
              />
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default ServicesSec