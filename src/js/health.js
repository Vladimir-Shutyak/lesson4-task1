export default function userHealth(usr){
    if (usr.health > 50) return ('healthy');
    if ((usr.health <= 50) && (usr.health > 15)) return ('wounded');
    return ('critical');
}