import React from "react";
import {View, Text} from "react-native";
const SampleVariableinJSX = () => {
    const title = "Contoh penggunaan variable pada JSX";
    const personalData = {
        name: "Yunita Puspitasari",
        jurusan: "Teknologi Informasi",
        aktif: true,
    }


const extracurricular = ["Basketball", "Robotics", "Mentoring"];
const a = 10, b = 20;

return (
    <View>
        <Text> Penjumlahan Array </Text>
        <Text> Jawaban Perjumlahan: {a + b } </Text>
        <Text> Memanggil data array pada JSX </Text>
        <Text> Extraculicular </Text>
        {extracurricular.map((item, index) => {
            <Text key = {index}>- {item} </Text>
        })}

        <Text> Memanggil data object pada JSX </Text>
        <Text> Full Name : {personalData.name}</Text>
        <Text> Departement : {personalData.jurusan}</Text>
        <Text> Status : {personalData.aktif ? "Active" : "Not Active" } </Text>
    </View>
    );
}
export default SampleVariableinJSX;

