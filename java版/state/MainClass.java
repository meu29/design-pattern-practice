package java版.state;

class MainClass {

    public static void main(String[] args) {
        SoundPlayer player = new SoundPlayer();
        player.setState(new SoundPlayerState(20));
        player.doIt();
        player.setState(new SoundPlayerState(30));
        player.doIt();
    }

} 

class SoundPlayer {

    SoundPlayerState myState = null;

    void setState(SoundPlayerState newState) {
        this.myState = newState;
    }
    
    void doIt() {
        if (this.myState != null) {
            this.myState.play();
        }
    }

}

class SoundPlayerState {

    int volume;

    SoundPlayerState(int volume) {
        this.volume = volume;
    }
 
    void play() {
        System.out.println("音量" + String.valueOf(this.volume) + "で再生します");
    }

}