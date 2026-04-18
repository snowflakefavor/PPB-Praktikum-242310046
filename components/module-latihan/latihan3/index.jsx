import { Image } from "expo-image";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
  const biodata = {
    nama: "Yunita Puspitasari",
    nim: "242310046",
    alamat: "Bogor",
    email: "yunitaap05@gmail.com",
    nomor_telepon: "087804036689",
    jenis_kelamin: "Perempuan",
    status: false,
    pengalaman: [
      {nama: 'Sekretaris Bidang Hima 25'},
      {nama: 'Sekretaris Umum Hima 26'},
      {nama: 'Google Student Ambassador 2026'},
    ]
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/avatar/mee.jpeg")}
          style={styles.img}
        />
        <Text>{biodata.nama}</Text>
        <Text>{biodata.nim}</Text>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Phone</Text>
            <TextInput
              value={biodata.nomor_telepon}
              style={styles.identity.input_text}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Email</Text>
            <TextInput
              value={biodata.email}
              style={styles.identity.input_text}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Address</Text>
            <TextInput
              value={biodata.alamat}
              style={styles.identity.input_text}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Jenis Kelamin</Text>
            <TextInput
              value={biodata.jenis_kelamin}
              style={styles.identity.input_text}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Status</Text>
            <TextInput
              value={biodata.status ? "Sudah Menikah" : "Belum Menikah"}
              style={styles.identity.input_text}
              autoFocus
            />
          </View>
        </View>

        <View style={styles.identity.container}>
          <View style={styles.identity.card_input}>
            <Text style={styles.identity.title}>Pengalaman</Text>
            {biodata.pengalaman.map ((item, index) => (
              <Text key={index}> - {item.nama}</Text>
            ))}
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
            <TouchableOpacity style={styles.identity.buttonPrimary}>
              <Text style={styles.identity.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headers: {
    title: {
      fontWeight: "bold",
      fontSize: 40,
    },
    subtitle: {
      fontWeight: "bold",
      fontSize: 20,
      color: "black",
    },
  },

  img: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  identity: {
    container: {
      marginTop: 20,
      width: "100%",
      paddingHorizontal: 20,
    },
    card_input: {
      borderWidth: 1,
      borderColor: "#ddd",
      padding: 10,
      borderRadius: 8,
    },
    title: {
      fontSize: 12,
      color: "gray",
    },
    input_text: {
      fontSize: 16,
      color: "black",
    },
    buttonPrimary: {
    alignItems: "center",
    backgroundColor: "#0ea6d0",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  },
});
