
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const HomeScreen = ({ route }) => {
  const { Name, Email } = route.params;

  const FeaturedJobs = [
    { key: '1', jobName: 'Software Engineer', salary: '$180,000', location: 'Accra, Ghana', backgroundColor: 'blue', company: 'Facebook', image: 'https://via.placeholder.com/40' },
    { key: '2', jobName: 'Product Manager', salary: '$160,000', location: 'California, US', backgroundColor: '#c2185b', company: 'Google', image: 'https://via.placeholder.com/40' },
    { key: '3', jobName: 'Data Scientist', salary: '$150,000', location: 'New York, US', backgroundColor: '#8e44ad', company: 'Amazon', image: 'https://via.placeholder.com/40' },
    { key: '4', jobName: 'UX Designer', salary: '$120,000', location: 'Berlin, Germany', backgroundColor: '#3498db', company: 'Microsoft', image: 'https://via.placeholder.com/40' },
    { key: '5', jobName: 'Backend Developer', salary: '$140,000', location: 'San Francisco, US', backgroundColor: '#e74c3c', company: 'Apple', image: 'https://via.placeholder.com/40' },
    { key: '6', jobName: 'Mobile Developer', salary: '$130,000', location: 'London, UK', backgroundColor: '#2ecc71', company: 'Uber', image: 'https://via.placeholder.com/40' },
    { key: '7', jobName: 'DevOps Engineer', salary: '$145,000', location: 'Toronto, Canada', backgroundColor: '#f1c40f', company: 'Shopify', image: 'https://via.placeholder.com/40' },
    { key: '8', jobName: 'Cloud Architect', salary: '$155,000', location: 'Sydney, Australia', backgroundColor: '#d35400', company: 'IBM', image: 'https://via.placeholder.com/40' },
  ];

  const popularJobs = [
    { key: '1', jobName: 'Jr Executive', salary: '$96,000/y', location: 'Los Angeles, US', backgroundColor: '#1a73e8', company: 'Burger King', image: 'https://via.placeholder.com/40' },
    { key: '2', jobName: 'Product Manager', salary: '$84,000/y', location: 'Florida, US', backgroundColor: '#c2185b', company: 'Beats', image: 'https://via.placeholder.com/40' },
    { key: '3', jobName: 'Product Manager', salary: '$86,000/y', location: 'Florida, US', backgroundColor: '#00796b', company: 'Facebook', image: 'https://via.placeholder.com/40' },
    { key: '4', jobName: 'Marketing Specialist', salary: '$90,000/y', location: 'Seattle, US', backgroundColor: '#ff6347', company: 'Amazon', image: 'https://via.placeholder.com/40' },
    { key: '5', jobName: 'Graphic Designer', salary: '$70,000/y', location: 'Austin, US', backgroundColor: '#8a2be2', company: 'Apple', image: 'https://via.placeholder.com/40' },
    { key: '6', jobName: 'Sales Associate', salary: '$65,000/y', location: 'Boston, US', backgroundColor: '#48d1cc', company: 'Google', image: 'https://via.placeholder.com/40' },
    { key: '7', jobName: 'HR Manager', salary: '$105,000/y', location: 'Miami, US', backgroundColor: '#dc143c', company: 'Microsoft', image: 'https://via.placeholder.com/40' },
    { key: '8', jobName: 'Operations Manager', salary: '$110,000/y', location: 'Denver, US', backgroundColor: '#ffa07a', company: 'Facebook', image: 'https://via.placeholder.com/40' },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View>
              <Text style={styles.text}>{Name}</Text>
              <Text style={styles.text2}>{Email}</Text>
            </View>
            <Image style={styles.profileImage} source={{ uri: 'https://ouch-cdn2.icons8.com/v2n_fFGDClYYDtKo2Cf8L2N_GWH3pRzAm_oJe1ErZsQ/rs:fit:368:365/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvODI3/LzFhNDhmMGQ0LWY4/OTMtNDMyNC1hMTkw/LWY2MzRjYzI4Yjli/My5wbmc.png' }} />
          </View>
          <View style={styles.searchSectionWrapper}>
            <View style={styles.searchBar}>
              <Ionicons name="search" size={25} style={{ marginRight: 5 }} color={'#000'} />
              <TextInput placeholder="Search a job or position?" style={styles.input} />
            </View>
            <TouchableOpacity onPress={() => { }} style={styles.filterBtn}>
              <Ionicons name="options" size={20} color='white' />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.subTxt}>Featured Jobs <Text style={styles.seeAll}>See all</Text></Text>
          </View>

          <FlatList
            data={FeaturedJobs}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={[styles.featuredJob, { backgroundColor: item.backgroundColor }]}>
                <Image source={{ uri: item.image }} style={styles.featuredJobImage} />
                <Text style={styles.featuredJobText}>{item.jobName}</Text>
                <Text style={styles.featuredJobText}>{item.salary}</Text>
                <Text style={styles.featuredJobText}>{item.location}</Text>
              </View>
            )}
            keyExtractor={item => item.key}
          />

          <View style={styles.popularJobsHeader}>
            <Text style={styles.popularJobsTitle}>Popular Jobs<Text style={styles.seeAll}>See all</Text></Text>
          </View>
          <FlatList
            data={popularJobs}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={[styles.PopularJob, { backgroundColor: item.backgroundColor }]}>
                <Image source={{ uri: item.image }} style={styles.featuredJobImage} />
                <Text style={styles.PopularJobText}>{item.jobName}</Text>
                <Text style={styles.PopularJobText}>{item.salary}</Text>
                <Text style={styles.PopularJobText}>{item.location}</Text>
              </View>
            )}
            keyExtractor={item => item.key}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    paddingLeft: 0,
  },
  text2: {
    fontSize: 17,
    fontWeight: '300',
    color: 'black',
    marginTop: 10,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    marginVertical: 20,
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  filterBtn: {
    backgroundColor: '#555',
    padding: 10,
    borderRadius: 2,
    marginLeft: 10,
  },
  subTxt: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
    padding: 15,
    alignSelf: 'stretch',
  },
  seeAll: {
    fontSize: 10,
    fontWeight: '300',
    justifyContent: 'flex-end',
    paddingLeft: 50,
  },
  popularJobsHeader: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  popularJobsTitle: {
    fontWeight: 'bold',
  },
  featuredJob: {
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
  featuredJobImage: {
    width: 40,
    height: 40,
  },
  featuredJobText: {
    color: 'white',
  },
  PopularJob: {
    padding: 10,
    marginRight: 10,
    // borderRadius: 10,
  },
  PopularJobText: {
    color: 'white',
    fontSize:10,
    fontFamily:'semi-light'
  },
});

export default HomeScreen;