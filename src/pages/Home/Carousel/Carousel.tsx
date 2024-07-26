import { FC } from "react";
import "../../../Assets/Home/Carousel.css";

type Snippet = number;
type List = Snippet[];

interface CarouselProps {
	list: List;
}

const Carousel: FC<CarouselProps> = ({ list = [] }) => {
	return (
		<div className="carousel-wrapper">
			{list.length === 0 ? (
				<> nothing to display </>
			) : (
				list.map((item) => {
					return (
						<div key={item} className="carousel-item">
							{item}
						</div>
					);
				})
			)}
		</div>
	);
};
export { Carousel };
