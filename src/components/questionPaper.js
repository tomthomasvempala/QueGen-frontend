import React from 'react'
import { Page, Text, Image, Document} from '@react-pdf/renderer'
import collegelogo from '../images/collegelogo.png'

const questionPaper = () => {
    return (
        <Document>
            <Page>
                <Text fixed></Text>
                <Image  src={collegelogo} />
                <Text>
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
            </Page>
        </Document>
    )
}
export default questionPaper