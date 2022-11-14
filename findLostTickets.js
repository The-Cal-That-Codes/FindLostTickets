// script that found all tuesday season pass holders who did not have a ticket for tues 29/03/22 then created a ticket for them.

import Contact from "@/modules/teampay/services/contact";
import Ticket from "@/modules/teampay/services/ticket";

async function createLostTickets() {
    this.buttonLoading = true;
    let contactQuery = {
        _type: "contact",
        status: "active",

        $or: [
            {
                "data.playerPasses": {
                    $exists: true,
                },
            },
            {
                "data.officialPasses": {
                    $exists: true,
                },
            },
            {
                "data.umpirePasses": {
                    $exists: true,
                },
            },
            {
                "data.PlayerPasses": {
                    $exists: true,
                },
            },
            {
                "data.OfficialPasses": {
                    $exists: true,
                },
            },
            {
                "data.UmpirePasses": {
                    $exists: true,
                },
            },
        ],
    };

    let contacts = await Contact.query(contactQuery)
        .catch((err) => console.log(err))
        .then(({ data }) => data);

    let editedContactsArray = contacts.filter((item) => !("import" in item.data));

    let filteredContacts = editedContactsArray.filter((item) => {
        if ("playerPasses" in item.data) {
            if (typeof item.data.playerPasses[0] == "string") {
                return item.data.playerPasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.playerPasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        } else if ("PlayerPasses" in item.data) {
            if (typeof item.data.PlayerPasses[0] == "string") {
                return item.data.PlayerPasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.PlayerPasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        } else if ("umpirePasses" in item.data) {
            if (typeof item.data.umpirePasses[0] == "string") {
                return item.data.umpirePasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.umpirePasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        } else if ("UmpirePasses" in item.data) {
            if (typeof item.data.UmpirePasses[0] == "string") {
                return item.data.UmpirePasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.UmpirePasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        } else if ("officialPasses" in item.data) {
            if (typeof item.data.officialPasses[0] == "string") {
                return item.data.officialPasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.officialPasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        } else if ("OfficialPasses" in item.data) {
            if (typeof item.data.OfficialPasses[0] == "string") {
                return item.data.OfficialPasses.includes("623275a6741def49c2a63fd8");
            } else {
                return item.data.OfficialPasses.flatMap((item) => item.event).includes("623275a6741def49c2a63fd8");
            }
        }
    });

    let ticketQuery = {
        _type: "ticket",
        event: "623275a6741def49c2a63fd8",
    };
    let tickets = await Tickets.query(ticketQuery)
        .catch((err) => console.log(err))
        .then(({ data }) => Data);

    let ticketContacts = tickets.map((item) => item.contact);

    let needsTicket = filteredContacts.filter((contact) => {
        return !ticketContacts.includes(contact._id);
    });

    let newTickets = [];
    needsTicket.forEach(async (item) => {
        let titleData = "";

        if ("playerPasses" in item.data) {
            if (typeof item.data.playerPasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.playerPasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        } else if ("PlayerPasses" in item.data) {
            if (typeof item.data.PlayerPasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.PlayerPasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        } else if ("umpirePasses" in item.data) {
            if (typeof item.data.umpirePasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.umpirePasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        } else if ("UmpirePasses" in item.data) {
            if (typeof item.data.UmpirePasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.UmpirePasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        } else if ("officialPasses" in item.data) {
            if (typeof item.data.officialPasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.officialPasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        } else if ("OfficialPasses" in item.data) {
            if (typeof item.data.OfficialPasses[0] == "string") {
                titleData = `${item.firstName} ${item.lastName} - 29/03/2022 Pass`;
            } else {
                let eventObj = item.data.OfficialPasses.find((item) => {
                    return item.event.includes("623275a6741def49c2a63fd8");
                });
                titleData = `${eventObj.type.split(" ")[0]} ${eventObj.type.split(" ")[2]} - ${eventObj.issueClub}`;
            }
        }

        let payload = {
            _type: "ticket",
            ticketType: "player",
            title: titleData,
            firstName: item.firstName,
            lastName: item.lastName,
            realms: [
                {
                    _id: "60612cc021fbe4071422c86f",
                    title: "DOOLEYS Metro League",
                    trail: ["598d595cd9aecf1cf649d0fc", "60612a33f6489a514125f1d0"],
                    status: "active",
                    basic: true,
                    fullDefinition: {
                        title: "League",
                        plural: "Leagues",
                        definitionName: "tpLeague",
                    },
                    depth: 2,
                    children: [],
                },
            ],
            contact: item,
            event: {
                _id: "623be48c21d8dd0c79f7cd47",
                status: "active",
                rooms: [],
                realms: ["60612cc021fbe4071422c86f"],
                title: "Dooleys Metro League - Tuesday",
                timezone: "Australia/Sydney",
                definition: "tpMatch",
                startDate: "2022-03-29T06:00:00.000Z",
                endDate: "2022-03-29T11:00:00.000Z",
                ticketCollectionStartDate: "2022-03-29T04:30:00.000Z",
                ticketCollectionEndDate: "2022-03-29T12:30:00.000Z",
                _type: "event",
                created: "2022-03-24T03:25:00.411Z",
                updated: "2022-03-24T03:25:00.456Z",
                slug: "623be48c21d8dd0c79f7cd47-24-3-2022-dooleys-metro-league---tuesday",
            },

            email: item.emails[0],
            data: {
                seasonPass: true,
                item: item,
            },
            status: "active",
        };
        // console.log(payload, `payload ${item._id}`);
        let newTicket = await Ticket.create(payload)
            .catch((err) => console.log(err))
            .then(({ data }) => data);
        newTickets.push(newTicket);
    });

    console.log(newTickets, "new Tickets");

    this.buttonLoading = false;
}
