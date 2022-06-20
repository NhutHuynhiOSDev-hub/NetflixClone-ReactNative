import { Text, View, Image, FlatList } from "react-native";
import styles from "./styles";

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: {
      id: string;
      poster: string;
    }[];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;

  console.log("ITEM:", category);
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={(movieItem) => (
          <Image style={styles.image} source={{ uri: movieItem.item.poster }} />
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      />
    </>
  );
};

export default HomeCategory;
