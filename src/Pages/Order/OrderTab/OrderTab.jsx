import FoodCard from "../../Shared/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./OrderTab.css";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <div className="mb-20">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[...Array(totalPages)].map((_, pageIndex) => (
            <SwiperSlide key={pageIndex}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-16 mx-4 lg:mx-0">
                {items
                  .slice(
                    pageIndex * itemsPerPage,
                    (pageIndex + 1) * itemsPerPage
                  )
                  .map((item) => (
                    <FoodCard key={item._id} item={item} />
                  ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default OrderTab;
