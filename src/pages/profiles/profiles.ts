import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github';
import { RepoDetailsPage } from '../repo-details/repo-details';

/**
 * Generated class for the ProfilesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class ProfilesPage {
  username: string;
  profile: any;
  repos: any;
  followers: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private githubProvider: GithubProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilesPage');
  }

  onSubmit() {
    this.getProfile(this.username);
    this.username = '';
  }

  getProfile(username) {
    // Call our service. Then, set the profiles member variable to the response
    // from our service.
    this.githubProvider.getProfile(username).subscribe(response => {
      console.log(response);
      this.profile = response;
    });
  }

  showRepos(username) {
    this.followers = null;
    this.githubProvider.getRepos(username).subscribe(response => {
      this.repos = response;
    });
  }

  showFollowers(username) {
    this.repos = null;
    this.githubProvider.getFollowers(username).subscribe(response => {
      this.followers = response;
    });
  }

  repoTapped(event, repo) {
    this.navCtrl.push(RepoDetailsPage, 
      { 
        repo : repo 
      }
    );
  }

  reset() {
    this.username = '';
    this.profile = null;
  }
}
