<svelte:head>
    <title>Agrimatco | Naš tim</title>
</svelte:head>

<script>
    import MemberCard from '../components/MemberCard.svelte';

    let teams = [
        {
            name: 'Direktor',
            members: [
                {
                    name: 'Stjepan Kanižaj, dipl. ing. agr.',
                    title: 'Stručni savjetnik za povrće',
                    area: 'Kontinentalna Hrvatska i Istra',
                    phone: '+385 (0)98 387 012',
                    email: 'stjepan.kanizaj@agrimatco-eu.com',
                }
            ]
        },
        {
            name: 'Komercijalni sektor',
            members: [
                {
                    name: 'Ana Čukalevskiiii, dipl. oec',
                    title: 'Voditeljica računovodstva',
                    area: '',
                    phone: '+385 (0)99 3083 589',
                    email: 'ana.cukalevski@agrimatco-eu.com',
                },
                {
                    name: 'Ivana Ivanković, dipl. oec',
                    title: 'Uvoz i logistika',
                    area: '',
                    phone: '+385 (0)99 4974 400',
                    email: 'ivana.ivankovic@agrimatco-eu.com',
                },
                {
                    name: 'Ksenija Apostolovski',
                    title: 'Administrativna asistentica',
                    area: '',
                    phone: '+385 (0)98 460 665',
                    email: 'ksenija.apostolovski@agrimatco-eu.com',
                },
                {
                    name: 'Oliver Ivančić',
                    title: 'Skladište i logistika',
                    area: '',
                    phone: '+385 (0)98 9821 451',
                    email: 'oliver.ivancic@agrimatco-eu.com',
                }
            ]
        },
        {
            name: 'Stručni savjetnici',
            members: [
                {
                    name: 'Vinka Pospišil, dipl. ing. agr.',
                    title: 'Stručna savjetnica za SZB i gnojiva',
                    area: 'Slavonija i Baranja',
                    phone: '+385 (0)99 7383 498',
                    email: 'vinka.pospisil@agrimatco-eu.com'
                },
                {
                    name: 'Tomislav Zrinski, ing. agr.',
                    title: 'Stručni savjetnik za sjeme povrća, gnojiva i SZB',
                    area: 'Sjevero-zapadna Hrvatska',
                    phone: '+385 (0)99 4746 906',
                    email: 'tomislav.zrinski@agrimatco-eu.com'
                },
                {
                    name: 'Đuro Rađenović, dipl. ing. agr.',
                    title: 'Stručni savjetnik za SZB i gnojiva',
                    area: 'Slavonija',
                    phone: '+385 (0)99 2185 147',
                    email: 'djuro.radjenovic@agrimatco-eu.com',
                },
                {
                    name: 'Ivica Vrankulj, dipl. ing. agr.',
                    title: 'Stručni savjetnik za sjeme povrća',
                    area: 'Dalmacija',
                    phone: '+385 (0)99 7383 138',
                    email: 'ivica.vrankulj@agrimatco-eu.com'
                },
                {
                    name: 'Kristina Antolić, dipl. ing. agr.',
                    title: 'Stručna savjetnica za gnojivo i sjeme povrća',
                    area: 'Zagreb i kontinentalna Hrvatska',
                    phone: '+385 (0)99 6023 068',
                    email: 'kristina.antolic@agrimatco-eu.com'
                },
                {
                    name: 'Darko Rabudić, ing. agr.',
                    title: 'Stručni savjetnik za gnojiva i sredstva za zaštitu bilja',
                    area: 'Zapadna Hrvatska',
                    phone: '+385 (0)99 464 2989',
                    email: 'darko.rabudic@agrimatco-eu.com'
                },
                {
                    name: 'Matija Erhatić, poljoprivredni tehničar',
                    title: 'Stručni savjetnik za sjeme povrća',
                    area: 'Središnja i istočna Hrvatska',
                    phone: '+385 (0)99 3083 588',
                    email: 'matija.erhatic@agrimatco-eu.com'
                },
                {
                    name: 'Boris Puđa, dipl. ing. agr.',
                    title: 'Stručni savjetnik za sjeme povrća, gnojiva, i sredstva za zaštitu bilja',
                    area: 'Zapadna Slavonija',
                    phone: '+385 (0)99 3083 580',
                    email: 'boris.pudja@agrimatco-eu.com'
                }
            ]
        }
    ]
</script>

<section class="section">
    <div class="container">
        <h1>Agrimatco tim</h1>
        <p>Srce Agrimatco-vog uspjeha su ljudi. Oni kombiniraju svoj integritet, stručnost i predanost, kako bi kreirali uske veze sa kupcima i dobavljačima, i na taj način pridonose viziji osnivača, da susretnu potrebe poljoprivrednika te da on dobije najbolji proizvod i najbolju uslugu.</p>

        {#each teams as team}
            <h2>{team.name}</h2>
            <div class="grid">
                {#each team.members as member}
                    <div class="col-6 col-s-12">
                        <MemberCard name={member.name} title={member.title} area={member.area} phone={member.phone} email={member.email} />
                    </div>
                {/each}
            </div>
        {/each}

        <hr>

        <h2>Područje rada</h2>
        <p><img class="media-large" src="nas-tim/podrucje-rada.jpg" alt="Područje rada pojedinih članova Agrimatco tima na karti Hrvatske."></p>
    </div>
</section>
