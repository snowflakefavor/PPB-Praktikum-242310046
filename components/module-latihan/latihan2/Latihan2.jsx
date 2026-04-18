import React from 'react';
import {View, Text, StyleSheet } from "react-native";

const Latihan2 = () => {
    const personalData = {
        name: "Yunita Puspitasari",
        jurusan: "Teknologi Informasi",
        aktif: true,
    };
    const course_list = [
        {id: 1, name: "Mobile Programming", code: "PPB01"},
        {id: 2, name: "Web Programming", code: "PW04"},
        {id: 3, name: "Calculus", code: "AC09"},

    ];

    const extracurricular = ["Basketball", "Robotics", "Mentoring"];
    const total_point = 120;
    const criteria_point = total_point >= 300;

     return (
        <View style = {style.container}>
        <Text style={StyleSheet.title}> Personal Information </Text>
        <Text> Fullname: {personalData.name} </Text>
        <Text> Jurusan: {personalData.jurusan} </Text>
        <Text> Status: {personalData.aktif ? "Active" : "Not Active" } </Text>

        <Text style={StyleSheet.title}> My Course </Text>
        {course_list.map((course) => (
            <Text key={course.id}>
                {course.code} - {course.name}
            </Text>
       ) )}
       <Text style={StyleSheet.title}> Extracurricular</Text> 
       {extracurricular.map ((item, index) => (
        <Text key={index}>- {item}</Text>
       ))}       

       <Text style={StyleSheet.title}> Evaluation Criteria </Text> 
  <Text> {criteria_point ? "Eligible" : "Inegible"} </Text>
        </View>
      
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffe',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        marginTop: 15,
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default Latihan2;
