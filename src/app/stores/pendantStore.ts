import { observable } from 'mobx';

export interface IPendantStore {
    team: any;
    setTeam: (value: any) => void;
}

const pendantStore = observable<IPendantStore>({
    team: {}, // éĉİçé
    setTeam(value) {
        this.team = value;
        return this;
    },
});
export default pendantStore;
