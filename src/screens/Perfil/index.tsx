import React from "react";
import { Text, TextInput, SafeAreaView } from "react-native";
import CardSocial from "../../components/CardSocial";
import { FontAwesome5 } from "@expo/vector-icons";
import styles from "./styles";
import Button from "../../components/Button";

export default function Perfil() {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Nome do usuário</Text>
      <CardSocial>
        <>
          <FontAwesome5 name="facebook" style={styles.icon} />
          <Text style={styles.subtitle}>https://facebook.com</Text>         
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="instagram" style={styles.icon} />
          <Text style={styles.subtitle}>https://instagram.com</Text>  
        </>
      </CardSocial>
      <CardSocial>
        <>
          <FontAwesome5 name="linkedin" style={styles.icon} />
          <TextInput placeholder="https://linkedin.com" style={styles.input} />
        </>
      </CardSocial>
      <Button
        title="Salvar"
        type="button"
        onPress={() => console.log("Salvar")}
      />
      <Button
        title="Alterar Senha"
        type="button"
        onPress={() => console.log("Alterar Senha")}
      />
      <Button title="Sair" type="button" onPress={() => console.log("Sair")} />
    </SafeAreaView>
  );
}