import React from 'react'
import { Page, Text, Image, Document, Stylesheet } from '@react-pdf/renderer'
import collegelogo from '../images/collegelogo.png'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 100,
    },
    header: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});

const questionPaper = () => {
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} fixed></Text>
                <Image style={styles.image} src={collegelogo} />
                <Text style={styles.text}>
                    frozen dirt in your crotch is wrong, hey I don't wanna be right. Oh,
                    you're a dollar naughtier than most. Then we'll go with that data
                    file! Fry, we have a crate to deliver. And why did 'I' have to take a
                    cab? I guess if you want children beaten, you have to do it yourself.
                    Say it in Russian! Anyhoo, your net-suits will allow you to experience
                    Fry's worm infested bowels as if you were actually wriggling through
                    them. And I'm his friend Jesus. Now what? Your best is an idiot! Quite
                    possible. We live long and are celebrated poopers. Switzerland is
                    small and neutral! We are more like Germany, ambitious and
                    misunderstood! I guess because my parents keep telling me to be more
                    ladylike. As though! You know the worst thing about being a slave?
                    They make you work, but they don't pay you or let you go.
                </Text>
                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    )
}
export default questionPaper