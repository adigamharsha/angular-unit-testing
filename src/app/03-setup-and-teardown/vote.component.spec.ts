import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  let  vote : VoteComponent ;
  beforeEach(() => {
     vote = new VoteComponent();
  })
  it('increases vote count', () => {
    vote.upVote()
    expect(vote.totalVotes).toBe(1); 
    
  });

  it('increases vote count', () => {
    vote.downVote()
    expect(vote.totalVotes).toBe(-1); 
    
  });
});