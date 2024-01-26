import { HeaderHome } from "@components/HeaderHome"
import { Container, MealsText } from "./styles"
import { Percent } from "@components/Percent"
import { Button } from "@components/Button"
import { Meal } from "@components/Meal"
import { SectionList, Text, View } from "react-native"
import { DateText } from "@components/Meal/styles"

export function Home() {

    const DATA = [
        {
            title: '25.01.23',
            data: [
                { hour: '20:00', meal: 'X-Tudo', status: 'SECONDARY' },
                { hour: '21:00', meal: 'Banana', status: 'PRIMARY' },
                { hour: '21:00', meal: 'Banana', status: 'PRIMARY' },
                { hour: '21:00', meal: 'Banana', status: 'PRIMARY' },
                { hour: '21:00', meal: 'Banana', status: 'PRIMARY' },
            ],
        },
        {
            title: '26.01.23',
            data: [
                { hour: '12:30', meal: 'Salada', status: 'PRIMARY' },
            ],
        },
    ];
    return (
        <Container>
            <HeaderHome />
            <Percent />
            <MealsText>
                Refeições
            </MealsText>
            <Button title="Nova Refeição" icon />

            <View style={{ flex: 1 }}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item.hour + index}
                    renderItem={({ item }) => (
                        <View style={{ flex: 1 }}>
                            <Meal hour={item.hour} meal={item.meal} status={item.status} />
                        </View>
                        
                    )}
                    renderSectionHeader={({ section: { title } }) => (
                        <View style={{ paddingVertical: 10 }}>
                            <DateText>
                                {title}
                            </DateText>
                        </View>
                    )}
                />
            </View>
        </Container>
    )
}