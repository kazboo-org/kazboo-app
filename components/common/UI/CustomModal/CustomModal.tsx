import { View, Text, Modal, ImageBackground } from "react-native";
import React from "react";
import styles from "./CustomModal.style";
import { BlurView } from "expo-blur";
// import Attention from "../../../../assets/svg/attention";

type CustomModalProps = {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  children: any;
  modalTitle: string;
};

const CustomModal: React.FC<CustomModalProps> = ({
  showModal,
  setShowModal,
  children,
  modalTitle,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(!showModal);
      }}
    >
      <BlurView intensity={10} style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            {/* <Attention width={120} height={40} /> */}
            <Text style={styles.headerText}>{modalTitle}</Text>
          </View>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default CustomModal;
