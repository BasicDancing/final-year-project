package com.example.eventcooker.masterdata.services.posts;

import com.example.eventcooker.masterdata.models.posts.Post;
import com.example.eventcooker.masterdata.repositories.posts.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;

    //POST
    public Post createPost(Post post){
        post.setCreatedOn(Instant.now());
        return postRepository.save(post);
    }

    //GET
    public Post findPost(Long id){
        return postRepository.findById(id).orElse(null);
    }

    //GET
    public List<Post> findByUser(Long user){
        return postRepository.findByUser(user);
    }

    //GET ALL
    public List<Post> findPosts(){
        return postRepository.findAll();
    }

    //PUT
    public Post updatePost(Long id, Post post){

        Post exPost = postRepository.findById(id).orElse(null);

        assert exPost != null;
        if(post.getTitle() != null)
            exPost.setTitle(post.getTitle());
        if(post.getPhoto() != null)
            exPost.setPhoto(post.getPhoto());
        if(post.getDescription() != null)
            exPost.setDescription(post.getDescription());
        if(post.getUser() != null){
            exPost.setUser(post.getUser());
        }
        if(post.getClient() != null){
            exPost.setClient(post.getClient());
        }
        exPost.setModifiedOn(Instant.now());

        return postRepository.save(exPost);
    }

    public Post aprrovePost(Long id){

        Post exPost = postRepository.findById(id).orElse(null);

        assert exPost != null;
        exPost.setApproval(true);
        exPost.setModifiedOn(Instant.now());

        return postRepository.save(exPost);
    }

    //DELETE
    public String deletePost(Long id){
        postRepository.deleteById(id);
        return "Successfully deleted Post which id was " + id + ":)";
    }
}
