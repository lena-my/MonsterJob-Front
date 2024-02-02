<template>
    <div class="list_offer" v-if="visibleOffers">
        <div v-for="offer in visibleOffers" :key="offer.id" class="offer">
            <p>{{ offer.name }}</p>
            <p>{{ offer.date }}</p>
            <div class="monster"></div>
        </div>

    </div>
    <div class="buttons">
        <button v-on:click="prev()">Précédent</button>
        <button v-on:click="next()">Suivant</button>
    </div>
    <router-link :to="{ name: 'Offer' }" class="back_home">Retour à l'accueil</router-link>
</template>
  
<script>
export default {
    name: 'ListOffer',
    data: () => ({
        currentIndex: 0,
        OfferPerPage: 5,
    }),
    computed: {
        offers() {
            let offers = [{
                id: '1',
                name: 'développeur',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'truc',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'chouette',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'pouic',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'bloup',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'yipeekayeye',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'youlou',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'test caca',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'lala',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'lili',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'loulou',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'lulu',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'muche',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'chouka chouka',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'goulou goulou',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'gouzzi gouzzi',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'développeur',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'développeur',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '1',
                name: 'développeur',
                level: 'E',
                date: '02/02/2024',
            },
            {
                id: '2',
                name: 'développeur',
                level: 'E',
                date: '02/02/2024',
            }
            ];
            for (let index = 0; index < offers.length; index++) {
                offers[index].index = index + 1;
            }
            return offers;
        },
        visibleOffers() {
            const start = this.currentIndex;
            const end = start + this.OfferPerPage;
            return this.offers.slice(start, end);
        }
    },
    methods: {
        next() {
            this.currentIndex += 1;
            if (this.currentIndex >= this.offers.length) {
                this.currentIndex = 0;
            }
        },
        prev() {
            this.currentIndex -= 1;
            if (this.currentIndex < 0) {
                this.currentIndex = Math.max(0, this.offers.length - this.OfferPerPage);
            }
        },
    }
}
</script>
  
<style lang="scss">
.list_offer {
    display: flex;
    flex-direction: row;
    /* Assurez-vous que la direction est définie sur "row" pour un carrousel horizontal */
    justify-content: space-around;
    flex-wrap: wrap;
    overflow: hidden;
    transition: transform 0.5s ease;

    .offer {
        border: 2px solid;
        border-radius: 3px;
        padding: 5px;
    }
}

.buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;

    button {
        margin: 10px 0;
    }

}

.back_home {
    text-decoration: none;
    color: black;
}
</style>
  