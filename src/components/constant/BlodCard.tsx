
interface blogCardType {
  item: {
    title: string,
    image: string,
    description: string,
    authorImage: string,
    authorName: string,
  }
}

function BlogCard({ item }: blogCardType) {
  return (
    <>
      <div className=" p-2">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />

          <div className="p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-4">{item.description}</p>

            <div className="flex items-center">
              <img
                src={item.authorImage}
                alt={item.authorName}
                className="w-8 h-8 rounded-full mr-2"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">{item.authorName}</p>
                {/* <p className="text-sm text-gray-500">{new Date()}</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default BlogCard
