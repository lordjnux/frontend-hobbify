import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
const messagess = [
  { message: "Hola, ¿te gustan las bicicletas?", rec: 1 },
  { message: "Sí, me encantan. ¿Y a ti?", rec: 2 },
  { message: "¡Claro! Siempre me ha gustado andar en bicicleta.", rec: 1 },
  { message: "¿Tienes alguna bicicleta en particular que te guste?", rec: 2 },
  {
    message: "Tengo una bicicleta de montaña que uso para hacer senderismo.",
    rec: 1,
  },
  { message: "¡Qué genial! Yo prefiero las bicicletas de carretera.", rec: 2 },
  {
    message: "He escuchado que las bicicletas de carretera son muy rápidas.",
    rec: 1,
  },
  {
    message:
      "Sí, lo son. Me encanta la velocidad que puedes alcanzar con ellas.",
    rec: 2,
  },
  { message: "Deberíamos salir a andar en bicicleta algún día.", rec: 1 },
  { message: "¡Definitivamente! Sería muy divertido.", rec: 2 },
  { message: "¿Con qué frecuencia sales a andar en bicicleta?", rec: 1 },
  { message: "Trato de salir al menos una vez a la semana. ¿Y tú?", rec: 2 },
  {
    message: "Yo suelo salir los fines de semana, cuando tengo más tiempo.",
    rec: 1,
  },
  { message: "Eso suena genial. ¿Cuál es tu ruta favorita?", rec: 2 },
  {
    message: "Me gusta mucho ir a las montañas. Las vistas son increíbles.",
    rec: 1,
  },
  { message: "A mí también me gusta la naturaleza. Es muy relajante.", rec: 2 },
  {
    message: "¿Alguna vez has participado en una carrera de bicicletas?",
    rec: 1,
  },
  {
    message:
      "Sí, participé en una carrera local el año pasado. Fue muy emocionante.",
    rec: 2,
  },
  {
    message: "¡Qué bien! Me encantaría participar en una carrera algún día.",
    rec: 1,
  },
  { message: "Deberías intentarlo. Es una experiencia única.", rec: 2 },
  {
    message:
      "¿Tienes algún consejo para alguien que quiera empezar a andar en bicicleta?",
    rec: 1,
  },
  {
    message:
      "Solo asegúrate de tener una bicicleta adecuada y siempre usa casco.",
    rec: 2,
  },
  { message: "Eso es muy importante. La seguridad es lo primero.", rec: 1 },
  {
    message: "Exactamente. También es bueno unirse a un grupo de ciclistas.",
    rec: 2,
  },
  {
    message: "Buena idea. Es más divertido andar en bicicleta con compañía.",
    rec: 1,
  },
  { message: "Sí, y además puedes aprender mucho de los demás.", rec: 2 },
  { message: "¿Has hecho algún viaje largo en bicicleta?", rec: 1 },
  {
    message:
      "Sí, hice un viaje de 100 km el verano pasado. Fue todo un desafío.",
    rec: 2,
  },
  { message: "¡Impresionante! ¿Cómo te preparaste para ese viaje?", rec: 1 },
  {
    message: "Entrené regularmente y me aseguré de estar bien hidratado.",
    rec: 2,
  },
  {
    message:
      "Eso es muy importante. ¿Cuánto tiempo te llevó completar el viaje?",
    rec: 1,
  },
  {
    message: "Me tomó alrededor de 5 horas. Fue agotador pero gratificante.",
    rec: 2,
  },
  { message: "Me imagino. Debió ser una gran experiencia.", rec: 1 },
  { message: "Sí, definitivamente lo fue. Lo repetiría sin duda.", rec: 2 },
  {
    message: "Tal vez algún día pueda unirme a ti en uno de esos viajes.",
    rec: 1,
  },
  { message: "¡Sería genial! Me encantaría tener compañía.", rec: 2 },
  {
    message: "¿Qué tipo de bicicleta recomiendas para un viaje largo?",
    rec: 1,
  },
  {
    message:
      "Una bicicleta de touring es ideal para viajes largos. Son cómodas y resistentes.",
    rec: 2,
  },
  { message: "Gracias por el consejo. Lo tendré en cuenta.", rec: 1 },
  {
    message: "De nada, pero cuando iras?",
    rec: 2,
  },
];
const ChatMessages = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {messagess.map((msj, key) =>
          msj.rec === 1 ? (
            <View style={styles.eMsgContainer}>
              <View style={styles.eMessage}>
                <Text style={styles.eMsg}>{msj.message}</Text>
              </View>
            </View>
          ) : (
            <View style={styles.oMsgContainer}>
              <View style={styles.oMessage}>
                <Text style={styles.oMsg}>{msj.message}</Text>
              </View>
            </View>
          )
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  eMessage: {
    backgroundColor: "#A6A2D6",
    maxWidth: 240,
    borderRadius: 5,
    marginTop: 5,
    padding: 3,
    paddingLeft: 3,
    paddingRight: 3,
    marginLeft: 5,
  },
  eMsg: {
    color: "white",
    fontSize: 15,
  },
  eMsgContainer: {
    alignSelf: "stretch",
    alignItems: "flex-start",
  },
  oMessage: {
    backgroundColor: "#635BD6",
    maxWidth: 240,
    borderRadius: 5,
    marginTop: 5,
    padding: 3,
    paddingLeft: 3,
    paddingRight: 3,
    marginRight: 5,
  },
  oMsg: {
    color: "white",
    fontSize: 15,
  },
  oMsgContainer: {
    alignSelf: "stretch",
    alignItems: "flex-end",
  },
});

export default ChatMessages;
