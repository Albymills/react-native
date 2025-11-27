import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { getTrendingMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // fectch movies from api
  const {
    data: movies,
    loading: loading,
    error: error,
    refetch: loadingMovies,
    reset,
  } = useFetch(
    () =>
      getTrendingMovies({
        query: searchQuery,
      }),
    false
  );

  useEffect(() => {
    const func = async () => {
      if (searchQuery.trim()) {
        await loadingMovies();
      } else {
        reset();
      }
    };
    func();
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        resizeMode="cover"
        className="w-full absolute z-0"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 20,
          marginBottom: 10,
          paddingRight: 5,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        className="px-5"
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20 mb-5">
              <Image source={icons.logo} className="w-12 h-10 " />
            </View>
            <View className="mb-5">
              <SearchBar
                placeholder="Search for a movie....."
                value={searchQuery}
                onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className=" self-center my-3"
              />
            )}
            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error: {error.message}
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className="text-white text-lg font-bold mb-3">
                Search results for {""}
                <Text className="text-accent">{searchQuery} </Text>
              </Text>
            )}
          </>
        }
      />
    </View>
  );
};

export default Search;
