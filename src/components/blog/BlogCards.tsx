import React from 'react'
import BlogCard from '../constant/BlodCard';

const BlogCards = () => {

  const blogData = [
    {
      id: 1,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 2,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 3,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 4,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 5,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 6,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 7,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 8,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
    {
      id: 9,
      title: "Swap long video calls and emails for asynchronous video",
      description: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
      image: "https://s3-alpha-sig.figma.com/img/d6de/7206/74d274e20e85a97e6c4b923e0b9fa71a?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJXwHJF2l1esBTBY4NYZteeAfVE79BeHCAtLMH-Cv4AUQld5SGmdj~xrZ2dDuF2YRmC7TSOiPvLZMrON8izbF-ziBPf55wEqCTbnF35gqy9mT0EaDKCJkrCh9XmFNXrXrPv6AzKcnWdmzpkVqkbADgXZEaKgleH-H~2LgTJxDHi9vW-9BbajVg3RjonfivzZlA0pCMHuGrUi-l9HetL~EAYv8XnWS8qNMfhAFDSx2p0uDpwAquUsPBxe5zdG382zZaL1A5MaQmCQ8C2chTu~iRdQPZfWwePLldBgfEy-fX3EguIwHcxzcZ7LVxmkwDQX3bS4qcQcpCC8rrauMpyCag__",
      authorName: "Robert Fox",
      authorImage: "https://via.placeholder.com/100",
      date: "June 21, 2023",
    },
  ];


  return (
    <div className="container mb-10 mt-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {
          blogData.map((item) => {
            return (
              <BlogCard key={item.id} item={item} />
            )
          })

        }
      </div>
  )
}

export default BlogCards