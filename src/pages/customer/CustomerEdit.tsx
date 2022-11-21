import {
    IonButton,
    IonButtons,
    IonCard,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonItem,
    IonMenuButton,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import { add, close, pencil, search } from "ionicons/icons";
  import { useEffect, useState } from "react";
  import { useParams } from "react-router";
  import ExploreContainer from "../../components/ExploreContainer";
  import { removeCustomer, searchCustomers } from "./CustomerApi";
  // import './Page.css';
  
  const CustomerEdit: React.FC = () => {
    const { name, id } = useParams<{ name: string; id: string }>();
  
    const [clientes, setClientes] = useState<any>([]);
  
    useEffect(() => {
      search();
    }, []);
  
    const search = () => {
    //   let result = searchCustomers();
    //   setClientes(result);
    };

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">{name}</IonTitle>
            </IonToolbar>
          </IonHeader>
  
          <IonContent>
            <IonCard>
              <IonTitle>Gestión de clientes {id}</IonTitle>
  


              <IonItem>
                <IonButton color="primary" fill="solid" slot="end" size="default">
                  <IonIcon icon={add}></IonIcon>
                  Guardar cliente
                </IonButton>
              </IonItem>
  
            </IonCard>
          </IonContent>
        </IonContent>
      </IonPage>
    );
  };
  
  export default CustomerEdit;
  