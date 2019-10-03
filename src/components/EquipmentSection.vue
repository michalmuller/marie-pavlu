<template>
  <div id="equipment" class="container flex flex-wrap justify-between flex-row py-16">
    <div class="hidden sm:block w-2/5 pr-10">
      <img class="mt-24" src="../../public/img/equipment.svg" alt />
    </div>
    <div class="sm:w-3/5 w-full sm:pl-10 pl-4 pr-4 sm:pr-0">
      <h1 class="font-bold text-3xl mb-8">Vybavení a Služby</h1>

      <equipment title="Očkování" :iconPath="require('../../public/img/icons/syringe.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>Tetanus -</b> povinné očkování proti tetanu
            <br />
            <b>Hepatitida A, B -</b> očkování proti žloutence typu A, B
            <br />
            <b>FSME -</b> vakcína proti klíšťové encephalitidě
            <br />
            <b>Prevenar 13 -</b> očkování proti pneumokokovému zápalu plic
            <br />
            <b>Boostrix -</b> nadstandartní očkování za poplatek proti tetanu, černému kašli a záškrtu
          </p>
        </template>
      </equipment>

      <equipment title="Pojišťovny" :iconPath="require('../../public/img/icons/contract.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>VZP -</b> všeobecná zdravotní pojišťovna
            <br />
            <b>MVČR -</b> pojišťovna ministervstva vnitra
            <br />Ostatní pojišťovny jsou po domluvě také možné
          </p>
        </template>
      </equipment>

      <equipment title="Přístroje a Zařízení" :iconPath="require('../../public/img/icons/cpr.svg')">
        <template v-slot:text>
          <p class="text-secondary-text">
            <b>INR -</b> test při léčbě warfarinem
            <br />
            <b>Strept A -</b> test na zjištění přítomnosti Streptokoka v krku
            <br />
            <b>GHb -</b> zjištění dlouhodobé hladiny cukru v krvi
            <br />
            <b>Glykémie -</b> zjištění aktuální hladiny cukru v krvi
            <br />
            <b>test na OK -</b> přístrojový test na zjištění krve ve stolici
            <br />
            <b>EKG</b> v ordinaci v Jablonec Nad Nisou
            <br />
            <b>CRP -</b>
            test na přítomnost bakteriální infekce a vhodnosti nasazení antibiotik
          </p>
        </template>
      </equipment>
      <button
        @click="pricesModalShowing=true"
        class="bg-pink hover:bg-dark-pink py-2 pb-3 px-10 rounded font-bold text-white outline-none"
        style="margin-left:70px"
      >Zobrazit Ceník</button>
    </div>

    <modal :showing="pricesModalShowing" @close="pricesModalShowing = false">
      <div class="py-8 pl-8 pr-4 modal-container">
        <h3 class="text-xl font-semibold pb-2">Všeobecné</h3>
        <div class="border rounded">
          <div
            v-for="(item, index) in priceList.column1"
            :key="index"
            class="flex w-full justify-between py-3 price-list-item lowercase"
          >
            <span class="px-4">{{item.name}}</span>
            <span class="px-4">{{item.price}}</span>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div
            v-for="(lists, index) in priceList.column2"
            :key="index"
            class="w-full md:w-1/2 price-list-half mt-6"
          >
            <h3 class="text-xl font-semibold pb-2">{{lists.name}}</h3>
            <div class="cm">
              <div class="border rounded">
                <div
                  v-for="(i, index) in lists.list"
                  :key="index"
                  class="flex w-full lowercase py-3 justify-between price-list-item"
                >
                  <span class="px-4">{{i.name}}</span>
                  <span class="px-4">{{i.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          class="text-white mt-6 px-4 py-2 text-sm uppercase tracking-wide font-bold rounded btn-gradient"
          @click="pricesModalShowing = false"
        >Zavřít</button>
      </div>
    </modal>
  </div>
</template>


<script>
// click event on template itself:
// v-on:click.native="pricesModalShowing= !pricesModalShowing"
import Equipment from "./common/Equipment";
import Modal from "./common/Modal";
export default {
  components: { Equipment, Modal },
  data() {
    return {
      pricesModalShowing: false,
      priceList: {
        column1: [
          {
            name: "VSTUPNÍ PROHLÍDKA PRO ZAMĚSTNAVATELE",
            price: "300,-"
          },
          {
            name:
              "PREVENTIVNÍ PROHLÍDKY PRO KURZY (SVÁŘEČ, VZV, ELEKTRIKÁŘ, ATD.)",
            price: "200,-"
          },
          {
            name: "POSUDEK O ZDRAV.ZPŮSOB.PRO ÚŘAD PRÁCE",
            price: "200,-"
          },
          {
            name: "ŽÁDOSTI O UMÍSTĚNÍ DO USP, DŮM PRO SENIORY, DOMOV DŮCHODCŮ",
            price: "300,-"
          },
          {
            name: "SAMOŽÁDOSTI (LÁZNĚ, VÝPISY PRO PRÁVNICKÉ OSOBY, ATD.)",
            price: "300,-"
          },
          {
            name: "SAMOŽÁDOSTI PRO MÚ, KÚ, SOUDY, POLICII, ATD.",
            price: "300,-"
          },
          {
            name: "BOLESTNÉ-BODOVÉ HODNOCENÍ",
            price: "300,-"
          },
          {
            name: "INFÚZE VITAMÍNU C",
            price: "700,-"
          }
        ],
        column2: [
          {
            name: "Zbrojní průkaz",
            list: [
              {
                name: "NOVÝ",
                price: "500,-"
              },
              {
                name: "KONTROLNÍ",
                price: "300,-"
              }
            ]
          },
          {
            name: "Pojistky",
            list: [
              {
                name: "ÚRAZOVÉ",
                price: "300,-"
              },
              {
                name: "ŽIVOTNÍ AJ. DLE NÁROČNOSTI",
                price: "300-600,-"
              }
            ]
          },
          {
            name: "Zdravotní průkaz",
            list: [
              {
                name: "NA DOBU NEURČITOU",
                price: "200,-"
              },
              {
                name: "NA DOBU URČITOU",
                price: "100,-"
              }
            ]
          },
          {
            name: "Cesty do zahraničí",
            list: [
              {
                name: "KRÁTKODOBÉ-TURISTICKÉ",
                price: "300,-"
              },
              {
                name: "DLOUHODOBÉ",
                price: "900,-"
              }
            ]
          },
          {
            name: "HIV-AIDS",
            list: [
              {
                name: "NEANONYMNĚ",
                price: "ZDARMA"
              },
              {
                name: "ANONYMNĚ-CERTIFIKÁT",
                price: "500,-"
              }
            ]
          },
          {
            name: "Sportovní účely",
            list: [
              {
                name: "POVOLENÍ, ZPŮSOBILOST",
                price: "300,-"
              },
              {
                name: "SOUTĚŽ, ZÁVODY",
                price: "100,-"
              }
            ]
          },
          {
            name: "Řidičský průkaz",
            list: [
              {
                name: "NOVÝ",
                price: "300,-"
              },
              {
                name: "ROZŠÍŘENÍ, OBNOVENÍ",
                price: "200,-"
              },
              {
                name: "NAD 60 LET",
                price: "300,-"
              }
            ]
          },
          {
            name: "Očkování: dle cen očkovací látky",
            list: [
              {
                name: "APLIKACE",
                price: "100,-"
              },
              {
                name: "FSME (KLÍŠTĚ)",
                price: "800,-"
              },
              {
                name: "HEPATITIS (ŽLOUTENKA) A+B",
                price: "1800,-"
              },
              {
                name: "PRENEVAR 13",
                price: "1500,-"
              },
              {
                name: "PREVENAR 13 NAD 65 LET ",
                price: "ZDARMA"
              }
            ]
          }
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
b {
  color: #242424;
  font-weight: 600;
}

.btn-gradient {
  background: linear-gradient(to right, #47c8e2, #6ebff8);
}

.price-list-item:nth-child(odd) {
  background-color: #ecf6fb;
}

.price-list-half:nth-child(odd) {
  .cm {
    margin-right: 0;
  }
}

.price-list-half:nth-child(even) {
  h3 {
    margin-left: 1rem;
  }
  .cm {
    margin-left: 1rem;
  }
}

.modal-container {
  max-height: 70vh;
  overflow-y: scroll;
}

.scrollbar {
  margin-left: 30px;
  float: left;
  height: 300px;
  width: 65px;
  background: #f5f5f5;
  overflow-y: scroll;
  margin-bottom: 25px;
}

.modal-container::-webkit-scrollbar {
  width: 18px;
}

.modal-container::-webkit-scrollbar-thumb {
  height: 44px;
  border: 6px solid rgba(0, 0, 0, 0);
  background-clip: padding-box;
  -webkit-border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: inset -1px -1px 0px rgba(0, 0, 0, 0.05),
    inset 1px 1px 0px rgba(0, 0, 0, 0.05);
}

.modal-container::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}

.modal-container::-webkit-scrollbar-corner {
  background-color: transparent;
}

@media only screen and (max-width: 767px) {
  .price-list-half:nth-child(odd) {
    .cm {
      margin-right: 0;
    }
  }

  .price-list-half:nth-child(even) {
    h3 {
      margin-left: 0;
    }
    .cm {
      margin-left: 0;
    }
  }
}
</style>
